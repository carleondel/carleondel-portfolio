# Carlos León — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.
It is designed as a clean, code-managed portfolio for a data engineer profile,
with strong emphasis on positioning, projects, experience, and a lightweight
writing archive.

## Live Site

- Production: [https://carleondel-portfolio.vercel.app/](https://carleondel-portfolio.vercel.app/)

## Tech Stack

- **Next.js 14** — App Router, Server Components
- **TypeScript** — Strict mode
- **Tailwind CSS v3.4** — Custom dark theme
- **Framer Motion** — Subtle scroll animations
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

## Deployment

The site is deployed on Vercel.
No environment variables or additional runtime configuration are required.

## Edit Content

All content is in TypeScript files or static assets — no CMS needed.

| What | File | Notes |
|---|---|---|
| Site config (name, links, nav) | `data/site.ts` | Main metadata and navigation |
| Profile copy | `data/profile.ts` | Hero and positioning copy |
| Projects | `data/projects.ts` | Featured projects, architecture, outcomes |
| Experience | `data/experience.ts` | Professional trajectory |
| Education & certifications | `data/credentials.ts` | Education and certification cards |
| Writing entries | `data/writing.ts` | Future dated writing entries |
| About page copy | `app/about/page.tsx` | Longer personal/professional context |
| Resume PDF | `public/carlos-leon-resume.pdf` | Downloaded from `/resume` |

## Project Structure

```
app/                    → Pages, SEO assets, sitemap, robots
components/
  layout/               → Header, Footer, Navigation
  ui/                   → Reusable components (Section, Cards, AnimateIn)
  sections/             → Homepage and supporting sections
data/                   → Content data (profile, projects, experience, writing)
lib/                    → Utilities
public/                 → Static assets (resume PDF)
```

## Main Pages

- `/` — Positioning, current role, and featured proof
- `/projects` — Project details and technical proof
- `/experience` — Professional trajectory
- `/writing` — Minimal archive for future entries
- `/contact` — Contact links and resume download
- `/resume` — Utility route that redirects to the PDF resume
