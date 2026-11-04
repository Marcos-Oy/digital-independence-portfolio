import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { initialLanguage, isLanguage, LANGUAGE_STORAGE_KEY, type LanguageCode } from "@/lib/languages";
import { readGoogleLanguage, writeGoogleLanguage } from "@/lib/googleTranslate";

type LanguageContextValue = { language: LanguageCode; selectLanguage: (code: LanguageCode) => void; countryReady: boolean };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const readSaved = () => { try { return localStorage.getItem(LANGUAGE_STORAGE_KEY); } catch { return null; } };
const savedLanguage = () => readSaved() ?? readGoogleLanguage(document.cookie);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => initialLanguage(savedLanguage(), undefined, navigator.languages));
  const manual = useRef(isLanguage(savedLanguage()));
  const [countryReady, setCountryReady] = useState(manual.current);
  const selectLanguage = (code: LanguageCode) => {
    manual.current = true;
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, code); } catch { /* Cookie remains available. */ }
    writeGoogleLanguage(code);
    if (code !== language) window.location.reload();
  };

  useEffect(() => {
    if (manual.current) return;
    let active = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);
    (async () => {
      let country: string | undefined;
      try {
        const response = await fetch("/cdn-cgi/trace", { signal: controller.signal });
        if (response.ok) country = (await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1];
        if (!country) {
          const fallback = await fetch("https://api.country.is", { signal: controller.signal });
          if (fallback.ok) { const data = await fallback.json(); country = typeof data.country === "string" ? data.country : undefined; }
        }
      } catch { /* Fall back to browser languages. */ }
      finally { clearTimeout(timeout); }
      if (active && !manual.current) {
        setLanguage(initialLanguage(null, country, navigator.languages));
        setCountryReady(true);
      }
    })();
    return () => { active = false; controller.abort(); clearTimeout(timeout); };
  }, []);

  useEffect(() => {
    if (!countryReady) return;
    writeGoogleLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" || language === "he" ? "rtl" : "ltr";
    const protect = () => document.querySelectorAll("[data-no-translate]").forEach(element => {
      element.classList.add("notranslate");
      element.setAttribute("translate", "no");
    });
    protect();
    const observer = new MutationObserver(protect);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language, countryReady]);

  return <LanguageContext.Provider value={{ language, selectLanguage, countryReady }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider missing");
  return context;
};
