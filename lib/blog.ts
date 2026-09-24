import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Lang } from "./i18n";

const dir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  lang: Lang;
  draft: boolean;
}

const showDrafts = process.env.NODE_ENV !== "production";

function read(file: string) {
  const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
  const meta: PostMeta = {
    slug: file.replace(/\.md$/, ""),
    title: data.title,
    summary: data.summary ?? "",
    date: new Date(data.date).toISOString(),
    lang: data.lang === "es" ? "es" : "en",
    draft: Boolean(data.draft),
  };
  return { meta, content };
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => read(f).meta)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string) {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(dir, file))) return null;
  const { meta, content } = read(file);
  if (meta.draft && !showDrafts) return null;
  return { meta, html: await marked.parse(content) };
}

export const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
