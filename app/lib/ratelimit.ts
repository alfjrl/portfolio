// Shared Upstash rate limiter factory. Each route gets its own prefix + budget
// so limits are tracked independently (e.g. "chat" vs "personalize"). Limiters
// are only constructed when the Upstash env vars are present; otherwise the
// factory returns null and callers skip rate limiting (e.g. local dev).
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Duration = Parameters<typeof Ratelimit.slidingWindow>[1];

export function makeRatelimit(
  prefix: string,
  limit: number,
  window: Duration,
): Ratelimit | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  return new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(limit, window),
    prefix,
  });
}

export function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "anonymous";
}
