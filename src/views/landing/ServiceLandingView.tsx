import { Navigate } from "react-router-dom";
import { XCircle, Check, Clock } from "lucide-react";
import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import FounderAuthoritySection from "@/views/landing/FounderAuthoritySection";
import RightClientSection from "@/views/landing/RightClientSection";
import LeadFormDialogView from "@/views/landing/LeadFormDialogView";
import { getServiceBySlug } from "@/models/services";
import { METHOD_STEPS } from "@/models/generalLandingContent";
import { SERVICE_LANDING_WISTIA_ID, SERVICE_PAIN_REFRAME } from "@/models/serviceLandingContent";
import { useLandingController } from "@/controllers/landing/useLandingController";

interface ServiceLandingViewProps {
  slug: string;
}

const ServiceLandingView = ({ slug }: ServiceLandingViewProps) => {
  const service = getServiceBySlug(slug);

  // Hooks deben llamarse siempre: si no existe el servicio, igual inicializamos
  // el controller antes de decidir el redirect.
  const { leadOpen, setLeadOpen } = useLandingController(
    service ? `${service.title} | Independencia Digital` : "Independencia Digital"
  );

  if (!service) return <Navigate to="/landing" replace />;

  const openLead = () => setLeadOpen(true);
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader onCtaClick={openLead} />

      {/* Hero */}
      <section className="gradient-hero pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            {service.areaLabel}, Independencia Digital
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            {service.tagline}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {service.summary}
          </p>
          <LandingCtaButton onClick={openLead} className="btn-shimmer" />
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={SERVICE_LANDING_WISTIA_ID} />
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

          <div className="space-y-4 max-w-2xl mx-auto">
            {service.painPoints.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed mb-8">{SERVICE_PAIN_REFRAME}</p>
            <LandingCtaButton onClick={openLead} />
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={service.rightClient} />

      {/* Nutrir: quién está detrás */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              ¿Quién está detrás de Independencia Digital?
            </h2>
          </ScrollReveal>

          <FounderAuthoritySection />

          <ScrollReveal className="mt-14 max-w-2xl mx-auto text-center" variant="up">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Cómo lo hacemos
            </p>
            <p className="text-foreground/90 leading-relaxed">{service.description}</p>
          </ScrollReveal>

          <div className="text-center mt-12">
            <LandingCtaButton onClick={openLead} />
          </div>
        </div>
      </section>

      {/* Método / Qué incluye */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Qué incluye {service.shortTitle.toLowerCase()}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cuatro pasos, sin letra chica. No necesitas contratarlo todo de una vez: empezamos por lo
              que resuelve tu situación más urgente.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-3">
                Qué incluye
              </p>
              <ul className="space-y-2.5">
                {service.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90 leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-primary" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                ¿En cuánto tiempo?
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">{service.timeFactor}</p>
            </div>
          </div>

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

      {/* Satisfacción / El resultado */}
      <section className="py-16 md:py-24 bg-background">
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

      <LeadFormDialogView open={leadOpen} onOpenChange={setLeadOpen} source={`landing-servicio-${slug}`} />
    </div>
  );
};

export default ServiceLandingView;
