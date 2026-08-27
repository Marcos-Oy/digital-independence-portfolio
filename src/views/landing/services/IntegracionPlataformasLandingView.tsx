import {
  CheckCircle2,
  Database,
  FileSearch,
  FileStack,
  Network,
  Plug,
  RefreshCw,
  Repeat,
  Search,
  ShieldAlert,
  ShieldCheck,
  Unlink,
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
import intProblema from "@/assets/services/int-problema.jpg";
import intSolucion from "@/assets/services/int-solucion.jpg";
import intResultado from "@/assets/services/int-resultado.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico.
const PAIN_POINTS = [
  "Cargas los mismos datos a mano en dos o tres sistemas distintos, todos los días, porque no se comunican entre sí.",
  "Ventas ve una cifra, finanzas ve otra y operaciones ve una tercera. Nadie confía del todo en los reportes.",
  "Ya invertiste en CRM, ERP o e-commerce, pero cada plataforma funciona como una isla separada.",
  "Cuando necesitas un reporte que cruce información de varios sistemas, alguien tiene que consolidarlo a mano antes de poder usarlo.",
  "Se armaron conexiones parciales entre sistemas hace tiempo, y nadie sabe muy bien cómo funcionan ni qué pasa si algo falla.",
  "Te preocupa cambiar de plataforma porque no sabes qué pasaría con el historial de datos que tienes hoy.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas, el problema no es que tus plataformas sean malas. Es que nadie las diseñó para conversar entre sí.";

const RIGHT_CLIENT_TEXT =
  "PyMEs y empresas que ya invirtieron en varias plataformas (CRM, ERP, e-commerce, contabilidad) que no se comunican entre sí, con datos dispersos en planillas y reportes que nadie termina de confiar.";

interface RootCause {
  icon: typeof Database;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Database,
    title: "Datos en silos",
    desc: "Cada plataforma guarda su propia versión de la verdad, sin ninguna fuente única que las una.",
  },
  {
    icon: Unlink,
    title: "Sin capa de integración",
    desc: "Las conexiones, si existen, se armaron de forma parcial e improvisada, sin pensar en el largo plazo.",
  },
  {
    icon: ShieldAlert,
    title: "Miedo a tocar lo que funciona",
    desc: "Nadie quiere arriesgar lo que ya está funcionando, así que el problema se sostiene con trabajo manual en vez de resolverse.",
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
    title: "Diagnóstico de integración",
    desc: "Mapeamos qué sistemas existen, qué datos manejan y cómo deberían conectarse.",
  },
  {
    icon: Plug,
    title: "Conexión vía APIs",
    desc: "Integramos las plataformas existentes usando sus APIs y middleware cuando corresponde.",
  },
  {
    icon: FileStack,
    title: "Base de datos unificada",
    desc: "Consolidamos los datos dispersos en una fuente única, estructurada y consultable.",
  },
  {
    icon: ShieldCheck,
    title: "Sin reemplazar lo que funciona",
    desc: "El trabajo es conectar y consolidar, no descartar tu inversión tecnológica previa.",
  },
];

const INCLUDES = [
  "Mapeo de plataformas y flujos de datos",
  "Integraciones vía API REST, webhooks y middleware (N8N, Zapier, Make)",
  "Auditoría de fuentes de datos y diseño de modelo unificado",
  "Procesos ETL y carga automatizada",
  "Documentación técnica y monitoreo",
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
    desc: "Inventariamos los sistemas existentes, los datos que manejan y los flujos actuales entre ellos.",
  },
  {
    n: "02",
    icon: Network,
    title: "Arquitectura de integración",
    desc: "Diseñamos la capa de conexión y el modelo de datos consolidado.",
  },
  {
    n: "03",
    icon: Plug,
    title: "Implementación",
    desc: "Construimos las integraciones vía APIs y los procesos de limpieza y consolidación.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Monitoreo y evolución",
    desc: "Activamos en producción con monitoreo desde el primer día, y ajustamos cuando tus plataformas cambian.",
  },
];

interface Benefit {
  icon: typeof RefreshCw;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: RefreshCw,
    title: "Se acabó la doble digitación",
    desc: "Tus plataformas sincronizan datos automáticamente, sin trabajo manual de traslado.",
  },
  {
    icon: FileStack,
    title: "Una sola versión de cada cifra",
    desc: "Ventas, finanzas y operaciones consultan la misma información, siempre actualizada.",
  },
  {
    icon: ShieldCheck,
    title: "Tu inversión tecnológica protegida",
    desc: "No reemplazamos lo que ya funciona: lo conectamos y lo hacemos más valioso.",
  },
  {
    icon: Repeat,
    title: "Cambiar de plataforma deja de dar miedo",
    desc: "Una integración bien diseñada permite reemplazar un sistema sin rehacer todo el trabajo.",
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
    title: "Inventario primero",
    desc: "No proponemos ninguna arquitectura de integración antes de entender qué sistemas existen y qué datos manejan.",
  },
  {
    icon: RefreshCw,
    title: "Sostenibilidad",
    desc: "Diseñamos integraciones que puedan mantenerse y evolucionar cuando cambien tus plataformas.",
  },
  {
    icon: ShieldCheck,
    title: "Sin reemplazar lo que funciona",
    desc: "El trabajo es conectar tu inversión tecnológica existente, no descartarla.",
  },
];

const PROMISE_TEXT =
  "Tus plataformas conectadas y tus datos consolidados en una base única, limpia y consultable, con procesos automáticos de carga y sin trabajo manual de copiado (una sola fuente de verdad, no versiones distintas por área).";

/* ------------------------------ view ------------------------------ */

const IntegracionPlataformasLandingView = () => {
  useLandingController("Integración de Plataformas y Bases de Datos | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Integración de Plataformas y Bases de Datos | Independencia Digital"
        description="Conectamos tus sistemas existentes vía APIs y consolidamos tus datos dispersos en una base única, estructurada y confiable. Sin reemplazar lo que ya funciona. Diagnóstico sin costo."
        path="/landing/servicio/integracion-plataformas"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Plug}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Integración de Plataformas y Bases de Datos, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tu equipo no necesita más plataformas. Necesita que las que ya tiene se hablen entre sí.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conectamos tus sistemas existentes vía APIs y consolidamos tus datos dispersos
            en una base única, estructurada y confiable. Sin reemplazar lo que ya funciona.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("integracion-plataformas")} />
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
                Cada plataforma se compró para resolver un problema a la vez, nunca todos
                juntos
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Nadie decide un día armar un ecosistema fragmentado. Se compra un CRM
                cuando el equipo de ventas lo necesita, un ERP cuando crece la operación,
                una plataforma de e-commerce cuando se abre un nuevo canal. Cada decisión
                tuvo sentido en su momento, pero nadie diseñó cómo esas plataformas iban a
                comunicarse entre sí. El resultado: información duplicada, versiones
                distintas de la misma cifra y una persona que hace de puente manual entre
                sistemas que deberían sincronizarse solos.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={intProblema}
                alt="Trabajador copiando datos manualmente entre sistemas que no se comunican"
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
                src={intSolucion}
                alt="Equipo técnico conectando las plataformas empresariales de un negocio"
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
                Conectamos lo que ya tienes. No hace falta empezar de cero
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No reemplazamos las plataformas en las que ya invertiste. Las conectamos
                entre sí mediante APIs y middleware, y consolidamos la información en una
                base de datos única y confiable. El resultado es que tus datos fluyen solos
                y todas las áreas consultan la misma versión de la información.
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

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, sin letra chica. No necesitas integrarlo todo de una vez.
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
              Información que fluye sola, sin que nadie tenga que moverla
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
                src={intResultado}
                alt="Equipo trabajando con información unificada entre todas sus plataformas"
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
                  <Plug className="w-5 h-5 text-secondary" />
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
                ¿Cuántas versiones distintas de la misma información tiene tu empresa hoy?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos qué sistemas usas. Te decimos, sin compromiso, cómo deberían
                estar conectados.
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

export default IntegracionPlataformasLandingView;
