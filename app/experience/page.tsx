import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { CredentialsSection } from "@/components/sections/credentials";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Carlos León, Data Engineer.",
};

export default function ExperiencePage() {
  return (
    <>
      <Section>
        <AnimateIn>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
            Experience
          </h1>
          <p className="text-text-secondary mt-3 max-w-2xl leading-relaxed">
            Professional experience across analytics engineering, BI, and data
            work that connects technical systems with business use.
          </p>
        </AnimateIn>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company + exp.period}
              experience={exp}
              index={i}
            />
          ))}
        </div>

        <AnimateIn delay={0.15} className="mt-10">
          <a
            href="/carlos-leon-resume.pdf"
            download
            className="text-sm text-text-primary transition-colors hover:text-accent"
          >
            Download resume PDF
          </a>
        </AnimateIn>
      </Section>

      <CredentialsSection />
    </>
  );
}
