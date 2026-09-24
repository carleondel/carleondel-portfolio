import type { Metadata } from "next";
import { AnimateIn } from "@/components/ui/animate-in";
import { PageTitle, SectionHeading } from "@/components/ui/page-title";
import { ProjectRow } from "@/components/ui/project-row";
import { projects, type ProjectCategory } from "@/data/projects";
import { getDictionary } from "@/data/i18n";
import type { Lang } from "@/lib/i18n";

interface Props {
  params: { lang: Lang };
}

export function generateMetadata({ params }: Props): Metadata {
  const dict = getDictionary(params.lang);
  return { title: dict.pages.projects.eyebrow, description: dict.pages.projects.intro };
}

const categories: ProjectCategory[] = ["product", "data"];

export default function ProjectsPage({ params }: Props) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const page = dict.pages.projects;

  return (
    <>
      <PageTitle eyebrow={page.eyebrow} title={page.title} intro={page.intro} />

      {categories.map((category) => (
        <section key={category} className="mt-16 sm:mt-20">
          <SectionHeading>{dict.ui.categories[category]}</SectionHeading>
          <AnimateIn>
            <ul className="group/list space-y-12">
              {projects
                .filter((p) => p.category === category)
                .map((project) => (
                  <ProjectRow
                    key={project.slug}
                    project={project}
                    copy={dict.projects[project.slug]}
                    lang={lang}
                    videoLabel={dict.ui.video}
                  />
                ))}
            </ul>
          </AnimateIn>
        </section>
      ))}
    </>
  );
}
