import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Carlos León — Data Engineer, analytics-focused.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <AnimateIn>
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
            About
          </h1>
        </AnimateIn>

        <div className="max-w-2xl mt-10 space-y-6">
          <AnimateIn delay={0.1}>
            <p className="text-text-secondary leading-relaxed">
              I&apos;m a Data Engineer with a background in Mathematics, focused
              on building reliable, business-facing data products.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="text-text-secondary leading-relaxed">
              I like turning messy problems into clean data models, robust
              pipelines, and analytics systems people can actually trust.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              My work sits around analytics engineering, modern data stacks,
              and thoughtful system design, especially where technical depth
              meets real business usefulness.
            </p>
          </AnimateIn>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="max-w-2xl">
          <AnimateIn>
            <h2 className="text-xl font-medium text-text-primary">
              What I care about
            </h2>
          </AnimateIn>

          <div className="mt-6 space-y-4">
            <AnimateIn delay={0.1}>
              <div>
                <h3 className="text-sm font-medium text-text-primary">
                  End-to-end ownership
                </h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  I like owning the full path from ingestion to business
                  consumption, not just one isolated part of the pipeline.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h3 className="text-sm font-medium text-text-primary">
                  Governed analytics
                </h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  I care about semantic layers, metric consistency, and data
                  models that make self-service analytics actually sustainable.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="text-sm font-medium text-text-primary">
                  Automation where it matters
                </h3>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                  I use Python, APIs, orchestration, and CI/CD to reduce manual
                  effort and make data workflows more repeatable.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="max-w-2xl">
          <AnimateIn>
            <h2 className="text-xl font-medium text-text-primary">
              How I work
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-text-secondary mt-4 leading-relaxed">
              I try to balance engineering quality with business usefulness.
              That means thinking carefully about data models, operational
              simplicity, reporting needs, and how a team will actually consume
              the output once the pipeline is live.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <p className="text-text-secondary mt-4 leading-relaxed">
              I&apos;ve shipped dashboards and data products in Power BI, Looker,
              and Lightdash, and I enjoy the craft of defining governed metrics
              and semantic layers that help teams move faster without losing
              trust in the numbers.
            </p>
          </AnimateIn>
        </div>
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="max-w-2xl">
          <AnimateIn>
            <h2 className="text-xl font-medium text-text-primary">
              Outside engineering
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-text-secondary mt-4 leading-relaxed">
              Outside engineering, I&apos;m mostly into music, economics,
              literature, and building things. In books I lean more toward
              philosophy and essays than business non-fiction. I&apos;m also
              interested in product, strategy, and how technical work connects
              to business.
            </p>
          </AnimateIn>
        </div>
      </Section>
    </>
  );
}
