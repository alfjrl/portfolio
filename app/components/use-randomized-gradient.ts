"use client";

import { useEffect, useState } from "react";
import {
  resolveGradientPreset,
  randomizeTexture,
  type GradientBackgroundProps,
} from "./gradient-background";

/**
 * Resolve a preset name to gradient props, then jitter its texture
 * (grain / grainScale / grainBlend / blur) once per page load.
 *
 * Randomization happens after mount so the first client render matches the
 * server HTML (Math.random() would otherwise trip a hydration mismatch).
 */
export function useRandomizedGradient(
  gradientPreset?: string,
): GradientBackgroundProps {
  const base = resolveGradientPreset(gradientPreset);
  const [gradient, setGradient] = useState(base);
  useEffect(() => {
    setGradient(randomizeTexture(base));
  }, [base]);
  return gradient;
}
