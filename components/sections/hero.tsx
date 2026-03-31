import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <Section className="min-h-[85vh] flex items-center py-0 md:py-0">
      <div className="w-full">
        <AnimateIn>
          <p className="mb-6 text-sm tracking-wide text-text-secondary">
            {profile.currentRole} @ {profile.currentCompany} · {profile.location}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            {profile.primaryLabel}.
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {profile.heroSubtitle}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.coreStack.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-surface px-3 py-1.5 text-xs text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.35}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-md border border-text-secondary/30 bg-text-primary px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              View projects
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-text-secondary/30 hover:text-text-primary"
            >
              View resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-2 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Get in touch
            </Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {profile.proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <p className="text-2xl font-medium tracking-tight text-text-primary">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-text-primary">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
