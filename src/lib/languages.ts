export const LANGUAGES = [
  { code: "es", native: "Español", flag: "🇨🇱", country: "CL" },
  { code: "en", native: "English", flag: "🇺🇸", country: "US" },
  { code: "pt", native: "Português", flag: "🇧🇷", country: "BR" },
  { code: "fr", native: "Français", flag: "🇫🇷", country: "FR" },
  { code: "de", native: "Deutsch", flag: "🇩🇪", country: "DE" },
  { code: "it", native: "Italiano", flag: "🇮🇹", country: "IT" },
  { code: "zh", native: "中文", flag: "🇨🇳", country: "CN" },
  { code: "ja", native: "日本語", flag: "🇯🇵", country: "JP" },
  { code: "ko", native: "한국어", flag: "🇰🇷", country: "KR" },
  { code: "ar", native: "العربية", flag: "🇸🇦", country: "SA" },
  { code: "ru", native: "Русский", flag: "🇷🇺", country: "RU" },
  { code: "hi", native: "हिन्दी", flag: "🇮🇳", country: "IN" },
] as const;
export type LanguageCode = typeof LANGUAGES[number]["code"];
export const LANGUAGE_STORAGE_KEY = "motiarzo-language";
export const isLanguage = (value: unknown): value is LanguageCode => LANGUAGES.some(l => l.code === value);
export const normalizeLanguageSearch = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

const searchLocales = [...LANGUAGES.map(l => l.code), "nl", "sv", "tr", "pl", "uk", "he", "el", "id", "vi", "th"];
export function searchLanguages(query: string) {
  const needle = normalizeLanguageSearch(query);
  return LANGUAGES.filter(language => {
    const names = [language.code, language.native, ...searchLocales.map(locale => {
      try { return new Intl.DisplayNames([locale], { type: "language" }).of(language.code) ?? ""; }
      catch { return ""; }
    })];
    return names.some(name => normalizeLanguageSearch(name).includes(needle));
  });
}

const countries: Record<string, LanguageCode> = {
  CL: "es", ES: "es", AR: "es", MX: "es", CO: "es", PE: "es", EC: "es", UY: "es", PY: "es", BO: "es", VE: "es", CR: "es", PA: "es", DO: "es", CU: "es", GT: "es", HN: "es", SV: "es", NI: "es", GQ: "es",
  US: "en", GB: "en", AU: "en", NZ: "en", IE: "en", ZA: "en", NG: "en", PH: "en", SG: "en",
  BR: "pt", PT: "pt", AO: "pt", MZ: "pt", CV: "pt", FR: "fr", SN: "fr", CI: "fr", CD: "fr",
  DE: "de", AT: "de", LI: "de", IT: "it", SM: "it", CN: "zh", TW: "zh", HK: "zh", JP: "ja", KR: "ko",
  SA: "ar", AE: "ar", EG: "ar", MA: "ar", DZ: "ar", TN: "ar", QA: "ar", KW: "ar", JO: "ar", IQ: "ar", RU: "ru", BY: "ru", IN: "hi",
};
export function initialLanguage(saved: unknown, country: string | undefined, browserLanguages: readonly string[]): LanguageCode {
  if (isLanguage(saved)) return saved;
  // Multilingual countries respect the browser rather than assuming a single national language.
  if (country && countries[country.toUpperCase()]) return countries[country.toUpperCase()];
  for (const language of browserLanguages) {
    const code = language.toLowerCase().split("-")[0];
    if (isLanguage(code)) return code;
  }
  return "es";
}