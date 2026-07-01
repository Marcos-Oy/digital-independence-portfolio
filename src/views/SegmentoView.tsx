import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { type Segment } from "@/models/segments";
import { getServiceBySlug, MODALITY_LABELS, MODALITY_COLORS } from "@/models/services";
import { useLeadForm } from "@/controllers/useLeadForm";

interface Props {
  segment: Segment;
}

const SegmentoView = ({ segment }: Props) => {
  const { openLeadForm } = useLeadForm();
  const Icon = segment.icon;
  const services = segment.recommendedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-80 h-80 bg-secondary/6 top-1/4 -left-20 animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-44 h-44 bg-secondary/4 bottom-0 left-1/3 animate-float-slow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="relative container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ScrollReveal variant="scale" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </ScrollReveal>
            <ScrollReveal delay={80} className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Segmento
              </p>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
                {segment.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                {segment.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ficha */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal variant="scale" className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { label: "Tipo de cliente", value: segment.audience },
              { label: "Tamaño en Chile", value: segment.size },
              { label: "Ticket promedio", value: segment.ticket },
              { label: "Puerta de entrada", value: segment.entryPoint },
            ].map((f) => (
              <div key={f.label} className="bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-1.5">
                  {f.label}
                </p>
                <p className="text-sm md:text-base text-foreground font-medium leading-snug">{f.value}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Servicios recomendados */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Servicios recomendados
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Qué hacemos por {segment.shortTitle.toLowerCase()}
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => {
              if (!s) return null;
              const SIcon = s.icon;
              return (
                <ScrollReveal key={s.slug} delay={i * 60} variant="scale">
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                        <SIcon className="w-5 h-5 text-primary" />
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
                    <h3 className="font-heading font-bold text-base text-foreground mb-2">{s.title}</h3>
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Listo para conversar?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Te respondemos personalmente para entender tu caso y proponerte una hoja de ruta.
              </p>
              <button
                onClick={() => openLeadForm(`segmento-${segment.slug}`)}
                className="btn-shimmer inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Agendar diagnóstico
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default SegmentoView;
