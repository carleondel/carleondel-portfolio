import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Sidebar } from "@/components/home/sidebar";
import { HomeSection } from "@/components/home/home-section";
import { ProjectRow } from "@/components/ui/project-row";
import { ExperienceRow } from "@/components/ui/experience-row";
import { CopyEmail } from "@/components/ui/copy-email";
import { ContactList } from "@/components/ui/social-links";
import { PostList } from "@/components/ui/post-list";
import { projects, type ProjectCategory } from "@/data/projects";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/data/i18n";
import { getPosts } from "@/lib/blog";
import { localePath, type Lang } from "@/lib/i18n";

const featured = (category: ProjectCategory) =>
  projects.filter((p) => p.featured && p.category === category);

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const posts = getPosts().slice(0, 3);

  const projectList = (category: ProjectCategory) => (
    <ul className="group/list space-y-12">
      {featured(category).map((project) => (
        <ProjectRow
          key={project.slug}
          project={project}
          copy={dict.projects[project.slug]}
          lang={lang}
          videoLabel={dict.ui.video}
        />
      ))}
    </ul>
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 md:px-12 md:py-16 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-8">
        <Sidebar
          lang={lang}
          dict={{ profile: dict.profile, nav: dict.nav, ui: dict.ui, links: dict.contact.links }}
        />

        <main className="pt-16 lg:w-[52%] lg:py-20">
          <HomeSection id="about" title={dict.nav.about}>
            <div className="space-y-4 leading-relaxed text-text-secondary">
              {dict.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={localePath(lang, `/projects/${siteConfig.now.slug}`)}
              className="group mt-10 block rounded-xl border border-border bg-surface/60 p-5 backdrop-blur transition-colors hover:border-accent/30"
            >
              <p className="eyebrow flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {dict.now.label}
              </p>
              <p className="mt-3 text-text-primary">
                {dict.profile.building}{" "}
                <span className="font-semibold group-hover:text-accent">{siteConfig.now.project}</span>
                <ArrowUpRight size={14} className="ml-1 inline transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{dict.now.update}</p>
            </Link>
          </HomeSection>

          <HomeSection id="builds" title={dict.nav.builds} intro={dict.intros.builds}>
            {projectList("product")}
          </HomeSection>

          <HomeSection id="data" title={dict.nav.data} intro={dict.intros.data}>
            {projectList("data")}
            <Link href={localePath(lang, "/projects")} className="link-arrow group mt-12">
              {dict.ui.viewAllProjects}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </HomeSection>

          <HomeSection id="experience" title={dict.nav.experience}>
            <ol className="group/list space-y-12">
              {experiences.map((exp) => (
                <ExperienceRow key={exp.id} experience={exp} copy={dict.experience[exp.id]} />
              ))}
            </ol>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              <Link href={localePath(lang, "/experience")} className="link-arrow group">
                {dict.ui.fullExperience}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={siteConfig.resume} target="_blank" className="link-arrow group">
                {dict.ui.resumePdf}
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </HomeSection>

          <HomeSection id="blog" title={dict.nav.blog} intro={dict.intros.blog}>
            <PostList posts={posts} lang={lang} labels={dict.pages.blog} />
            {posts.length > 0 && (
              <Link href={localePath(lang, "/blog")} className="link-arrow group mt-10">
                {dict.pages.blog.allPosts}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </HomeSection>

          <HomeSection id="contact" title={dict.nav.contact}>
            <h3 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              {dict.contact.title.start}
              <span className="text-accent">{dict.contact.title.accent}</span>
              {dict.contact.title.end}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-text-secondary">{dict.contact.text}</p>
            <div className="mt-8">
              <CopyEmail
                labels={{ emailMe: dict.profile.emailMe, copy: dict.contact.copy, copied: dict.contact.copied }}
              />
            </div>
            <div className="mt-8">
              <ContactList labels={dict.contact.links} />
            </div>
          </HomeSection>

          <footer className="max-w-md pb-10 text-xs leading-relaxed text-text-secondary">
            {dict.ui.footer} © {new Date().getFullYear()} Carlos León.
          </footer>
        </main>
      </div>
    </div>
  );
}
