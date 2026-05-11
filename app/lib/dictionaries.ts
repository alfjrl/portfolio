import type { Locale } from "./i18n";

export type Dictionary = {
  nav: {
    work: string;
    about: string;
    resume: string;
    home: string;
  };
  languageToggle: {
    switchTo: string; // accessible label, e.g. "Switch to 中文"
    enLabel: string;
    zhLabel: string;
  };
  home: {
    heroTitle: string;
    heroLineOneStart: string;
    heroLineOneUserNeeds: string;
    heroLineOneBusinessGoals: string;
    heroLineOneTechnicalRealities: string;
    heroLineOneEnd: string;
    heroLineTwoStart: string;
    heroLineTwoLeading: string;
    heroLineTwoEnd: string;
  };
  about: {
    pageTitle: string;
    metaDescription: string;
    introGreeting: string; // "Hey, I'm "
    introGoBy: string; // "go by"
    introSuffix: string; // "in Mandarin."
    role: string; // "A Product Designer, A Front-End Developer..."
    platforms: string;
    designerBio: string;
    offWorkBio: string;
    activityReading: string;
    activityListening: string;
    activityWatching: string;
  };
  project: {
    role: string;
    year: string;
    platform: string;
    glanceHeading: string;
    problem: string;
    solution: string;
    impact: string;
    fallbackNotice: string; // shown when zh translation missing
  };
  footer: {
    body: string;
    email: string;
    linkedIn: string;
    medium: string;
    gitHub: string;
    madeWith: string;
  };
};

const en: Dictionary = {
  nav: {
    work: "WORK",
    about: "ABOUT",
    resume: "RESUME",
    home: "HOME",
  },
  languageToggle: {
    switchTo: "Switch to 中文",
    enLabel: "EN",
    zhLabel: "中文",
  },
  home: {
    // TODO: prose pulled directly from current page.tsx; refine when content moves into dictionary.
    heroTitle:
      "Hi, I'm Alfred, a product designer who turns research into accessible, considered interfaces for complex information systems.",
    heroLineOneStart:
      "Working end-to-end — from research through production-ready code — balancing ",
    heroLineOneUserNeeds: "user needs",
    heroLineOneBusinessGoals: "business goals",
    heroLineOneTechnicalRealities: "technical realities",
    heroLineOneEnd: ".",
    heroLineTwoStart: "Currently ",
    heroLineTwoLeading: "leading the public-facing ecosystem design",
    heroLineTwoEnd:
      " at University of Maryland Libraries. 5+ years experiences across hardware-adjacent software, e-commerce, and higher education.",
  },
  about: {
    pageTitle: "About",
    metaDescription:
      "Product Designer, Product Manager, Front-End Developer, and Outdoor Enthusiast.",
    introGreeting: "Hey, I'm",
    introGoBy: "go by",
    introSuffix: "in Mandarin.",
    role: "A Product Designer, A Front-End Developer, A Problem-Solver, and An Outdoor Enthusiast.",
    platforms:
      "I have experiences in multiple platforms (web, iOS/Android) for different B2B / B2C products.",
    designerBio:
      "As a product designer, I'm constantly fascinated by how people interact with their surroundings. I enjoy learning about different perspectives and design approaches, which helps me incorporate diverse backgrounds and ideas into my work, whether I'm collaborating with developers or other designers.",
    offWorkBio:
      "When I'm not working, you can find me relaxing in my backyard with a good book or spending my weekends cycling and exploring new trails in the mountains.",
    activityReading: "Reading",
    activityListening: "Listening",
    activityWatching: "Watching",
  },
  project: {
    role: "Role",
    year: "Year",
    platform: "Platform",
    glanceHeading: "Project at a Glance",
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    fallbackNotice: "Translation not available in 中文 — showing English.",
  },
  footer: {
    body: "On the side, I always think about how design influences our daily lives and why things are designed that way, which is fascinating to me. I enjoy talking to random people and learning something new from them, whether it's their life experiences or tips for finding a parking space in an overly crowded city.",
    email: "Email",
    linkedIn: "LinkedIn",
    medium: "Medium",
    gitHub: "GitHub",
    madeWith: "Made with love & coffee",
  },
};

// TODO: Traditional Chinese translations. Short labels translated; prose is
// left empty so it falls back visibly during scaffolding — fill in later.
const zh: Dictionary = {
  nav: {
    work: "作品",
    about: "關於",
    resume: "履歷",
    home: "首頁",
  },
  languageToggle: {
    switchTo: "Switch to English",
    enLabel: "EN",
    zhLabel: "中文",
  },
  home: {
    heroTitle: "",
    heroLineOneStart: "",
    heroLineOneUserNeeds: "使用者需求",
    heroLineOneBusinessGoals: "商業目標",
    heroLineOneTechnicalRealities: "技術現實",
    heroLineOneEnd: "。",
    heroLineTwoStart: "",
    heroLineTwoLeading: "",
    heroLineTwoEnd: "",
  },
  about: {
    pageTitle: "關於",
    metaDescription: "",
    introGreeting: "嗨,我是",
    introGoBy: "中文名",
    introSuffix: "(Jhan-Ren)。",
    role: "",
    platforms: "",
    designerBio: "",
    offWorkBio: "",
    activityReading: "閱讀",
    activityListening: "收聽",
    activityWatching: "觀看",
  },
  project: {
    role: "角色",
    year: "年份",
    platform: "平台",
    glanceHeading: "專案概覽",
    problem: "問題",
    solution: "解決方案",
    impact: "成效",
    fallbackNotice: "此頁面尚未翻譯為中文,目前顯示英文版本。",
  },
  footer: {
    body: "",
    email: "電子郵件",
    linkedIn: "LinkedIn",
    medium: "Medium",
    gitHub: "GitHub",
    madeWith: "以熱忱與咖啡製作",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
