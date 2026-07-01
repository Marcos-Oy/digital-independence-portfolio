import { SERVICES, SEARCH_TAGS } from "@/models/services";
import { SEGMENTS } from "@/models/segments";

export interface SearchResult {
  label: string;
  sublabel: string;
  href: string;
  type: "servicio" | "segmento" | "pagina";
}

export const TYPE_LABEL: Record<SearchResult["type"], string> = {
  servicio: "Servicio",
  segmento: "Segmento",
  pagina: "Página",
};

const STATIC_PAGES: SearchResult[] = [
  { label: "Inicio", sublabel: "Página principal", href: "/", type: "pagina" },
  { label: "Portafolio de servicios", sublabel: "Todos los servicios", href: "/servicios", type: "pagina" },
  { label: "Fundador", sublabel: "Marcos Oyarzo — Director", href: "/fundador", type: "pagina" },
  { label: "Contacto", sublabel: "Escríbenos o agenda un diagnóstico", href: "/#contacto", type: "pagina" },
];

const ALL_RESULTS: SearchResult[] = [
  ...SERVICES.map((s) => ({
    label: s.title,
    sublabel: s.summary ?? s.tagline ?? "",
    href: `/servicios/${s.slug}`,
    type: "servicio" as const,
  })),
  ...SEGMENTS.map((s) => ({
    label: s.title,
    sublabel: s.description.slice(0, 80) + "…",
    href: `/segmentos/${s.slug}`,
    type: "segmento" as const,
  })),
  ...STATIC_PAGES,
];

const normS = (s: string) =>
  s.toLowerCase()
   .replace(/[aáàä]/g, "a").replace(/[eéèë]/g, "e")
   .replace(/[iíìï]/g, "i").replace(/[oóòö]/g, "o")
   .replace(/[uúùü]/g, "u").replace(/n/g, "n")
   .replace(/[^a-z0-9 ]/g, " ");

const getHaystack = (r: SearchResult): string => {
  const base = normS(r.label + " " + r.sublabel);
  const slug = r.href.split("/servicios/")[1] ?? "";
  const tags = slug ? (SEARCH_TAGS[slug] ?? []).map(normS).join(" ") : "";
  return base + " " + tags;
};

export const searchAll = (q: string): SearchResult[] => {
  const norm = normS(q.trim());
  if (norm.length < 2) return [];
  const words = norm.split(" ").filter((w) => w.length > 1);
  if (words.length === 0) return [];
  return ALL_RESULTS.filter((r) => {
    const hay = getHaystack(r);
    return words.some((w) => hay.includes(w));
  }).sort((a, b) => {
    const ha = getHaystack(a);
    const hb = getHaystack(b);
    const sa = words.reduce((acc, w) => acc + (ha.includes(w) ? 1 : 0), 0);
    const sb = words.reduce((acc, w) => acc + (hb.includes(w) ? 1 : 0), 0);
    return sb - sa;
  });
};
