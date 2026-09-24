"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, locales, stripLocale, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangSwitch({ lang, label }: { lang: Lang; label: string }) {
  const path = stripLocale(usePathname());

  return (
    <div
      aria-label={label}
      className="inline-flex h-9 items-center rounded-full border border-border bg-surface/60 p-1 text-xs font-semibold backdrop-blur"
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={localePath(l, path)}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            l === lang ? "bg-accent/15 text-accent" : "text-text-secondary hover:text-text-primary"
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
