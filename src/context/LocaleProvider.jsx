import { createContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "royacodes_locale";

export const LocaleContext = createContext({
  locale: "en",
  setLocale: () => {},
  toggleLocale: () => {},
  dir: "ltr",
  isRTL: false,
});

function getInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "fa" || stored === "en") return stored;

  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("fa")) return "fa";
  return "en";
}

export default function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => getInitialLocale());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => {
    const isRTL = locale === "fa";
    return {
      locale,
      setLocale,
      toggleLocale: () => setLocale((p) => (p === "fa" ? "en" : "fa")),
      dir: isRTL ? "rtl" : "ltr",
      isRTL,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
