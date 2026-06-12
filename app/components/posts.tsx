"use client";

import ProjectCard from "./project-card";

type PostMeta = {
  title: string;
  summary: string;
  cardDescription?: string;
  publishedAt: string;
  coverImage?: string;
  platform?: string;
  releaseYear?: string;
  status?: string;
  [key: string]: unknown;
};

type PostItem = {
  slug: string;
  type: "project" | "blog";
  href: string;
  metadata: PostMeta;
};

function PostsList({ posts }: { posts: PostItem[] }) {
  return (
    <div className="w-full bg-[#fafcfd] border-t border-gray-200" id="project">
      <div
        aria-label="Selected work"
        className="p-4 md:py-16  max-w-[1280px] w-full md:mx-auto border-x border-gray-200 "
      >
        <h2
          className="text-2xl md:text-3xl text-gray-900 font-black mb-4 md:mb-8 animate-blur-in"
          style={{ animationDelay: "0.3s" }}
        >
          Selected Work
        </h2>
        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {posts.map((post, index) => {
            const isProject = post.type === "project";
            return (
              <li
                key={`${post.type}-${post.slug}`}
                className="animate-blur-in"
                style={{ animationDelay: `${0.4 + index * 0.08}s` }}
              >
                <ProjectCard
                  slug={post.slug}
                  href={post.href}
                  title={post.metadata.title}
                  cardDescription={post.metadata.cardDescription}
                  coverImage={post.metadata.coverImage}
                  hoverLabel={isProject ? "VIEW CASE STUDY" : "READ ARTICLE"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function OtherProjectsList({ posts }: { posts: PostItem[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="w-full border-t border-gray-200">
      <div
        aria-label="More work"
        className="p-4 md:py-16 max-w-[1280px] w-full md:mx-auto border-x border-gray-200"
      >
        <h2
          className="text-2xl md:text-3xl text-gray-900 font-black mb-4 md:mb-8 animate-blur-in"
          style={{ animationDelay: "0.3s" }}
        >
          More Work
        </h2>
        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <li
              key={`other-${post.slug}`}
              className="animate-blur-in"
              style={{ animationDelay: `${0.4 + index * 0.08}s` }}
            >
              <ProjectCard
                slug={post.slug}
                href={post.href}
                title={post.metadata.title}
                cardDescription={post.metadata.cardDescription}
                coverImage={post.metadata.coverImage}
                headingLevel="h3"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { PostsList, OtherProjectsList };
