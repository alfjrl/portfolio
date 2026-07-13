import { PostsList, OtherProjectsList } from "app/components/posts";
import { getProjects } from "app/project/utils";
import ChatPanel from "app/components/chat/chat-panel";
import HeroHeadline from "app/components/hero-headline";
import { PersonalizeProvider } from "app/components/chat/personalize-context";
import PersonalizedSection from "app/components/chat/personalized-section";
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
          <div className="px-4 p-8 py-16 md:py-36 text-ink max-w-4xl">
            <p
              className="mb-4 animate-blur-in"
              style={{ animationDelay: "0s" }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
                <span className="relative inline-flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </span>
            </p>
            <HeroHeadline className="text-2xl md:text-5xl max-w-2xl font-serif mb-3 md:mb-6 text-ink md:leading-[3.5rem] font-normal" />
            {/* description */}
            <div className="mb-6 md:text-lg">
              <p
                className="animate-blur-in mb-2"
                style={{ animationDelay: "0.4s" }}
              >
                I turn complex problems into accessible, considered interfaces.
              </p>
              <p
                className="animate-blur-in mb-2"
                style={{ animationDelay: "0.6s" }}
              >
                Most recently led the public-facing ecosystem design at{" "}
                <strong className="text-ink">
                  University of Maryland Libraries
                </strong>
                . 5+ years across hardware-adjacent software, e-commerce, and
                higher education.
              </p>
            </div>
            {/* <ChatPanel
              className="max-w-3xl animate-blur-in"
              style={{ animationDelay: "0.8s" }}
            /> */}
          </div>
        </div>
        {/* Standalone tailored section — populated from the chat intake; renders
          nothing until the visitor has a result. */}
        {/* <PersonalizedSection /> */}
        <PostsList posts={featuredProjects} />
        <OtherProjectsList posts={otherProjects} />
      </section>
    </PersonalizeProvider>
  );
}
