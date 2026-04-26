import { PostsList } from "app/components/posts";
import { getBlogPosts } from "app/article/utils";

export const metadata = {
  title: "Articles",
  description: "Read my articles.",
};

export default function Page() {
  const blogs = getBlogPosts().map((b) => ({
    ...b,
    type: "blog" as const,
    href: `/article/${b.slug}`,
  }));

  const sorted = [...blogs].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <section className="max-w-[1440px] w-full md:mx-auto px-4 md:px-16">
      <h1 className="font-black text-2xl mb-8 tracking-tighter">Articles</h1>
      <PostsList posts={sorted} />
    </section>
  );
}
