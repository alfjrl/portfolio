import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { z } from "zod";
import { buildPortfolioContext } from "app/lib/portfolio-context";
import { buildSystemPrompt } from "app/lib/system-prompt";
import { makeRatelimit, getClientIp } from "app/lib/ratelimit";
import type { ChatRole, ChatLanguage } from "app/lib/suggested-questions";

// Node runtime is required: the grounding module reads the filesystem.
export const runtime = "nodejs";
export const maxDuration = 30;

const roleSchema = z.enum(["pm", "designer", "engineer"]).catch("designer");
const languageSchema = z.enum(["en", "zh"]).catch("en");

// Module-level singleton so we don't recreate the limiter per request.
const ratelimit = makeRatelimit("chat", 30, "1 d");

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

  let body: { messages?: UIMessage[]; role?: string; language?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const role = roleSchema.parse(body.role) as ChatRole;
  const language = languageSchema.parse(body.language) as ChatLanguage;

  // Bound input tokens: only send the most recent turns to the model.
  const recent = messages.slice(-10);

  const system = buildSystemPrompt(role, buildPortfolioContext(), language);

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
      maxOutputTokens: 300,
      temperature: 0.4,
      abortSignal: req.signal,
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[/api/chat] streamText error:", err);
    return Response.json({ error: "stream_failed" }, { status: 500 });
  }
}
