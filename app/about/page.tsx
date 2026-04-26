import type { Metadata } from "next";
import Image from "next/image";
import CVSection from "app/components/cv-section";

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
      className="-translate-x-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition ease-in flex-shrink-0"
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
    href: "https://www.goodreads.com/book/show/60664913-grid-systems-in-graphic-design",
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
    <div className="">
      <div className="max-w-[1280px] w-full md:mx-auto flex flex-col md:flex-row gap-8 lg:gap-12 p-4 md:py-16 border-x border-gray-200">
        <div className="sr-only">
          <h1>About Alfred Lin</h1>
        </div>
        {/* Profile image */}
        <div
          className="w-64 mx-auto md:w-full md:basis-1/4 flex-shrink-0 animate-blur-in"
          style={{ animationDelay: "0s" }}
        >
          <Image
            src="/profile.jpg"
            alt="Alfred Lin profile picture"
            width={2020}
            height={3020}
            className="rounded-full aspect-square object-cover object-top bg-white"
          />
        </div>

        {/* Content */}
        <div
          className="flex flex-col  md:basis-3/4 animate-blur-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Bio */}
          <div className="text-gray-500 mb-10 md:text-lg font-semibold">
            <p
              className="mb-2 leading-relaxed animate-blur-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hey, I'm <span className="text-gray-900">Alfred</span>, go by{" "}
              <span className="text-gray-900">展任</span>
              (Jhan-Ren) in Mandarin.
            </p>
            <p
              className="mb-2 leading-relaxed font-black text-xl md:text-2xl text-gray-900 animate-blur-in"
              style={{ animationDelay: "0.2s" }}
            >
              {/* A Product Designer, A UX Researcher, A Front-End Developer, A
              Product Manager, A Problem-Solver, and An Outdoor Enthusiast. A */}
              A Product Designer, A Front-End Developer, A Problem-Solver, and
              An Outdoor Enthusiast.
            </p>
            <p
              className="mb-8 leading-relaxed animate-blur-in"
              style={{ animationDelay: "0.3s" }}
            >
              I have experiences in multiple platforms (web, iOS/Android) for
              different B2B / B2C products.
            </p>
            <p
              className="mb-8 leading-relaxed animate-blur-in"
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
              When I'm not working, you can find me relaxing in my backyard with
              a good book or spending my weekends cycling and exploring new
              trails in the mountains.
            </p>
          </div>

          {/* Activity cards */}
          <ul
            aria-label="Currently into"
            className="flex flex-col md:grid md:grid-cols-2 gap-4"
          >
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
                  className="group bg-white flex flex-row justify-between items-center border border-gray-200 rounded-md p-4 transition ease-in hover:scale-101"
                >
                  <div className="flex flex-col justify-center">
                    <div className="pb-2 flex flex-row items-center gap-1 text-gray-500 group-hover:text-gray-700 transition ease-in">
                      <p className="text-sm">{item.label}</p>
                      <ExternalLinkIcon />
                    </div>
                    <p className="font-bold text-gray-900">{item.title}</p>
                  </div>
                  <div
                    className={`h-14 ${item.wider ? "w-20" : "w-14"} overflow-hidden flex-shrink-0 ml-4`}
                  >
                    {item.external ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className={`${item.imageClass} w-full h-full rounded-lg bg-white`}
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        width={100}
                        height={100}
                        className={`${item.imageClass} w-full h-full rounded-lg bg-white`}
                      />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CVSection />
    </div>
  );
}
