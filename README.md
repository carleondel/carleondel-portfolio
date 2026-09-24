# Carlos León · Portfolio

Personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.
Positioning: Data Engineer & builder. Data platforms by day, products by night.

## Live Site

- Production: [https://carlosleon.dev](https://carlosleon.dev)

## Features

- English (`/`) and Spanish (`/es`)
- Light and dark theme (follows the system, remembers the choice)
- Case study page per project, with embedded demo videos
- Markdown blog

## Tech Stack

- **Next.js 14** (App Router, static generation, middleware for i18n)
- **TypeScript** (strict)
- **Tailwind CSS v3.4** with CSS-variable theme tokens
- **Framer Motion**, **Lucide React**
- **gray-matter** + **marked** for the blog

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Deployed on Vercel. No environment variables required.

## Edit Content

| What | File |
|---|---|
| All copy (both languages) | `data/i18n/en.ts`, `data/i18n/es.ts` |
| Projects: stack, links, images, videos | `data/projects.ts` |
| Experience: company, stack | `data/experience.ts` |
| Site config: URL, socials, photo, "Now" project | `data/site.ts` |
| Blog posts | `content/blog/*.md` (copy `_template.md`) |
| Images, videos, resume | `public/` |

## Project Structure

```
app/
  [lang]/page.tsx            → Home: sidebar + About, Builds, Data products, Experience, Blog, Contact
  [lang]/(pages)/            → Projects, case studies, experience, blog
  public/og-{en,es}.jpg      → Social preview images (screenshots of the home)
middleware.ts                → Locale routing
components/home, components/ui
data/                        → Content
content/blog/                → Posts
lib/                         → i18n, blog, utils
```

See `TODO.md` for pending tasks.
