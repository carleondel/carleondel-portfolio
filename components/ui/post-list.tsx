import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import type { Dictionary } from "@/data/i18n/types";
import { localePath, type Lang } from "@/lib/i18n";

interface PostListProps {
  posts: PostMeta[];
  lang: Lang;
  labels: Dictionary["pages"]["blog"];
}

export function PostList({ posts, lang, labels }: PostListProps) {
  if (!posts.length) {
    return (
      <p className="rounded-xl border border-dashed border-border px-5 py-6 text-sm text-text-secondary">
        {labels.empty}
      </p>
    );
  }

  return (
    <ul className="group/list space-y-10">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <p className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
            {formatDate(post.date, lang)}
            {post.lang !== lang && <span className="chip normal-case">{labels.inOtherLang[post.lang]}</span>}
            {post.draft && <span className="chip normal-case">{labels.draft}</span>}
          </p>
          <h3 className="mt-2">
            <Link
              href={localePath(lang, `/blog/${post.slug}`)}
              className="inline-flex items-baseline font-semibold text-text-primary transition-colors hover:text-accent"
            >
              <span className="absolute inset-0" />
              {post.title}
              <ArrowUpRight size={15} className="ml-1 shrink-0 translate-y-0.5" />
            </Link>
          </h3>
          {post.summary && (
            <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{post.summary}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
