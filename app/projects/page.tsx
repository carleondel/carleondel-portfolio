import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected data engineering projects by Carlos León.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <AnimateIn>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
          Projects
        </h1>
        <p className="text-text-secondary mt-3 max-w-2xl leading-relaxed">
          Public projects that reflect how I approach analytics engineering,
          data modeling, cloud workflows, and stakeholder-facing outputs.
        </p>
      </AnimateIn>

      <div className="mt-10 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
