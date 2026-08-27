import {
  AlertTriangle,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileSearch,
  Gauge,
  Handshake,
  Layers,
  LineChart,
  ListChecks,
  MessageCircle,
  Search,
  ShieldCheck,
  TrendingUp,
  UserCog,
  Users,
  Wallet,
  Workflow,
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
import autProblema from "@/assets/services/aut-problema.jpg";
import autSolucion from "@/assets/services/aut-solucion.jpg";
import autResultado from "@/assets/services/aut-resultado.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico.
const PAIN_POINTS = [
  "Cada semana tu equipo repite exactamente la misma tarea, copiando y pegando entre sistemas que deberían hacerlo solos.",
  "Cuando la persona que sabe hacer un proceso se enferma o toma vacaciones, ese proceso simplemente se detiene.",
  "Un error de tipeo en una planilla ya te ha costado una factura mal emitida, un cliente molesto o un reclamo que pudo evitarse.",
  "Nadie puede decirte con certeza si una tarea se ejecutó ayer, si quedó a medias o si simplemente se olvidó.",
  "El negocio creció, pero los mismos procesos manuales de siempre ahora son el cuello de botella que frena todo lo demás.",
  "Sabes que deberías automatizar, pero cada vez que lo piensan terminan posponiéndolo porque \"ya funciona así\".",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas señales, el problema no es que a tu equipo le falte disciplina. Es que nadie diseñó esas tareas para que se ejecuten solas.";

const RIGHT_CLIENT_TEXT =
  "Empresas con procesos ya definidos (ventas, facturación, onboarding, reportería) que hoy dependen de que una persona los ejecute a mano, con doble digitación, planillas paralelas y horas perdidas cada semana.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Clock3,
    title: "El costo que nadie mide",
    desc: "Las horas que tu equipo dedica a tareas repetitivas no aparecen en ningún reporte, pero se restan de lo que realmente debería estar haciendo.",
  },
  {
    icon: AlertTriangle,
    title: "El error que se repite solo",
    desc: "Un proceso manual mal diseñado no falla una vez: falla cada vez que se ejecuta, de la misma forma.",
  },
  {
    icon: Users,
    title: "La dependencia de una persona",
    desc: "Si solo una persona sabe ejecutar el proceso completo, tu negocio depende de que esa persona esté siempre disponible.",
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
    title: "Levantamiento real",
    desc: "Entendemos cómo funciona el proceso hoy, con sus variaciones y excepciones reales.",
  },
  {
    icon: Layers,
    title: "Rediseño antes de automatizar",
    desc: "Ordenamos el flujo antes de convertirlo en algo automático.",
  },
  {
    icon: Workflow,
    title: "Herramienta según el caso",
    desc: "Elegimos entre N8N, ManyChat, Power Automate o un script a medida, según lo que el proceso necesita.",
  },
  {
    icon: ListChecks,
    title: "Trazabilidad completa",
    desc: "Cada ejecución queda registrada: qué pasó, cuándo y si algo necesita atención.",
  },
];

const INCLUDES = [
  "Levantamiento y mapeo de procesos",
  "Rediseño de flujos para automatización",
  "Implementación con N8N, Power Automate o a medida",
  "Notificaciones, reportes y alertas automáticas",
  "Documentación y capacitación del equipo",
];

interface ProcessExample {
  icon: typeof Handshake;
  title: string;
  desc: string;
}

// Ejemplos concretos de procesos que solemos automatizar, para que quien
// lee entienda de inmediato dónde puede aplicar esto en su propio negocio.
const PROCESS_EXAMPLES: ProcessExample[] = [
  {
    icon: Handshake,
    title: "Ventas y seguimiento",
    desc: "Registro de leads, seguimiento automático y alertas cuando un prospecto queda sin respuesta.",
  },
  {
    icon: Wallet,
    title: "Facturación",
    desc: "Generación y envío de facturas sin que nadie tenga que armarlas a mano cada vez.",
  },
  {
    icon: UserCog,
    title: "Onboarding de clientes",
    desc: "Bienvenida, envío de documentos y activación de accesos en un flujo que corre solo.",
  },
  {
    icon: LineChart,
    title: "Reportería",
    desc: "Reportes que se generan y se envían automáticamente, sin consolidar nada a mano.",
  },
  {
    icon: MessageCircle,
    title: "Atención por WhatsApp",
    desc: "Respuestas automáticas a preguntas frecuentes y derivación al equipo cuando corresponde.",
  },
  {
    icon: ClipboardList,
    title: "Back-office",
    desc: "Tareas administrativas repetitivas (registros, validaciones, actualizaciones) que dejan de depender de una persona.",
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
    icon: FileSearch,
    title: "Levantamiento",
    desc: "Mapeamos el proceso actual paso a paso: disparadores, responsables y excepciones.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Rediseño",
    desc: "Ordenamos el flujo, eliminamos pasos redundantes y definimos reglas claras.",
  },
  {
    n: "03",
    icon: Workflow,
    title: "Automatización",
    desc: "Implementamos el flujo con la herramienta adecuada y lo probamos con casos reales.",
  },
  {
    n: "04",
    icon: Gauge,
    title: "Activación y seguimiento",
    desc: "El flujo entra en producción con monitoreo activo y se ajusta según el comportamiento real.",
  },
];

interface Benefit {
  icon: typeof Zap;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Zap,
    title: "Se ejecuta sin que nadie lo empuje",
    desc: "El proceso corre solo, sin depender de que alguien se acuerde de hacerlo.",
  },
  {
    icon: ShieldCheck,
    title: "Menos errores humanos",
    desc: "Las tareas repetitivas dejan de depender de copiar y pegar a mano.",
  },
  {
    icon: ListChecks,
    title: "Sabes qué pasó y cuándo",
    desc: "Cada ejecución queda registrada, así que nunca más te preguntas si algo se hizo.",
  },
  {
    icon: TrendingUp,
    title: "Escala sin que el equipo crezca",
    desc: "El proceso soporta más volumen sin que tengas que contratar a alguien más para sostenerlo.",
  },
];

interface TrustPoint {
  icon: typeof Search;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Search,
    title: "Levantamiento primero",
    desc: "No proponemos nada sin entender el proceso completo, incluyendo sus excepciones.",
  },
  {
    icon: Layers,
    title: "Rediseño antes de automatizar",
    desc: "Si el proceso tiene problemas, los resolvemos antes de automatizarlo, no después.",
  },
  {
    icon: ListChecks,
    title: "Trazabilidad siempre",
    desc: "Cada ejecución queda registrada para que tu equipo supervise, no solo confíe.",
  },
];

const PROMISE_TEXT =
  "Procesos clave automatizados con reducción medible de tiempos y errores, notificaciones automáticas y trazabilidad completa de cada ejecución (no una promesa vaga de \"más eficiencia\").";

/* ------------------------------ view ------------------------------ */

const AutomatizacionProcesosLandingView = () => {
  useLandingController("Automatización de Procesos | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Automatización de Procesos | Independencia Digital"
        description="Levantamos tus procesos críticos, los rediseñamos y los automatizamos con notificaciones, reportes y trazabilidad completa de cada ejecución. Diagnóstico sin costo."
        path="/landing/servicio/automatizacion-procesos"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Workflow}
          mode="pulse"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Automatización de Procesos, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Si tu equipo hace lo mismo cada semana, no necesita más gente. Necesita que ese trabajo se ejecute solo.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Levantamos tus procesos críticos, identificamos dónde se pierde tiempo y
            construimos el flujo automático que los reemplaza, con trazabilidad
            completa de cada ejecución.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("automatizacion-procesos")} />
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
                El problema no es la falta de herramientas. Es que nadie rediseñó el
                proceso antes de intentar automatizarlo
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Cada tarea manual que hoy funciona "más o menos" esconde años de
                ajustes, atajos y excepciones que nadie documentó. Cuando se intenta
                automatizar ese proceso tal como está, sin revisarlo primero, el
                resultado hereda todos esos problemas, solo que ahora ocurren más
                rápido y con menos control humano para detectarlos a tiempo. El costo
                real no es el tiempo que toma ejecutar la tarea: es lo que se pierde
                cuando ese proceso falla en silencio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={autProblema}
                alt="Trabajadora repitiendo tareas manuales y tediosas frente a su computador"
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
                src={autSolucion}
                alt="Consultores diseñando automatizaciones de procesos junto al equipo de una empresa"
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
                Levantamos el proceso, lo rediseñamos y recién ahí lo automatizamos
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No tomamos tu proceso tal como está y lo convertimos en un flujo
                automático. Primero lo levantamos paso a paso: qué lo dispara, quién
                lo ejecuta, qué excepciones tiene. Identificamos los pasos que sobran
                y los que generan fricción. Solo después de ordenarlo construimos el
                flujo automatizado, con la herramienta adecuada para tu caso (N8N,
                ManyChat, Power Automate o un script a medida).
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
                Procesos que solemos automatizar
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Algunos ejemplos concretos, para que veas dónde puede aplicarse en tu negocio.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PROCESS_EXAMPLES.map((ex, i) => (
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
              Un proceso que se ejecuta solo, con visibilidad completa
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
                src={autResultado}
                alt="Equipo liberado de tareas repetitivas gracias a la automatización de procesos"
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
                ¿Qué tarea sigue ejecutando tu equipo a mano que ya podría funcionar sola?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos qué procesos ejecutan hoy manualmente. Te decimos, sin
                compromiso, si conviene automatizarlos y qué necesitarías para lograrlo.
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

export default AutomatizacionProcesosLandingView;
