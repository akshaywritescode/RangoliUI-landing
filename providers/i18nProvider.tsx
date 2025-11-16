"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import en from "@/i18n/en.json";
import hi from "@/i18n/hi.json";
import de from "@/i18n/de.json";
import zh from "@/i18n/zh.json";
import ja from "@/i18n/ja.json";
import ko from "@/i18n/ko.json";
import es from "@/i18n/es.json";

type LocaleKey = "en" | "hi" | "de" | "zh" | "ja" | "ko" | "es";

const translations: Record<LocaleKey, Record<string, string>> = {
  en, hi, de, zh, ja, ko, es
};

const I18nContext = createContext<any>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<LocaleKey>("en");

  // Load saved language on first render
  useEffect(() => {
    const saved = localStorage.getItem("app-locale") as LocaleKey | null;
    if (saved && translations[saved]) {
      setLocale(saved);
    }
  }, []);

  // Save language whenever user switches
  useEffect(() => {
    localStorage.setItem("app-locale", locale);
  }, [locale]);

  function t(key: string) {
    return translations[locale]?.[key] ?? translations["en"]?.[key] ?? key;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
