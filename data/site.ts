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
  work: { company: "Astrafy", url: "https://astrafy.io", logo: "/logos/astrafy.png" },
  now: { project: "DataForge", slug: "dataforge" },
  sections: ["about", "builds", "data", "experience", "blog", "contact"] as SectionId[],
};
