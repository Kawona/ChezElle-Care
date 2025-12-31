"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}