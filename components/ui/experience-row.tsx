import type { Experience } from "@/data/experience";
import type { ExperienceCopy } from "@/data/i18n/types";

export function ExperienceRow({ experience, copy }: { experience: Experience; copy: ExperienceCopy }) {
  return (
    <li className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface-hover/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgb(var(--grid)/0.06)]" />
      <p className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-secondary sm:col-span-2">
        {copy.period}
      </p>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-snug text-text-primary">
          {copy.role}
          <span className="text-text-secondary"> · </span>
          <span className="group-hover:text-accent lg:transition-colors">{experience.company}</span>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{copy.description}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Stack">
          {experience.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
