import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export function PersonalNote() {
  return (
    <Section>
      <AnimateIn>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-medium text-text-primary">
            How I think about the work
          </h2>
          <p className="text-text-secondary mt-4 leading-relaxed">
            The part of data engineering I enjoy most is the layer between raw
            ingestion and a number someone can confidently use in a meeting. I
            care about that handoff being reliable, understandable, and useful.
          </p>
          <p className="text-text-secondary mt-4 leading-relaxed">
            A lot of my growth has come from building around the modern data
            stack: dbt, Snowflake, BigQuery, Terraform, Python, BI tooling, and
            cloud workflows. I like learning by shipping, tightening the model,
            and making the next version easier to reason about.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors mt-6"
          >
            More about me
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </AnimateIn>
    </Section>
  );
}
