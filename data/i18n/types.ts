export type SectionId = "about" | "builds" | "data" | "experience" | "blog" | "contact";

export interface ProjectCopy {
  tagline: string;
  summary: string;
  role: string;
  status?: string;
  context: string;
  contribution?: string;
  whatIBuilt: string;
  architecture: string[];
  outcomes: string[];
  nextStep?: string;
}

export interface ExperienceCopy {
  role: string;
  period: string;
  description: string;
  contributions: string[];
}

export interface CredentialCopy {
  name: string;
  by: string;
  detail: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: Record<SectionId, string>;
  profile: {
    role: string;
    workAt: string;
    headline: { start: string; day: string; middle: string; night: string; end: string };
    location: string;
    building: string;
    emailMe: string;
    resume: string;
  };
  about: string[];
  now: { label: string; update: string };
  intros: { builds: string; data: string; blog: string };
  contact: {
    title: { start: string; accent: string; end: string };
    text: string;
    links: { email: string; github: string; linkedin: string; resume: string };
  };
  ui: {
    viewAllProjects: string;
    fullExperience: string;
    resumePdf: string;
    footer: string;
    allProjects: string;
    nextProject: string;
    video: string;
    watchDemo: string;
    categories: { product: string; data: string };
    theme: { toLight: string; toDark: string };
    switchLang: string;
    home: string;
  };
  caseStudy: {
    problem: string;
    contribution: string;
    built: string;
    how: string;
    outcomes: string;
    next: string;
    stack: string;
    year: string;
    role: string;
    status: string;
    live: string;
    video: string;
    github: string;
  };
  pages: {
    projects: { eyebrow: string; title: { start: string; accent: string; end: string }; intro: string };
    experience: { eyebrow: string; title: { start: string; accent: string; end: string }; intro: string };
    credentials: { title: string; education: string; certifications: string };
    blog: {
      eyebrow: string;
      title: { start: string; accent: string; end: string };
      intro: string;
      empty: string;
      allPosts: string;
      back: string;
      inOtherLang: { en: string; es: string };
      draft: string;
    };
  };
  projects: Record<string, ProjectCopy>;
  experience: Record<string, ExperienceCopy>;
  education: CredentialCopy[];
  certifications: CredentialCopy[];
}
