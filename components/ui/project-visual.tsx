import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  steps: string[];
}

export function ProjectVisual({ steps }: ProjectVisualProps) {
  return (
    <div className="rounded-lg border border-border bg-background/60 p-4">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={cn(
                "rounded-md border border-border bg-surface px-3 py-2",
                "text-xs font-medium text-text-primary"
              )}
            >
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="text-text-secondary text-xs">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
