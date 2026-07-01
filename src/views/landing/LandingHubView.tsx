import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FilePlus2, Search, X, Copy, Check } from "lucide-react";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { useLandingHubController } from "@/controllers/landing/useLandingHubController";

const STATUS_LABEL: Record<string, string> = {
  activa: "Activa",
  borrador: "Borrador",
};

const LandingHubView = () => {
  const { query, setQuery, filtered, copiedSlug, copyLink } = useLandingHubController();

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
            Landing <span className="text-primary">pages</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Páginas de captación independientes, cada una enfocada en una oferta u oportunidad puntual.
          </p>

          <div className="max-w-md relative flex items-center">
            <Search className="absolute left-4 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar landing…"
              className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 shadow-card"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground">
              No hay landing pages que coincidan con "{query}".
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {filtered.map((l, i) => (
                <ScrollReveal key={l.slug} delay={i * 60} variant="scale">
                  <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <span className="self-start text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-2.5 py-1">
                        {STATUS_LABEL[l.status]}
                      </span>
                      <button
                        onClick={() => copyLink(l.slug)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground hover:text-primary border border-border hover:border-primary/40 rounded-full px-2.5 py-1 transition-colors shrink-0"
                      >
                        {copiedSlug === l.slug ? (
                          <>
                            <Check className="w-3 h-3" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar enlace
                          </>
                        )}
                      </button>
                    </div>
                    <Link to={`/landing/${l.slug}`} className="flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                        {l.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{l.summary}</p>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                        Ver landing
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}

              {!query && (
                <ScrollReveal delay={filtered.length * 60} variant="scale">
                  <div className="border border-dashed border-border rounded-xl p-6 flex flex-col h-full items-start justify-center text-center sm:text-left">
                    <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-4">
                      <FilePlus2 className="w-4 h-4 text-muted-foreground" />
                    </span>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2">
                      Próxima landing
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Aún no publicada. Nuevas landing pages aparecerán aquí a medida que se creen.
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          )}
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default LandingHubView;
