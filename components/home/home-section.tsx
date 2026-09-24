import { AnimateIn } from "@/components/ui/animate-in";

interface HomeSectionProps {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}

export function HomeSection({ id, title, intro, children }: HomeSectionProps) {
  return (
    <section
      id={id}
      aria-label={title}
      className="mb-20 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <h2 className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-text-primary">
          {title}
          <span className="hidden h-px flex-1 bg-border lg:block" />
        </h2>
      </div>
      {intro && (
        <p className="-mt-2 mb-10 max-w-lg text-sm leading-relaxed text-text-secondary">
          {intro}
        </p>
      )}
      <AnimateIn>{children}</AnimateIn>
    </section>
  );
}
