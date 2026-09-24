"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { localePath } from "@/lib/i18n";

const copy = {
  en: {
    title: ["Nothing ", "here", "."],
    text: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to home",
  },
  es: {
    title: ["Aquí no hay ", "nada", "."],
    text: "La página que buscas no existe o se ha movido.",
    back: "Volver al inicio",
  },
};

export default function NotFound() {
  const lang = usePathname()?.startsWith("/es") ? "es" : "en";
  const { title, text, back } = copy[lang];

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-text-primary md:text-6xl">
        {title[0]}
        <span className="text-accent">{title[1]}</span>
        {title[2]}
      </h1>
      <p className="mt-4 leading-relaxed text-text-secondary">{text}</p>
      <Link href={localePath(lang, "/")} className="link-arrow group mt-8">
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
        {back}
      </Link>
    </main>
  );
}
