import {
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Copy,
  Database,
  Factory,
  FileSearch,
  Handshake,
  Layers,
  LineChart,
  Megaphone,
  Plug,
  Target,
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
import dashProblema from "@/assets/services/dash-problema.jpg";
import dashSolucion from "@/assets/services/dash-solucion.jpg";
import dashResultado from "@/assets/services/dash-resultado.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico.
const PAIN_POINTS = [
  "Tomas decisiones importantes mirando el reporte de la semana pasada, porque el de hoy todavía lo está armando alguien.",
  "Ventas dice una cifra, finanzas dice otra, y nadie sabe cuál de las dos es la correcta.",
  "Cada mes alguien dedica horas enteras a copiar, limpiar y formatear números que deberían estar disponibles solos.",
  "Ya pagaste por un dashboard antes. Tu equipo lo miró las primeras semanas y después volvió a las planillas de siempre.",
  "Tienes decenas de datos disponibles, pero cuando alguien pregunta \"¿cómo vamos?\" nadie tiene una respuesta clara y rápida.",
  "Armar el panorama completo del negocio te toma horas que deberías estar usando para decidir, no para consolidar.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas señales, el problema no es que te falten datos. Es que nadie definió primero qué medir antes de intentar mostrarlo todo.";

const RIGHT_CLIENT_TEXT =
  "Gerentes y dueños que toman decisiones importantes con información atrasada, con reportes armados a mano cada semana o cada mes, y que necesitan ver el estado real de su negocio sin tener que pedírselo a alguien.";

interface RootCause {
  icon: typeof Copy;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Copy,
    title: "Mostrar todo lo disponible",
    desc: "Sin jerarquía ni propósito, más datos en pantalla no es más claridad: es más ruido.",
  },
  {
    icon: Users,
    title: "Un panel igual para todos",
    desc: "Un gerente general y un jefe de área necesitan ver cosas distintas. Un dashboard genérico no sirve bien para ninguno de los dos.",
  },
  {
    icon: CalendarClock,
    title: "Sin rutina de uso",
    desc: "Un panel que no se integra a la forma de trabajar del equipo se revisa las primeras semanas y después se olvida.",
  },
];

interface SolutionConcept {
  icon: typeof Target;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Target,
    title: "Definición de KPIs",
    desc: "Antes de diseñar cualquier pantalla, acordamos qué indicadores importan y cómo se calculan.",
  },
  {
    icon: Plug,
    title: "Conexión a fuentes reales",
    desc: "El dashboard se alimenta de las plataformas que ya usa tu negocio, no de datos cargados a mano.",
  },
  {
    icon: Layers,
    title: "Diseño con jerarquía",
    desc: "Cada panel se piensa según quién lo usa y qué decisión necesita tomar.",
  },
  {
    icon: BookOpenCheck,
    title: "Capacitación incluida",
    desc: "Un dashboard que nadie usa no cambia nada. La adopción del equipo es parte del proyecto.",
  },
];

const INCLUDES = [
  "Definición de KPIs por área",
  "Conexión a fuentes de datos (BD, APIs, planillas)",
  "Dashboards interactivos en Power BI o Looker Studio",
  "Alertas y reportes automáticos",
  "Capacitación al equipo ejecutivo",
];

interface DashboardExample {
  icon: typeof Handshake;
  title: string;
  desc: string;
}

// Ejemplos concretos de indicadores que solemos tablerizar, para que quien
// lee entienda de inmediato qué parte de su negocio puede ver así.
const DASHBOARD_EXAMPLES: DashboardExample[] = [
  {
    icon: Handshake,
    title: "Ventas y embudo comercial",
    desc: "Cotizaciones, cierres, tasa de conversión y desempeño por vendedor.",
  },
  {
    icon: Wallet,
    title: "Finanzas y flujo de caja",
    desc: "Ingresos, gastos, cuentas por cobrar y proyección de caja en un solo lugar.",
  },
  {
    icon: Factory,
    title: "Operaciones y producción",
    desc: "Avance, cuellos de botella y cumplimiento de metas operativas.",
  },
  {
    icon: Megaphone,
    title: "Marketing y adquisición",
    desc: "Costo de adquisición, tráfico y conversión de campañas activas.",
  },
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
    title: "Diagnóstico de datos",
    desc: "Identificamos qué fuentes existen y qué indicadores se pueden calcular a partir de ellas.",
  },
  {
    n: "02",
    icon: Target,
    title: "Definición de KPIs",
    desc: "Definimos junto a tu equipo qué indicadores importan realmente y para quién.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "Diseño del dashboard",
    desc: "Construimos el panel con jerarquía visual y vistas adaptadas por perfil de usuario.",
  },
  {
    n: "04",
    icon: UserCog,
    title: "Capacitación y rutina de uso",
    desc: "Capacitamos a tu equipo y definimos cómo se integra el dashboard a su rutina diaria.",
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
    title: "La misma cifra para todos",
    desc: "Ventas, finanzas y operaciones consultan la misma fuente de información, no versiones distintas.",
  },
  {
    icon: Clock3,
    title: "Información de hoy, no de la semana pasada",
    desc: "El panel se actualiza según la frecuencia real de cada fuente de datos.",
  },
  {
    icon: Users,
    title: "Un panel pensado para quien lo usa",
    desc: "Cada perfil ve los indicadores que realmente necesita para decidir.",
  },
  {
    icon: BookOpenCheck,
    title: "Un dashboard que tu equipo sí usa",
    desc: "La capacitación y la rutina de uso son parte del proyecto, no un anexo.",
  },
];

interface TrustPoint {
  icon: typeof Target;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Target,
    title: "Indicadores primero",
    desc: "No diseñamos ningún panel antes de definir qué mide, cómo se calcula y para qué sirve cada indicador.",
  },
  {
    icon: Database,
    title: "Datos reales",
    desc: "El dashboard se alimenta de las fuentes que ya usa tu negocio, no de datos de ejemplo.",
  },
  {
    icon: BookOpenCheck,
    title: "Adopción como parte del proyecto",
    desc: "Un dashboard que el equipo no usa no cambia nada, por eso la capacitación no es opcional.",
  },
];

const PROMISE_TEXT =
  "Un tablero ejecutivo en tiempo real con los indicadores que realmente importan para tu negocio, conectado a tus fuentes de datos reales y accesible desde cualquier dispositivo (no una plantilla genérica llena de gráficos que nadie interpreta).";

/* ------------------------------ view ------------------------------ */

const DashboardsKpiLandingView = () => {
  useLandingController("Dashboards y KPI | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Dashboards y KPI | Independencia Digital"
        description="Definimos los indicadores que realmente importan, los conectamos a tus fuentes de datos reales y construimos el dashboard que tu equipo va a usar todos los días. Diagnóstico sin costo."
        path="/landing/servicio/dashboards-kpi"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={BarChart3}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Dashboards y KPI, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tu negocio genera datos todos los días. La pregunta es si alguien los ve a tiempo para decidir algo con ellos.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Definimos los indicadores que realmente importan, los conectamos a tus
            fuentes reales y construimos el panel que tu equipo va a usar todos los
            días, no una vez y nunca más.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("dashboards-kpi")} />
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
                Un dashboard con los indicadores equivocados muestra mucho y no dice nada
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                La mayoría de los dashboards fracasan por la misma razón: se
                construyen antes de decidir qué información realmente importa. Se
                conecta todo lo que hay disponible, se llena la pantalla de
                gráficos, y el resultado es ruido visual que nadie sabe
                interpretar. El problema no es la falta de tecnología. Es que nadie
                se sentó primero a definir qué decisión necesita tomar cada persona
                y qué dato responde esa pregunta.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={dashProblema}
                alt="Profesionales con reportes dispersos y datos contradictorios en una reunión"
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
                src={dashSolucion}
                alt="Consultores construyendo un tablero de KPIs a medida para una empresa"
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
                Primero definimos qué medir. Después construimos el panel que lo muestre
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No empezamos abriendo Power BI. Empezamos definiendo contigo cuáles
                son los indicadores que realmente importan para tu negocio, cómo se
                calculan y quién los va a usar para tomar qué decisión. Recién con
                eso claro conectamos tus fuentes de datos reales y construimos el
                dashboard, con la plataforma que tiene más sentido para tu caso
                (Power BI, Looker Studio o Metabase).
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
                Indicadores que solemos tablerizar
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Algunos ejemplos concretos, para que veas qué parte de tu negocio puede verse así.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {DASHBOARD_EXAMPLES.map((ex, i) => (
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
                Cuatro etapas, sin letra chica. No necesitas tablerizar todo de una vez.
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
              Un panorama claro, actualizado, sin que nadie tenga que armarlo
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
                src={dashResultado}
                alt="Equipo tomando decisiones con un dashboard claro de indicadores en tiempo real"
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
                  <BarChart3 className="w-5 h-5 text-secondary" />
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
                ¿Cuánto tiempo pierde tu equipo armando reportes que deberían estar disponibles solos?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos qué indicadores necesitas ver y qué fuentes de datos
                tienes hoy. Te decimos, sin compromiso, qué dashboard tiene
                sentido para tu negocio.
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

export default DashboardsKpiLandingView;
