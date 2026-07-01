import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import RightClientSection from "@/views/landing/RightClientSection";
import { CheckCircle2, XCircle, Clock, Sparkles, ArrowLeft } from "lucide-react";
import { type Service, MODALITY_LABELS, MODALITY_COLORS } from "@/models/services";
import { SEGMENTS } from "@/models/segments";
import { SERVICE_PAIN_REFRAME } from "@/models/serviceLandingContent";
import { useLeadForm } from "@/controllers/useLeadForm";

const segmentLabel: Record<string, string> = {
  emprendedores: "Emprendedores",
  pymes: "PyMEs",
  empresas: "Grandes Empresas",
  publico: "Sector Público",
};

interface Props {
  service: Service;
}

const ServicioView = ({ service }: Props) => {
  const { openLeadForm } = useLeadForm();
  const Icon = service.icon;
  const hasTools = !!service.tools && service.tools.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/75 to-background" />
          <div className="hero-orb w-80 h-80 bg-primary/6 top-1/4 -left-24 animate-float" style={{ animationDelay: "0s" }} />
          <div className="hero-orb w-60 h-60 bg-secondary/6 top-1/3 right-0 animate-float" style={{ animationDelay: "2.5s" }} />
          <div className="hero-orb w-44 h-44 bg-primary/4 bottom-0 left-1/2 animate-float-slow" style={{ animationDelay: "1s" }} />
        </div>
        <div className="relative container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground bg-card/90 backdrop-blur-sm border border-border rounded-full px-3.5 py-1.5 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <ScrollReveal variant="scale" className="w-14 h-14 rounded-xl bg-card/90 backdrop-blur-sm border border-border flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </ScrollReveal>
            <ScrollReveal delay={80} className="flex-1">
              <div className="inline-flex flex-wrap items-center gap-2 mb-3 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary">
                  {service.areaLabel}
                </p>
                <span className="text-border">·</span>
                {service.modality.map((m) => (
                  <span
                    key={m}
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${MODALITY_COLORS[m]}`}
                  >
                    {MODALITY_LABELS[m]}
                  </span>
                ))}
              </div>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
                {service.tagline}
              </p>
              <button
                onClick={() => openLeadForm(`servicio-${service.slug}`)}
                className="btn-shimmer inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Agendar diagnóstico
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dolor / Problema */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="mb-8">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              ¿Alguna de estas señales te resulta familiar?
            </h2>
            <p className="text-muted-foreground">
              Antes de seguir leyendo, revisa si tu negocio hoy vive alguna de estas situaciones.
            </p>
          </ScrollReveal>

          <div className="space-y-4 mb-10">
            {service.painPoints.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-foreground/90 leading-relaxed">{SERVICE_PAIN_REFRAME}</p>
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={service.rightClient} />

      {/* Descripción */}
      <section className="py-16 md:py-20 bg-background">
        <ScrollReveal className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            ¿En qué consiste?
          </h2>
          <div className="space-y-5 text-foreground/90 leading-relaxed text-base md:text-lg">
            <p>{service.description}</p>
            <p>{service.approach}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Valor agregado */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Valor agregado
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Esto es lo que nos diferencia de contratar cualquier proveedor técnico suelto.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {service.addedValue.map((v, i) => (
              <ScrollReveal key={v} delay={i * 60} variant="scale">
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <span className="inline-flex w-10 h-10 rounded-lg bg-secondary/10 items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-secondary" />
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed">{v}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              ¿Qué incluye?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <ScrollReveal>
              <ul className="space-y-4">
                {service.includes.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="scale" className="bg-card border border-border rounded-xl p-6 md:w-72">
              <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                ¿En cuánto tiempo?
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">{service.timeFactor}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Herramientas + Segmentos */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className={`grid gap-10 ${hasTools ? "md:grid-cols-2" : ""}`}>
            {hasTools && (
              <ScrollReveal>
                <h2 className="font-heading font-bold text-lg md:text-xl text-foreground mb-4">
                  Herramientas que utilizamos
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {service.tools!.map((t) => (
                    <span
                      key={t}
                      className="bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={hasTools ? 80 : 0}>
              <h2 className="font-heading font-bold text-lg md:text-xl text-foreground mb-4">
                ¿Para quién es?
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {service.segments.map((s) => {
                  const seg = SEGMENTS.find((x) => x.id === s);
                  return (
                    <Link
                      key={s}
                      to={seg ? `/segmentos/${seg.slug}` : "/"}
                      className="bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                      {segmentLabel[s]}
                    </Link>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Satisfacción / El resultado */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-secondary" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                  Así se ve tu negocio después
                </p>
                <p className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug">
                  {service.valuePromise}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Hablamos de tu caso?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y evalúa cómo aplicar {service.shortTitle} a tu negocio.
              </p>
              <button
                onClick={() => openLeadForm(`servicio-${service.slug}`)}
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

export default ServicioView;
