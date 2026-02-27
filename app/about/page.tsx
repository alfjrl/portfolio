import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Designer, Product Manager, Front-End Developer, and Outdoor Enthusiast.",
};

function ExternalLinkIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:rotate-45 transition ease-in flex-shrink-0"
      height="14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const activities = [
  {
    label: "Reading",
    title: "Grid systems in graphic design",
    href: "https://www.amazon.com/Grid-systems-graphic-design-communication/dp/3721201450",
    image: "/grid-systems.jpg",
    imageAlt: "Grid systems in graphic design book cover",
    imageClass: "object-cover",
    wider: false,
  },
  {
    label: "Listening",
    title: "Joy of Missing Out (JOMO)",
    href: "https://open.spotify.com/show/0sJAtVorz8TsYDzzyM04cq?si=07eef2a3c04f42a5",
    image: "/jomo.jpeg",
    imageAlt: "Joy of Missing Out (JOMO) podcast cover",
    imageClass: "object-cover",
    wider: false,
    external: true,
  },
  {
    label: "Watching",
    title: "Formula 1™",
    href: "https://www.formula1.com/",
    image: "/f1-logo.png",
    imageAlt: "Formula 1 logo",
    imageClass: "object-scale-down",
    wider: false,
  },
];

export default function AboutPage() {
  return (
    <section className="flex flex-col lg:flex-row mt-6 gap-8 lg:gap-12">
      <div className="sr-only">
        <h1>About Alfred Lin</h1>
      </div>
      {/* Profile image */}
      <div
        className="w-64 lg:w-full flex-shrink-0 lg:mt-10 animate-blur-in"
        style={{ animationDelay: "0s" }}
      >
        <Image
          src="/profile.jpg"
          alt="Alfred Lin profile picture"
          width={2020}
          height={3020}
          className="rounded-full aspect-square object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:mt-10">
        {/* Bio */}
        <div className="text-gray-600 mb-10">
          <p
            className="mb-4 leading-relaxed animate-blur-in"
            style={{ animationDelay: "0.1s" }}
          >
            Hey, I'm Alfred, go by 展任 (Jhan-Ren) in Mandarin.
          </p>
          <p
            className="mb-4 leading-relaxed text-xl font-black text-black animate-blur-in"
            style={{ animationDelay: "0.2s" }}
          >
            A Product Designer, A Product Manager, A Front-End Developer, A
            Problem-Solver, and An Outdoor Enthusiast.
          </p>
          <p
            className="mb-4 leading-relaxed animate-blur-in"
            style={{ animationDelay: "0.3s" }}
          >
            I have experiences in multiple platforms (web, iOS/Android) for
            different B2B / B2C products including internal tools, IoT, SaaS,
            and so on.
          </p>
          <p
            className="mb-4 leading-relaxed animate-blur-in"
            style={{ animationDelay: "0.4s" }}
          >
            As a product designer, I'm constantly fascinated by how people
            interact with their surroundings. I enjoy learning about different
            perspectives and design approaches, which helps me incorporate
            diverse backgrounds and ideas into my work, whether I'm
            collaborating with developers or other designers.
          </p>
          <p
            className="leading-relaxed animate-blur-in"
            style={{ animationDelay: "0.5s" }}
          >
            When I'm not working, you can find me relaxing in my backyard with a
            good book or spending my weekends cycling and exploring new trails
            in the mountains.
          </p>
        </div>

        {/* Activity cards */}
        <ul aria-label="Currently into" className="flex flex-col">
          {activities.map((item, index) => (
            <li
              key={item.title}
              className="animate-blur-in"
              style={{ animationDelay: `${0.6 + index * 0.08}s` }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white flex flex-row justify-between items-center border border-gray-200 rounded-lg p-4 mb-4 transition ease-in hover:border-gray-400"
              >
                <div className="flex flex-col justify-center">
                  <div className="pb-2 flex flex-row items-center gap-1 text-gray-400 group-hover:text-gray-700 transition ease-in">
                    <p className="text-sm">{item.label}</p>
                    <ExternalLinkIcon />
                  </div>
                  <p className="font-bold text-black">{item.title}</p>
                </div>
                <div
                  className={`h-14 ${item.wider ? "w-20" : "w-14"} overflow-hidden flex-shrink-0 ml-4`}
                >
                  {item.external ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={`${item.imageClass} w-full h-full rounded-lg`}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={100}
                      height={100}
                      className={`${item.imageClass} w-full h-full rounded-lg`}
                    />
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
