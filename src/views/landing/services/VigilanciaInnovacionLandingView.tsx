import {
  Brain,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Crosshair,
  FileText,
  Filter,
  Layers,
  Radar,
  Scale,
  Target,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import PageMeta from "@/views/shared/PageMeta";
import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import RightClientSection from "@/views/landing/RightClientSection";
import { getServiceLandingWistiaId } from "@/models/serviceLandingContent";
import { useLandingController } from "@/controllers/landing/useLandingController";
import { SoftBlob, AccentBlob, LayeredWaveDivider, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import ScrollContextIcon from "@/views/shared/ScrollContextIcon";
import TypewriterText from "@/views/shared/TypewriterText";
import viInfoxicacion from "@/assets/vigilancia-infoxicacion.jpg";
import viRadar from "@/assets/vigilancia-radar.jpg";
import viResultado from "@/assets/vigilancia-resultado.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "Te enteras de que existía una herramienta o tendencia relevante cuando ya perdiste la ventaja de ser el primero.",
  "Decides sobre tecnología con la opinión de alguien del equipo, no con información estructurada.",
  "Tu competencia adopta una nueva plataforma o tecnología, y te enteras por casualidad, meses después.",
  "No tienes un radar que te avise de cambios regulatorios que podrían afectar tu operación.",
  "Tu equipo no tiene tiempo de monitorear el entorno, porque está ocupado dirigiendo el negocio día a día.",
  "Sabes que hay demasiada información dando vueltas, pero no tienes cómo distinguir qué es relevante para ti.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, el problema no es falta de información: es que nadie está filtrando, priorizando y traduciendo esa información en algo que puedas usar para decidir.";

const RIGHT_CLIENT_TEXT =
  "Gerentes y equipos directivos que toman decisiones tecnológicas y estratégicas, y que necesitan información estructurada sobre su entorno, no una opinión aislada ni una alerta cuando ya es tarde.";

interface RootCause {
  icon: typeof Clock;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Layers,
    title: "Demasiada información",
    desc: "La cantidad hace difícil distinguir lo relevante de lo accesorio.",
  },
  {
    icon: Zap,
    title: "Cambios demasiado rápidos",
    desc: "Una tecnología puede pasar de emergente a competitiva en poco tiempo.",
  },
  {
    icon: Crosshair,
    title: "Competencia en movimiento",
    desc: "Tus competidores pueden estar adoptando herramientas o estrategias antes que tú.",
  },
];

interface SolutionConcept {
  icon: typeof Cpu;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Cpu,
    title: "Vigilancia tecnológica",
    desc: "Identificamos tecnologías emergentes con relevancia real para tu negocio.",
  },
  {
    icon: Crosshair,
    title: "Inteligencia competitiva",
    desc: "Monitoreamos señales públicas sobre tus competidores actuales y potenciales.",
  },
  {
    icon: TrendingUp,
    title: "Vigilancia de mercado",
    desc: "Seguimos tendencias, nuevos modelos de negocio y canales emergentes.",
  },
  {
    icon: Scale,
    title: "Vigilancia regulatoria",
    desc: "Identificamos cambios normativos relevantes para tu sector.",
  },
];

const INCLUDES = [
  "Informe mensual de tendencias",
  "Monitoreo de competencia digital",
  "Alertas de seguridad y regulación",
  "Identificación de tecnologías emergentes",
  "Recomendaciones de implementación priorizadas",
];

interface MethodStep {
  n: string;
  icon: typeof Target;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: Target,
    title: "Definición",
    desc: "Identificamos qué necesitas vigilar y definimos los factores críticos.",
  },
  {
    n: "02",
    icon: Radar,
    title: "Monitoreo",
    desc: "Seguimos continuamente las fuentes y señales definidas.",
  },
  {
    n: "03",
    icon: Filter,
    title: "Análisis",
    desc: "Filtramos, contextualizamos y priorizamos las señales relevantes.",
  },
  {
    n: "04",
    icon: FileText,
    title: "Entrega",
    desc: "Convertimos la información en un informe ejecutivo mensual, listo para decidir.",
  },
];

interface Benefit {
  icon: typeof Clock;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Te enteras a tiempo, no después",
    desc: "Detección temprana de tendencias y tecnologías relevantes para tu sector.",
  },
  {
    icon: Brain,
    title: "Decides con información, no con opinión",
    desc: "Un informe ejecutivo mensual estructurado, no una alerta suelta.",
  },
  {
    icon: Crosshair,
    title: "Sabes qué está haciendo tu competencia",
    desc: "Seguimiento de movimientos digitales relevantes, con información pública y legítima.",
  },
  {
    icon: Scale,
    title: "Un radar regulatorio activo",
    desc: "Alertas sobre cambios normativos que podrían afectar tu operación.",
  },
];

interface TrustPoint {
  icon: typeof Filter;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Filter,
    title: "Relevancia",
    desc: "Filtramos según los objetivos definidos para tu organización.",
  },
  {
    icon: Compass,
    title: "Contexto",
    desc: "Una noticia aislada no siempre significa una oportunidad o amenaza.",
  },
  {
    icon: Zap,
    title: "Acción",
    desc: "Buscamos que la información ayude a decidir qué observar, evaluar o hacer.",
  },
];

const PROMISE_TEXT =
  "Un informe ejecutivo mensual con las señales que realmente importan: tendencias de tu sector, movimientos de tu competencia, cambios regulatorios y tecnologías emergentes, priorizados para que decidas con criterio.";

/* ------------------------------ view ------------------------------ */

const VigilanciaInnovacionLandingView = () => {
  useLandingController("Vigilancia e Innovación Tecnológica | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Vigilancia e Innovación Tecnológica | Independencia Digital"
        description="Monitoreamos tecnología, competencia, mercado y entorno regulatorio, y te entregamos un informe ejecutivo mensual para que decidas con información, no con suposiciones."
        path="/landing/servicio/vigilancia-innovacion"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Radar}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Vigilancia e Innovación Tecnológica, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Cuando te enteras de una tendencia importante, tu competencia probablemente
            ya la vio hace meses.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Monitoreamos tecnología, competencia, mercado y entorno regulatorio, y te
            entregamos inteligencia estructurada cada mes, para que decidas con
            información, no con suposiciones.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("vigilancia-innovacion")} />
        </ScrollReveal>

        <div className="relative container mx-auto px-4 text-center mt-8">
          <LandingCtaButton className="btn-shimmer" />
          <p className="text-xs text-muted-foreground mt-4">Diagnóstico sin costo · Sin compromiso</p>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* ============ DOLOR ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={2} color="primary" className="w-72 h-96 -top-16 -right-24" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
              ¿Alguna de estas señales te resulta familiar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Antes de agendar, revisa si tu negocio hoy vive alguna de estas situaciones.
            </p>
          </ScrollReveal>

          <div className="space-y-4 max-w-2xl mx-auto">
            {PAIN_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed mb-8">{PAIN_REFRAME}</p>
            <LandingCtaButton />
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={RIGHT_CLIENT_TEXT} />

      {/* ============ PROBLEMA ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={5} className="w-64 h-64 -bottom-16 -left-20" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Por qué pasa esto
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Información hay de sobra. Lo difícil es saber qué importa
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Noticias, nuevas tecnologías, movimientos de competidores, cambios
                regulatorios y tendencias aparecen todos los días. El problema no es
                acceder a información: es filtrarla, contextualizarla y traducirla en algo
                accionable antes de que la ventana de oportunidad se cierre. Sin un
                proceso estructurado, la información relevante se pierde entre cientos de
                señales irrelevantes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={viInfoxicacion}
                alt="Sobrecarga de información digital siendo filtrada hacia unas pocas señales estratégicas relevantes"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {ROOT_CAUSES.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 90}>
                <div className="text-center">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4 mx-auto">
                    <c.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <LayeredWaveDivider seed={1} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ SOLUCIÓN - qué hacemos y qué cubre ============ */}
      <section id="que-hacemos" className="relative py-16 md:py-24 bg-muted/50 overflow-hidden scroll-mt-20">
        <SoftBlob shape={6} color="secondary" className="w-72 h-64 -top-14 -right-20" />
        <AccentBlob shape={1} className="hidden md:block w-9 h-12 bottom-12 left-[6%] opacity-70" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal variant="scale" className="order-last lg:order-first">
              <img
                src={viRadar}
                alt="Radar tecnológico con nodos de tecnologías emergentes como inteligencia artificial, automatización, cloud, ciberseguridad y datos"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Qué hacemos
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Observamos tu entorno para que tú puedas decidir con criterio
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                Monitoreamos de forma continua las tendencias de tu sector, los
                movimientos digitales de tu competencia, nuevas herramientas relevantes
                para tu operación y cambios regulatorios que te puedan afectar. Es un
                servicio de retainer con entrega mensual: recibes un informe ejecutivo
                estructurado, no una opinión suelta ni una alerta aislada.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {SOLUTION_CONCEPTS.map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <span className="inline-flex w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-primary" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-foreground mb-0.5">
                        {c.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="mb-16">
            <ScrollReveal className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Qué cubre este servicio
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                No es una propuesta genérica: esto es exactamente lo que recibes cada mes.
              </p>
            </ScrollReveal>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
              {INCLUDES.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, en un ciclo que se repite mes a mes.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {METHOD_STEPS.map((step) => (
                <ScrollReveal key={step.n} variant="scale" className="h-full">
                  <div className="bg-card p-7 h-full">
                    <span className="font-heading font-extrabold text-3xl text-border leading-none block mb-4 select-none">
                      {step.n}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <LandingCtaButton />
          </div>
        </div>
        <LayeredWaveDivider seed={2} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ SATISFACCIÓN ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SparkleDots color="secondary" className="absolute w-48 h-48 top-[8%] right-[8%] text-secondary" />
        <GlowOrb color="primary" className="absolute w-9 h-9 md:w-11 md:h-11 bottom-[12%] left-[8%]" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Así se ve tu negocio después
            </p>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              Menos sorpresa. Más capacidad de anticipación
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {BENEFITS.map((b) => (
                  <div key={b.title}>
                    <span className="inline-flex w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 items-center justify-center mb-3">
                      <b.icon className="w-5 h-5 text-secondary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={viResultado}
                alt="Organización mirando hacia un horizonte de tecnologías emergentes, oportunidades de mercado y señales regulatorias"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20 max-w-3xl mx-auto mb-14">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <Radar className="w-5 h-5 text-secondary" />
                </span>
                <p className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug">
                  {PROMISE_TEXT}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TRUST_POINTS.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 90}>
                <div className="text-center">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-4 mx-auto">
                    <t.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{t.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                    {t.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <LayeredWaveDivider seed={3} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <SoftBlob shape={1} color="primary" className="w-72 h-56 -top-16 -right-16" />
        <SoftBlob shape={4} color="secondary" className="w-64 h-72 -bottom-20 -left-20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Qué está cambiando en tu entorno que todavía no has visto?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos qué quieres vigilar. Conversemos sobre qué debería estar
                observando tu empresa y cómo construir un sistema de vigilancia adaptado
                a tu negocio.
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

export default VigilanciaInnovacionLandingView;
