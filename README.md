# Carlos León — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

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

## Deploy to Vercel (Free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Your site is live. Add a custom domain in project settings if you have one.

No environment variables or configuration needed. The Hobby plan is free.

## Edit Content

All content is in TypeScript files — no CMS needed.

| What | File | Notes |
|---|---|---|
| Site config (name, social links, nav) | `data/site.ts` | Update your name, links, and navigation |
| Projects | `data/projects.ts` | Add/edit/remove project entries |
| Experience | `data/experience.ts` | Add/edit/remove work experience |
| About page copy | `app/about/page.tsx` | Edit prose directly in the component |
| Home hero text | `components/sections/hero.tsx` | Edit the headline and intro |
| Contact links | `data/site.ts` | Update the `social` object |

## Project Structure

```
app/                    → Pages (Next.js App Router)
components/
  layout/               → Header, Footer, Navigation
  ui/                   → Reusable components (Section, Cards, AnimateIn)
  sections/             → Homepage sections (Hero, Projects, etc.)
data/                   → Content data (projects, experience, site config)
lib/                    → Utilities
```
