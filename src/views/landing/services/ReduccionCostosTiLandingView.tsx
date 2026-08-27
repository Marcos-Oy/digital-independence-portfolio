import {
  Cloud,
  CheckCircle2,
  Clock3,
  Gauge,
  HardDrive,
  Handshake,
  KeyRound,
  ListChecks,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  TrendingDown,
  Wallet,
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
import costosProblema from "@/assets/services/costos-problema.jpg";
import costosSolucion from "@/assets/services/costos-solucion.jpg";
import costosResultado from "@/assets/services/costos-resultado.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "Pagas licencias de software que ni siquiera recuerdas para qué sirven, mes tras mes, sin que nadie las revise.",
  "Compraste (o estás por comprar) equipos nuevos sin comparar si había una opción igual de buena y más barata.",
  "Tu factura de cloud sube cada mes y nadie en tu equipo puede explicarte exactamente por qué.",
  "Sigues pagando planes o suscripciones dimensionados para un equipo que ya no tienes.",
  "Un contrato se renovó solo, otra vez, porque nadie puso una alerta antes de la fecha límite.",
  "Sospechas que estás gastando de más en tecnología, pero no tienes cómo comprobarlo con números reales.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, no es que gastes mal a propósito. Es que nadie ha medido con lupa en qué se está yendo tu presupuesto de tecnología.";

const RIGHT_CLIENT_TEXT =
  "Dueños y gerentes que sienten que gastan demasiado en tecnología, o que están por hacer una inversión grande y quieren asegurarse de no pagar de más.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: RefreshCw,
    title: "Renovaciones automáticas",
    desc: "Un contrato o una licencia se renueva solo cada año, sin que nadie compare si sigue siendo la mejor opción.",
  },
  {
    icon: Gauge,
    title: "Capacidad que sobra",
    desc: "Se contrató capacidad para un pico de demanda que ya pasó, y esa capacidad se sigue pagando todos los meses.",
  },
  {
    icon: Search,
    title: "Nadie tiene la tarea",
    desc: "Revisar el gasto tecnológico no es responsabilidad formal de nadie en la empresa, así que nadie lo hace.",
  },
];

interface SolutionConcept {
  icon: typeof Search;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Search,
    title: "Inventario real",
    desc: "Sabemos exactamente qué hardware, licencias y servicios estás pagando hoy.",
  },
  {
    icon: Scale,
    title: "Uso versus contratado",
    desc: "Comparamos la capacidad contratada con lo que realmente se usa.",
  },
  {
    icon: Gauge,
    title: "Costo por valor",
    desc: "Evaluamos qué aporta cada gasto a tu operación, no solo cuánto cuesta.",
  },
  {
    icon: ListChecks,
    title: "Plan priorizado",
    desc: "Cada hallazgo se traduce en una acción concreta, ordenada por impacto y esfuerzo.",
  },
];

const INCLUDES = [
  "Auditoría de hardware y cotizaciones",
  "Ensamblado de PCs a medida",
  "Auditoría de licencias y software",
  "Evaluación de infraestructura en nube",
  "Plan de reducción de costos priorizado",
];

interface OverspendExample {
  icon: typeof KeyRound;
  title: string;
  desc: string;
}

// Ejemplos concretos de dónde suele esconderse el sobregasto, para que se
// entienda de inmediato qué tipo de hallazgos aparecen en una auditoría real.
const OVERSPEND_EXAMPLES: OverspendExample[] = [
  {
    icon: KeyRound,
    title: "Licencias que nadie usa",
    desc: "Cuentas de gente que ya no está, planes sobredimensionados, herramientas duplicadas.",
  },
  {
    icon: Cloud,
    title: "Infraestructura cloud de más",
    desc: "Recursos para una carga que ya no existe, ambientes de prueba encendidos todo el año.",
  },
  {
    icon: HardDrive,
    title: "Hardware fuera de ciclo",
    desc: "Equipos y contratos que nadie evaluó si conviene renovar, redistribuir o dar de baja.",
  },
  {
    icon: Handshake,
    title: "Contratos sin renegociar",
    desc: "Condiciones que se renuevan por inercia, sin comparar alternativas disponibles.",
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
    desc: "Levantamos tu inventario real: hardware, licencias, contratos y consumo cloud.",
  },
  {
    n: "02",
    icon: Scale,
    title: "Análisis de uso",
    desc: "Comparamos lo que pagas con lo que realmente usas, sin adivinar.",
  },
  {
    n: "03",
    icon: ListChecks,
    title: "Plan priorizado",
    desc: "Cada hallazgo se ordena por impacto, con el ahorro estimado calculado sobre tus datos reales.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Implementación y control",
    desc: "Te acompañamos a ejecutar y dejamos criterios para que el gasto no vuelva a crecer solo.",
  },
];

interface Benefit {
  icon: typeof Search;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Search,
    title: "Sabes en qué se va tu presupuesto",
    desc: "Cada peso de tu gasto en tecnología tiene una razón identificada, no una suposición.",
  },
  {
    icon: Gauge,
    title: "Pagas por lo que realmente usas",
    desc: "Sin planes sobredimensionados ni recursos que nadie consume.",
  },
  {
    icon: RefreshCw,
    title: "Nada se renueva solo",
    desc: "Cada contrato tiene una fecha de revisión antes de renovarse de forma automática.",
  },
  {
    icon: TrendingDown,
    title: "Presupuesto liberado para lo que sí aporta",
    desc: "El ahorro identificado queda disponible para invertir donde realmente importa.",
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
    title: "Medimos primero, recomendamos después",
    desc: "No proponemos ningún recorte sin datos reales de uso y gasto.",
  },
  {
    icon: Scale,
    title: "No cortamos por cortar",
    desc: "Si un gasto está justificado, te lo decimos, aunque eso signifique no vender nada.",
  },
  {
    icon: ShieldCheck,
    title: "Independencia total",
    desc: "No representamos proveedores ni recibimos comisiones por recomendar plataformas.",
  },
];

const PROMISE_TEXT =
  "Un plan concreto, con números reales, para reducir tu gasto en tecnología entre un 30% y un 50% sin sacrificar rendimiento ni seguridad.";

/* ------------------------------ view ------------------------------ */

const ReduccionCostosTiLandingView = () => {
  useLandingController("Reducción de Costos TI | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Reducción de Costos TI | Independencia Digital"
        description="Auditamos tu hardware, licencias e infraestructura cloud y te mostramos, con datos reales, dónde estás gastando de más. Diagnóstico sin costo."
        path="/landing/servicio/optimizacion-costos-ti"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Wallet}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={2} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Reducción de Costos TI, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Cada mes hay un número exacto: cuánto de tu gasto en tecnología no debería estar ahí.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Auditamos tu hardware, tus licencias y tu infraestructura cloud y te mostramos,
            con datos reales, dónde se está yendo tu presupuesto. Sin recortar a ciegas.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("optimizacion-costos-ti")} />
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
                El gasto en tecnología crece solo, porque nadie tiene la tarea de revisarlo
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Nadie decide gastar de más a propósito. El gasto crece de a poco: una
                licencia que se renueva sola, un servidor que se sobredimensionó "por si
                acaso", un contrato que nadie volvió a mirar desde que se firmó. Cada
                decisión aislada parece razonable en el momento, pero sumadas construyen
                un presupuesto de tecnología que nadie diseñó a propósito y que, mes a
                mes, sigue creciendo sin que nadie lo note.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={costosProblema}
                alt="Dueño de negocio preocupado revisando facturas y gastos tecnológicos acumulados en su escritorio"
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
        <AccentBlob shape={5} className="hidden md:block w-9 h-12 bottom-12 left-[6%] opacity-70" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal variant="scale" className="order-last lg:order-first">
              <img
                src={costosSolucion}
                alt="Consultores analizando juntos los costos de infraestructura y licencias de una empresa"
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
                Te mostramos, con números reales, dónde se está yendo tu presupuesto de
                tecnología
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No se puede reducir lo que no se ha medido. Auditamos tu hardware, tus
                licencias y tu infraestructura en la nube para identificar exactamente
                dónde estás gastando de más. Cada hallazgo se clasifica según lo que
                realmente conviene hacer: eliminar, optimizar, renegociar o mantener. Si
                tu gasto ya está bien dimensionado, también te lo decimos.
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
                Dónde solemos encontrar sobregasto
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Estos son los hallazgos más comunes cuando revisamos el gasto tecnológico de una empresa.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {OVERSPEND_EXAMPLES.map((ex, i) => (
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
                Cuatro etapas, sin letra chica. Empezamos por una auditoría acotada.
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
              Un presupuesto de tecnología que entiendes, no que solo pagas
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
                src={costosResultado}
                alt="Dueño de negocio sonriendo al revisar un informe de ahorro en costos tecnológicos"
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
                  <Wallet className="w-5 h-5 text-secondary" />
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
                ¿Sabes exactamente en qué se va tu presupuesto de tecnología?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y revisemos juntos dónde se está gastando
                de más, qué conviene optimizar y qué debería mantenerse tal como está.
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

export default ReduccionCostosTiLandingView;
