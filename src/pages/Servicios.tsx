import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, ChevronRight, Search, X } from "lucide-react";
import {
  SERVICES,
  AREAS,
  MODALITY_LABELS,
  MODALITY_COLORS,
  type ServiceModality,
  type ServiceArea,
} from "@/data/services";

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
   .replace(/[\u0300-\u036f]/g, "")
   .replace(/[^a-z0-9 ]/g, " ");

const getWords = (q: string) =>
  norm(q).split(" ").filter((w) => w.length > 2 && !STOP_WORDS.has(w));

const scoreService = (slug: string, haystack: string, words: string[]): number => {
  const tags = (SEARCH_TAGS[slug] ?? []).map(norm).join(" ");
  const full = haystack + " " + tags;
  return words.reduce((acc, w) => acc + (full.includes(w) ? 1 : 0), 0);
};

const ALL_MODALITIES: ServiceModality[] = ["consultoria", "asesoria", "mentoria"];

const Servicios = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeModality, setActiveModality] = useState<ServiceModality | null>(null);
  const [activeArea, setActiveArea] = useState<ServiceArea | null>(
    () => (searchParams.get("area") as ServiceArea | null) ?? null
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Servicios | Independencia Digital";
  }, []);

  const clearArea = () => {
    setActiveArea(null);
    setSearchParams({}, { replace: true });
  };

  const q = query.trim();
  const words = getWords(q);
  const isSearching = words.length > 0;

  const filtered = SERVICES
    .filter((s) => {
      if (isSearching) {
        const haystack = norm([s.title, s.navLabel, s.summary, s.areaLabel, ...s.includes].join(" "));
        if (scoreService(s.slug, haystack, words) === 0) return false;
      }
      const matchesModality = !activeModality || s.modality.includes(activeModality);
      const matchesArea = !activeArea || s.area === activeArea;
      return matchesModality && matchesArea;
    })
    .sort((a, b) => {
      if (!isSearching) return 0;
      const ha = norm([a.title, a.navLabel, a.summary, a.areaLabel, ...a.includes].join(" "));
      const hb = norm([b.title, b.navLabel, b.summary, b.areaLabel, ...b.includes].join(" "));
      return scoreService(b.slug, hb, words) - scoreService(a.slug, ha, words);
    });

  const visibleAreas = AREAS.filter((area) =>
    filtered.some((s) => s.area === area.id)
  );

  const activeAreaData = activeArea ? AREAS.find((a) => a.id === activeArea) : null;
  const isFiltering = q.length > 0 || activeModality !== null || activeArea !== null;

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
            Portafolio de <span className="text-primary">servicios</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-10">
            11 soluciones especializadas agrupadas en 5 áreas. Contratables por separado.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar servicio… ej: página web, ciberseguridad, IA"
                className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 shadow-card"
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  className="absolute right-3 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Modality filter chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => setActiveModality(null)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  activeModality === null
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {ALL_MODALITIES.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveModality(activeModality === m ? null : m)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                    activeModality === m
                      ? MODALITY_COLORS[m] + " border-current"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {MODALITY_LABELS[m]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active area banner */}
      {activeAreaData && (
        <div className="bg-primary/5 border-b border-primary/15">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <activeAreaData.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-semibold text-foreground truncate">
                {activeAreaData.label}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:inline truncate">
                — {filtered.length} servicio{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
            <button
              onClick={clearArea}
              className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/70 transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Ver todas las áreas
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {visibleAreas.length === 0 ? (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              No se encontraron servicios
              {q && <> para <strong>"{query}"</strong></>}
              {activeModality && <> con modalidad <strong>{MODALITY_LABELS[activeModality]}</strong></>}
              {activeAreaData && <> en el área <strong>{activeAreaData.label}</strong></>}.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveModality(null); clearArea(); }}
              className="mt-4 text-xs font-semibold text-primary hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        </section>
      ) : (
        visibleAreas.map((area, i) => {
          const list = filtered.filter((s) => s.area === area.id);
          return (
            <section
              key={area.id}
              className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
            >
              <div className="container mx-auto px-4">
                <ScrollReveal className="max-w-3xl mb-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
                    Área {AREAS.indexOf(area) + 1}
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                    {area.label}
                  </h2>
                  <p className="text-muted-foreground">{area.desc}</p>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {list.map((s, j) => {
                    const Icon = s.icon;
                    return (
                      <ScrollReveal key={s.slug} delay={j * 60} variant="scale">
                        <Link
                          to={`/servicios/${s.slug}`}
                          className="group bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                        >
                          <div className="flex items-start justify-between gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-wrap gap-1 justify-end">
                              {s.modality.map((m) => (
                                <span
                                  key={m}
                                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${MODALITY_COLORS[m]}`}
                                >
                                  {MODALITY_LABELS[m]}
                                </span>
                              ))}
                            </div>
                          </div>
                          <h3 className="font-heading font-bold text-base text-foreground mb-2">
                            {s.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                            {s.summary}
                          </p>
                          <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                            Ver servicio
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </span>
                        </Link>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })
      )}

      {/* Count when filtering */}
      {isFiltering && visibleAreas.length > 0 && (
        <div className="py-6 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground">
              {filtered.length} servicio{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}.{" "}
              <button
                onClick={() => { setQuery(""); setActiveModality(null); clearArea(); }}
                className="text-primary font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            </p>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
};

export default Servicios;
