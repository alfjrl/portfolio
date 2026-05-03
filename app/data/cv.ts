export type BilingualText = {
  en: string;
  zh?: string;
};

export type WorkExperience = {
  years: string;
  title: string;
  company: BilingualText;
  description: string[];
};

export type Education = {
  years: string;
  school: BilingualText;
  degree?: BilingualText;
  majors: BilingualText[];
};

export type ContactItem = {
  label: string;
  href: string;
  display: string;
};

export const workExperience: WorkExperience[] = [
  {
    years: "2023 – Present",
    title: "UX/UI Designer",
    company: { en: "University of Maryland Libraries", zh: "" },
    description: [
      // "Led end-to-end design for core product features across web and mobile, from discovery through to shipping.",
      // "Partnered with engineering and product management to define requirements and translate user insights into scalable solutions.",
    ],
  },
  {
    years: "2022 – 2023",
    title: "Product Designer",
    company: { en: "Obran Cooperative", zh: "" },
    description: [
      // "Led end-to-end design for core product features across web and mobile, from discovery through to shipping.",
      // "Partnered with engineering and product management to define requirements and translate user insights into scalable solutions.",
    ],
  },
  {
    years: "2022 – 2022",
    title: "Product Design Intern",
    company: { en: "Nakamoto & Turing Labs", zh: "" },
    description: [
      // "Designed user experiences for B2B SaaS products including internal tools, IoT dashboards, and e-commerce flows.",
    ],
  },
  {
    years: "2020 – 2021",
    title: "Product Manager (Product Design)",
    company: { en: "Hyena Inc.", zh: "凱納股份有限公司" },
    description: [
      // "Designed user experiences for B2B SaaS products including internal tools, IoT dashboards, and e-commerce flows.",
    ],
  },
  {
    years: "2020 – 2020",
    title: "Product Manager (Product Design)",
    company: {
      en: "SmaDay Technology Co., Ltd.",
      zh: "智生活科技股份有限公司",
    },
    description: [
      // "Designed user experiences for B2B SaaS products including internal tools, IoT dashboards, and e-commerce flows.",
    ],
  },
  {
    years: "2018 – 2019",
    title: "Management Specialist",
    company: {
      en: "Giant Manufacturing Co., Ltd.",
      zh: "巨大機械工業股份有限公司",
    },
    description: [
      // "Designed user experiences for B2B SaaS products including internal tools, IoT dashboards, and e-commerce flows.",
    ],
  },
];

export const education: Education[] = [
  {
    years: "2021 – 2023",
    school: { en: "University of Maryland", zh: "" },
    degree: { en: "Master of Science" },
    majors: [{ en: "M.S. Human-Computer Interaction", zh: "" }],
  },
  {
    years: "2012 – 2017",
    school: { en: "National Chung Hsing University", zh: "國立中興大學" },
    degree: { en: "Bachelor of Business Administration", zh: "" },
    majors: [
      { en: "B.B.A. Business Administration", zh: "企業管理學士" },
      // { en: "Agribusiness", zh: "國際農企業" },
    ],
  },
];

export const contact: ContactItem[] = [
  {
    label: "Email",
    href: "mailto:alfred.jr.lin@gmail.com",
    display: "alfred.jr.lin@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alfredjrlin/",
    display: "linkedin.com/in/alfredjrlin",
  },
  {
    label: "GitHub",
    href: "https://github.com/alfjrl",
    display: "github.com/alfjrl",
  },
  {
    label: "Medium",
    href: "https://medium.com/@alfredjlin",
    display: "medium.com/@alfredjlin",
  },
];
