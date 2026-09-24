export type ProjectCategory = "product" | "data";

export type ProjectVideo =
  | { type: "file"; src: string; poster?: string }
  | { type: "youtube"; id: string };

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  stack: string[];
  pipeline?: string[];
  image?: string;
  video?: ProjectVideo;
  links?: {
    github?: string;
    live?: string;
    video?: string;
  };
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "dataforge",
    title: "DataForge",
    category: "product",
    year: "2026",
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Vitest", "Vercel", "Docker"],
    image: "/projects/dataforge.jpg",
    video: { type: "file", src: "/videos/dataforge.mp4", poster: "/projects/dataforge.jpg" },
    links: {
      live: "https://dataforge-inky.vercel.app",
      github: "https://github.com/carleondel/gcp-pde-exam-prep",
    },
    featured: true,
  },
  {
    slug: "x-ray",
    title: "X-Ray",
    category: "product",
    year: "2026",
    stack: ["Python", "FastAPI", "DuckDB", "scikit-learn", "Next.js", "TypeScript"],
    image: "/projects/xray.jpg",
    video: { type: "youtube", id: "ojYzNzDsO74" },
    links: {
      live: "https://xray-embat.up.railway.app/embat/COMP_0035",
      video: "https://www.youtube.com/watch?v=ojYzNzDsO74",
      github: "https://github.com/carleondel/hackspain-2026-embat",
    },
    featured: true,
  },
  {
    slug: "wealth-tracker",
    title: "Wealth Tracker",
    category: "product",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "LLM", "Vercel"],
    image: "/projects/wealth.jpg",
    video: { type: "file", src: "/videos/wealth.mp4", poster: "/projects/wealth.jpg" },
    links: {
      live: "https://wealth-tracker-liart.vercel.app/demo",
      github: "https://github.com/carleondel/wealth-tracker",
    },
    featured: true,
  },
  {
    slug: "irisverd",
    title: "irisverd",
    category: "product",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/irisverd.jpg",
    links: { live: "https://irisverd.vercel.app" },
    featured: true,
  },
  {
    slug: "madrid-no2-forecasting",
    title: "Madrid NO₂ Forecasting",
    category: "data",
    year: "2026",
    pipeline: [
      "Madrid Open Data",
      "Python Ingestion",
      "PostgreSQL",
      "dbt",
      "Leakage-safe Features",
      "XGBoost",
      "Rolling-origin Backtest",
    ],
    stack: ["Python", "PostgreSQL", "dbt", "XGBoost", "pytest", "uv", "Docker", "GitHub Actions"],
    image: "/projects/no2-forecast.png",
    links: { github: "https://github.com/carleondel/madrid_pollution_project" },
    featured: true,
  },
  {
    slug: "chicago-taxi-weather-pipeline",
    title: "Chicago Taxi Trips vs Weather",
    category: "data",
    year: "2025",
    pipeline: ["Weather API", "Taxi Data", "Cloud Functions", "BigQuery", "dbt", "Looker Studio"],
    stack: [
      "Google Cloud",
      "BigQuery",
      "dbt",
      "Terraform",
      "Cloud Functions",
      "Looker Studio",
      "GitHub Actions",
    ],
    image: "/projects/taxi-architecture.png",
    links: { github: "https://github.com/carleondel/chicago-taxi-weather-pipeline" },
    featured: true,
  },
  {
    slug: "nba-data-pipeline",
    title: "NBA Data Pipeline",
    category: "data",
    year: "2024",
    pipeline: ["Raw Data", "Bronze", "Silver", "Gold", "Power BI"],
    stack: ["dbt", "Snowflake", "SQL", "Power BI", "ELT"],
    image: "/projects/nba-data-architecture.png",
    links: { github: "https://github.com/carleondel/nba_data_engineering" },
    featured: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
