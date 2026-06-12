import { PostsList, OtherProjectsList } from "app/components/posts";
import { getProjects } from "app/project/utils";
import ChatPanel from "app/components/chat/chat-panel";
import HeroHeadline from "app/components/hero-headline";
import { PersonalizeProvider } from "app/components/chat/personalize-context";
import PersonalizedSection from "app/components/chat/personalized-section";
import LeadershipPrefix from "app/components/leadership-prefix";
import HeroBackdrop from "app/components/hero-backdrop";

export default function Page() {
  const projects = getProjects().map((p) => ({
    ...p,
    type: "project" as const,
    href: `/project/${p.slug}`,
  }));

  const byOrder = (
    a: { metadata: { order?: number } },
    b: { metadata: { order?: number } },
  ) => (a.metadata.order ?? Infinity) - (b.metadata.order ?? Infinity);

  const featuredProjects = projects
    .filter((p) => p.metadata.featured)
    .sort(byOrder);

  const otherProjects = projects
    .filter((p) => !p.metadata.featured)
    .sort(byOrder);

  return (
    <PersonalizeProvider>
      <section>
        <HeroBackdrop />
        {/* hero intro */}
        <div
          id="hero"
          className="max-w-[1440px] w-full md:mx-auto px-2 md:px-16"
        >
          <div className="px-4 p-8 py-16 md:py-24 text-gray-700">
            {/* <p className="mb-4 animate-blur-in" style={{ animationDelay: "0s" }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
              <span className="relative inline-flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>
              Open to new roles
            </span>
          </p> */}
            <HeroHeadline className="text-2xl md:text-5xl max-w-2xl font-serif mb-3 md:mb-6 text-gray-900 md:leading-[3.5rem] font-normal" />
            {/* description */}
            <div className=" font-semibold mb-6">
              <p
                className="animate-blur-in mb-2"
                style={{ animationDelay: "0.4s" }}
              >
                5+ years of experience crafting accessible & human-centered
                design.
              </p>
              <p className="animate-blur-in" style={{ animationDelay: "0.6s" }}>
                <LeadershipPrefix />
                <strong className="text-gray-900">
                  University of Maryland Libraries
                </strong>
                .
              </p>
              {/* <p
                5+ years of experience • Hardware-adjacent Software • SaaS •
                E-Commerce • Information Systems
              </p>
              {/* <p
              className=" mb-2 animate-blur-in"
              style={{ animationDelay: "0.2s" }}
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
              style={{ animationDelay: "0.3s" }}
            >
              Currently{" "}
              <span className="font-black text-gray-900">
                leading the public-facing ecosystem design
              </span>{" "}
              at University of Maryland Libraries. 5+ years experiences across
              hardware-adjacent software, e-commerce, and higher education.
            </p> */}
            </div>
            <ChatPanel
              className="max-w-3xl animate-blur-in"
              style={{ animationDelay: "0.8s" }}
            />
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
        {/* Standalone tailored section — populated from the chat intake; renders
          nothing until the visitor has a result. */}
        <PersonalizedSection />
        <PostsList posts={featuredProjects} />
        <OtherProjectsList posts={otherProjects} />
      </section>
    </PersonalizeProvider>
  );
}
