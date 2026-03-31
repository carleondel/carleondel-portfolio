export const profile = {
  primaryLabel: "Data Engineer, analytics-focused",
  currentRole: "Data Engineer",
  currentCompany: "Astrafy",
  location: "Madrid, Spain",
  summary:
    "I’m a Data Engineer with a background in Mathematics, focused on building reliable, business-facing data products. I like turning messy problems into clean data models, robust pipelines, and analytics systems people can actually trust.",
  heroSubtitle:
    "Currently building data products at Astrafy across dbt, BigQuery, Airflow, Python, SQL, and Terraform, with a strong focus on modeling, automation, and trustworthy analytics.",
  coreStack: [
    "dbt",
    "BigQuery",
    "Google Cloud",
    "Python",
    "SQL",
    "Terraform",
  ],
  proofPoints: [
    {
      value: "100+",
      label: "dbt models",
      note: "Across staging and marts in production.",
    },
    {
      value: "5+",
      label: "data products",
      note: "Supporting finance and marketing teams.",
    },
    {
      value: "10+",
      label: "stakeholders",
      note: "Using dashboards and governed metrics.",
    },
  ],
} as const;
