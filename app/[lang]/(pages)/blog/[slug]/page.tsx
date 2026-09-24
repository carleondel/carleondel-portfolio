import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/data/i18n";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { locales, localePath, type Lang } from "@/lib/i18n";

interface Props {
  params: { lang: Lang; slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPosts();
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.summary };
}

export default async function PostPage({ params }: Props) {
  const { lang } = params;
  const post = await getPost(params.slug);
  if (!post) notFound();

  const { blog } = getDictionary(lang).pages;
  const { meta, html } = post;

  return (
    <article className="mx-auto max-w-2xl">
      <Link
        href={localePath(lang, "/blog")}
        className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
      >
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
        {blog.back}
      </Link>

      <p className="mt-10 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
        {formatDate(meta.date, lang)}
        {meta.lang !== lang && <span className="chip normal-case">{blog.inOtherLang[meta.lang]}</span>}
        {meta.draft && <span className="chip normal-case">{blog.draft}</span>}
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
        {meta.title}
      </h1>
      {meta.summary && <p className="mt-4 text-lg leading-relaxed text-text-secondary">{meta.summary}</p>}

      <div lang={meta.lang} className="prose-post mt-10 border-t border-border pt-10" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
