import { describe, expect, it } from "vitest";
import { initialLanguage, searchLanguages } from "@/lib/languages";
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