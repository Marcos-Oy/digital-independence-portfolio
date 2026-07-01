import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FilePlus2 } from "lucide-react";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { LANDINGS } from "@/models/landings";

const STATUS_LABEL: Record<string, string> = {
  activa: "Activa",
  borrador: "Borrador",
};

const LandingHubView = () => {
  useEffect(() => {
    document.title = "Landing Pages | Independencia Digital";
  }, []);

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
          <p className="text-lg text-muted-foreground max-w-2xl">
            Páginas de captación independientes, cada una enfocada en una oferta u oportunidad puntual.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {LANDINGS.map((l, i) => (
              <ScrollReveal key={l.slug} delay={i * 60} variant="scale">
                <Link
                  to={`/landing/${l.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                >
                  <span className="self-start text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-2.5 py-1 mb-4">
                    {STATUS_LABEL[l.status]}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                    {l.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{l.summary}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                    Ver landing
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={LANDINGS.length * 60} variant="scale">
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
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default LandingHubView;
