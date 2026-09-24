export interface Experience {
  id: string;
  company: string;
  stack: string[];
}

export const experiences: Experience[] = [
  {
    id: "astrafy",
    company: "Astrafy",
    stack: ["Python", "SQL", "dbt", "GCP", "BigQuery", "Airflow", "Terraform", "Looker", "Lightdash"],
  },
  {
    id: "sii",
    company: "SII Group Spain",
    stack: ["Python", "SQL", "Power BI", "Bash", "Docker", "Elasticsearch"],
  },
  {
    id: "minsait",
    company: "Minsait",
    stack: ["SQL", "PostgreSQL", "ETL"],
  },
  {
    id: "ree",
    company: "Red Eléctrica",
    stack: ["Python", "SQL", "Power BI", "AWS", "Git", "Machine Learning"],
  },
];
