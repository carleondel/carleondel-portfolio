"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/data/i18n/types";
import { SocialLinks } from "@/components/ui/social-links";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangSwitch } from "@/components/ui/lang-switch";
import { localePath, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

interface SidebarProps {
  lang: Lang;
  dict: Pick<Dictionary, "profile" | "nav" | "ui"> & { links: Dictionary["contact"]["links"] };
}

export function Sidebar({ lang, dict }: SidebarProps) {
  const active = useActiveSection(siteConfig.sections);
  const { profile, nav, ui, links } = dict;
  const { headline } = profile;

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-20">
      <div>
        <div className="flex items-center justify-between gap-4">
          <Image
            src={siteConfig.photo}
            alt="Carlos León"
            width={160}
            height={160}
            priority
            className="h-16 w-16 rounded-full object-cover ring-2 ring-border ring-offset-4 ring-offset-background sm:h-20 sm:w-20"
          />
          <div className="flex items-center gap-2">
            <LangSwitch lang={lang} label={ui.switchLang} />
            <ThemeToggle labels={ui.theme} />
          </div>
        </div>

        <h1 className="mt-7 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          <Link href={localePath(lang, "/")}>Carlos León</Link>
        </h1>
        <h2 className="mt-2 text-lg font-medium tracking-tight text-accent sm:text-xl">
          {profile.role}
        </h2>
        <p className="mt-4 max-w-sm text-xl font-medium leading-snug tracking-tight text-text-secondary sm:text-2xl">
          {headline.start}
          <span className="whitespace-nowrap text-text-primary">{headline.day}</span>
          {headline.middle}
          <span className="whitespace-nowrap text-accent">{headline.night}</span>
          {headline.end}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-text-secondary">
          <Link
            href={localePath(lang, `/projects/${siteConfig.now.slug}`)}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 backdrop-blur transition-colors hover:border-accent/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>
              {profile.building}{" "}
              <span className="font-medium text-text-primary group-hover:text-accent">
                {siteConfig.now.project}
              </span>
            </span>
          </Link>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {profile.location}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${siteConfig.social.email}`} className="btn-primary">
            <Mail size={15} />
            {profile.emailMe}
          </a>
          <a href={siteConfig.resume} target="_blank" className="btn-secondary">
            <FileText size={15} />
            {profile.resume}
          </a>
        </div>

        <nav className="hidden lg:block" aria-label="In-page navigation">
          <ul className="mt-12 w-max">
            {siteConfig.sections.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center py-2.5">
                    <span
                      className={cn(
                        "mr-4 h-px transition-all motion-reduce:transition-none",
                        isActive
                          ? "w-16 bg-accent"
                          : "w-8 bg-text-secondary/50 group-hover:w-16 group-hover:bg-text-primary"
                      )}
                    />
                    <span
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                      )}
                    >
                      {nav[id]}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <SocialLinks labels={links} className="mt-8 lg:mt-0" />
    </header>
  );
}
