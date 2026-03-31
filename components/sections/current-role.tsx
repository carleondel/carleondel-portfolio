import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";

const currentExperience = experiences[0];

export function CurrentRole() {
  return (
    <Section className="pt-0 md:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
        <AnimateIn>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
              Current role
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-text-primary">
              {currentExperience.role} at {currentExperience.company}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
              {currentExperience.description}
            </p>

            <div className="mt-6 grid gap-3">
              {currentExperience.contributions.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm leading-relaxed text-text-secondary"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {currentExperience.stack?.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border bg-background px-2.5 py-1 text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/experience"
              className="group mt-6 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              View full experience
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="rounded-lg border border-border bg-surface p-6 md:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">
              Positioning
            </p>
            <h3 className="mt-4 text-xl font-medium tracking-tight text-text-primary">
              {profile.primaryLabel}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {profile.summary}
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-md border border-border bg-background px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">
                  Location
                </p>
                <p className="mt-2 text-sm text-text-primary">
                  {profile.location}
                </p>
              </div>
              <div className="rounded-md border border-border bg-background px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-text-secondary">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-primary">
                  Modern data stack, governed analytics, business-facing data
                  products, and automation that removes reporting friction.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
