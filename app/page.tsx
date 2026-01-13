import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div className="mt-16 mb-20">
        <h1 className="mb-2 text-2xl md:text-3xl font-extrabold text-black tracking-tighter">
          Alfred J. Lin
        </h1>
        <p className="mb-2 font-bold text-lg md:text-xl text-black ">
          Full Stack Product Designer w/ 5+ years of experience
        </p>
        <p className="mb-6">
          Higher Education • Manufacturing SaaS • E-commerce
        </p>
        <p className="mb-4">
          A data-driven product designer who loves working on{" "}
          <span className="font-bold underline decoration-wavy underline-offset-3 decoration-amber-400 text-black ">
            complex systems
          </span>{" "}
          and creating{" "}
          <span className="font-bold underline decoration-wavy underline-offset-3 decoration-amber-400 text-black ">
            user-centered
          </span>{" "}
          &{" "}
          <span className="font-bold underline decoration-wavy underline-offset-3 decoration-amber-400 text-black ">
            ethically humane design
          </span>
          .
        </p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
