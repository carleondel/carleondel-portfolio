export const locales = ["en", "es"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export const isLang = (value: string): value is Lang =>
  (locales as readonly string[]).includes(value);

export function localePath(lang: Lang, path: string) {
  if (lang === defaultLang) return path;
  if (path === "/") return "/es";
  if (path.startsWith("/#")) return `/es${path.slice(1)}`;
  return `/es${path}`;
}

export function stripLocale(pathname: string) {
  if (pathname === "/es") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}
