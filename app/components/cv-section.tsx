import { workExperience, education, contact } from "app/data/cv";
import type { WorkExperience, Education, ContactItem } from "app/data/cv";

function SectionLabel({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <div
      className="w-full lg:w-40 flex-shrink-0 mb-4 lg:mb-0 pt-px md:basis-1/4 animate-blur-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="text-lg uppercase text-gray-900 font-black md:text-right">
        {children}
      </h2>
    </div>
  );
}

function WorkEntry({ entry, delay }: { entry: WorkExperience; delay: number }) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:gap-8 pb-4 mb-4 animate-blur-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-md text-gray-500 tabular-nums flex-shrink-0 w-32 mb-2 sm:mb-0 leading-snug">
        {entry.years}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-lg font-bold text-gray-900 leading-snug mb-2">
          {entry.title}
        </p>
        <p className="text-md font-bold text-gray-500 mb-2">
          {entry.company.en}
          {entry.company.zh && (
            <span className="text-sm"> · {entry.company.zh}</span>
          )}
        </p>
        {entry.description.length > 0 && (
          <div className="">
            {entry.description.map((para, i) => (
              <p key={i} className="text-md text-gray-500 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function EducationEntry({ entry, delay }: { entry: Education; delay: number }) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:gap-8 pb-4 mb-4 animate-blur-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-md text-gray-500 tabular-nums flex-shrink-0 w-32 mb-2 sm:mb-0 leading-snug">
        {entry.years}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-lg font-bold text-gray-900 leading-snug mb-2">
          {entry.school.en}
          {entry.school.zh && (
            <span className="text-sm text-gray-500"> · {entry.school.zh}</span>
          )}
        </p>
        <ul className="mt-2 space-y-1">
          {entry.majors.map((major, i) => (
            <li
              key={i}
              className="text-md font-bold text-gray-500 mb-2 last:mb-0"
            >
              {major.en}
              {major.zh && <span className="text-sm"> · {major.zh}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactEntry({ item, delay }: { item: ContactItem; delay: number }) {
  const isEmail = item.href.startsWith("mailto:");
  return (
    <div
      className="flex flex-col sm:flex-row sm:gap-8 pb-4 mb-4 animate-blur-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-md text-gray-500 tabular-nums flex-shrink-0 w-32 mb-2 sm:mb-0 leading-snug">
        {item.label}
      </div>
      <a
        href={item.href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="text-md font-bold text-gray-900 leading-snug underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-all"
      >
        {item.display}
      </a>
    </div>
  );
}

export default function CVSection() {
  const BASE = 0.84;
  const STEP = 0.08;
  let idx = 0;

  const workLabelDelay = BASE + idx++ * STEP;
  const workDelays = workExperience.map(() => BASE + idx++ * STEP);
  const eduLabelDelay = BASE + idx++ * STEP;
  const eduDelays = education.map(() => BASE + idx++ * STEP);
  const contactLabelDelay = BASE + idx++ * STEP;
  const contactDelays = contact.map(() => BASE + idx++ * STEP);

  return (
    <div className="border-t border-gray-200 space-y-12 bg-[#fafcfd]">
      <div className="max-w-[1280px] w-full md:mx-auto p-4 md:py-16 border-x border-gray-200">
        <div className="flex flex-col lg:flex-row lg:gap-12 pb-4 md:pb-8">
          <SectionLabel delay={workLabelDelay}>Work Experience</SectionLabel>
          <div className="min-w-0 md:basis-3/4 md:mt-1">
            {workExperience.map((entry, i) => (
              <WorkEntry key={i} entry={entry} delay={workDelays[i]} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12 pb-4 md:pb-8">
          <SectionLabel delay={eduLabelDelay}>Education</SectionLabel>
          <div className="min-w-0 md:basis-3/4 md:mt-1">
            {education.map((entry, i) => (
              <EducationEntry key={i} entry={entry} delay={eduDelays[i]} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12 pb-4 md:pb-8">
          <SectionLabel delay={contactLabelDelay}>Contact</SectionLabel>
          <div className="min-w-0 md:basis-3/4 md:mt-1">
            {contact.map((item, i) => (
              <ContactEntry key={i} item={item} delay={contactDelays[i]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
