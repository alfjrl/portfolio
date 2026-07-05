"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

export type ProjectCardProps = {
  slug: string;
  href: string;
  title: string;
  cardDescription?: string;
  coverImage?: string;
  // Label shown in the custom expanding cursor on hover.
  hoverLabel?: string;
  // h2 (default) for the homepage's main grid, h3 for secondary lists.
  headingLevel?: "h2" | "h3";
};

// Presentational project card. Single source of truth for card markup so the
// homepage lists and the personalized chat view stay visually in sync.
export default function ProjectCard({
  slug,
  href,
  title,
  cardDescription,
  coverImage,
  hoverLabel = "VIEW CASE STUDY",
  headingLevel = "h2",
}: ProjectCardProps) {
  const onEnter = useCallback(
    (e: React.MouseEvent) => {
      window.dispatchEvent(
        new CustomEvent("cursor:expand", {
          detail: { label: hoverLabel, x: e.clientX, y: e.clientY },
        }),
      );
    },
    [hoverLabel],
  );

  const onLeave = useCallback(() => {
    window.dispatchEvent(new CustomEvent("cursor:collapse"));
  }, []);

  const Heading = headingLevel;

  return (
    <div className="group h-full" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        href={href}
        className="p-4 block w-full h-full overflow-hidden transition-all duration-200 ease-in group-hover:scale-101 border border-line rounded-md bg-white"
      >
        <div className="h-full w-full flex flex-col">
          {coverImage && (
            <div
              className="relative w-full aspect-[16/9] overflow-hidden"
              style={{ viewTransitionName: `project-cover-${slug}` }}
            >
              <Image
                src={coverImage}
                alt={title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform ease-in bg-white"
              />
            </div>
          )}
          <div className="flex flex-col pt-4">
            <Heading className="text-xl md:text-2xl font-bold text-ink mb-2">
              {title}
            </Heading>
            {cardDescription && (
              <p className="text-muted leading-relaxed group-hover:text-ink transition ease-in">
                {cardDescription}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
