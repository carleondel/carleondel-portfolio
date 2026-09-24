import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/animate-in";
import { PageTitle, SectionHeading } from "@/components/ui/page-title";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/data/i18n";
import type { Lang } from "@/lib/i18n";

interface Props {
  params: { lang: Lang };
}

export function generateMetadata({ params }: Props): Metadata {
  const dict = getDictionary(params.lang);
  return { title: dict.pages.experience.eyebrow, description: dict.pages.experience.intro };
}

export default function ExperiencePage({ params }: Props) {
  const dict = getDictionary(params.lang);
  const page = dict.pages.experience;
  const credentials = [
    { title: dict.pages.credentials.education, items: dict.education },
    { title: dict.pages.credentials.certifications, items: dict.certifications },
  ];

  return (
    <>
      <PageTitle eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <a href={siteConfig.resume} target="_blank" className="link-arrow group mt-6">
          {dict.ui.resumePdf}
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </PageTitle>

      <ol className="relative mt-14 space-y-14 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => {
          const copy = dict.experience[exp.id];
          return (
            <AnimateIn key={exp.id} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent ring-4 ring-accent/10 sm:-left-[37px]" />
                <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">{copy.period}</p>
                <h2 className="mt-2 text-lg font-semibold text-text-primary">
                  {copy.role} <span className="text-text-secondary">·</span>{" "}
                  <span className="text-accent">{exp.company}</span>
                </h2>
                <p className="mt-2 leading-relaxed text-text-secondary">{copy.description}</p>
                <ul className="mt-4 space-y-2">
                  {copy.contributions.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-sm leading-relaxed text-text-secondary before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-2 before:rounded-full before:bg-text-secondary/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            </AnimateIn>
          );
        })}
      </ol>

      <section className="mt-24">
        <SectionHeading>{dict.pages.credentials.title}</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
          {credentials.map((group, i) => (
            <AnimateIn key={group.title} delay={i * 0.05}>
              <h3 className="eyebrow">{group.title}</h3>
              <ul className="mt-6 space-y-6">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold text-text-primary">{item.name}</p>
                    <p className="mt-0.5 text-sm text-accent">{item.by}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
