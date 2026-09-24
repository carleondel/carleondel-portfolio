import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { getPosts } from "@/lib/blog";
import { locales, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/projects",
    "/experience",
    "/blog",
    ...projects.map((p) => `/projects/${p.slug}`),
    ...getPosts().map((p) => `/blog/${p.slug}`),
  ];

  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: `${siteConfig.url}${localePath(lang, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    }))
  );
}
