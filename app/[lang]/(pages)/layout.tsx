import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SocialLinks } from "@/components/ui/social-links";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangSwitch } from "@/components/ui/lang-switch";
import { getDictionary } from "@/data/i18n";
import { localePath, type Lang } from "@/lib/i18n";

export default function PagesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const { lang } = params;
  const dict = getDictionary(lang);
  const nav = [
    { label: dict.nav.builds, href: "/projects" },
    { label: dict.nav.experience, href: "/experience" },
    { label: dict.nav.blog, href: "/blog" },
    { label: dict.nav.contact, href: "/#contact" },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 md:px-12">
      <header className="flex flex-wrap items-center justify-between gap-4 py-6 sm:py-8">
        <Link
          href={localePath(lang, "/")}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-text-primary"
        >
          <ArrowLeft size={16} className="text-accent transition-transform group-hover:-translate-x-1" />
          Carlos León
        </Link>
        <div className="order-2 flex items-center gap-2 sm:order-3">
          <LangSwitch lang={lang} label={dict.ui.switchLang} />
          <ThemeToggle labels={dict.ui.theme} />
        </div>
        <nav className="order-3 -mx-1 flex w-full gap-5 overflow-x-auto px-1 sm:order-2 sm:ml-auto sm:mr-2 sm:w-auto sm:gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localePath(lang, item.href)}
              className="whitespace-nowrap text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="py-10 md:py-14">{children}</main>

      <footer className="flex flex-col-reverse gap-6 border-t border-border py-10 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Carlos León</p>
        <SocialLinks labels={dict.contact.links} />
      </footer>
    </div>
  );
}
