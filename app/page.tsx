import { PostsList } from "app/components/posts";
import { getProjects } from "app/project/utils";
import { getBlogPosts } from "app/article/utils";

export default function Page() {
  const projects = getProjects().map((p) => ({
    ...p,
    type: "project" as const,
    href: `/project/${p.slug}`,
  }));

  const blogs = getBlogPosts().map((b) => ({
    ...b,
    type: "blog" as const,
    href: `/article/${b.slug}`,
  }));

  const all = [...projects, ...blogs].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  const sortedProjects = [...projects].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );

  return (
    <section>
      {/* hero intro */}
      <div className="max-w-[1280px] w-full md:mx-auto border-x border-gray-200">
        <div className="px-4 py-16 md:py-36 text-gray-500">
          <h1
            className="text-3xl md:text-5xl md:pl-24 md:pr-60 font-serif mb-8 text-gray-900 md:leading-[3.5rem] animate-blur-in"
            style={{ animationDelay: "0s" }}
          >
            Hi, I'm Alfred, a product designer who turns research into
            accessible, considered interfaces for complex information systems.
          </h1>
          {/* description */}
          <div className="md:pl-24 md:pr-60 md:text-lg font-semibold">
            <p
              className=" mb-2 animate-blur-in"
              style={{ animationDelay: "0.1s" }}
            >
              Working end-to-end — from research through production-ready code —
              balancing{" "}
              <span className="font-black text-gray-900 ">user needs</span>,{" "}
              <span className="font-black text-gray-900 ">business goals</span>,
              and{" "}
              <span className="font-black text-gray-900">
                technical realities
              </span>
              .
            </p>
            <p
              className="mb-2 animate-blur-in"
              style={{ animationDelay: "0.2s" }}
            >
              Currently{" "}
              <span className="font-black text-gray-900">
                leading the entire public-facing ecosystem design
              </span>{" "}
              at University of Maryland Libraries. 5+ years experiences across
              hardware-adjacent software, e-commerce, and higher education.
            </p>
          </div>
          {/* <p className="mb-6 animate-blur-in" style={{ animationDelay: "0.2s" }}>
          Design Systems • Accessibility • Enterprise UX • M.S. in
          Human-Computer Interaction
        </p> */}

          {/* <p
          className="mb-2 max-w-4xl animate-blur-in"
          style={{ animationDelay: "0.2s" }}
        >
          Data-driven product designer working{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            end-to-end
          </span>{" "}
          — from user research through production-ready code.
        </p>
        <p
          className="max-w-4xl animate-blur-in"
          style={{ animationDelay: "0.3s" }}
        >
          Currently leading design for the public-facing interfaces of
          University of Maryland Libraries, specializing in building{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            scalable
          </span>
          ,{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            accessible
          </span>{" "}
          products for{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            complex information systems
          </span>
          .
        </p> */}
        </div>
      </div>
      <PostsList posts={sortedProjects} />
    </section>
  );
}
