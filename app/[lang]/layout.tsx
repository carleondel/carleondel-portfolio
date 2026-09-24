import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Background } from "@/components/ui/background";
import { themeScript } from "@/components/ui/theme-toggle";
import { getDictionary } from "@/data/i18n";
import { siteConfig } from "@/data/site";
import { isLang, locales, type Lang } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

interface Props {
  children: React.ReactNode;
  params: { lang: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = (isLang(params.lang) ? params.lang : "en") as Lang;
  const { meta } = getDictionary(lang);
  const image = { url: `/og-${lang}.jpg`, width: 1200, height: 628, alt: meta.title };
  return {
    title: { default: meta.title, template: "%s · Carlos León" },
    description: meta.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: lang === "en" ? "en_US" : "es_ES",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children, params }: Props) {
  if (!isLang(params.lang)) notFound();

  return (
    <html
      lang={params.lang}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans leading-relaxed">
        <Background />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
