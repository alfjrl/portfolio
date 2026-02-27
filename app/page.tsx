import { ProjectPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div className="mt-16 mb-20 text-gray-600">
        <h1
          className="mb-2 text-2xl md:text-3xl font-extrabold text-black tracking-tighter animate-blur-in"
          style={{ animationDelay: "0s" }}
        >
          Alfred J. Lin
        </h1>
        <p
          className="mb-2 font-bold text-lg md:text-xl text-black animate-blur-in"
          style={{ animationDelay: "0.1s" }}
        >
          Product Designer w/ 5+ years of experience
        </p>
        <p className="mb-6 animate-blur-in" style={{ animationDelay: "0.2s" }}>
          Design Systems • Accessibility • Enterprise UX • MS in Human-Computer
          Interaction
        </p>
        <p className="mb-4 animate-blur-in" style={{ animationDelay: "0.3s" }}>
          Data-driven product designer working{" "}
          <span className="font-bold underline decoration-wavy decoration-amber-300 text-black">
            end-to-end
          </span>{" "}
          — from user research through production-ready code. Specialized in
          designing{" "}
          <span className="font-bold underline decoration-wavy decoration-amber-300 text-black">
            scalable, accessible
          </span>{" "}
          solutions for{" "}
          <span className="font-bold underline decoration-wavy decoration-amber-300 text-black">
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
