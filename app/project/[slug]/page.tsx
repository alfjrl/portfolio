import { notFound } from "next/navigation";
import Image from "next/image";
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
    role,
    year,
    team,
    platform,
    glanceTitle,
    glanceSummary,
    problem,
    problemLink,
    solution,
    solutionLink,
    impact,
    impactLink,
  } = project.metadata;

  return (
    <div className="max-w-[1440px] w-full md:mx-auto px-4 md:px-16">
      {/* Hero image */}
      <div
        className="relative aspect-16/9 w-full mt-6 bg-white rounded-xl overflow-hidden animate-blur-in"
        style={{
          animationDelay: "0s",
          viewTransitionName: `project-cover-${slug}`,
        }}
      >
        <Image
          src={coverImage}
          alt={`${title} cover`}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Project header */}
      <div
        className="flex flex-col my-16 lg:items-start animate-blur-in"
        style={{ animationDelay: "0.15s" }}
      >
        {/* Title + summary */}
        <div className="flex-auto">
          {/* <span className="text-xs font-medium text-gray-500 uppercase tracking-wide py-1 px-3 rounded-md bg-gray-100">
        {category}
          </span> */}
          <h1 className="font-black text-2xl tracking-tight mb-4 text-black">
            {title}
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">{summary}</p>
        </div>

        {/* Metadata */}
        <dl className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-auto">
            <dt className="font-bold text-black">Role</dt>
            <dd className="text-gray-600 mt-1 text-sm">{role}</dd>
          </div>
          <div className="flex-auto">
            <dt className="font-bold text-black">Year</dt>
            <dd className="text-gray-600 mt-1 text-sm">{year}</dd>
          </div>
          <div className="flex-auto">
            <dt className="font-bold text-black ">Team</dt>
            <dd className="text-gray-600 mt-1 text-sm">{team}</dd>
          </div>
          <div className="flex-auto">
            <dt className="font-bold text-black ">Platform</dt>
            <dd className="text-gray-600 mt-1 text-sm">{platform}</dd>
          </div>
        </dl>
      </div>

      {/* Project at a glance */}
      <div
        className="my-16 bg-white border border-gray-200 p-4 md:p-8 animate-blur-in"
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="text-sm text-black uppercase tracking-wide mb-2">
          Project at a Glance
        </h2>
        <h3 className="text-xl font-bold text-black mb-2">{glanceTitle}</h3>
        <p className="text-gray-600 leading-relaxed pb-4 md:pb-8 border-b border-gray-300 mb-4 md:mb-8">
          {glanceSummary}
        </p>

        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex-1">
            <a
              href={problemLink ?? `#problem`}
              className="group flex flex-row items-center gap-1  mb-2"
            >
              <h4 className="text-base font-bold uppercase text-black">
                Problem
              </h4>
              <ExternalLinkIcon />
            </a>
            <p className=" text-gray-600 leading-relaxed ">{problem}</p>
          </div>
          <div className="flex-1">
            <a
              href={solutionLink ?? `#solution`}
              className="group flex flex-row items-center gap-1 mb-2"
            >
              <h4 className="text-base font-bold uppercase text-black">
                Solution
              </h4>
              <ExternalLinkIcon />
            </a>
            <p className="text-gray-600 leading-relaxed ">{solution}</p>
          </div>
          {impact && (
            <div className="flex-1">
              <a
                href={impactLink ?? `#impact`}
                className="group flex flex-row items-center gap-1 mb-2"
              >
                <h4 className="text-base font-bold uppercase text-black">
                  Impact
                </h4>
                <ExternalLinkIcon />
              </a>
              <p className="text-gray-600 leading-relaxed">{impact}</p>
            </div>
          )}
        </div>
      </div>

      {/* MDX content */}
      <article
        className="prose mt-12 mb-16 animate-blur-in leading-relaxed"
        style={{ animationDelay: "0.45s" }}
      >
        <CustomMDX source={project.content} />
      </article>
    </div>
  );
}
