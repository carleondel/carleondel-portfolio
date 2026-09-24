import type { SectionId } from "./i18n/types";

export const siteConfig = {
  name: "Carlos León",
  url: "https://carlosleon.dev",
  resume: "/carlos-leon-resume.pdf",
  photo: "/carlos.jpg",
  social: {
    github: "https://github.com/carleondel",
    linkedin: "https://linkedin.com/in/carleondel",
    email: "carleondel@gmail.com",
  },
  now: { project: "DataForge", slug: "dataforge" },
  sections: ["about", "builds", "data", "experience", "blog", "contact"] as SectionId[],
};
