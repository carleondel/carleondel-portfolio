export interface Project {
  slug: string;
  title: string;
  summary: string;
  context: string;
  whatIBuilt: string;
  architecture: string[];
  outcomes: string[];
  nextStep: string;
  pipeline: string[];
  stack: string[];
  role: string;
  image?: string;
  links?: {
    github?: string;
    live?: string;
    writeup?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "chicago-taxi-weather-pipeline",
    title: "Chicago Taxi Trips vs Weather Pipeline",
    summary:
      "End-to-end pipeline combining Chicago taxi trip data and weather signals to produce analytics-ready models and dashboards.",
    context:
      "I wanted a reproducible way to analyze how weather conditions affect taxi trip activity, using a real pipeline rather than an isolated notebook.",
    whatIBuilt:
      "An end-to-end analytics workflow on Google Cloud, including ingestion, infrastructure, transformations, orchestration, testing, and BI output.",
    architecture: [
      "Terraform provisions the GCP resources and baseline infrastructure.",
      "Cloud Functions and scheduled jobs handle ingestion and refresh workflows.",
      "BigQuery stores raw and modeled data, with dbt managing transformations.",
      "Looker Studio consumes the final models for stakeholder-friendly reporting.",
    ],
    outcomes: [
      "Connected ingestion, storage, modeling, and reporting in one reproducible system.",
      "Kept the project close to real production patterns with orchestration and CI/CD.",
      "Created a portfolio piece that shows both analytics engineering and cloud workflow thinking.",
    ],
    nextStep:
      "Add stronger monitoring and freshness checks around ingestion reliability and scheduled pipeline runs.",
    pipeline: [
      "Weather API",
      "Taxi Data",
      "Cloud Functions",
      "BigQuery",
      "dbt",
      "Looker Studio",
    ],
    stack: [
      "Google Cloud",
      "BigQuery",
      "dbt",
      "Terraform",
      "Cloud Functions",
      "Looker Studio",
      "GitHub Actions",
    ],
    role: "Data Engineer",
    image: "/projects/taxi-architecture.png",
    links: { github: "https://github.com/carleondel/chicago-taxi-weather-pipeline" },
    featured: true,
  },
  {
    slug: "nba-data-pipeline",
    title: "NBA Data Pipeline",
    summary:
      "ELT pipeline for NBA data using Snowflake and dbt, modeled with bronze, silver, and gold layers for BI consumption.",
    context:
      "I built this project to show a clean analytics engineering workflow using medallion modeling and business-facing outputs rather than raw-source analysis.",
    whatIBuilt:
      "A Snowflake and dbt pipeline that transforms raw NBA data into structured analytical models for game results, player performance, and team analysis.",
    architecture: [
      "Raw NBA data lands in Snowflake and is organized into layered models.",
      "dbt handles transformations, testing, and model structure across bronze, silver, and gold layers.",
      "Gold-layer outputs are shaped for BI consumption and reporting in Power BI.",
    ],
    outcomes: [
      "Demonstrated a strong grasp of medallion architecture and analytics-ready modeling.",
      "Showed clear separation between raw ingestion, transformation logic, and business-facing outputs.",
      "Created a project that maps well to real analytics engineering work.",
    ],
    nextStep:
      "Extend the project with more reusable metrics definitions and richer documentation for downstream consumers.",
    pipeline: ["Raw Data", "Bronze", "Silver", "Gold", "Power BI"],
    stack: ["dbt", "Snowflake", "SQL", "Power BI", "ELT"],
    role: "Data Engineer",
    image: "/projects/nba-data-architecture.png",
    links: { github: "https://github.com/carleondel/nba_data_engineering" },
    featured: true,
  },
];
