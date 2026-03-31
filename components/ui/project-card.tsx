import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimateIn } from "./animate-in";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "compact" | "detailed";
}

export function ProjectCard({
  project,
  index = 0,
  variant = "detailed",
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <AnimateIn delay={index * 0.1}>
      <div
        className={cn(
          "group bg-surface border border-border rounded-lg p-6 md:p-8",
          "hover:bg-surface-hover hover:border-text-secondary/20",
          "transition-all duration-300"
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-text-primary">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {project.links?.github && (
              <Link
                href={project.links.github}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label={`${project.title} on GitHub`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </Link>
            )}
            {project.links?.live && (
              <Link
                href={project.links.live}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label={`${project.title} live demo`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm mt-3 leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-5">
          <ProjectVisual steps={project.pipeline} />
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-text-secondary bg-background px-2.5 py-1 rounded border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {isCompact ? (
          <p className="mt-5 text-sm leading-relaxed text-text-secondary/80">
            {project.whatIBuilt}
          </p>
        ) : (
          <div className="mt-6 space-y-6">
            {project.image && (
              <div className="rounded-lg border border-border overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={`${project.title} architecture`}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            )}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                Problem / Context
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.context}
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                What I built
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.whatIBuilt}
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                Architecture
              </p>
              <ul className="mt-3 space-y-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-text-secondary before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                Outcomes
              </p>
              <ul className="mt-3 space-y-2">
                {project.outcomes.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-text-secondary before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                What I&apos;d improve next
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {project.nextStep}
              </p>
            </div>

          </div>
        )}
      </div>
    </AnimateIn>
  );
}
