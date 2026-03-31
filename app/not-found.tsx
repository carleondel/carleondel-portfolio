import Link from "next/link";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <div>
        <AnimateIn>
          <p className="text-sm font-mono text-text-secondary">404</p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h1 className="mt-4 text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
            Page not found
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="mt-4 text-text-secondary leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-md border border-border bg-surface px-4 py-2 text-sm text-text-primary transition-colors hover:border-text-secondary/20 hover:bg-surface-hover"
          >
            Back to home
          </Link>
        </AnimateIn>
      </div>
    </Section>
  );
}
