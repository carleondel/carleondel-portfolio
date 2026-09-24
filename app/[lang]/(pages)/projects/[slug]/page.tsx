import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, PlayCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectVisual } from "@/components/ui/project-visual";
import { VideoPlayer } from "@/components/ui/video-player";
import { getProject, projects } from "@/data/projects";
import { getDictionary } from "@/data/i18n";
import { locales, localePath, type Lang } from "@/lib/i18n";

interface Props {
  params: { lang: Lang; slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: getDictionary(params.lang).projects[project.slug].tagline,
    openGraph: project.image ? { images: [project.image] } : undefined,
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-border pt-8 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="eyebrow md:pt-1">{title}</h2>
      <div className="leading-relaxed text-text-secondary">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent/70"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: Props) {
  const { lang } = params;
  const project = getProject(params.slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const copy = dict.projects[project.slug];
  const labels = dict.caseStudy;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const { links } = project;

  const actions = [
    links?.live && { label: labels.live, href: links.live, icon: ArrowUpRight, primary: true },
    links?.video && { label: labels.video, href: links.video, icon: PlayCircle },
    links?.github && { label: labels.github, href: links.github, icon: Github },
  ].filter(Boolean) as { label: string; href: string; icon: typeof Github; primary?: boolean }[];

  return (
    <article>
      <AnimateIn>
        <Link
          href={localePath(lang, "/projects")}
          className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          {dict.ui.allProjects}
        </Link>

        <p className="eyebrow mt-10">{dict.ui.categories[project.category]}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
          {copy.tagline}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:flex sm:flex-wrap">
          {[
            [labels.year, project.year],
            [labels.role, copy.role],
            [labels.status, copy.status],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 text-text-primary">{v}</dd>
              </div>
            ))}
        </dl>

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map(({ label, href, icon: Icon, primary }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={primary ? "btn-primary" : "btn-secondary"}
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>
        )}
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <div className="mt-12">
          {project.video ? (
            <>
              <p className="eyebrow mb-3 flex items-center gap-2">
                <PlayCircle size={14} className="text-accent" />
                {dict.ui.watchDemo}
              </p>
              <VideoPlayer video={project.video} title={`${project.title} demo`} />
            </>
          ) : (
            project.image && (
              <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={1600}
                  height={1000}
                  priority
                  className="h-auto w-full"
                />
              </div>
            )
          )}
        </div>
      </AnimateIn>

      <AnimateIn delay={0.15}>
        <div className="mt-16 space-y-10">
          <Block title={labels.problem}>
            <p>{copy.context}</p>
          </Block>
          {copy.contribution && (
            <Block title={labels.contribution}>
              <p>{copy.contribution}</p>
            </Block>
          )}
          <Block title={labels.built}>
            <p>{copy.whatIBuilt}</p>
            {project.pipeline && (
              <div className="mt-6">
                <ProjectVisual steps={project.pipeline} />
              </div>
            )}
          </Block>
          <Block title={labels.how}>
            <Bullets items={copy.architecture} />
          </Block>
          <Block title={labels.outcomes}>
            <Bullets items={copy.outcomes} />
          </Block>
          {copy.nextStep && (
            <Block title={labels.next}>
              <p>{copy.nextStep}</p>
            </Block>
          )}
          <Block title={labels.stack}>
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </AnimateIn>

      <Link
        href={localePath(lang, `/projects/${next.slug}`)}
        className="group mt-20 flex items-center justify-between rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-accent/30"
      >
        <div>
          <p className="eyebrow">{dict.ui.nextProject}</p>
          <p className="mt-2 text-lg font-semibold text-text-primary group-hover:text-accent">{next.title}</p>
        </div>
        <ArrowRight className="text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent" />
      </Link>
    </article>
  );
}
