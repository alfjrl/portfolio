import Link from "next/link";
import Image from "next/image";
import { getProjects } from "app/project/utils";
import { getBlogPosts } from "app/article/utils";

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

type ProjectPost = ReturnType<typeof getProjects>[number] & {
  type: "project";
  href: string;
};

type ArticlePost = ReturnType<typeof getBlogPosts>[number] & {
  type: "blog";
  href: string;
};

type CombinedPost = ProjectPost | ArticlePost;

export function ProjectPosts() {
  const projects: ProjectPost[] = getProjects().map((p) => ({
    ...p,
    type: "project",
    href: `/project/${p.slug}`,
  }));

  const blogs: ArticlePost[] = getBlogPosts().map((b) => ({
    ...b,
    type: "blog",
    href: `/article/${b.slug}`,
  }));

  const all: CombinedPost[] = [...projects, ...blogs].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <ul aria-label="Work and writing" className="flex flex-col gap-4">
      {all.map((post, index) => {
        const isProject = post.type === "project";
        const coverImage = isProject ? post.metadata.coverImage : undefined;
        const platform = isProject ? post.metadata.platform : undefined;
        const releaseYear = isProject ? post.metadata.releaseYear : undefined;
        const status = isProject ? post.metadata.status : undefined;

        return (
          <li
            key={`${post.type}-${post.slug}`}
            className="animate-blur-in group"
            style={{ animationDelay: `${0.4 + index * 0.08}s` }}
          >
            <Link
              href={post.href}
              className="block w-full bg-white rounded-3xl border border-gray-200 overflow-hidden transition-all duration-200 ease-in group-hover:scale-101"
            >
              {/* Content */}
              <div className="h-full w-full p-4 md:p-8 flex flex-col">
                {/* Cover image — projects only */}
                {coverImage && (
                  <div
                    className="md:basis-3/4 overflow-hidden"
                    style={{
                      viewTransitionName: `project-cover-${post.slug}`,
                    }}
                  >
                    <Image
                      src={coverImage}
                      alt={post.metadata.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto transition-transform ease-in bg-white"
                    />
                  </div>
                )}
                <div
                  className={`flex flex-col ${isProject ? "basis-full md:basis-1/4" : "basis-full"}`}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block text-xs font-medium uppercase p-1 rounded-md tracking-wide bg-gray-100 text-gray-600 group-hover:text-gray-900 transition ease-in">
                      {isProject ? "Case Study" : "Article"}
                    </span>
                    {platform && (
                      <span className="inline-block text-xs font-medium uppercase p-1  rounded-md tracking-wide bg-gray-100 text-gray-600 group-hover:text-gray-900 transition ease-in">
                        {platform}
                      </span>
                    )}
                    {releaseYear && (
                      <span className="inline-block text-xs font-medium uppercase p-1 rounded-md tracking-wide bg-gray-100 text-gray-600 group-hover:text-gray-900 transition ease-in">
                        {releaseYear} - {status}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-black mb-2">
                    {post.metadata.title}
                  </h2>
                  {/* Description & image */}
                  <div>
                    <p
                      className={`text-gray-600 leading-relaxed group-hover:text-gray-900 transition ease-in ${isProject ? "pr-4" : ""}`}
                    >
                      {post.metadata.summary}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
