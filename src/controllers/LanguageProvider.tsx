import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { initialLanguage, isLanguage, LANGUAGE_STORAGE_KEY, type LanguageCode } from "@/lib/languages";
import { supabase } from "@/integrations/supabase/client";

type LanguageContextValue = { language: LanguageCode; selectLanguage: (code: LanguageCode) => void; translating: boolean; error: string | null; translateText: (text: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const readSaved = () => { try { return localStorage.getItem(LANGUAGE_STORAGE_KEY); } catch { return null; } };
const translations = new Map<LanguageCode, Map<string, string>>();
const excluded = "script,style,code,pre,textarea,[contenteditable], [data-no-translate], [translate='no']";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => initialLanguage(readSaved(), undefined, navigator.languages));
  const [translating, setTranslating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [, setRevision] = useState(0);
  const manual = useRef(isLanguage(readSaved()));
  const sources = useRef(new Map<Text, { source: string; applied: string }>());
  const attributes = useRef(new Map<Element, Map<string, { source: string; applied: string }>>());
  const selectLanguage = (code: LanguageCode) => {
    manual.current = true;
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, code); } catch { /* Storage can be unavailable in private browsers. */ }
    setError(null); setLanguage(code);
  };

  useEffect(() => {
    if (manual.current) return;
    let active = true;
    // Cloudflare provides country on the actual hosting origin. Other hosts use a country-only IP lookup.
    (async () => {
      let country: string | undefined;
      try {
        const response = await fetch("/cdn-cgi/trace");
        if (response.ok) country = (await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1];
        if (!country) {
          const response = await fetch("https://api.country.is");
          if (response.ok) { const data = await response.json(); country = typeof data.country === "string" ? data.country : undefined; }
        }
      } catch { /* Browser language remains available when country lookup fails. */ }
      if (active && !manual.current) setLanguage(initialLanguage(null, country, navigator.languages));
    })();
    return () => { active = false; };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    let cancelled = false;
    let running = false;
    let pending = false;
    let failed = false;
    let timer: number | undefined;
    const cache = translations.get(language) ?? new Map<string, string>();
    translations.set(language, cache);
    const scan = () => {
      const jobs: { source: string; apply: (value: string) => void }[] = [];
      const root = document.body;
      if (!root) return jobs;
      for (const [node] of sources.current) if (!node.isConnected) sources.current.delete(node);
      for (const [node] of attributes.current) if (!node.isConnected) attributes.current.delete(node);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        const textNode = node as Text;
        const value = textNode.data;
        if (!textNode.parentElement?.closest(excluded) && /\p{L}/u.test(value)) {
          let entry = sources.current.get(textNode);
          if (!entry || (value !== entry.applied && value !== entry.source)) {
            entry = { source: value, applied: value }; sources.current.set(textNode, entry);
          }
          const record = entry;
          jobs.push({ source: record.source, apply: translated => {
            if (!textNode.isConnected || textNode.data !== record.applied) return;
            record.applied = translated; textNode.data = translated;
          } });
        }
        node = walker.nextNode();
      }
      root.querySelectorAll("[placeholder],[title],[aria-label],img[alt]").forEach(element => {
        if (element.closest(excluded)) return;
        const records = attributes.current.get(element) ?? new Map(); attributes.current.set(element, records);
        for (const attr of ["placeholder", "title", "aria-label", "alt"]) {
          const value = element.getAttribute(attr);
          if (!value || !/\p{L}/u.test(value)) continue;
          let entry = records.get(attr);
          if (!entry || (value !== entry.applied && value !== entry.source)) { entry = { source: value, applied: value }; records.set(attr, entry); }
          const record = entry;
          jobs.push({ source: record.source, apply: translated => {
            if (!element.isConnected || element.getAttribute(attr) !== record.applied) return;
            record.applied = translated; element.setAttribute(attr, translated);
          } });
        }
      });
      return jobs;
    };
    const refresh = async () => {
      if (cancelled || failed) return;
      if (running) { pending = true; return; }
      running = true;
      try {
        const jobs = scan();
        if (language === "es") { jobs.forEach(job => job.apply(job.source)); return; }
        const missing = [...new Set(jobs.map(job => job.source).filter(source => !cache.has(source)))];
        jobs.forEach(job => { const translated = cache.get(job.source); if (translated) job.apply(translated); });
        if (!missing.length) return;
        setTranslating(true);
        while (missing.length && !cancelled) {
          const batch: string[] = []; let length = 0;
          while (missing.length && batch.length < 60 && length + missing[0].length <= 16000) { const source = missing.shift(); if (source) { batch.push(source); length += source.length; } }
          if (!batch.length) { missing.shift(); continue; }
          const { data, error: invokeError } = await supabase.functions.invoke("site-translate", { body: { language, texts: batch } });
          if (invokeError || !Array.isArray(data?.translations) || data.translations.length !== batch.length) {
            let message = "No se pudo traducir la página. Puedes volver a Español.";
            try { const body = await invokeError?.context?.json(); if (body?.error) message = body.error; } catch { /* Safe fallback. */ }
            throw new Error(message);
          }
          data.translations.forEach((text: string, i: number) => { if (typeof text === "string") cache.set(batch[i], text); });
          if (!cancelled) setRevision(value => value + 1);
          if (!cancelled) scan().forEach(job => { const translated = cache.get(job.source); if (translated) job.apply(translated); });
        }
      } catch (error) { failed = true; if (!cancelled) setError(error instanceof Error ? error.message : "Traducción no disponible"); }
      finally {
        running = false;
        if (!cancelled) setTranslating(false);
        if (pending && !cancelled && !failed) { pending = false; timer = window.setTimeout(refresh, 350); }
      }
    };
    const observer = new MutationObserver(() => { if (timer) clearTimeout(timer); timer = window.setTimeout(refresh, 350); });
    const root = document.body;
    if (root) observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "title", "aria-label", "alt"] });
    setError(null); setTranslating(false); void refresh();
    return () => { cancelled = true; observer.disconnect(); if (timer) clearTimeout(timer); };
  }, [language]);
  const translateText = (text: string) => language === "es" ? text : translations.get(language)?.get(text) ?? text;
  return <LanguageContext.Provider value={{ language, selectLanguage, translating, error, translateText }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider missing");
  return context;
};