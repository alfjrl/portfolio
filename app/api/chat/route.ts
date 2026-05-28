import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { buildPortfolioContext } from "app/lib/portfolio-context";
import { buildSystemPrompt } from "app/lib/system-prompt";
import type { ChatRole } from "app/lib/suggested-questions";

// Node runtime is required: the grounding module reads the filesystem.
export const runtime = "nodejs";
export const maxDuration = 30;

const roleSchema = z.enum(["pm", "designer", "engineer"]).catch("designer");

// Module-level singleton so we don't recreate the limiter per request.
// Only constructed when Upstash env vars are present.
const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(30, "1 d"),
        prefix: "chat",
      })
    : null;

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "anonymous";
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "server_misconfigured", detail: "Missing ANTHROPIC_API_KEY." },
      { status: 500 },
    );
  }

  // Rate limit by IP.
  if (ratelimit) {
    const { success, reset } = await ratelimit.limit(getClientIp(req));
    if (!success) {
      return Response.json({ error: "rate_limited", reset }, { status: 429 });
    }
  }

  let body: { messages?: UIMessage[]; role?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const role = roleSchema.parse(body.role) as ChatRole;

  // Bound input tokens: only send the most recent turns to the model.
  const recent = messages.slice(-10);

  const system = buildSystemPrompt(role, buildPortfolioContext());

  try {
    const result = streamText({
      model: anthropic("claude-haiku-4-5-20251001"),
      messages: [
        // The system prompt (persona + rules + full portfolio context) is large
        // and identical across a conversation's turns, so cache it with Anthropic
        // prompt caching. Turn 2+ reuses the cached prefix (default 5m TTL),
        // cutting input cost and latency.
        {
          role: "system",
          content: system,
          providerOptions: {
            anthropic: { cacheControl: { type: "ephemeral" } },
          },
        },
        ...(await convertToModelMessages(recent)),
      ],
      maxOutputTokens: 700,
      temperature: 0.4,
      abortSignal: req.signal,
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[/api/chat] streamText error:", err);
    return Response.json({ error: "stream_failed" }, { status: 500 });
  }
}
