import { ProjectPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="max-w-[1440px] w-full md:mx-auto px-4 md:px-16">
      <div className="mt-16 mb-20 text-gray-600">
        <h1
          className="mb-2 text-2xl md:text-3xl font-extrabold text-black tracking-tighter animate-blur-in"
          style={{ animationDelay: "0s" }}
        >
          Alfred J. Lin
        </h1>
        <p
          className="mb-6 font-bold text-lg md:text-xl text-black animate-blur-in"
          style={{ animationDelay: "0.1s" }}
        >
          Product Designer with 5+ years across hardware-adjacent software,
          e-commerce, and information systems.
        </p>
        {/* <p className="mb-6 animate-blur-in" style={{ animationDelay: "0.2s" }}>
          Design Systems • Accessibility • Enterprise UX • M.S. in
          Human-Computer Interaction
        </p> */}
        <p
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
          Currently leading design for the public-facing interface of University
          of Maryland Libraries, specializing in building{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            scalable, accessible
          </span>{" "}
          products for{" "}
          <span className="font-bold text-black underline decoration-wavy decoration-amber-300">
            complex information systems
          </span>
          .
        </p>
      </div>
      <div className="my-8">
        <ProjectPosts />
      </div>
    </section>
  );
}
