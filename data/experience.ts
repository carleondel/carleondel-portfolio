export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  stack?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Astrafy",
    role: "Data Engineer",
    period: "Sep 2025 — Present",
    description:
      "Building end-to-end analytics data products on Google Cloud, with a focus on reliable modeling, governed metrics, and self-serve analytics for business teams.",
    contributions: [
      "Built and owned analytics data products on GCP, BigQuery, dbt, and Airflow across 5+ initiatives supporting finance and marketing KPIs",
      "Designed and maintained production dbt projects with 100+ models across staging and marts, reducing analytics inconsistencies by around 30%",
      "Implemented CI/CD and Infrastructure as Code with GitLab CI, Terraform, and GCP IAM, reducing setup and deployment issues by around 40%",
      "Delivered self-serve dashboards in Lightdash and Looker used by 10+ stakeholders for reporting and decision-making",
    ],
    stack: [
      "Python",
      "SQL",
      "dbt",
      "GCP",
      "BigQuery",
      "Airflow",
      "Terraform",
      "Looker",
      "Lightdash",
    ],
  },
  {
    company: "SII Group Spain",
    role: "BI Engineer",
    period: "Sep 2024 — Sep 2025",
    description:
      "Developed data engineering and BI solutions for the Ministry of Defense, improving planning, reporting, and visibility across financial and operational data.",
    contributions: [
      "Developed and automated data engineering and BI solutions used across 10+ departments",
      "Built Power BI dashboards to monitor multi-million euro budgets for 4+ senior stakeholders",
      "Automated ETL workflows with Python, SQL, and Bash, reducing processing time by 95%",
      "Centralized and modeled historical datasets to improve reporting consistency and planning visibility",
    ],
    stack: ["Python", "SQL", "Power BI", "Bash", "Docker", "Elasticsearch"],
  },
  {
    company: "Minsait",
    role: "Data Consultant",
    period: "Jul 2023 — Feb 2024",
    description:
      "Worked on SQL-heavy data solutions, partnering with analysts and technical teams to improve performance, reliability, and process quality.",
    contributions: [
      "Optimized complex SQL queries, improving database performance by 20% and reducing retrieval times by 25%",
      "Collaborated with functional analysts to translate business requirements into technical data solutions",
      "Improved documentation standards and data processes, increasing team efficiency by around 30%",
      "Strengthened delivery quality across a 10+ member technical team through clearer data processes",
    ],
    stack: ["SQL", "PostgreSQL", "ETL"],
  },
  {
    company: "Red Eléctrica",
    role: "Data Science Intern R&D",
    period: "Apr 2023 — Jul 2023",
    description:
      "Worked at the intersection of analytics, machine learning, and innovation, building internal tools and dashboards for energy-market and R&D use cases.",
    contributions: [
      "Built analysis workflows and machine learning models to monitor 200+ energy market agents, cutting supervisor workload by 50%",
      "Integrated Whisper for call transcription and documentation, improving reporting accuracy by 35%",
      "Delivered 3 Power BI dashboards used weekly by 10+ analysts in the Markets Department",
      "Managed 50+ R&D initiatives in the Innovation Lab and represented Elewit at industry events",
    ],
    stack: ["Python", "SQL", "Power BI", "AWS", "Git", "Machine Learning"],
  },
];
