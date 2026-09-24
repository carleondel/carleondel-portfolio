import { AnimateIn } from "./animate-in";

interface PageTitleProps {
  eyebrow: string;
  title: { start: string; accent: string; end: string };
  intro?: string;
  children?: React.ReactNode;
}

export function PageTitle({ eyebrow, title, intro, children }: PageTitleProps) {
  return (
    <AnimateIn>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary md:text-5xl">
        {title.start}
        <span className="text-accent">{title.accent}</span>
        {title.end}
      </h1>
      {intro && <p className="mt-5 max-w-xl leading-relaxed text-text-secondary">{intro}</p>}
      {children}
    </AnimateIn>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-text-primary">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}
