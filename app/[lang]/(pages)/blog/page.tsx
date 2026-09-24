import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/animate-in";
import { PageTitle } from "@/components/ui/page-title";
import { PostList } from "@/components/ui/post-list";
import { getDictionary } from "@/data/i18n";
import { getPosts } from "@/lib/blog";
import type { Lang } from "@/lib/i18n";

interface Props {
  params: { lang: Lang };
}

export function generateMetadata({ params }: Props): Metadata {
  const { blog } = getDictionary(params.lang).pages;
  return { title: blog.eyebrow, description: blog.intro };
}

export default function BlogPage({ params }: Props) {
  const { lang } = params;
  const { blog } = getDictionary(lang).pages;

  return (
    <>
      <PageTitle eyebrow={blog.eyebrow} title={blog.title} intro={blog.intro} />
      <AnimateIn delay={0.1}>
        <div className="mt-14">
          <PostList posts={getPosts()} lang={lang} labels={blog} />
        </div>
      </AnimateIn>
    </>
  );
}
