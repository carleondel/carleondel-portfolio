import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GitBranch, Play } from "lucide-react";
import type { Project } from "@/data/projects";
import type { ProjectCopy } from "@/data/i18n/types";
import { localePath, type Lang } from "@/lib/i18n";

interface ProjectRowProps {
  project: Project;
  copy: ProjectCopy;
  lang: Lang;
  videoLabel: string;
}

export function ProjectRow({ project, copy, lang, videoLabel }: ProjectRowProps) {
  return (
    <li className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-hover/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgb(var(--grid)/0.06)]" />

      <div className="z-10 order-2 sm:col-span-6">
        <h3>
          <Link
            href={localePath(lang, `/projects/${project.slug}`)}
            className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-text-primary transition-colors hover:text-accent focus-visible:text-accent"
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4" />
            {project.title}
            <ArrowUpRight
              size={16}
              className="ml-1 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </h3>
        {copy.status && <p className="mt-1 text-xs text-text-secondary">{copy.status}</p>}
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{copy.tagline}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-[5] order-1 max-w-[240px] sm:col-span-2 sm:max-w-none sm:translate-y-1">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            width={400}
            height={250}
            className="aspect-[16/10] w-full rounded-md border-2 border-border object-cover object-top transition group-hover:border-accent/30"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center rounded-md border-2 border-border bg-surface transition group-hover:border-accent/30">
            <GitBranch size={22} className="text-accent/70" />
          </div>
        )}
        {project.video && (
          <span className="absolute bottom-1.5 left-1.5 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
            <Play size={10} className="fill-current" />
            {videoLabel}
          </span>
        )}
      </div>
    </li>
  );
}
