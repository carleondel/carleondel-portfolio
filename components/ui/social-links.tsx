import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export const contactLinks = (labels: {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
}) => [
  {
    label: labels.email,
    href: `mailto:${siteConfig.social.email}`,
    display: siteConfig.social.email,
    icon: Mail,
  },
  {
    label: labels.linkedin,
    href: siteConfig.social.linkedin,
    display: "linkedin.com/in/carleondel",
    icon: Linkedin,
  },
  {
    label: labels.github,
    href: siteConfig.social.github,
    display: "github.com/carleondel",
    icon: Github,
  },
  {
    label: labels.resume,
    href: siteConfig.resume,
    display: "carlos-leon-resume.pdf",
    icon: FileText,
  },
];

const external = (href: string) =>
  href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" };

export function SocialLinks({
  labels,
  className,
}: {
  labels: Parameters<typeof contactLinks>[0];
  className?: string;
}) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {contactLinks(labels).map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...external(href)}
            aria-label={label}
            title={label}
            className="block text-text-secondary transition-colors hover:text-accent"
          >
            <Icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContactList({ labels }: { labels: Parameters<typeof contactLinks>[0] }) {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-surface/60 backdrop-blur">
      {contactLinks(labels).map(({ label, href, display, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...external(href)}
            className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-hover/60"
          >
            <Icon size={18} className="shrink-0 text-accent" />
            <span className="w-20 shrink-0 text-sm font-medium text-text-primary">{label}</span>
            <span className="truncate text-sm text-text-secondary group-hover:text-text-primary">
              {display}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
