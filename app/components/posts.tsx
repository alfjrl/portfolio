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

        return (
          <li
            key={`${post.type}-${post.slug}`}
            className="animate-blur-in group"
            style={{ animationDelay: `${0.4 + index * 0.08}s` }}
          >
            <Link
              href={post.href}
              className="block w-full border border-gray-200 bg-white rounded-lg overflow-hidden transition-all duration-200 ease-in hover:border-gray-400"
            >
              <div
                className={`w-full flex flex-col sm:flex-row ${
                  coverImage ? "h-[600px] sm:h-[300px]" : "h-auto"
                }`}
              >
                {/* Content */}
                <div className="h-full w-full p-4 flex flex-col">
                  <h2 className="text-xl font-bold text-black mb-2">
                    {post.metadata.title}
                  </h2>
                  {/* Description & image */}
                  <div className="flex flex-col sm:flex-row grow">
                    <div
                      className={`flex flex-col ${isProject ? "basis-1/3 sm:basis-3/5" : "basis-full"}`}
                    >
                      <p
                        className={`text-gray-500 leading-relaxed group-hover:text-gray-700 transition ease-in mb-2 ${isProject ? "pr-4" : ""}`}
                      >
                        {post.metadata.summary}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-auto">
                        <span className="inline-block text-xs font-medium uppercase p-1 sm:mb-4 rounded-md tracking-wide bg-gray-100 text-gray-500 group-hover:text-gray-900 transition ease-in">
                          {isProject ? "Case Study" : "Article"}
                        </span>
                        {platform && (
                          <span className="inline-block text-xs font-medium uppercase p-1 sm:mb-4 rounded-md tracking-wide bg-gray-100 text-gray-500 group-hover:text-gray-900 transition ease-in">
                            {platform}
                          </span>
                        )}
                      </div>
                      <span className="flex-row items-center gap-1 text-gray-400 group-hover:text-black transition ease-in hidden sm:flex">
                        <span className="text-sm">See more</span>
                        <ExternalLinkIcon />
                      </span>
                    </div>
                    {/* Cover image — projects only */}
                    {coverImage && (
                      <div className="relative basis-2/3 sm:basis-2/5">
                        <Image
                          src={coverImage}
                          alt={post.metadata.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform ease-in"
                        />
                      </div>
                    )}
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
