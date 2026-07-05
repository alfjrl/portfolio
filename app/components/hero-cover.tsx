"use client";

import Image from "next/image";
import GradientBackground from "./gradient-background";
import { useRandomizedGradient } from "./use-randomized-gradient";

type HeroCoverProps = {
  coverImage: string;
  title: string;
  // Named gradient preset painted behind the hero image (see GRADIENT_PRESETS).
  gradientPreset?: string;
};

// The project-page hero: a gradient backdrop with the cover image on top, so
// transparent areas of the cover reveal the gradient. Mirrors ProjectCard's
// treatment. Expects a positioned (relative) parent to fill.
export default function HeroCover({
  coverImage,
  title,
  gradientPreset,
}: HeroCoverProps) {
  const gradient = useRandomizedGradient(gradientPreset);

  return (
    <>
      <GradientBackground
        {...gradient}
        variant="mesh"
        style={{ position: "absolute", inset: 0 }}
      />
      <Image
        src={coverImage}
        alt={`${title} cover`}
        fill
        className="object-cover"
        priority
      />
    </>
  );
}
