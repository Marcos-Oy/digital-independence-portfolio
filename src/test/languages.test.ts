import { googleTranslationValue, readGoogleLanguage } from "@/lib/googleTranslate";
import { describe, expect, it } from "vitest";
import { LANGUAGES, initialLanguage, searchLanguages } from "@/lib/languages";
describe("language selection rules", () => {
  it("finds English when searched in Spanish", () => expect(searchLanguages("inglés").map(l => l.code)).toContain("en"));
  it("finds Spanish when searched in English", () => expect(searchLanguages("Spanish").map(l => l.code)).toContain("es"));
  it("finds German when searched in French", () => expect(searchLanguages("allemand").map(l => l.code)).toContain("de"));
  it("finds Portuguese without accents", () => expect(searchLanguages("portugues").map(l => l.code)).toContain("pt"));
  it("country selects Portuguese in Brazil", () => expect(initialLanguage(null, "BR", ["en-US"])).toBe("pt"));
  it("country selects Spanish in Chile", () => expect(initialLanguage(null, "CL", ["en-US"])).toBe("es"));
  it("manual choice overrides country", () => expect(initialLanguage("fr", "CL", ["es-CL"])).toBe("fr"));
  it("browser language is fallback when country fails", () => expect(initialLanguage(null, undefined, ["de-DE"])).toBe("de"));
  it("unsupported countries and languages fall back to Spanish", () => expect(initialLanguage(null, "XX", ["xx-XX"])).toBe("es"));
});
describe("Google Translate selection", () => {
  it("offers 25 languages", () => expect(LANGUAGES).toHaveLength(25));
  it("finds German in Chinese", () => expect(searchLanguages("德语").map(l => l.code)).toContain("de"));
  it("finds English in English", () => expect(searchLanguages("English").map(l => l.code)).toContain("en"));
  it("recognizes names in each of the 25 languages", () => {
    for (const locale of LANGUAGES) {
      const name = new Intl.DisplayNames([locale.code], { type: "language" }).of("de");
      expect(searchLanguages(name ?? "").map(item => item.code)).toContain("de");
    }
  });
  it("writes English cookie as /es/en", () => expect(googleTranslationValue("en")).toBe("/es/en"));
  it("uses Google's simplified Chinese code", () => expect(googleTranslationValue("zh")).toBe("/es/zh-CN"));
  it("reads the chosen English language", () => expect(readGoogleLanguage("other=x; googtrans=/es/en")).toBe("en"));
  it("reads encoded Chinese cookies", () => expect(readGoogleLanguage("googtrans=%2Fes%2Fzh-CN")).toBe("zh"));
  it("rejects unsupported cookies", () => expect(readGoogleLanguage("googtrans=/es/xx")).toBeNull());
  it("returns to Spanish with /es/es", () => expect(googleTranslationValue("es")).toBe("/es/es"));
});
