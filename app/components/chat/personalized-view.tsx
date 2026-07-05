"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ProjectCard from "app/components/project-card";
import type { PersonalizeResponse } from "app/lib/personalize-types";

type PersonalizedViewProps = {
  data: PersonalizeResponse;
};

// Pure content: the "about" blurb + three case-study rows (card left, why
// right). Section chrome (heading, background, footer) is owned by the caller
// — see personalized-section.tsx.
export default function PersonalizedView({ data }: PersonalizedViewProps) {
  return (
    <div className="flex flex-col gap-10">
      {/* Section 1 — About */}
      <section className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          How I&apos;d work with you
        </span>
        <div className="chat-markdown text-ink md:text-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.about}</ReactMarkdown>
        </div>
      </section>

      {/* Section 2 — three case studies with a "why" beside each */}
      <section className="flex flex-col gap-6">
        <h3 className="text-xl md:text-2xl text-ink font-bold">
          Case studies picked for you
        </h3>
        <ul className="flex flex-col gap-8 md:gap-10">
          {data.picks.map((card, index) => (
            <li
              key={card.slug}
              className="animate-blur-in flex flex-col md:flex-row gap-4 md:gap-8"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className="md:basis-1/2 md:shrink-0">
                <ProjectCard
                  slug={card.slug}
                  href={card.href}
                  title={card.title}
                  cardDescription={card.cardDescription}
                  coverImage={card.coverImage}
                />
              </div>
              <div className="md:basis-1/2 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                  Why this is for you
                </span>
                <div className="chat-markdown text-sm md:text-base text-ink">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {card.reason}
                  </ReactMarkdown>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
