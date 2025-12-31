"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "EN" | "FR" | "PT";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");

  // Load saved language on first render
  useEffect(() => {
    const saved = localStorage.getItem("chezelle-language");
    if (saved === "EN" || saved === "FR" || saved === "PT") {
      setLanguage(saved);
    }
  }, []);

  // Persist language changes
  useEffect(() => {
    localStorage.setItem("chezelle-language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
