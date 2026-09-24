import { ChevronRight } from "lucide-react";

interface ProjectVisualProps {
  steps: string[];
}

export function ProjectVisual({ steps }: ProjectVisualProps) {
  return (
    <ol className="flex flex-wrap items-center gap-y-3 rounded-xl border border-border bg-surface/60 p-4">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center">
          <span className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 font-mono text-xs text-text-primary">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            {step}
          </span>
          {index < steps.length - 1 && (
            <ChevronRight size={14} className="mx-1 text-text-secondary/60" />
          )}
        </li>
      ))}
    </ol>
  );
}
