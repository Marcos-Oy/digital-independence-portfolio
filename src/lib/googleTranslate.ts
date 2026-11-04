import { isLanguage, type LanguageCode } from "@/lib/languages";

export const googleLanguageCode = (language: LanguageCode) => language === "zh" ? "zh-CN" : language;
export const googleTranslationValue = (language: LanguageCode) => `/es/${googleLanguageCode(language)}`;
export function readGoogleLanguage(cookie: string): LanguageCode | null {
  const value = cookie.split(";").map(part => part.trim()).find(part => part.startsWith("googtrans="))?.slice(10);
  if (!value) return null;
  try {
    const target = decodeURIComponent(value).split("/")[2];
    const language = target === "zh-CN" ? "zh" : target;
    return isLanguage(language) ? language : null;
  } catch { return null; }
}
export function writeGoogleLanguage(language: LanguageCode) {
  const suffix = `; path=/; max-age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  const value = `googtrans=${googleTranslationValue(language)}`;
  // Reset matching domain cookies left by Google, without writing on unrelated parent domains.
  const parts = location.hostname.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    const domain = parts.slice(i).join(".");
    document.cookie = `googtrans=; path=/; max-age=0; domain=.${domain}`;
  }
  document.cookie = value + suffix;
}
