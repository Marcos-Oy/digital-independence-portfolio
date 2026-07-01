import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import FounderAuthoritySection from "@/views/landing/FounderAuthoritySection";
import ServiceAccordionList from "@/views/landing/ServiceAccordionList";
import LeadFormDialogView from "@/views/landing/LeadFormDialogView";
import { XCircle } from "lucide-react";
import { AREAS, SERVICES, type ServiceArea } from "@/models/services";
import { AREA_LANDING_CONTENT } from "@/models/areaLandingContent";
import { METHOD_STEPS } from "@/models/generalLandingContent";
import { useLandingController } from "@/controllers/landing/useLandingController";

interface AreaLandingViewProps {
  area: ServiceArea;
}

const AreaLandingView = ({ area }: AreaLandingViewProps) => {
  const areaInfo = AREAS.find((a) => a.id === area)!;
  const content = AREA_LANDING_CONTENT[area];
  const areaServices = SERVICES.filter((s) => s.area === area);

  const { leadOpen, setLeadOpen } = useLandingController(`${areaInfo.label} | Independencia Digital`);
  const openLead = () => setLeadOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader onCtaClick={openLead} />

      {/* Hero */}
      <section className="gradient-hero pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            {content.eyebrow}
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            {content.headline}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {content.subtext}
          </p>
          <LandingCtaButton onClick={openLead} className="btn-shimmer" />
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={content.wistiaMediaId} />
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
            {areaServices.map((s) => (
              <div key={s.slug} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{s.painPoints[0]}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed mb-8">{content.painReframe}</p>
            <LandingCtaButton onClick={openLead} />
          </ScrollReveal>
        </div>
      </section>

      {/* Nutrir: quién está detrás */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              ¿Quién está detrás de Independencia Digital?
            </h2>
          </ScrollReveal>

          <FounderAuthoritySection />

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
              Qué hacemos exactamente en {areaInfo.label.toLowerCase()}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{areaInfo.desc}</p>
          </ScrollReveal>

          <ScrollReveal variant="up">
            <ServiceAccordionList services={areaServices} />
          </ScrollReveal>

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
            {areaServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.slug} delay={i * 60} variant="scale">
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <span className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-secondary" />
                    </span>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.valuePromise}</p>
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

      <LeadFormDialogView open={leadOpen} onOpenChange={setLeadOpen} source={`landing-${area}`} />
    </div>
  );
};

export default AreaLandingView;
