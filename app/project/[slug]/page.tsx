import { notFound } from "next/navigation";
import HeroCover from "app/components/hero-cover";
import { CustomMDX } from "app/components/mdx";
import { getProjects } from "app/project/utils";
import { baseUrl } from "app/sitemap";
import { FiArrowUpRight } from "react-icons/fi";
import { RiH2 } from "react-icons/ri";

function ExternalLinkIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:rotate-45 transition ease-in flex-shrink-0"
      height="14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export async function generateStaticParams() {
  let projects = getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let project = getProjects().find((p) => p.slug === slug);
  if (!project) return;

  let { title, summary: description, coverImage } = project.metadata;
  let ogImage = coverImage
    ? `${baseUrl}${coverImage}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/project/${slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  let project = getProjects().find((p) => p.slug === slug);

  if (!project) notFound();

  const {
    title,
    summary,
    category,
    coverImage,
    gradientPreset,
    role,
    year,
    team,
    platform,
    problem,
    problemLink,
    solution,
    solutionLink,
    impact,
    impactLink,
  } = project.metadata;

  return (
    <div className="w-full">
      <div className="max-w-[1440px] w-full md:mx-auto px-2 md:px-16 md:py-16">
        {/* Hero image */}
        <div
          className="relative aspect-16/9 w-full mb-8 rounded-xl overflow-hidden animate-blur-in"
          style={{
            animationDelay: "0s",
            viewTransitionName: `project-cover-${slug}`,
          }}
        >
          <HeroCover
            coverImage={coverImage}
            title={title}
            gradientPreset={gradientPreset}
          />
        </div>

        {/* Project header */}
        <div
          className="flex flex-col lg:items-start animate-blur-in"
          style={{ animationDelay: "0.15s" }}
        >
          {/* Title + summary */}
          <div className="flex-auto">
            {/* <span className="text-xs font-medium text-muted uppercase tracking-wide py-1 px-3 rounded-md bg-surface-muted">
        {category}
          </span> */}
            <h1 className="text-2xl md:text-3xl text-ink font-bold tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-muted font-semibold mb-4 leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Metadata */}
          <dl className="flex flex-col md:flex-row gap-4 w-full mb-4">
            <div
              className="flex-auto md:basis-1/3 p-4 border border-line bg-white"
              style={{ animationDelay: "0.20s" }}
            >
              <dt className="font-bold text-ink">Role</dt>
              <dd className="text-muted mt-1 text-sm">{role}</dd>
            </div>
            <div
              className="flex-auto md:basis-1/3 p-4 border border-line bg-white"
              style={{ animationDelay: "0.22s" }}
            >
              <dt className="font-bold text-ink">Year</dt>
              <dd className="text-muted mt-1 text-sm">{year}</dd>
            </div>
            {/* <div className="flex-auto">
            <dt className="font-bold text-ink ">Team</dt>
            <dd className="text-muted mt-1 text-sm">{team}</dd>
          </div> */}
            <div
              className="flex-auto md:basis-1/3 p-4 border border-line bg-white"
              style={{ animationDelay: "0.24s" }}
            >
              <dt className="font-bold text-ink ">Platform</dt>
              <dd className="text-muted mt-1 text-sm">{platform}</dd>
            </div>
          </dl>

          {/* Problem → Solution → Impact, anchored into the story below */}
          {/* <div
            className="grid md:grid-cols-3 gap-4 w-full animate-blur-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="p-4 border border-line bg-white">
              <a
                href={problemLink || "#problem"}
                className="group flex flex-row items-center gap-1 mb-2"
              >
                <h2 className="text-base font-bold uppercase text-ink">
                  Problem
                </h2>
                <ExternalLinkIcon />
              </a>
              <p className="text-muted text-sm leading-relaxed">{problem}</p>
            </div>
            <div className="p-4 border border-line bg-white">
              <a
                href={solutionLink || "#solution"}
                className="group flex flex-row items-center gap-1 mb-2"
              >
                <h2 className="text-base font-bold uppercase text-ink">
                  Solution
                </h2>
                <ExternalLinkIcon />
              </a>
              <p className="text-muted text-sm leading-relaxed">{solution}</p>
            </div>
            {impact && (
              <div className="p-4 border border-line bg-white">
                <a
                  href={impactLink || "#impact"}
                  className="group flex flex-row items-center gap-1 mb-2"
                >
                  <h2 className="text-base font-bold uppercase text-ink">
                    Impact
                  </h2>
                  <ExternalLinkIcon />
                </a>
                <p className="text-muted text-sm leading-relaxed">{impact}</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
      {/* MDX content */}
      <div className="w-full border-t border-line">
        <div className="px-2 md:px-16 max-w-[1440px] w-full md:mx-auto">
          <div className="p-8 md:py-16 border-x border-line">
            <article
              className="prose animate-blur-in leading-relaxed"
              style={{ animationDelay: "0.45s" }}
            >
              <CustomMDX source={project.content} />
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
