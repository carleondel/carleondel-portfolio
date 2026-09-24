import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Carlos León · Data Engineer & builder",
    description:
      "Data Engineer at Astrafy and builder. I build data platforms on Google Cloud by day and products by night, from forecasting pipelines to SaaS apps.",
  },
  nav: {
    about: "About",
    builds: "Builds",
    data: "Data products",
    experience: "Experience",
    blog: "Blog",
    contact: "Contact",
  },
  profile: {
    role: "Data Engineer & builder",
    headline: {
      start: "I build data platforms ",
      day: "by day",
      middle: " and products ",
      night: "by night",
      end: ".",
    },
    location: "Madrid, Spain",
    building: "Building",
    emailMe: "Email me",
    resume: "Resume",
  },
  about: [
    "I'm a Data Engineer at Astrafy in Madrid, where I build data platforms and data products on Google Cloud with dbt, BigQuery, Airflow, and Terraform. I'm Google Cloud certified as a Professional Data Engineer and Professional Cloud Architect. Before that I did BI for the Spanish Ministry of Defense, SQL-heavy consulting at Minsait, and machine learning at Red Eléctrica's innovation lab.",
    "I studied Mathematics, and I still approach problems the same way: understand the structure first, then build. Lately that means building a lot outside work too: a certification prep SaaS, the ML behind a hackathon financial-health engine, a personal finance dashboard, and a website for a small fashion brand.",
    "I'm most drawn to where engineering meets product and startups: figuring out what's worth building and getting it working end to end. Outside of that, it's music, economics, literature, and too many essays.",
  ],
  now: {
    label: "Now",
    update:
      "Taking my certification prep app from a personal study tool to a real product: more certifications, a pipeline to generate and validate questions from official docs, and the pieces needed to open it to the public.",
  },
  intros: {
    builds:
      "Products, side projects, and client work. Things I've taken from an idea to something people can use.",
    data: "End-to-end data and ML pipelines, built the way I'd build them at work: reproducible, tested, and honest about results.",
    blog: "Notes on data engineering, building products, and what I learn along the way.",
  },
  contact: {
    title: { start: "Let's build ", accent: "something", end: "." },
    text: "Whether it's a data role, a product idea, or a hackathon team, my inbox is open. Email is the fastest way to reach me.",
    copy: "Copy",
    copied: "Copied",
    links: { email: "Email", github: "GitHub", linkedin: "LinkedIn", resume: "Resume (PDF)" },
  },
  ui: {
    viewAllProjects: "View all projects",
    fullExperience: "Full experience & credentials",
    resumePdf: "Resume (PDF)",
    footer: "Designed and built by me with Next.js and Tailwind CSS, deployed on Vercel.",
    allProjects: "All projects",
    nextProject: "Next project",
    video: "Video",
    watchDemo: "Watch the demo",
    categories: { product: "Things I've built", data: "Data products" },
    theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
    switchLang: "Leer en español",
    home: "Home",
  },
  caseStudy: {
    problem: "The problem",
    contribution: "My part",
    built: "What I built",
    how: "How it's built",
    outcomes: "Outcomes",
    next: "What's next",
    stack: "Stack",
    year: "Year",
    role: "Role",
    status: "Status",
    live: "Live",
    video: "Video",
    github: "GitHub",
  },
  pages: {
    projects: {
      eyebrow: "Projects",
      title: { start: "Things I've ", accent: "built", end: "." },
      intro:
        "Products and client work on one side, data and ML pipelines on the other. Each one links to a short write-up: the problem, what I built, and the decisions behind it.",
    },
    experience: {
      eyebrow: "Experience",
      title: { start: "Where I've ", accent: "worked", end: "." },
      intro: "Data engineering, BI, and machine learning across consulting, the public sector, and energy.",
    },
    credentials: {
      title: "Education & credentials",
      education: "Education",
      certifications: "Certifications",
    },
    blog: {
      eyebrow: "Blog",
      title: { start: "Notes and ", accent: "write-ups", end: "." },
      intro:
        "What I learn building data platforms and products. Some posts are in English, some in Spanish.",
      empty: "First posts coming soon.",
      allPosts: "All posts",
      back: "All posts",
      inOtherLang: { en: "In English", es: "In Spanish" },
      draft: "Draft",
    },
  },
  projects: {
    dataforge: {
      tagline:
        "Certification prep SaaS with practice mode, timed mocks, and a gamified study loop.",
      summary:
        "Started as my own prep tool for the Google Cloud Professional Data Engineer exam, which I passed. Now a multi-certification product with accounts, cloud sync, and a free trial.",
      role: "Solo: product, design & engineering",
      status: "Live · free beta",
      context:
        "I built the first version to study for the Google Cloud Professional Data Engineer exam, which I passed. Once it worked for me, the interesting question became whether it could work for other people too, so I turned it into a product.",
      whatIBuilt:
        "A React app with a static landing, sign-in through Supabase (Google, GitHub, email or magic link), progress synced across devices, and a 20-question trial that needs no account. It covers practice and block-by-block study, timed mocks weighted like the real exam, a daily challenge, and a gamification layer with XP, ranks, achievements, and boss battles.",
      architecture: [
        "A cert-agnostic engine: each certification is a folder with its manifest, domains, and question bank, so adding one doesn't touch the app.",
        "localStorage is the cache the app reads from. Every key is mirrored to Supabase (debounced, with row-level security per user), and unconfirmed writes are pushed on the next visit.",
        "Views only present and emit. State lives in hooks and a pure engine covered by Vitest, and question banks ship as lazy-loaded chunks.",
        "Deploys to Vercel on every push, and also runs fully local or in Docker behind nginx.",
      ],
      outcomes: [
        "Two Google Cloud certifications live (Professional Data Engineer and Professional Cloud Architect) with 600+ practice questions.",
        "Used for my own successful PDE exam attempt.",
        "Public landing, legal pages, and a trial mode that works without signing up.",
      ],
      nextStep:
        "More certifications, and a pipeline that generates and validates questions from official documentation, with human review of anything flagged.",
    },
    "x-ray": {
      tagline:
        "Financial-health engine that scores 1,286 companies from their bank trail. HackSpain 2026, Embat track.",
      summary:
        "Built with a team in a weekend: a causal 0 to 100 score, a six-state trajectory machine, an exact explanation of every move, and a what-if simulator on top.",
      role: "ML lead in a hackathon team",
      status: "Live demo",
      context:
        "Embat's challenge asked whether money alone can tell you how a company is doing. Companies don't fail on the balance sheet, they fail on cash: annual ratios arrive late, while the daily trail of receipts, payments, and debt arrives on time. The catch was that the data had no default label to learn from.",
      contribution:
        "I led the machine learning side: the forecasting lab (Huber and Ridge regressions validated with GroupKFold, MAE at 1, 3, and 6 months) and the structural forecast that projects each account forward and re-scores it with the same function. I also worked on the score itself and took part in the product and UI decisions.",
      whatIBuilt:
        "A deterministic, point-in-time score over 24 months of banking data for 1,286 companies in 250 corporate groups. On top of it: a six-state trajectory machine, an additive waterfall that explains every point of change, a what-if simulator, group consolidation, and an alert monitor, all driven by the same scoring function.",
      architecture: [
        "No default label, so no GBDT at the core: a rule-based, causal scoring function, with tests proving that future data never changes past scores.",
        "One function powers the score, the simulator, the outlook, and the structural forecast, so a simulation can never disagree with the score. ML lives next to it, not instead of it.",
        "Python and DuckDB engine behind a FastAPI backend, and a Next.js front end with a portfolio view for Embat and a 360° view for each company.",
        "Validated on synthetic banks with controlled regimes: 95.5% of deteriorations detected within six months, with zero structural false alarms on stable companies.",
      ],
      outcomes: [
        "Answers the six questions of the challenge: who's healthy, who's improving, who's slipping, dip or decline, why it changed, and how early it was visible.",
        "Deployed demo and a presentation video, with the limits of the model stated openly instead of hidden.",
      ],
    },
    "wealth-tracker": {
      tagline:
        "Self-hostable net-worth dashboard with live prices and natural-language journaling.",
      summary:
        "Type “sold 3 MSTR at 180” and an LLM turns it into structured operations. Multi-user with magic-link auth, bring-your-own Supabase, and a public demo.",
      role: "Solo",
      status: "Live · public demo",
      context:
        "Off-the-shelf trackers make you either upload broker statements or squeeze your portfolio into categories that don't match how you think about it. I wanted one where I own the database, define the positions, and get prices from public feeds.",
      whatIBuilt:
        "A Next.js and Supabase app with magic-link auth, live prices from free APIs (CoinGecko, ECB rates, Finnhub), and six tabs: overview, positions, allocation with scenario sliders, policy, history, and a journal where natural-language entries are parsed by an LLM into operations you review before applying.",
      architecture: [
        "Multi-tenant by design: Postgres row-level security scoped to the signed-in user, no passwords and no signup form.",
        "Snapshot-on-update history and interest accrual on cash accounts that you confirm before it's persisted.",
        "A public /demo route with fictitious data and real prices, where everything works and nothing persists.",
        "Self-hostable in minutes: fork, point it at your own Supabase and Vercel, and keep full control of your data.",
      ],
      outcomes: [
        "A tool I use for my own finances, with a hosted multi-user instance and a five-minute self-host path.",
        "Public demo that needs no account.",
      ],
    },
    irisverd: {
      tagline: "Editorial website for a handmade clothing atelier, built for a real client.",
      summary:
        "Brand identity, catalogue, and product pages for María's short-run handmade collections, designed so an online shop can be plugged in later.",
      role: "Freelance: design & development",
      status: "Live · shop coming soon",
      context:
        "María makes clothing by hand in short runs and needed a home for the brand before opening an online shop.",
      whatIBuilt:
        "An editorial Next.js site with a catalogue, product pages, the atelier's story, shipping, and contact. The identity started from a moodboard: a warm palette, Cormorant Garamond with Jost, and no dark mode, because the brand lives in warm light.",
      architecture: [
        "A single catalogue module is the only source of products, so connecting Shopify or another backend later won't touch the pages.",
        "Real product photos, two angles per piece, served through next/image.",
        "Pieces are reserved by email until checkout is connected.",
      ],
      outcomes: ["Live in production, waiting for final copy and the custom domain."],
      nextStep: "Connect payments, stock, and orders.",
    },
    "madrid-no2-forecasting": {
      tagline:
        "Leakage-safe forecasting of station-level NO₂ in Madrid at 1, 24, and 72 hours ahead.",
      summary:
        "A reproducible data and ML pipeline with PostgreSQL, dbt, and per-horizon XGBoost models, evaluated with rolling-origin backtests and conformal prediction intervals.",
      role: "Data & ML Engineer",
      context:
        "Most forecasting portfolios overstate results by leaking future information into features or evaluating on random splits. I wanted the opposite: honest, reproducible time-series evaluation on official Madrid air-quality data, where every claim maps to an executable check.",
      whatIBuilt:
        "An end-to-end pipeline from typed Python ingestion of Madrid Open Data (1.6M+ hourly observations, 2018 to 2025) through dbt-modeled PostgreSQL marts, into leakage-safe feature engineering, rolling-origin backtesting with a temporal embargo, and direct XGBoost models per horizon with conformal P10 to P90 prediction intervals.",
      architecture: [
        "Typed Python ingestion normalizes official Madrid Open Data and Open-Meteo archives into partitioned Parquet and a PostgreSQL raw schema, with UTC normalization and explicit DST handling.",
        "dbt owns the analytical grain and data quality across staging, intermediate, and mart layers. Python owns features, backtesting, training, and prediction.",
        "Features are restricted to prediction time (lags and shifted rolling statistics only), enforced by pytest tests that fail if future data enters the features.",
        "Rolling-origin backtests compare direct per-horizon XGBoost models against seasonal-naive baselines, with versioned benchmark manifests protecting published metrics.",
      ],
      outcomes: [
        "50% MAE improvement over the best naive baseline at 1 hour ahead, with honest, modest ~12% gains reported at 24 and 72 hours.",
        "A clean clone reproduces the demo path with one command, and CI runs the real PostgreSQL and dbt integration on every push.",
        "Forecasts ship with empirical conformal prediction intervals, reported by their worst fold rather than their average.",
      ],
      nextStep:
        "Add forecast-based weather features from archived weather forecasts (which would have been known at prediction time) and adaptive conformal calibration to fix undercoverage in seasonal transition folds.",
    },
    "chicago-taxi-weather-pipeline": {
      tagline: "End-to-end GCP pipeline combining Chicago taxi trips and weather signals.",
      summary:
        "Terraform-provisioned ingestion, BigQuery and dbt modeling, orchestration, CI/CD, and BI output. A real pipeline rather than an isolated notebook.",
      role: "Data Engineer",
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
      ],
      nextStep:
        "Add stronger monitoring and freshness checks around ingestion reliability and scheduled pipeline runs.",
    },
    "nba-data-pipeline": {
      tagline:
        "ELT pipeline for NBA data with Snowflake and dbt, modeled in bronze, silver, and gold layers.",
      summary:
        "Medallion modeling from raw NBA data to BI-ready models for game results, player performance, and team analysis.",
      role: "Data Engineer",
      context:
        "I built this project to practice a clean analytics engineering workflow using medallion modeling and business-facing outputs rather than raw-source analysis.",
      whatIBuilt:
        "A Snowflake and dbt pipeline that transforms raw NBA data into structured analytical models for game results, player performance, and team analysis.",
      architecture: [
        "Raw NBA data lands in Snowflake and is organized into layered models.",
        "dbt handles transformations, testing, and model structure across bronze, silver, and gold layers.",
        "Gold-layer outputs are shaped for BI consumption and reporting in Power BI.",
      ],
      outcomes: [
        "Clear separation between raw ingestion, transformation logic, and business-facing outputs.",
      ],
    },
  },
  experience: {
    astrafy: {
      role: "Data Engineer",
      period: "Sep 2025 - Present",
      description:
        "Building data platforms and data products on Google Cloud for finance and marketing teams, from ingestion and dbt modeling to CI/CD, infrastructure as code, and self-serve analytics.",
      contributions: [
        "Built and owned analytics data products on GCP, BigQuery, dbt, and Airflow across 5+ initiatives supporting finance and marketing KPIs",
        "Designed and maintained production dbt projects with 100+ models across staging and marts, reducing analytics inconsistencies by around 30%",
        "Implemented CI/CD and Infrastructure as Code with GitLab CI, Terraform, and GCP IAM, reducing setup and deployment issues by around 40%",
        "Delivered self-serve dashboards in Lightdash and Looker used by 10+ stakeholders for reporting and decision-making",
      ],
    },
    sii: {
      role: "BI Engineer",
      period: "Oct 2024 - Sep 2025",
      description:
        "Developed data engineering and BI solutions for the Ministry of Defense, improving planning, reporting, and visibility across financial and operational data.",
      contributions: [
        "Developed and automated data engineering and BI solutions used across 10+ departments",
        "Built Power BI dashboards to monitor multi-million euro budgets for 4+ senior stakeholders",
        "Automated ETL workflows with Python, SQL, and Bash, reducing processing time by 95%",
        "Centralized and modeled historical datasets to improve reporting consistency and planning visibility",
      ],
    },
    minsait: {
      role: "Data Consultant",
      period: "Jul 2023 - Jan 2024",
      description:
        "Worked on SQL-heavy data solutions, partnering with analysts and technical teams to improve performance, reliability, and process quality.",
      contributions: [
        "Optimized complex SQL queries, improving database performance by 20% and reducing retrieval times by 25%",
        "Collaborated with functional analysts to translate business requirements into technical data solutions",
        "Improved documentation standards and data processes, increasing team efficiency by around 30%",
        "Strengthened delivery quality across a 10+ member technical team through clearer data processes",
      ],
    },
    ree: {
      role: "Data Science Intern R&D",
      period: "Apr 2023 - Jul 2023",
      description:
        "Worked at the intersection of analytics, machine learning, and innovation, building internal tools and dashboards for energy-market and R&D use cases.",
      contributions: [
        "Built analysis workflows and machine learning models to monitor 200+ energy market agents, cutting supervisor workload by 50%",
        "Integrated Whisper for call transcription and documentation, improving reporting accuracy by 35%",
        "Delivered 3 Power BI dashboards used weekly by 10+ analysts in the Markets Department",
        "Managed 50+ R&D initiatives in the Innovation Lab and represented Elewit at industry events",
      ],
    },
  },
  education: [
    {
      name: "Applied Data Science Program",
      by: "Zrive",
      detail:
        "Intensive program covering end-to-end data science workflows, feature engineering, model development, and deployment with FastAPI.",
    },
    {
      name: "BSc in Mathematics",
      by: "University of Extremadura",
      detail:
        "Bachelor's thesis in game theory. Built a strong foundation in structure, modeling, and analytical thinking.",
    },
  ],
  certifications: [
    {
      name: "Professional Data Engineer",
      by: "Google Cloud",
      detail:
        "Professional certification focused on designing, building, operationalizing, securing, and monitoring data processing systems on Google Cloud.",
    },
    {
      name: "Professional Cloud Architect",
      by: "Google Cloud",
      detail:
        "Professional certification focused on designing secure, scalable, and reliable cloud architectures on Google Cloud.",
    },
    {
      name: "Data Engineering: SQL, dbt, Snowflake & Power BI",
      by: "Cívica",
      detail: "Focused on analytics engineering, data modeling, and modern warehouse workflows.",
    },
  ],
};
