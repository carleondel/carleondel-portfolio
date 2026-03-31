export interface EducationItem {
  institution: string;
  program: string;
  period?: string;
  detail: string;
}

export interface CertificationItem {
  issuer: string;
  name: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    institution: "Zrive",
    program: "Applied Data Science Program",
    detail:
      "Intensive program covering end-to-end data science workflows, feature engineering, model development, and deployment with FastAPI.",
  },
  {
    institution: "University of Extremadura",
    program: "BSc in Mathematics",
    detail:
      "Bachelor's thesis in game theory. Built a strong foundation in structure, modeling, and analytical thinking.",
  },
];

export const certifications: CertificationItem[] = [
  {
    issuer: "Cívica",
    name: "Data Engineering: SQL, dbt, Snowflake & Power BI",
    detail:
      "Focused on analytics engineering, data modeling, and modern warehouse workflows.",
  },
  {
    issuer: "Google Cloud",
    name: "Professional Data Engineer",
    detail:
      "Professional certification focused on designing, building, operationalizing, securing, and monitoring data processing systems on Google Cloud.",
  },
];
