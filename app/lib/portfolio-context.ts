// Server-only: this module reads the filesystem (transitively, via getProjects/
// getBlogPosts) to assemble a compact grounding document for the chat model.
// Never import this from a client component.
import "server-only";
import { cache } from "react";
import { getProjects } from "app/project/utils";
import { getBlogPosts } from "app/article/utils";
import { workExperience, education, contact } from "app/data/cv";

// Bio is mirrored from app/page.tsx (hero) + app/about/page.tsx, where the copy
// lives as JSX rather than exported data. Keep this in sync if that copy changes.
const BIO = `Alfred Lin (展任 / Jhan-Ren) is a product designer and front-end developer.
He turns research into accessible, considered interfaces for complex information systems,
working end-to-end — from research through production-ready code — balancing user needs,
business goals, and technical realities. He most recently led the public-facing ecosystem
design at the University of Maryland Libraries (2023–2026), with 5+ years of experience across
hardware-adjacent software, e-commerce, and higher education. He has a M.S. in Human-Computer
Interaction. Outside of work he reads, cycles, and explores trails in the mountains.
He is open to product design roles based in Taiwan starting July 2026.`;

// Keep any single content field from blowing up the token budget.
const cap = (s: string | undefined, n = 280) =>
  s ? (s.length > n ? s.slice(0, n).trimEnd() + "…" : s) : "";

function projectsSection(): string {
  return getProjects()
    .map((p) => {
      const m = p.metadata;
      const lines = [
        `### ${m.title} (slug: ${p.slug})`,
        m.role && `Role: ${m.role}`,
        m.year && `Year: ${m.year}`,
        m.category && `Category: ${m.category}`,
        m.status && `Status: ${m.status}`,
        m.summary && `Summary: ${cap(m.summary)}`,
        m.problem && `Problem: ${cap(m.problem)}`,
        m.solution && `Solution: ${cap(m.solution)}`,
        m.impact && `Impact: ${cap(m.impact)}`,
      ].filter(Boolean);
      return lines.join("\n");
    })
    .join("\n\n");
}

function writingSection(): string {
  return getBlogPosts()
    .map((p) => {
      const m = p.metadata;
      return [
        `- "${m.title}" (${m.publishedAt})`,
        m.summary && `  ${cap(m.summary)}`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");
}

function experienceSection(): string {
  return workExperience
    .map((w) => `- ${w.years} — ${w.title}, ${w.company.en}`)
    .join("\n");
}

function educationSection(): string {
  return education
    .map((e) => {
      const majors = e.majors.map((mj) => mj.en).join(", ");
      return `- ${e.years} — ${e.degree?.en ?? ""} (${majors}), ${e.school.en}`;
    })
    .join("\n");
}

function contactSection(): string {
  return contact.map((c) => `- ${c.label}: ${c.display} (${c.href})`).join("\n");
}

// Built once per server process (content is static per deploy).
export const buildPortfolioContext = cache((): string => {
  return [
    "## Bio",
    BIO,
    "",
    "## Projects",
    projectsSection(),
    "",
    "## Writing",
    writingSection(),
    "",
    "## Experience",
    experienceSection(),
    "",
    "## Education",
    educationSection(),
    "",
    "## Contact",
    contactSection(),
  ].join("\n");
});
