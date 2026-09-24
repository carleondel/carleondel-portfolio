import type { Lang } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";

const dictionaries = { en, es };

export const getDictionary = (lang: Lang) => dictionaries[lang];
