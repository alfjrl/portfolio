// ============================================================================
//  GradientBackground.tsx
//  A configurable gradient + grain background.
//
//  • Zero dependencies (just React).
//  • Server-Component friendly — no "use client" needed.
//  • Grain is generated with SVG feTurbulence as an inline data-URI, so there
//    are no image assets to ship and it stays crisp at any resolution.
//
//  Usage:
//    <GradientBackground {...GRADIENT_PRESETS.softsky} style={{ inset: 0 }} />
// ============================================================================

import type { CSSProperties, ReactNode } from "react";

export type GradientVariant = "linear" | "radial" | "mesh";
export type GrainBlend =
  | "overlay"
  | "soft-light"
  | "multiply"
  | "screen"
  | "normal";

export interface GradientBackgroundProps {
  /** 1–5 colors. Order matters for linear/radial stops. */
  colors?: string[];
  /** Gradient style. @default "linear" */
  variant?: GradientVariant;
  /** Angle in degrees for the linear variant. @default 160 */
  angle?: number;
  /** Grain/texture opacity, 0–1. Set to 0 to disable. @default 0.12 */
  grain?: number;
  /** Grain fineness (feTurbulence baseFrequency). Higher = finer. @default 0.85 */
  grainScale?: number;
  /** Blend mode for the grain layer. @default "overlay" */
  grainBlend?: GrainBlend;
  /** Blur applied to the gradient in px. Great for the "mesh" look. @default 0 */
  blur?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const NOISE_TILE = 256;

/** Build a tileable fractal-noise texture as an inline SVG data-URI. */
function noiseUrl(frequency: number): string {
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${NOISE_TILE}' height='${NOISE_TILE}'>` +
    `<filter id='n'>` +
    `<feTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='4' stitchTiles='stitch'/>` +
    `</filter>` +
    `<rect width='100%' height='100%' filter='url(#n)'/>` +
    `</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Blob anchor points used to compose the "mesh" variant.
const MESH_POSITIONS: ReadonlyArray<readonly [string, string]> = [
  ["15%", "20%"],
  ["85%", "18%"],
  ["20%", "82%"],
  ["80%", "78%"],
  ["50%", "45%"],
];

function buildGradient(
  variant: GradientVariant,
  colors: string[],
  angle: number,
): string {
  if (colors.length === 0) return "transparent";
  if (colors.length === 1) return colors[0];

  if (variant === "radial") {
    return `radial-gradient(circle at 50% 30%, ${colors.join(", ")})`;
  }

  if (variant === "mesh") {
    const blobs = colors.map((c, i) => {
      const [x, y] = MESH_POSITIONS[i % MESH_POSITIONS.length];
      return `radial-gradient(circle at ${x} ${y}, ${c} 0px, transparent 55%)`;
    });
    // Trailing solid color fills any gaps between the blobs.
    return `${blobs.join(", ")}, ${colors[0]}`;
  }

  return `linear-gradient(${angle}deg, ${colors.join(", ")})`;
}

// ----------------------------------------------------------------------------
//  Named presets. Each carries a full set of tuned params; consumers can still
//  override any field (e.g. project cards force `variant: "mesh"`).
// ----------------------------------------------------------------------------
export type GradientPresetName =
  | "softsky"
  | "aurora"
  | "peachdusk"
  | "mint"
  | "paper"
  | "nightfall";

export const GRADIENT_PRESETS: Record<
  GradientPresetName,
  GradientBackgroundProps
> = {
  // Soft Sky — mesh. Widened value range (very light base → deep blue blob) so
  // the blobs read with more contrast instead of blending into one pale wash.
  softsky: {
    variant: "mesh",
    colors: ["#eaf2fc", "#8ec2ee", "#3f86cf", "#6ba7e0"],
    grain: 0.13,
    grainScale: 0.8,
    grainBlend: "soft-light",
    blur: 40,
  },
  // Aurora — mesh.
  aurora: {
    variant: "mesh",
    colors: ["#c4b5fd", "#a5b4fc", "#fbcfe8", "#bfdbfe"],
    grain: 0.14,
    grainScale: 0.8,
    grainBlend: "overlay",
    blur: 44,
  },
  // Peach Dusk — mesh.
  peachdusk: {
    variant: "mesh",
    colors: ["#fed7aa", "#fbcfe8", "#fecaca", "#fde68a"],
    grain: 0.13,
    grainScale: 0.8,
    grainBlend: "soft-light",
    blur: 40,
  },
  // Mint — mesh.
  mint: {
    variant: "mesh",
    colors: ["#a7f3d0", "#bbf7d0", "#bae6fd", "#d9f99d"],
    grain: 0.12,
    grainScale: 0.82,
    grainBlend: "overlay",
    blur: 38,
  },
  // Paper — linear, grainy / paper-like.
  paper: {
    variant: "linear",
    colors: ["#f1f5f9", "#e2e8f0", "#cbd5e1"],
    angle: 180,
    grain: 0.22,
    grainScale: 0.9,
    grainBlend: "multiply",
    blur: 0,
  },
  // Nightfall — mesh, dark.
  nightfall: {
    variant: "mesh",
    colors: ["#312e81", "#1e1b4b", "#4c1d95", "#0f172a"],
    grain: 0.18,
    grainScale: 0.78,
    grainBlend: "soft-light",
    blur: 46,
  },
};

/** Resolve a preset name (possibly undefined/unknown) to its props. */
export function resolveGradientPreset(
  name: string | undefined,
  fallback: GradientPresetName = "softsky",
): GradientBackgroundProps {
  return (
    GRADIENT_PRESETS[name as GradientPresetName] ?? GRADIENT_PRESETS[fallback]
  );
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));
const round2 = (v: number) => Math.round(v * 100) / 100;

/**
 * Jitter a preset's texture params — grain, grainScale, grainBlend, blur —
 * around their base values so every page load renders a subtly different
 * surface while staying in the preset's character.
 *
 * Call this on the client only (e.g. inside an effect after mount). Running it
 * during SSR would make the server and first client render disagree and trip a
 * hydration mismatch, since Math.random() differs between the two.
 */
export function randomizeTexture(
  base: GradientBackgroundProps,
): GradientBackgroundProps {
  // Signed jitter in [-amt, amt].
  const jitter = (amt: number) => (Math.random() * 2 - 1) * amt;
  // Randomize among a couple of soft blends plus whatever the preset uses.
  const blends: GrainBlend[] = [
    "overlay",
    "soft-light",
    base.grainBlend ?? "overlay",
  ];

  const baseGrain = base.grain ?? 0.12;
  const baseScale = base.grainScale ?? 0.85;
  const baseBlur = base.blur ?? 0;

  return {
    ...base,
    grain: clamp(round2(baseGrain + jitter(0.03)), 0.05, 0.25),
    grainScale: clamp(round2(baseScale + jitter(0.07)), 0.6, 1),
    grainBlend: blends[Math.floor(Math.random() * blends.length)],
    // Scale blur proportionally so a flat preset (blur 0) stays flat.
    blur: Math.round(baseBlur * (0.85 + Math.random() * 0.35)),
  };
}

export default function GradientBackground({
  colors = ["#bcdaf2", "#a4ceed", "#d9e9f7", "#c6dbeb"],
  variant = "linear",
  angle = 160,
  grain = 0.12,
  grainScale = 0.85,
  grainBlend = "overlay",
  blur = 0,
  className,
  style,
  children,
}: GradientBackgroundProps) {
  const gradient = buildGradient(variant, colors, angle);

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {/* Color layer. Overscanned when blurred so edges stay covered. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: blur ? `${-blur * 2}px` : 0,
          background: gradient,
          filter: blur ? `blur(${blur}px)` : undefined,
        }}
      />

      {/* Grain / texture layer. */}
      {grain > 0 && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: noiseUrl(grainScale),
            backgroundSize: `${NOISE_TILE}px ${NOISE_TILE}px`,
            opacity: grain,
            mixBlendMode: grainBlend,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Your content sits above both layers. */}
      {children != null && (
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      )}
    </div>
  );
}
