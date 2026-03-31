import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimateIn } from "@/components/ui/animate-in";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Carlos León.",
};

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.social.email}`,
    icon: Mail,
    display: siteConfig.social.email,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
    display: "github.com/carleondel",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    display: "linkedin.com/in/carleondel",
  },
];

export default function ContactPage() {
  return (
    <Section>
      <AnimateIn>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary">
          Get in Touch
        </h1>
      </AnimateIn>

      <div className="max-w-xl mt-10">
        <AnimateIn delay={0.1}>
          <p className="text-text-secondary leading-relaxed">
            Best way to reach me: email. You can also find me on GitHub and
            LinkedIn.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div className="mt-6">
            <a
              href="/carlos-leon-resume.pdf"
              className="text-sm text-text-primary transition-colors hover:text-accent"
              download
            >
              Download resume PDF
            </a>
          </div>
        </AnimateIn>

        <div className="mt-10 space-y-4">
          {contactLinks.map((link, i) => (
            <AnimateIn key={link.label} delay={0.2 + i * 0.05}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 py-3 text-text-secondary hover:text-text-primary transition-colors"
              >
                <link.icon size={18} className="shrink-0" />
                <span className="text-sm">{link.display}</span>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
