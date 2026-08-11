import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import RightClientSection from "@/views/landing/RightClientSection";
import ServiceAccordionList from "@/views/landing/ServiceAccordionList";
import { XCircle } from "lucide-react";
import { AREAS, SERVICES, type ServiceArea } from "@/models/services";
import { AREA_LANDING_CONTENT } from "@/models/areaLandingContent";
import { METHOD_STEPS } from "@/models/generalLandingContent";
import { AREA_VISUALS } from "@/models/areaVisuals";
import { useLandingController } from "@/controllers/landing/useLandingController";
import { SoftBlob, AccentBlob, LayeredWaveDivider, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import ScrollContextIcon from "@/views/shared/ScrollContextIcon";
import TypewriterText from "@/views/shared/TypewriterText";

interface AreaLandingViewProps {
  area: ServiceArea;
}

const AreaLandingView = ({ area }: AreaLandingViewProps) => {
  const areaInfo = AREAS.find((a) => a.id === area)!;
  const content = AREA_LANDING_CONTENT[area];
  const areaServices = SERVICES.filter((s) => s.area === area);
  const areaVisual = AREA_VISUALS[area];

  useLandingController(`${areaInfo.label} | Independencia Digital`);

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />

      {/* Hero */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={areaVisual.icon}
          mode={areaVisual.mode}
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={3} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text={content.eyebrow} speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            {content.headline}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {content.subtext}
          </p>
          <LandingCtaButton className="btn-shimmer" />
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={content.wistiaMediaId} />
        </ScrollReveal>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Dolor / Problema */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={4} color="primary" className="w-72 h-96 -top-16 -right-24" />
        <div className="relative container mx-auto px-4 max-w-4xl">
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
            <LandingCtaButton />
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={content.rightClient} />

      {/* Detalle por servicio */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={5} className="w-80 h-64 -bottom-12 -left-24" />
        <div className="relative container mx-auto px-4 max-w-4xl">
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
            <LandingCtaButton />
          </div>
        </div>
      </section>

      {/* El Método */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={6} color="secondary" className="w-72 h-80 -top-16 -right-24" />
        <div className="relative container mx-auto px-4 max-w-5xl">
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
            <LandingCtaButton />
          </div>
        </div>
        <LayeredWaveDivider seed={2} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* Satisfacción / Beneficios */}
      <section className="relative py-16 md:py-24 bg-muted/50 overflow-hidden">
        <SparkleDots color="secondary" className="absolute w-48 h-48 top-[6%] left-[6%] text-secondary" />
        <GlowOrb color="secondary" className="absolute w-9 h-9 md:w-11 md:h-11 bottom-[10%] right-[8%]" />
        <div className="relative container mx-auto px-4 max-w-5xl">
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
        <LayeredWaveDivider seed={3} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* CTA final */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <SoftBlob shape={3} color="secondary" className="w-72 h-56 -top-16 -left-16" />
        <SoftBlob shape={2} color="primary" className="w-64 h-72 -bottom-20 -right-20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Conversamos sobre tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y encuentra el punto de partida ideal para tu caso.
              </p>
              <LandingCtaButton />
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default AreaLandingView;
