import { anthropic } from "@ai-sdk/anthropic";
import { generateObject } from "ai";
import { z } from "zod";
import { getProjects } from "app/project/utils";
import { buildPortfolioContext } from "app/lib/portfolio-context";
import { buildPersonalizePrompt } from "app/lib/personalize-prompt";
import { makeRatelimit, getClientIp } from "app/lib/ratelimit";
import type {
  IntakeInput,
  PersonalizedCard,
  PersonalizeResponse,
} from "app/lib/personalize-types";

// Node runtime is required: getProjects() reads the filesystem.
export const runtime = "nodejs";
export const maxDuration = 30;

// Tighter budget than chat — each call is a full structured generation.
const ratelimit = makeRatelimit("personalize", 10, "1 d");

const intakeSchema = z.object({
  role: z.enum(["pm", "designer", "engineer"]).catch("designer"),
  language: z.enum(["en", "zh"]).catch("en"),
  visitorRole: z.string().trim().max(200).optional(),
  lens: z.enum(["coworker", "manager", "report", "other"]).catch("coworker"),
  lensNote: z.string().trim().max(200).optional(),
  focus: z
    .enum(["research", "craft", "systems", "strategy", "delivery", "other"])
    .catch("craft"),
  focusNote: z.string().trim().max(200).optional(),
  scope: z.enum(["ic", "lead", "strategic", "any", "other"]).catch("any"),
  scopeNote: z.string().trim().max(200).optional(),
  context: z.string().trim().max(400).optional(),
});

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "server_misconfigured", detail: "Missing ANTHROPIC_API_KEY." },
      { status: 500 },
    );
  }

  if (ratelimit) {
    const { success, reset } = await ratelimit.limit(getClientIp(req));
    if (!success) {
      return Response.json({ error: "rate_limited", reset }, { status: 429 });
    }
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const intake = intakeSchema.parse(raw) as IntakeInput;

  // Build a slug -> project map for validation + enrichment. The model is only
  // allowed to return slugs that exist here, and cards are built from real
  // metadata, so a hallucinated slug can never reach the client.
  const projects = getProjects();
  const bySlug = new Map(projects.map((p) => [p.slug, p]));
  const slugs = projects.map((p) => p.slug) as [string, ...string[]];

  const recommendationSchema = z.object({
    about: z
      .string()
      .describe(
        "2–4 sentences on how Alfred works, first person, tailored to this visitor. Plain prose, no markdown headings or lists.",
      ),
    picks: z
      .array(
        z.object({
          slug: z.enum(slugs).describe("Must be one of the provided project slugs."),
          reason: z
            .string()
            .describe(
              "1–2 sentences on why this project matters to this visitor. Use markdown **bold** on 1–3 key phrases; reference what they care about.",
            ),
        }),
      )
      .min(3)
      .max(4),
  });

  const system = buildPersonalizePrompt(
    intake,
    buildPortfolioContext(),
    intake.language,
  );

  let object: z.infer<typeof recommendationSchema>;
  try {
    const result = await generateObject({
      model: anthropic("claude-haiku-4-5-20251001"),
      schema: recommendationSchema,
      // The system message (persona + task + full portfolio context) is large and
      // stable across intakes, so cache it with Anthropic prompt caching. Anthropic
      // requires at least one non-system message, so add a short user trigger.
      messages: [
        {
          role: "system",
          content: system,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        {
          role: "user",
          content:
            "Generate my personalized portfolio view as structured output now.",
        },
      ],
      temperature: 0.5,
      maxOutputTokens: 700,
      abortSignal: req.signal,
    });
    object = result.object;
  } catch (err) {
    console.error("[/api/personalize] generateObject error:", err);
    return Response.json({ error: "generation_failed" }, { status: 500 });
  }

  // Dedup + validate against real projects, then enrich to client-ready cards.
  const seen = new Set<string>();
  const picks: PersonalizedCard[] = [];
  for (const pick of object.picks) {
    const project = bySlug.get(pick.slug);
    if (!project || seen.has(pick.slug)) continue;
    seen.add(pick.slug);
    picks.push({
      slug: project.slug,
      href: `/project/${project.slug}`,
      title: project.metadata.title,
      cardDescription:
        project.metadata.cardDescription || project.metadata.summary || "",
      coverImage: project.metadata.coverImage || "",
      reason: pick.reason,
    });
    if (picks.length === 3) break;
  }

  // Backfill from featured -> order if the model returned fewer than 3 usable picks.
  if (picks.length < 3) {
    const fallback = [...projects].sort((a, b) => {
      const fa = a.metadata.featured ? 0 : 1;
      const fb = b.metadata.featured ? 0 : 1;
      if (fa !== fb) return fa - fb;
      return (a.metadata.order ?? 999) - (b.metadata.order ?? 999);
    });
    for (const project of fallback) {
      if (picks.length === 3) break;
      if (seen.has(project.slug)) continue;
      seen.add(project.slug);
      picks.push({
        slug: project.slug,
        href: `/project/${project.slug}`,
        title: project.metadata.title,
        cardDescription:
          project.metadata.cardDescription || project.metadata.summary || "",
        coverImage: project.metadata.coverImage || "",
        reason:
          "**Worth a look** — a strong example of my end-to-end product design work.",
      });
    }
  }

  const payload: PersonalizeResponse = { about: object.about, picks };
  return Response.json(payload);
}
