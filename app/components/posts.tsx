import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            // className="flex flex-col space-y-1 mb-4"
            // className="grid gird-col-2"
            href={`/blog/${post.slug}`}
          >
            {/* <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"> */}
            <div className="w-full flex flex-col space-x-0 md:space-x-2">
              <div className="w-full bg-gray-200 aspect-4/3 rounded-lg"></div>
              {/* <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p> */}
              <p className="text-black dark:text-neutral-100 tracking-tight ml-0">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
