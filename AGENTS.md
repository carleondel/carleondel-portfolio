# Agent notes

- Verify changes with `npm run lint` and `npm run build`.
- Bilingual site: English at `/`, Spanish at `/es`. `middleware.ts` rewrites
  non-`/es` paths to `app/[lang]` with `lang=en`. Build internal links with
  `localePath(lang, path)` from `lib/i18n.ts`.
- All copy lives in `data/i18n/en.ts` and `data/i18n/es.ts` (typed by
  `data/i18n/types.ts`, so both must stay in sync). Non-translatable project and
  experience data (stack, links, images, videos) lives in `data/projects.ts` and
  `data/experience.ts`.
- Light/dark theme: CSS variables in `app/globals.css` (`:root` = light, `.dark`),
  exposed as Tailwind colors in `tailwind.config.ts`. `components/ui/theme-toggle.tsx`
  holds the no-flash script.
- Blog posts: Markdown in `content/blog/*.md` (see `_template.md`); `draft: true`
  only shows in dev.
- Project screenshots in `public/projects/` (~1600px JPEG); videos in `public/videos/`
  (H.264, compressed with ffmpeg).
- Social preview images `public/og-en.jpg` / `og-es.jpg` are 1200x628 dark-mode
  screenshots of the home (headless Chrome at 1600x838, scale 2). Regenerate them
  when the top of the home changes.
- Copy style: no em dashes (—).
- Pending work: `TODO.md`.
