import {
  AlertTriangle,
  Bot,
  Brain,
  CheckCircle2,
  Database,
  FileSearch,
  FlaskConical,
  GaugeCircle,
  Handshake,
  Layers,
  MessageCircle,
  RefreshCw,
  ScanSearch,
  Search,
  UserCircle2,
  Users,
  Workflow,
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
import iaProblema from "@/assets/services/ia-problema.jpg";
import iaSolucion from "@/assets/services/ia-solucion.jpg";
import iaResultado from "@/assets/services/ia-resultado.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico.
const PAIN_POINTS = [
  "Tu equipo responde manualmente las mismas preguntas una y otra vez, mientras la IA que usan en su celular no conoce nada de tu negocio.",
  "Probaste ChatGPT para algunas tareas, pero cada respuesta parte de cero: no recuerda a tus clientes, tus documentos ni cómo opera tu empresa.",
  "Sabes que la IA podría ahorrarte horas de trabajo, pero no sabes por dónde empezar ni qué herramienta realmente sirve para tu caso.",
  "Implementaste un chatbot o una automatización que funcionó las primeras semanas, y después se rompió porque nadie la diseñó pensando en tu operación real.",
  "Quieres atender más consultas de clientes, pero la única forma que conoces de lograrlo es contratar a más personas.",
  "Tu conocimiento, o el de tu marca, vive solo en tu cabeza, y no hay forma de que esté disponible cuando tú no estás.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas, el problema no es que la IA no sirva para tu negocio. Es que nadie la conectó con el contexto, los documentos y los procesos reales de tu empresa.";

const RIGHT_CLIENT_TEXT =
  "PyMEs y empresas que ya tienen procesos definidos y buscan liberar a su equipo del trabajo manual repetitivo, conectando IA real a su operación en vez de usar herramientas genéricas sueltas.";

interface RootCause {
  icon: typeof Bot;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Bot,
    title: "IA sin memoria",
    desc: "Cada conversación empieza de cero. La herramienta no recuerda tu negocio ni a tus clientes.",
  },
  {
    icon: AlertTriangle,
    title: "Automatizaciones frágiles",
    desc: "Se activan flujos automáticos sin pensar en las excepciones, y se rompen apenas la operación real los pone a prueba.",
  },
  {
    icon: ScanSearch,
    title: "Todo parece automatizable",
    desc: "Sin diagnóstico, se invierte en automatizar procesos que en realidad requieren criterio humano.",
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
    desc: "Identificamos qué procesos son realmente automatizables antes de implementar nada.",
  },
  {
    icon: Bot,
    title: "Agentes con memoria",
    desc: "Construimos agentes que conocen tus documentos, tu historial y tu forma de operar.",
  },
  {
    icon: Workflow,
    title: "Automatización conectada",
    desc: "Los flujos se integran con las herramientas que ya usa tu negocio.",
  },
  {
    icon: GaugeCircle,
    title: "Operación real",
    desc: "El objetivo es que funcione en el día a día de tu equipo, no solo en una demo.",
  },
];

const INCLUDES = [
  "Diagnóstico de procesos automatizables",
  "Agentes de IA con memoria y RAG",
  "Biblioteca corporativa de prompts",
  "Automatización no-code con N8N y ManyChat",
  "Clones digitales con HeyGen y ElevenLabs",
];

interface UseCase {
  icon: typeof MessageCircle;
  title: string;
  desc: string;
}

// Ejemplos concretos de dónde aplica, para que quien lee entienda el rango
// real de casos de uso, no solo el concepto abstracto "IA corporativa".
const USE_CASES: UseCase[] = [
  {
    icon: MessageCircle,
    title: "Atención y consultas",
    desc: "Responde preguntas frecuentes o dudas de clientes usando el conocimiento real de tu negocio.",
  },
  {
    icon: Handshake,
    title: "Procesos de venta",
    desc: "Acompaña al cliente potencial, responde objeciones y cualifica antes de la conversación humana.",
  },
  {
    icon: UserCircle2,
    title: "Presencia digital (clones)",
    desc: "Representa a tu marca o profesional en WhatsApp, Instagram u otros canales con tu propia voz.",
  },
  {
    icon: Workflow,
    title: "Automatización de flujos",
    desc: "Notificaciones, seguimientos y tareas repetitivas conectadas entre tus plataformas.",
  },
];

interface MethodStep {
  n: string;
  icon: typeof Search;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico sin costo",
    desc: "Identificamos qué procesos son candidatos reales para IA o automatización, y cuáles no lo son.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Diseño del agente",
    desc: "Definimos qué tipo de solución tiene sentido: automatización simple, agente con IA o clon digital.",
  },
  {
    n: "03",
    icon: Bot,
    title: "Entrenamiento e implementación",
    desc: "Conectamos el agente a tus documentos y lo integramos en las herramientas que ya usas.",
  },
  {
    n: "04",
    icon: FlaskConical,
    title: "Pruebas y evolución",
    desc: "Validamos con casos reales antes de activar en producción, y ajustamos según el uso.",
  },
];

interface Benefit {
  icon: typeof Bot;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Bot,
    title: "Tu equipo deja de responder lo mismo",
    desc: "Los agentes resuelven las consultas repetitivas con el conocimiento real de tu negocio.",
  },
  {
    icon: Database,
    title: "La IA recuerda tu contexto",
    desc: "Cada conversación parte de lo que el agente ya sabe de tus clientes y tu operación.",
  },
  {
    icon: RefreshCw,
    title: "Automatizaciones que se sostienen",
    desc: "Los flujos están diseñados pensando en tu operación real, no en el caso ideal.",
  },
  {
    icon: Users,
    title: "Más consultas, mismo equipo",
    desc: "Atiendes más sin necesidad de contratar a más personas.",
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
    icon: ScanSearch,
    title: "Viabilidad real",
    desc: "Si un proceso no tiene sentido automatizar, te lo decimos antes de invertir en implementarlo.",
  },
  {
    icon: GaugeCircle,
    title: "Operación, no demo",
    desc: "El objetivo es que funcione en el día a día del equipo, no solamente en una presentación.",
  },
];

const PROMISE_TEXT =
  "Procesos clave automatizados con agentes de IA conectados a tu negocio, con acceso real a tus documentos y, cuando corresponde, clones digitales operando en tus canales (no un chatbot genérico más).";

/* ------------------------------ view ------------------------------ */

const IaCorporativaLandingView = () => {
  useLandingController("Inteligencia Artificial Corporativa | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Inteligencia Artificial Corporativa | Independencia Digital"
        description="Agentes de IA con memoria conectados a tus documentos, automatización no-code y clones digitales para liberar a tu equipo del trabajo manual repetitivo. Diagnóstico sin costo."
        path="/landing/servicio/ia-corporativa"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Brain}
          mode="pulse"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Inteligencia Artificial Corporativa, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tienes IA en tu empresa. Lo que no tienes es IA que sepa algo de tu negocio.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diagnosticamos qué procesos son realmente automatizables, construimos agentes
            con memoria y acceso a tus documentos, y automatizamos flujos con las
            herramientas adecuadas. Incluyendo clones digitales cuando tiene sentido.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("ia-corporativa")} />
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
                La IA genérica responde preguntas. No conoce tu negocio
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Cuando alguien usa ChatGPT para redactar un correo o resumir un texto, está
                usando inteligencia artificial, pero no está usando IA corporativa. La
                diferencia es el contexto: un agente que no tiene acceso a tus documentos,
                tu historial de clientes ni tus procesos responde de forma genérica, no de
                forma útil para tu negocio. Por eso muchas empresas prueban IA, se frustran
                con los resultados y concluyen que "no es para ellos", cuando en realidad
                nunca conectaron la herramienta a la información que la haría útil.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={iaProblema}
                alt="Profesional frustrado usando herramientas de IA desconectadas del contexto de su negocio"
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
                src={iaSolucion}
                alt="Consultores implementando inteligencia artificial conectada a los datos de una empresa"
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
                Diseñamos IA que conoce tu negocio, no una IA genérica más
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No instalamos herramientas de IA por instalarlas. Diagnosticamos qué
                procesos de tu negocio son realmente automatizables, diseñamos agentes con
                acceso a tus documentos y tu contexto, implementamos automatizaciones con
                N8N y ManyChat, y sumamos clones digitales cuando tiene sentido: agentes
                entrenados con la voz y el conocimiento de tu marca.
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
                Dónde aplica la IA conectada
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Estos son ejemplos concretos, no el único uso posible.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {USE_CASES.map((ex, i) => (
                <ScrollReveal key={ex.title} delay={i * 60}>
                  <div className="bg-card border border-border rounded-2xl p-5 h-full">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center mb-3">
                      <ex.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.7} />
                    </span>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1.5">
                      {ex.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ex.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, sin letra chica. No necesitas automatizarlo todo de una vez.
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
              IA que realmente trabaja para tu negocio, no una demo bonita
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
                src={iaResultado}
                alt="Equipo tomando decisiones con apoyo de inteligencia artificial corporativa"
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
                  <Brain className="w-5 h-5 text-secondary" />
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
                ¿Qué proceso de tu negocio podría funcionar con IA conectada de verdad?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos qué tareas repetitivas consumen más tiempo a tu equipo. Te
                decimos, sin compromiso, si tiene sentido automatizarlas con IA.
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

export default IaCorporativaLandingView;
