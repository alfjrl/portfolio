"use client";

import { useEffect, useState } from "react";

// After this moment the wording flips from present to past tense.
const CUTOFF = new Date("2026-07-04T23:59:59.999Z");

const CURRENT = "Currently leading the public-facing ecosystem design at ";
const PREVIOUS = "Previously led the public-facing ecosystem design at ";

/**
 * Renders the leadership intro line, choosing tense based on the *visitor's*
 * clock rather than build time. The page is statically generated, so the
 * server-rendered HTML is frozen at deploy. To avoid a hydration mismatch we
 * always render CURRENT on first paint (matching the server) and re-evaluate
 * against the real date in an effect after mount.
 */
export default function LeadershipPrefix() {
  const [prefix, setPrefix] = useState(CURRENT);

  useEffect(() => {
    if (new Date() > CUTOFF) setPrefix(PREVIOUS);
  }, []);

  return <>{prefix}</>;
}
