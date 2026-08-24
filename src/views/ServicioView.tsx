import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import {
  CheckCircle2,
  Target,
  TrendingUp,
  ChevronDown,
  ShieldCheck,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { type Service, MODALITY_LABELS, MODALITY_COLORS } from "@/models/services";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import { FAQS } from "@/models/faq";
import { SERVICE_DESCRIPTIONS } from "@/models/serviceDescriptionContent";

const TRUST_SIGNALS = [
  { icon: ShieldCheck, title: "Confidencialidad", desc: "Tu información se maneja con reserva en cada etapa del proyecto." },
  { icon: Handshake, title: "Trato directo", desc: "Trabajas con quien ejecuta, sin intermediarios ni tercerización." },
  { icon: MessageCircle, title: "Comunicación clara", desc: "Explicamos cada paso en lenguaje simple, sin tecnicismos innecesarios." },
];

interface Props {
  service: Service;
}

const CtaButton = ({ label }: { label: string }) => (
  <button
    className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200`}
  >
    {label}
    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
  </button>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">{children}</p>
);

const ServicioView = ({ service }: Props) => {
  const Icon = service.icon;
  const content = SERVICE_DESCRIPTIONS[service.slug];

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
        </div>
        <div className="relative container mx-auto px-4">
          <Link
            to="/#servicios"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary border border-border/60 hover:border-primary/50 bg-card/50 backdrop-blur-sm rounded-full pl-3.5 pr-4 py-2 mb-8 transition-all duration-300 hover:shadow-card"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Volver a Servicios
          </Link>

          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                {service.areaLabel}
              </p>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-3 leading-relaxed">
                {service.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.modality.map((m) => (
                  <span
                    key={m}
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${MODALITY_COLORS[m]}`}
                  >
                    {MODALITY_LABELS[m]}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <CtaButton label="Agendar diagnóstico" />
                <Link
                  to="/#servicios"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80} variant="scale" className="hidden md:flex w-40 h-40 rounded-2xl bg-card border border-border items-center justify-center shrink-0">
              <Icon className="w-16 h-16 text-primary" strokeWidth={1.3} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 1. Información sobre el servicio */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <SectionLabel>Información del servicio</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              {service.title} en términos simples
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg">
              {content.info.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Cobertura */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="mb-10">
            <SectionLabel>Cobertura</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Qué incluye este servicio
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-4xl">
              {content.coverage.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Hook */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto text-center">
            <p className="font-heading font-bold text-xl md:text-3xl text-foreground leading-snug">
              {content.hook}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Dolor */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="mb-10">
            <SectionLabel>¿Cuándo puedes necesitarlo?</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Situaciones frecuentes
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {content.pain.map((p, i) => (
              <div key={p} className="bg-card p-6 md:p-7">
                <span className="font-heading font-extrabold text-2xl text-border leading-none block mb-3 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Problema */}
      <section className="py-16 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">El problema</p>
            <p className="text-lg md:text-2xl font-heading font-semibold leading-snug">
              {content.problem}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Solución */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="mb-10">
            <SectionLabel>Nuestra solución</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Cómo lo resolvemos
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {content.solution.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 60} variant="scale">
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <span className="inline-flex w-10 h-10 rounded-lg bg-secondary/10 items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Satisfacción */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <SectionLabel>Así se ve tu negocio después</SectionLabel>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">{content.satisfaction}</p>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-4">
                Elementos de confianza
              </p>
              <div className="space-y-4">
                {TRUST_SIGNALS.map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <span className="inline-flex w-9 h-9 rounded-lg bg-primary/10 items-center justify-center shrink-0">
                      <t.icon className="w-[18px] h-[18px] text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. Llamada a la acción (con FAQ como manejo de objeciones previo) */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="mb-8 text-center">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Dudas habituales antes de agendar
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <ScrollReveal key={f.q}>
                <details className="group bg-card border border-border rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-foreground text-sm md:text-base">
                    {f.q}
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto text-center">
            <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
              <Target className="w-5 h-5 text-secondary" />
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              {content.ctaQuestion}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
              Agenda un diagnóstico sin costo y evalúa cómo aplicar {service.shortTitle} a tu negocio.
            </p>
            <CtaButton label="Agendar diagnóstico" />
          </ScrollReveal>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default ServicioView;
