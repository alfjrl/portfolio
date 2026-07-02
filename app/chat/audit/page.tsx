import type { Metadata } from "next";
import { getProjects } from "app/project/utils";
import AuditGallery from "app/components/chat/audit-gallery";
import type { PersonalizeResponse } from "app/lib/personalize-types";

// Internal design audit — not for search engines.
export const metadata: Metadata = {
  title: "Chat — Design Audit",
  robots: { index: false, follow: false },
};

// Synthetic "why" copy (with bold) paired with the three sample projects.
const SAMPLE_REASONS = [
  "Exactly the **systematic, end-to-end** work you're evaluating for — research through shipped, accessible UI on a complex product.",
  "Shows how I **partner across disciplines** and turn ambiguous problems into a focused, measurable solution.",
  "A strong example of **design-to-code parity** and the reusable foundations that let a team move faster.",
];

const SAMPLE_ABOUT =
  "I work end-to-end — from research through production-ready code — and I'm happiest building **systems that scale across teams**. As a design lead's hire, I'd bring both hands-on craft and a bias toward documentation, accessibility, and tight collaboration with engineering from day one.";

function buildSampleReco(): PersonalizeResponse {
  const byOrder = (
    a: { metadata: { order?: number } },
    b: { metadata: { order?: number } },
  ) => (a.metadata.order ?? Infinity) - (b.metadata.order ?? Infinity);

  const all = getProjects();
  const picks = (
    all.filter((p) => p.metadata.featured).sort(byOrder).length >= 3
      ? all.filter((p) => p.metadata.featured).sort(byOrder)
      : [...all].sort(byOrder)
  ).slice(0, 3);

  return {
    about: SAMPLE_ABOUT,
    picks: picks.map((p, i) => ({
      slug: p.slug,
      href: `/project/${p.slug}`,
      title: p.metadata.title,
      cardDescription: p.metadata.cardDescription || p.metadata.summary || "",
      coverImage: p.metadata.coverImage || "",
      reason: SAMPLE_REASONS[i] ?? SAMPLE_REASONS[0],
    })),
  };
}

export default function ChatAuditPage() {
  const reco = buildSampleReco();

  return (
    <section>
      <div className="max-w-[1280px] w-full md:mx-auto border-x border-gray-200">
        <div className="px-4 py-16 md:py-24">
          <header className="mb-12 md:mb-16 md:px-4">
            <h1 className="text-3xl md:text-4xl font-serif mb-3 text-gray-900">
              Chat — Design Audit
            </h1>
            <p className="text-gray-500 md:text-lg max-w-2xl">
              Every feature of the Ask&nbsp;Alfred chat, rendered from the live
              components with sample data. Because these are the real components,
              any code change shows up here automatically — each frame lists the
              source file(s) it renders.
            </p>
          </header>

          <div className="md:px-4">
            <AuditGallery reco={reco} />
          </div>
        </div>
      </div>
    </section>
  );
}
