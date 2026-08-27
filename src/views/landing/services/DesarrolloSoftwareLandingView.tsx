import {
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Factory,
  FileSearch,
  Handshake,
  HeartPulse,
  Layers,
  Package,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  TrendingUp,
  Truck,
  UserCog,
  Users,
  Wallet,
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
import swProblemaFragmentado from "@/assets/services/sw-problema-fragmentado.jpg";
import swSolucionPlataforma from "@/assets/services/sw-solucion-plataforma.jpg";
import swResultadoDashboard from "@/assets/services/sw-resultado-dashboard.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico. Cada punto describe una
// situación reconocible, no una categoría abstracta ("procesos manuales").
const PAIN_POINTS = [
  "Cada vez que alguien pide un reporte, una persona de tu equipo desaparece un par de horas armando una planilla a mano.",
  "Tienes información de clientes, ventas o inventario repartida en tres o cuatro Excel distintos que solo una persona sabe interpretar.",
  "Pagaste por un software \"para todo\" que terminó resolviendo la mitad de lo que tu negocio realmente necesita.",
  "Cada persona nueva que entra al equipo tarda semanas en aprender cómo \"se hacen las cosas\", porque no hay un sistema: hay costumbre.",
  "Un error de copiar y pegar en una planilla podría costarte un cliente, un pago mal calculado o una decisión tomada con el dato equivocado.",
  "Sigues pagando licencias de dos o tres herramientas que, entre todas, hacen a medias lo que un solo sistema propio haría bien.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, el problema no es tu equipo ni tu forma de trabajar. Es que nadie diseñó un sistema pensado para cómo realmente opera tu negocio.";

const RIGHT_CLIENT_TEXT =
  "Dueños y gerentes de PyMEs y empresas que hoy gestionan clientes, ventas, inventario u operaciones en Excel, planillas sueltas o sistemas que no se comunican entre sí, y que están perdiendo tiempo, información o dinero por eso.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Clock3,
    title: "El costo invisible",
    desc: "El tiempo que tu equipo pasa consolidando información a mano no aparece en ninguna factura, pero se paga todos los días.",
  },
  {
    icon: TrendingUp,
    title: "El techo de crecimiento",
    desc: "Un proceso manual que hoy \"funciona\" deja de sostenerse apenas el negocio crece un poco más.",
  },
  {
    icon: UserCog,
    title: "La dependencia oculta",
    desc: "Si el conocimiento vive en la cabeza de una persona y no en un sistema, tu negocio depende de que esa persona nunca se vaya.",
  },
];

interface SolutionConcept {
  icon: typeof Puzzle;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Puzzle,
    title: "Procesos a tu medida",
    desc: "El sistema se adapta a la forma en que realmente trabaja tu equipo, no al revés.",
  },
  {
    icon: Database,
    title: "Información centralizada",
    desc: "Los datos que hoy están repartidos en planillas pasan a vivir en un mismo lugar.",
  },
  {
    icon: Zap,
    title: "Automatización real",
    desc: "Las tareas repetitivas se automatizan cuando existe una oportunidad concreta de hacerlo.",
  },
  {
    icon: TrendingUp,
    title: "Pensado para crecer",
    desc: "Construimos con la operación de hoy y la escala de mañana en mente.",
  },
];

const INCLUDES = [
  "Análisis y diseño funcional de tu proceso real",
  "Desarrollo full-stack de la solución",
  "Base de datos y panel de administración",
  "Versión móvil instalable (PWA)",
  "Despliegue en producción, listo para usarse",
];

interface SoftwareExample {
  icon: typeof Package;
  title: string;
  desc: string;
}

// Ejemplos concretos por rubro, para que quien lee entienda de inmediato
// el rango de lo que puede pedirnos, no solo el concepto abstracto "software a medida".
const SOFTWARE_EXAMPLES: SoftwareExample[] = [
  {
    icon: Package,
    title: "Control de inventario y bodega",
    desc: "Stock en tiempo real, trazabilidad de productos y alertas de reposición.",
  },
  {
    icon: Handshake,
    title: "Ventas y CRM a medida",
    desc: "Seguimiento de clientes, cotizaciones y un embudo de ventas propio.",
  },
  {
    icon: Wallet,
    title: "Control financiero",
    desc: "Facturación, flujo de caja, conciliación y reportes financieros.",
  },
  {
    icon: Factory,
    title: "Software industrial",
    desc: "Control de producción, mantenimiento de maquinaria y trazabilidad de procesos.",
  },
  {
    icon: HeartPulse,
    title: "Sistemas para el área de salud",
    desc: "Fichas clínicas, agenda de pacientes y control de tratamientos.",
  },
  {
    icon: Truck,
    title: "Logística y distribución",
    desc: "Seguimiento de pedidos, rutas de reparto y control de flota.",
  },
  {
    icon: CalendarCheck,
    title: "Reservas y agendamiento",
    desc: "Citas, salas o recursos que tus clientes reservan en línea, sin llamadas ni WhatsApp.",
  },
  {
    icon: UserCog,
    title: "Recursos humanos",
    desc: "Control de asistencia, turnos y evaluaciones de desempeño.",
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
    desc: "Entendemos tu proceso real: qué información manejas, quién la usa y dónde se generan los cuellos de botella.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Diseño de la solución",
    desc: "Definimos si conviene desarrollar, integrar herramientas existentes o automatizar lo que ya tienes.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Desarrollo por etapas",
    desc: "Construimos la solución en etapas, priorizando lo que resuelve el problema más urgente primero.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Entrega y acompañamiento",
    desc: "El sistema queda funcionando en producción, con acompañamiento para su evolución.",
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
    title: "Reportes en minutos, no en horas",
    desc: "La información vive en un solo lugar y se genera sola, sin que nadie tenga que armarla a mano.",
  },
  {
    icon: Users,
    title: "Un solo proceso, no tres versiones",
    desc: "Todo tu equipo trabaja sobre la misma fuente de información, actualizada en tiempo real.",
  },
  {
    icon: BookOpenCheck,
    title: "El conocimiento queda en el sistema",
    desc: "Ya no depende de que una persona específica \"sepa cómo se hace\".",
  },
  {
    icon: TrendingUp,
    title: "Espacio para crecer",
    desc: "El sistema escala junto con tu negocio, en vez de romperse cuando el negocio crece.",
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
    title: "Primero entendemos, después construimos",
    desc: "No escribimos una línea de código antes de entender el problema real que estamos resolviendo.",
  },
  {
    icon: Rocket,
    title: "El sistema queda en producción, no en demo",
    desc: "El objetivo es que tu equipo lo use desde el primer día, no que exista una maqueta bonita.",
  },
  {
    icon: ShieldCheck,
    title: "No vendemos horas, vendemos una solución que funciona",
    desc: "Si desarrollar desde cero no es lo que tu negocio necesita, te lo decimos antes de empezar.",
  },
];

const PROMISE_TEXT =
  "Un sistema funcionando en producción, con base de datos, panel de administración y versión móvil, construido para tu operación real (no una plantilla genérica que tienes que aprender a usar).";

/* ------------------------------ view ------------------------------ */

const DesarrolloSoftwareLandingView = () => {
  useLandingController("Desarrollo de Software a Medida | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Desarrollo de Software a Medida | Independencia Digital"
        description="Diseñamos y construimos el sistema que tu negocio necesita: procesos a medida, información centralizada y menos trabajo manual. Diagnóstico sin costo."
        path="/landing/servicio/desarrollo-software"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Code2}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Desarrollo de Software, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tu negocio no necesita más aplicaciones. Necesita una que realmente le sirva.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Antes de escribir una sola línea de código, entendemos exactamente cómo opera tu
            negocio. Después construimos el sistema que se adapta a ti, no al revés.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("desarrollo-software")} />
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
                El software genérico resuelve el 80% del problema de todos, y el 100% del
                problema de nadie
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Las plataformas genéricas se diseñan para el negocio promedio, no para el
                tuyo. Por eso terminas adaptando tu forma de trabajar a lo que el software
                permite, en vez de que el software se adapte a cómo realmente operas. Cada
                "excepción" de tu negocio se convierte en una planilla paralela, un proceso
                manual o una persona que "sabe cómo se hace". El costo no aparece en una
                factura: se ve en el tiempo, los errores y las oportunidades que se pierden
                mientras tu equipo hace de puente entre sistemas que deberían hablarse solos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={swProblemaFragmentado}
                alt="Sistemas empresariales fragmentados y datos desconectados que necesitan integración"
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
                src={swSolucionPlataforma}
                alt="Plataforma empresarial personalizada funcionando en laptop, monitor y smartphone"
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
                Diseñamos y construimos el software que tu negocio necesita, no el que
                venden por defecto
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                Desarrollamos software a medida (sistemas internos, plataformas web,
                aplicaciones y automatizaciones) diseñado específicamente para cómo
                opera tu negocio. Antes de construir nada, entendemos tu proceso real:
                qué información manejas, quién la usa y dónde se generan los cuellos de
                botella. Con ese diagnóstico decidimos si conviene desarrollar desde
                cero, integrar herramientas existentes o automatizar lo que ya tienes.
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
                Ejemplos de lo que podemos construir
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Software a medida no es un concepto abstracto. Así se ve en distintos rubros.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {SOFTWARE_EXAMPLES.map((ex, i) => (
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
                Cuatro etapas, sin letra chica. No necesitas contratarlo todo de una vez.
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
              Un sistema que trabaja para ti, no al revés
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
                src={swResultadoDashboard}
                alt="Dashboard empresarial profesional con métricas operativas en laptop y smartphone"
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
                  <Code2 className="w-5 h-5 text-secondary" />
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
                ¿Tu negocio está listo para dejar de trabajar alrededor del software?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos cómo operas hoy. Te decimos, sin compromiso, si conviene
                desarrollar, integrar o automatizar, y qué necesitarías para lograrlo.
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

export default DesarrolloSoftwareLandingView;
