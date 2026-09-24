"use client";

import { Moon, Sun } from "lucide-react";

export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add("dark")}})()`;

interface ThemeToggleProps {
  labels: { toLight: string; toDark: string };
}

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.remove("dark", "light");
    root.classList.add(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-text-secondary backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
    >
      <Sun size={16} className="hidden dark:block" aria-hidden />
      <Moon size={16} className="dark:hidden" aria-hidden />
      <span className="sr-only dark:hidden">{labels.toDark}</span>
      <span className="sr-only hidden dark:inline">{labels.toLight}</span>
    </button>
  );
}
