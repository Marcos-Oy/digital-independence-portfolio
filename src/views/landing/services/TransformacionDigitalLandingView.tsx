import {
  Blocks,
  CheckCircle2,
  Compass,
  FileSearch,
  GitBranch,
  Handshake,
  Layers,
  ListOrdered,
  ShieldCheck,
  Users,
  Workflow,
  X,
  XCircle,
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
import tdProblema from "@/assets/services/td-problema.jpg";
import tdSolucion from "@/assets/services/td-solucion.jpg";
import tdResultado from "@/assets/services/td-resultado.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "Sigues operando con procesos manuales mientras la competencia ya digitalizó los suyos y se mueve más rápido que tú.",
  "Ya intentaste modernizar tu negocio antes, pero el proyecto quedó a medias porque nadie lideró el cambio completo.",
  "Tu equipo se resiste a las herramientas nuevas porque nunca hubo un plan claro de cómo hacer la transición.",
  "Si la persona que coordina un proceso hoy no está, ese proceso simplemente se detiene.",
  "La información de tu negocio está repartida entre correos, planillas y mensajes de WhatsApp, y nadie tiene el cuadro completo.",
  "Compraste herramientas digitales que hoy casi nadie usa, porque se instalaron sin cambiar el proceso que había detrás.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, el problema no es que tu negocio use poca tecnología. Es que la tecnología que usa nunca fue pensada como un sistema, y los cambios se intentaron sin un plan detrás.";

const RIGHT_CLIENT_TEXT =
  "Gerentes de empresa que operan con procesos manuales y sienten que la competencia les gana con tecnología, o que ya intentaron modernizarse antes y el cambio no se sostuvo.";

interface RootCause {
  icon: typeof Blocks;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Blocks,
    title: "Se empieza por la herramienta",
    desc: "Se elige el software antes de entender qué proceso debería soportar realmente.",
  },
  {
    icon: Users,
    title: "Sin plan de adopción",
    desc: "El equipo recibe la herramienta nueva sin acompañamiento, y vuelve a lo que ya sabía hacer.",
  },
  {
    icon: GitBranch,
    title: "Cambios todos de golpe",
    desc: "Se intenta transformar todo a la vez, y un equipo que no puede seguir el ritmo termina resistiendo el cambio.",
  },
];

interface SolutionConcept {
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "Entendemos qué procesos existen, cómo funcionan hoy y cuáles generan más fricción.",
  },
  {
    icon: ListOrdered,
    title: "Hoja de ruta por etapas",
    desc: "Cada cambio tiene un orden, una justificación y un impacto esperado antes de ejecutarse.",
  },
  {
    icon: Users,
    title: "Adopción acompañada",
    desc: "Tu equipo aprende cada herramienta con tiempo y apoyo, no de golpe.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad incorporada",
    desc: "Cada flujo digital se diseña considerando quién accede y cómo se protege.",
  },
];

const INCLUDES = [
  "Diagnóstico del estado tecnológico actual",
  "Hoja de ruta por etapas",
  "Implementación de nuevas herramientas",
  "Capacitación del equipo",
  "Ciberseguridad integrada al proceso",
];

interface ComparisonItem {
  icon: typeof Blocks;
  text: string;
}

const INSTALL_ITEMS: ComparisonItem[] = [
  { icon: Blocks, text: "Se elige una herramienta." },
  { icon: GitBranch, text: "Se configura e instala." },
  { icon: Users, text: "Se capacita al equipo por encima." },
  { icon: X, text: "El proceso sigue igual, solo que ahora en digital." },
];

const TRANSFORM_ITEMS: ComparisonItem[] = [
  { icon: FileSearch, text: "Se entiende el proceso primero." },
  { icon: Workflow, text: "Se rediseña el flujo completo." },
  { icon: Compass, text: "Se elige la herramienta que lo soporta." },
  { icon: Handshake, text: "El equipo adopta el cambio con acompañamiento real." },
];

interface MethodStep {
  n: string;
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: FileSearch,
    title: "Diagnóstico sin costo",
    desc: "Levantamos tus procesos actuales y las dependencias manuales que existen hoy.",
  },
  {
    n: "02",
    icon: Compass,
    title: "Priorización",
    desc: "Definimos qué conviene digitalizar primero, según impacto y disposición del equipo.",
  },
  {
    n: "03",
    icon: Workflow,
    title: "Digitalización por etapas",
    desc: "Convertimos los procesos priorizados en flujos digitales, uno a la vez.",
  },
  {
    n: "04",
    icon: Users,
    title: "Adopción y evolución",
    desc: "Acompañamos a tu equipo en cada cambio, hasta que el nuevo flujo realmente se use.",
  },
];

interface Benefit {
  icon: typeof Workflow;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Workflow,
    title: "Tus procesos funcionan solos",
    desc: "Ya no dependen de que una persona específica esté disponible para que algo avance.",
  },
  {
    icon: Layers,
    title: "Toda tu información en un solo lugar",
    desc: "Se acabó lo de buscar un dato entre correos, planillas y mensajes de WhatsApp.",
  },
  {
    icon: Handshake,
    title: "Tu equipo realmente usa las herramientas nuevas",
    desc: "Porque las adoptó con acompañamiento, no porque se lo impusieron de un día para otro.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad incorporada desde el diseño",
    desc: "Cada flujo digital define desde el principio quién accede y cómo se protege la información.",
  },
];

interface TrustPoint {
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "No recomendamos ninguna herramienta antes de entender el proceso que debería soportar.",
  },
  {
    icon: ListOrdered,
    title: "Por etapas, no de golpe",
    desc: "Un equipo que no puede seguir el ritmo termina resistiendo el cambio, no adoptándolo.",
  },
  {
    icon: Handshake,
    title: "Adopción real",
    desc: "Una herramienta que nadie usa no transforma nada. El acompañamiento es parte del proyecto.",
  },
];

const PROMISE_TEXT =
  "Una hoja de ruta de transformación digital implementada por etapas, con tus procesos manuales convertidos en flujos digitales que tu equipo realmente usa.";

/* ------------------------------ view ------------------------------ */

const TransformacionDigitalLandingView = () => {
  useLandingController("Transformación Digital | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Transformación Digital | Independencia Digital"
        description="Diagnosticamos qué frena a tu negocio y convertimos tus procesos manuales en flujos digitales por etapas, con tu equipo adoptando cada cambio. Diagnóstico sin costo."
        path="/landing/servicio/transformacion-digital"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Workflow}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Transformación Digital, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tu competencia no te ganó por tener mejor tecnología. Te ganó por tener mejores procesos.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diagnosticamos qué está frenando a tu negocio, diseñamos una hoja de ruta por
            etapas y convertimos tus procesos manuales en flujos digitales que tu equipo
            realmente adopta.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("transformacion-digital")} />
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
                Instalar una herramienta no es lo mismo que transformar un proceso
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                La mayoría de los proyectos de digitalización fracasan por la misma
                razón: se elige un software, se instala, se capacita al equipo por
                encima, y el proceso de fondo sigue funcionando exactamente igual, solo
                que ahora en una pantalla distinta. El resultado es una inversión que
                nadie termina de usar, porque nunca se rediseñó el proceso que la
                herramienta debía reemplazar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={tdProblema}
                alt="Equipo sobrecargado con procesos manuales, planillas y correos en una oficina"
                width={1280}
                height={960}
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
                src={tdSolucion}
                alt="Consultores rediseñando procesos digitales junto al equipo de una empresa"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Qué hacemos
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Diagnosticamos, priorizamos y digitalizamos por etapas, con tu equipo al centro
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No proponemos un cambio de golpe. Identificamos qué procesos generan más
                fricción, definimos qué debería digitalizarse primero y diseñamos una
                secuencia que tu equipo pueda seguir sin que la operación se detenga. La
                ciberseguridad entra desde el primer paso, no al final.
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
                No es una propuesta genérica: esto es exactamente lo que recibes.
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

          <div className="mb-16">
            <ScrollReveal className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                La diferencia
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Implementar una herramienta no es transformar tu negocio. Cambiar cómo funciona el proceso sí lo es.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center max-w-3xl mx-auto">
              <div className="rounded-2xl border border-border bg-muted/50 p-7 h-full">
                <h4 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  Instalar tecnología
                </h4>
                <ul className="space-y-3.5">
                  {INSTALL_ITEMS.map((it) => (
                    <li key={it.text} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                      <it.icon className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.7} />
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex md:flex-col items-center justify-center gap-2 text-muted-foreground">
                <span className="hidden md:block w-px h-16 bg-border" />
                <span className="text-[11px] font-heading font-bold uppercase tracking-[0.18em]">Versus</span>
                <span className="hidden md:block w-px h-16 bg-border" />
              </div>

              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/40 via-border to-secondary/30 h-full">
                <div className="rounded-[calc(1rem-1.5px)] bg-card p-7 h-full">
                  <h4 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-primary mb-5">
                    Transformación digital
                  </h4>
                  <ul className="space-y-3.5">
                    {TRANSFORM_ITEMS.map((it) => (
                      <li key={it.text} className="flex items-start gap-2.5 text-sm text-foreground/90 leading-relaxed font-medium">
                        <it.icon className="w-4 h-4 text-secondary shrink-0 mt-0.5" strokeWidth={1.8} />
                        {it.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, sin letra chica. No necesitas transformarlo todo de una vez.
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
              Un negocio que opera con menos fricción, no solo con más pantallas
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
                src={tdResultado}
                alt="Equipo trabajando con procesos digitalizados y fluidos en una oficina luminosa"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20 max-w-3xl mx-auto mb-14">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <Workflow className="w-5 h-5 text-secondary" />
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
                ¿Qué proceso de tu negocio debería estar funcionando solo y todavía depende de alguien?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y conversemos sobre qué está frenando a tu
                negocio y qué conviene digitalizar primero.
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

export default TransformacionDigitalLandingView;
