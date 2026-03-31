import { Database, BarChart3, Cloud, Shield } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

const capabilities = [
  {
    icon: Database,
    title: "Analytics Engineering",
    description:
      "Designing dbt projects, dimensional models, and semantic layers that make analytics trustworthy and scalable.",
  },
  {
    icon: BarChart3,
    title: "Business-Facing Data Products",
    description:
      "Building dashboards, governed metrics, and reporting flows that help teams make decisions without losing trust in the numbers.",
  },
  {
    icon: Cloud,
    title: "Modern Data Platforms",
    description:
      "Working with Google Cloud, Snowflake, orchestration, and infrastructure tooling to support reliable end-to-end data workflows.",
  },
  {
    icon: Shield,
    title: "Automation & Reliability",
    description:
      "Using Python, APIs, CI/CD, and infrastructure as code to reduce manual work and make pipelines easier to operate.",
  },
];

export function Capabilities() {
  return (
    <Section>
      <AnimateIn>
        <h2 className="text-2xl font-medium text-text-primary">
          What I Work On
        </h2>
        <p className="text-sm text-text-secondary mt-2">
          The areas where I spend most of my time and energy.
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {capabilities.map((cap, i) => (
          <AnimateIn key={cap.title} delay={i * 0.1}>
            <div className="bg-surface border border-border rounded-lg p-6 md:p-8">
              <cap.icon size={20} className="text-text-secondary" />
              <h3 className="text-base font-medium text-text-primary mt-4">
                {cap.title}
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                {cap.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
