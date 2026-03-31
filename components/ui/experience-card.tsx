import { cn } from "@/lib/utils";
import { AnimateIn } from "./animate-in";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const isCurrent = index === 0;

  return (
    <AnimateIn delay={index * 0.1}>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8">
        <div className="text-sm text-text-secondary md:pt-1">
          {experience.period}
        </div>

        <div
          className={cn(
            "border-l-2 pl-6",
            isCurrent ? "border-text-secondary/40" : "border-border"
          )}
        >
          {isCurrent && (
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-text-secondary">
              Current
            </p>
          )}
          <h3 className="text-base font-medium text-text-primary">
            {experience.role}
          </h3>
          <p className="text-sm text-text-secondary mt-0.5">
            {experience.company}
          </p>

          <p className="text-sm text-text-secondary mt-3 leading-relaxed">
            {experience.description}
          </p>

          <ul className="mt-4 space-y-2">
            {experience.contributions.map((item, i) => (
              <li
                key={i}
                className="text-sm text-text-secondary leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-border before:rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>

          {experience.stack && (
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-text-secondary bg-background px-2.5 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimateIn>
  );
}
