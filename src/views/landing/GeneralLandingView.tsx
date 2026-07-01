import { XCircle } from "lucide-react";
import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import FounderAuthoritySection from "@/views/landing/FounderAuthoritySection";
import RightClientSection from "@/views/landing/RightClientSection";
import ServiceAccordionList from "@/views/landing/ServiceAccordionList";
import LeadFormDialogView from "@/views/landing/LeadFormDialogView";
import { AREAS, SERVICES } from "@/models/services";
import {
  PAIN_POINTS,
  PAIN_REFRAME,
  GENERAL_RIGHT_CLIENT,
  METHOD_STEPS,
  BENEFITS,
} from "@/models/generalLandingContent";
import { useLandingController } from "@/controllers/landing/useLandingController";

const GeneralLandingView = () => {
  const { leadOpen, setLeadOpen } = useLandingController("Independencia Digital | Diagnóstico gratuito");
  const openLead = () => setLeadOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader onCtaClick={openLead} />

      {/* Hero */}
      <section className="gradient-hero pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Plan 360, Independencia Digital
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Ordena tu tecnología, protege tu negocio y hazlo crecer
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diagnóstico, arquitectura TI, ciberseguridad, automatización e IA para PyMEs, empresas y
            organismos públicos en Chile.
          </p>
          <LandingCtaButton onClick={openLead} className="btn-shimmer" />
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId="68c4rkopry" />
        </ScrollReveal>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Dolor / Problema */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
              ¿Alguna de estas señales te resulta familiar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Antes de agendar, revisa si tu negocio hoy vive alguna de estas situaciones.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {PAIN_POINTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed mb-8">{PAIN_REFRAME}</p>
            <LandingCtaButton onClick={openLead} />
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={GENERAL_RIGHT_CLIENT} />

      {/* Nutrir: quién está detrás */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              ¿Quién está detrás de Independencia Digital?
            </h2>
          </ScrollReveal>

          <FounderAuthoritySection />

          {/* 5 áreas de servicio */}
          <ScrollReveal className="mt-14" variant="up">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-6">
              Todo lo que podemos ordenar contigo
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {AREAS.map((area) => (
                <div key={area.id} className="bg-card border border-border rounded-xl p-5 h-full">
                  <area.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="font-heading font-bold text-sm text-foreground mb-1.5 leading-snug">
                    {area.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="text-center mt-12">
            <LandingCtaButton onClick={openLead} />
          </div>
        </div>
      </section>

      {/* Detalle por servicio */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Qué hacemos exactamente en cada servicio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              15 soluciones agrupadas en 5 áreas. Abre la que te interesa: el problema que resuelve, qué
              hacemos y qué obtienes.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {AREAS.map((area) => (
              <ScrollReveal key={area.id} variant="up">
                <div className="flex items-center gap-2.5 mb-3">
                  <area.icon className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">
                    {area.label}
                  </h3>
                </div>
                <ServiceAccordionList services={SERVICES.filter((s) => s.area === area.id)} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <LandingCtaButton onClick={openLead} />
          </div>
        </div>
      </section>

      {/* El Método */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              El método: Plan 360
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cuatro pasos, sin letra chica. No necesitas contratarlo todo de una vez: empezamos por lo
              que resuelve tu situación más urgente.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {METHOD_STEPS.map((step) => (
              <ScrollReveal key={step.n} variant="scale" className="h-full">
                <div className="bg-card p-7 h-full">
                  <span className="font-heading font-extrabold text-3xl text-border leading-none block mb-4 select-none">
                    {step.n}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <LandingCtaButton onClick={openLead} />
          </div>
        </div>
      </section>

      {/* Satisfacción / Beneficios */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Así se ve tu negocio después
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              El mismo negocio, con la tecnología resuelta.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <ScrollReveal key={b.title} delay={i * 60} variant="scale">
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <span className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-secondary" />
                    </span>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Conversamos sobre tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y encuentra el punto de partida ideal para tu caso.
              </p>
              <LandingCtaButton onClick={openLead} />
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />

      <LeadFormDialogView open={leadOpen} onOpenChange={setLeadOpen} source="landing-general" />
    </div>
  );
};

export default GeneralLandingView;
