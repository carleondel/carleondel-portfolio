import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { writingEntries } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing and notes by Carlos León.",
};

export default function WritingPage() {
  return (
    <Section>
      <AnimateIn>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
          Writing
        </h1>
      </AnimateIn>

      {writingEntries.length > 0 && (
        <div className="mt-10 space-y-4">
          {writingEntries.map((entry, index) => (
            <AnimateIn key={entry.slug} delay={0.1 + index * 0.05}>
              <article className="rounded-lg border border-border bg-surface p-6 md:p-8">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
                  {new Date(entry.publishedAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="mt-3 text-xl font-medium text-text-primary">
                  {entry.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {entry.summary}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      )}
    </Section>
  );
}
