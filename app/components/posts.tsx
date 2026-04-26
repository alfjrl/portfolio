"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

type PostMeta = {
  title: string;
  summary: string;
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
  const onEnter = useCallback((lbl: string, e: React.MouseEvent) => {
    window.dispatchEvent(
      new CustomEvent("cursor:expand", {
        detail: { label: lbl, x: e.clientX, y: e.clientY },
      }),
    );
  }, []);

  const onLeave = useCallback(() => {
    window.dispatchEvent(new CustomEvent("cursor:collapse"));
  }, []);

  return (
    <div className="w-full bg-[#fafcfd] border-t border-gray-200" id="project">
      <div
        aria-label="Work and writing"
        className="p-4 md:py-16  max-w-[1280px] w-full md:mx-auto border-x border-gray-200 "
      >
        <h2
          className="text-2xl md:text-3xl text-gray-900 font-black mb-4 md:mb-8 animate-blur-in"
          style={{ animationDelay: "0.3s" }}
        >
          Featured
        </h2>
        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4">
          {posts.map((post, index) => {
            const isProject = post.type === "project";
            const { coverImage, platform, releaseYear, status } = post.metadata;
            const lbl = isProject ? "VIEW CASE STUDY" : "READ ARTICLE";

            return (
              <li
                key={`${post.type}-${post.slug}`}
                className="animate-blur-in group"
                style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                onMouseEnter={(e) => onEnter(lbl, e)}
                onMouseLeave={onLeave}
              >
                {/* card */}
                <Link
                  href={post.href}
                  className="p-4 block w-full overflow-hidden transition-all duration-200 ease-in group-hover:scale-101 border border-gray-200 rounded-md bg-white"
                >
                  {/* Content */}
                  <div className="h-full w-full flex flex-col">
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
                      className={`flex flex-col pt-4 ${isProject ? "basis-full md:basis-1/4 " : "basis-full"}`}
                    >
                      {/* Tags */}
                      {/* <div className="flex flex-wrap gap-2 mb-2">
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
                    </div> */}
                      <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
                        {post.metadata.title}
                      </h2>
                      {/* Description & image */}
                      <div>
                        <p
                          className={`text-gray-500 leading-relaxed group-hover:text-gray-900 transition ease-in`}
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
      </div>
    </div>
  );
}

export { PostsList };
