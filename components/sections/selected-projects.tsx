import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <Section>
      <AnimateIn>
        <h2 className="text-2xl font-medium text-text-primary">
          Selected Projects
        </h2>
        <p className="text-sm text-text-secondary mt-2">
          Public projects that reflect how I think about data systems,
          analytics engineering, and business-facing outputs.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {featured.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            variant="compact"
          />
        ))}
      </div>

      <AnimateIn delay={0.4} className="mt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          See project details
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </AnimateIn>
    </Section>
  );
}
