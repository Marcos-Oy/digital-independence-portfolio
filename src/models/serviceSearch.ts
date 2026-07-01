import { SERVICES, SEARCH_TAGS, type ServiceModality, type ServiceArea } from "@/models/services";

export const ALL_MODALITIES: ServiceModality[] = ["consultoria", "asesoria", "mentoria"];

const STOP_WORDS = new Set([
  "quiero", "necesito", "para", "mi", "empresa", "tengo", "como", "que", "es",
  "un", "una", "el", "la", "los", "las", "de", "del", "con", "en", "y", "o",
  "a", "se", "nos", "me", "te", "le", "lo", "su", "sus", "hay", "hacer",
  "tener", "ser", "ver", "mas", "pero", "si", "no", "por", "al", "les",
  "algo", "muy", "bien", "mal", "sin",
]);

const norm = (s: string) =>
  s.toLowerCase()
   .normalize("NFD")
   .replace(/[̀-ͯ]/g, "")
   .replace(/[^a-z0-9 ]/g, " ");

export const getWords = (q: string) =>
  norm(q).split(" ").filter((w) => w.length > 2 && !STOP_WORDS.has(w));

const scoreService = (slug: string, haystack: string, words: string[]): number => {
  const tags = (SEARCH_TAGS[slug] ?? []).map(norm).join(" ");
  const full = haystack + " " + tags;
  return words.reduce((acc, w) => acc + (full.includes(w) ? 1 : 0), 0);
};

export interface ServiceFilters {
  query: string;
  modality: ServiceModality | null;
  area: ServiceArea | null;
}

export const filterAndSortServices = ({ query, modality, area }: ServiceFilters) => {
  const q = query.trim();
  const words = getWords(q);
  const isSearching = words.length > 0;

  const filtered = SERVICES
    .filter((s) => {
      if (isSearching) {
        const haystack = norm([s.title, s.navLabel, s.summary, s.areaLabel, ...s.includes].join(" "));
        if (scoreService(s.slug, haystack, words) === 0) return false;
      }
      const matchesModality = !modality || s.modality.includes(modality);
      const matchesArea = !area || s.area === area;
      return matchesModality && matchesArea;
    })
    .sort((a, b) => {
      if (!isSearching) return 0;
      const ha = norm([a.title, a.navLabel, a.summary, a.areaLabel, ...a.includes].join(" "));
      const hb = norm([b.title, b.navLabel, b.summary, b.areaLabel, ...b.includes].join(" "));
      return scoreService(b.slug, hb, words) - scoreService(a.slug, ha, words);
    });

  return { filtered, isSearching, query: q };
};
