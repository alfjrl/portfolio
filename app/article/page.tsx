import { ProjectPosts } from "app/components/posts";

export const metadata = {
  title: "Articles",
  description: "Read my articles.",
};

export default function Page() {
  return (
    <section className="max-w-[1440px] w-full md:mx-auto px-4 md:px-16">
      <h1 className="font-black text-2xl mb-8 tracking-tighter">Articles</h1>
      <ProjectPosts />
    </section>
  );
}
