import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Code2,
  Compass,
  Cpu,
  Database,
  FileSpreadsheet,
  Globe,
  LayoutDashboard,
  Network,
  Palette,
  Plug,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Unlink,
  Zap,
} from "lucide-react";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import {
  AccentBlob,
  BlobImage,
  GlowOrb,
  RingLoop,
  SparkleDots,
  StripeAccent,
} from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import swHeroDashboard from "@/assets/services/sw-hero-dashboard.jpg";
import swProblemaFragmentado from "@/assets/services/sw-problema-fragmentado.jpg";
import swSolucionPlataforma from "@/assets/services/sw-solucion-plataforma.jpg";
import swResultadoDashboard from "@/assets/services/sw-resultado-dashboard.jpg";
import swCtaProfesional from "@/assets/services/sw-cta-profesional.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "Procesos manuales",
    desc: "Información que todavía depende de personas, planillas y tareas repetitivas.",
  },
  {
    num: "02",
    title: "Sistemas desconectados",
    desc: "La información está repartida entre distintas plataformas que no se comunican correctamente.",
  },
  {
    num: "03",
    title: "Software que no se adapta",
    desc: "La empresa termina modificando sus procesos para adaptarse a una herramienta que debería hacer exactamente lo contrario.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: Puzzle,
    title: "Procesos a tu medida",
    desc: "El sistema se adapta a la forma en que realmente trabaja tu organización.",
  },
  {
    icon: Database,
    title: "Información centralizada",
    desc: "Los datos relevantes pueden concentrarse en un mismo entorno.",
  },
  {
    icon: Zap,
    title: "Automatización",
    desc: "Reducimos tareas manuales y repetitivas cuando existe una oportunidad real de automatización.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    desc: "Construimos pensando en las necesidades actuales y en la evolución futura del proyecto.",
  },
];

const BUILD_AREAS = [
  {
    num: "01",
    icon: LayoutDashboard,
    title: "Sistemas internos",
    items: [
      "Gestión de operaciones",
      "Paneles administrativos",
      "Control de procesos",
      "Gestión documental",
      "Sistemas internos personalizados",
    ],
  },
  {
    num: "02",
    icon: Globe,
    title: "Plataformas web",
    items: [
      "Plataformas empresariales",
      "Portales privados",
      "Sistemas de gestión",
      "Plataformas de clientes",
      "Aplicaciones web",
    ],
  },
  {
    num: "03",
    icon: Plug,
    title: "Integraciones",
    items: [
      "APIs",
      "Bases de datos",
      "Sistemas externos",
      "Automatizaciones",
      "Integración entre plataformas",
    ],
  },
  {
    num: "04",
    icon: Smartphone,
    title: "Aplicaciones y soluciones a medida",
    items: [
      "Aplicaciones móviles",
      "CRM personalizados",
      "E-commerce",
      "Sistemas de reservas",
      "Herramientas específicas para procesos particulares",
    ],
  },
];

const DECISION_PATHS = [
  {
    icon: Plug,
    title: "Integrar",
    desc: "Cuando las herramientas existentes pueden resolver el problema conectándose entre sí.",
  },
  {
    icon: Zap,
    title: "Automatizar",
    desc: "Cuando el problema está en tareas manuales y repetitivas.",
  },
  {
    icon: Code2,
    title: "Desarrollar",
    desc: "Cuando necesitas una solución que las herramientas existentes no pueden ofrecer adecuadamente.",
  },
];

const PROCESS_STEPS = [
  { icon: Search, title: "Descubrimiento", desc: "Entendemos el negocio, los usuarios y el problema." },
  { icon: Network, title: "Arquitectura", desc: "Definimos funcionalidades, datos, integraciones y estructura." },
  { icon: Palette, title: "Diseño", desc: "Creamos la experiencia y las interfaces del sistema." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos la solución y sus componentes." },
  { icon: ShieldCheck, title: "Pruebas", desc: "Validamos funcionamiento, seguridad y experiencia." },
  { icon: Rocket, title: "Implementación", desc: "Ponemos el sistema en funcionamiento y preparamos su evolución." },
];

const TECH_CRITERIA = [
  "Tipo de solución",
  "Seguridad",
  "Escalabilidad",
  "Integraciones",
  "Rendimiento",
  "Presupuesto",
  "Mantenimiento",
];

const RESULT_POINTS = [
  "Procesos más ordenados",
  "Información centralizada",
  "Menos tareas repetitivas",
  "Mayor trazabilidad",
  "Mejor acceso a la información",
  "Herramientas adaptadas a la operación",
  "Capacidad de crecer y evolucionar",
];

const RESULT_FLOW = ["Proceso", "Datos", "Software", "Decisión"];

const FIT_ITEMS = [
  { icon: FileSpreadsheet, title: "Tu proceso depende demasiado de Excel." },
  { icon: Unlink, title: "Tus sistemas no comparten información." },
  { icon: Zap, title: "Necesitas automatizar una operación específica." },
  { icon: Puzzle, title: "Las herramientas existentes no se adaptan a tu negocio." },
];

const TRUST_PRINCIPLES = [
  {
    icon: Compass,
    title: "Estrategia",
    desc: "Primero entendemos el problema.",
  },
  {
    icon: Network,
    title: "Arquitectura",
    desc: "Diseñamos una solución sostenible.",
  },
  {
    icon: Cpu,
    title: "Tecnología",
    desc: "Seleccionamos las herramientas adecuadas para implementarla.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Desarrollan software completamente desde cero?",
    a: "Sí, cuando el proyecto lo justifica. Pero no siempre es la mejor respuesta: en el diagnóstico evaluamos si conviene desarrollar desde cero, integrar herramientas existentes o automatizar procesos sobre lo que ya utilizas.",
  },
  {
    q: "¿Pueden trabajar sobre un sistema existente?",
    a: "Sí. Analizamos el estado actual del sistema, su tecnología y su documentación para determinar si conviene evolucionarlo, integrarlo con otras plataformas o reescribir las partes que están limitando tu operación.",
  },
  {
    q: "¿Pueden integrar diferentes plataformas?",
    a: "Sí. Mediante APIs, bases de datos y automatizaciones conectamos sistemas que hoy no se comunican, de modo que la información fluya entre tus herramientas sin trabajo manual duplicado.",
  },
  {
    q: "¿Desarrollan aplicaciones móviles?",
    a: "Sí, como parte de las soluciones a medida. Según el caso evaluamos qué formato tiene más sentido: una aplicación móvil, una aplicación web responsive o un portal, priorizando siempre la experiencia de quienes lo usarán.",
  },
  {
    q: "¿Cuánto demora un proyecto de software?",
    a: "Depende del alcance, la complejidad, las integraciones necesarias, la cantidad de usuarios y los requerimientos de seguridad. Por eso no damos cifras genéricas: en el diagnóstico definimos el alcance y entregamos una estimación realista por etapas.",
  },
  {
    q: "¿Cómo se determina el costo de un desarrollo?",
    a: "El costo se calcula según el alcance funcional, la complejidad técnica, las integraciones, los usuarios, la seguridad y el mantenimiento esperado. Después de entender tu problema presentamos una propuesta concreta, sin valores inventados.",
  },
];

/* ------------------------------ ui atoms ------------------------------ */

const PrimaryCta = ({ label, className = "", inverse = false }: { label: string; className?: string; inverse?: boolean }) => (
  <button
    className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-2 font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 ${
      inverse ? "bg-brand-foreground text-primary" : "gradient-brand text-primary-foreground"
    } ${className}`}
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </button>
);

const PillLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
    {children}
  </span>
);

/** Mini gráfico de línea ascendente (tarjeta flotante del hero). */
const MiniLineChart = () => (
  <svg viewBox="0 0 96 40" className="w-24 h-10" fill="none" aria-hidden="true">
    <polyline
      points="2,34 20,26 36,30 52,18 68,22 84,8 94,4"
      stroke="hsl(var(--secondary))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="94" cy="4" r="3" fill="hsl(var(--secondary))" />
  </svg>
);

/* ------------------------------ view ------------------------------ */

const DesarrolloSoftwareServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Desarrollo de Software a Medida | Independencia Digital</title>
        <meta
          name="description"
          content="Desarrollo de software a medida para empresas: sistemas internos, plataformas web, aplicaciones, automatización de procesos e integraciones. Primero entendemos tu operación, después construimos la herramienta."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/desarrollo-software" />
        <meta property="og:title" content="Desarrollo de Software a Medida | Independencia Digital" />
        <meta
          property="og:description"
          content="Sistemas personalizados para automatizar procesos, integrar información y convertir necesidades específicas en herramientas digitales."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/desarrollo-software" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        {/* Fondo: solo efectos (la imagen del banner es exclusiva del home) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={1} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={2} className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
          <GlowOrb color="secondary" className="absolute w-12 h-12 md:w-16 md:h-16 top-[12%] left-[8%]" />
          <SparkleDots color="secondary" className="absolute w-64 h-64 bottom-[8%] right-[6%] text-white" />
          <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={70} />
        </div>
        <div className="relative container mx-auto px-4">
          <Link
            to="/#servicios"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary border border-border/60 hover:border-primary/50 bg-card/50 backdrop-blur-sm rounded-full pl-3.5 pr-4 py-2 mb-10 transition-all duration-300 hover:shadow-card"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Volver a Servicios
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Code2 className="w-3.5 h-3.5" />
                Desarrollo de Software
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Software diseñado para la forma en que funciona tu negocio
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos y desarrollamos sistemas personalizados para automatizar
                procesos, integrar información y convertir necesidades específicas
                en herramientas digitales.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCta label="Agendar diagnóstico" />
                <a
                  href="#proceso"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver cómo trabajamos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={swHeroDashboard}
                  shape={1}
                  alt="Plataforma de software empresarial con dashboard, KPIs y automatización en laptop y smartphone"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Datos conectados</p>
                <p className="text-[11px] text-muted-foreground mt-1 mb-1.5">API · Base de datos · Automatización</p>
                <MiniLineChart />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ PROBLEMA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>El problema</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Tu empresa puede estar trabajando alrededor del software, en lugar de trabajar con él
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Excel dispersos, procesos manuales, sistemas que no se comunican
                entre sí y herramientas que fueron diseñadas para otro tipo de
                negocio terminan generando más trabajo, errores y pérdida de
                información.
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

          <div className="mt-14 md:mt-16 border-t border-border">
            {PROBLEMS.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 80}>
                <div className="grid md:grid-cols-[auto_1fr_2fr] gap-3 md:gap-10 items-start py-7 border-b border-border">
                  <span className="font-heading font-extrabold text-3xl md:text-4xl text-primary/25 leading-none">
                    {p.num}
                  </span>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOLUCIÓN ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="scale" className="relative order-last lg:order-first">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 left-6 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={swSolucionPlataforma}
                  shape={3}
                  alt="Plataforma empresarial personalizada funcionando en laptop, monitor y smartphone"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Construimos el software alrededor de tu operación
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No obligamos a tu negocio a adaptarse a una herramienta genérica.
                Analizamos cómo funciona tu operación y diseñamos una solución que
                responda a tus procesos, usuarios y objetivos.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {SOLUTION_CONCEPTS.map((c) => (
                  <div key={c.title} className="flex gap-3.5">
                    <span className="inline-flex w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                        {c.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ ¿QUÉ PODEMOS DESARROLLAR? ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>¿Qué podemos desarrollar?</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Desde una herramienta interna hasta una plataforma completa
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {BUILD_AREAS.map((area, i) => (
              <ScrollReveal key={area.num} delay={i * 80}>
                <div className="relative border-t-2 border-border pt-8">
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 right-0 font-heading font-extrabold text-6xl md:text-7xl text-primary/10 leading-none select-none"
                  >
                    {area.num}
                  </span>
                  <span className="inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand mb-5">
                    <area.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-wide text-foreground mb-5 max-w-[75%]">
                    {area.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NO TODO NECESITA SOFTWARE A MEDIDA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Primero, el diagnóstico</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Primero determinamos si realmente necesitas desarrollar
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              En algunos casos, la mejor solución puede ser integrar herramientas
              existentes, automatizar un proceso o mejorar una plataforma que ya
              utilizas. Si desarrollar desde cero no tiene sentido para tu
              negocio, te lo diremos.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[18%] right-[18%] border-t-2 border-dashed border-border"
            />
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {DECISION_PATHS.map((path, i) => (
                <ScrollReveal key={path.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <path.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                      {path.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section id="proceso" className="py-16 md:py-24 gradient-brand text-brand-foreground relative overflow-hidden scroll-mt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--brand-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/60 mb-3">
              Nuestro proceso
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-4xl leading-tight">
              Del problema al software funcionando
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-[9%] right-[9%] border-t-2 border-dashed border-brand-foreground/25"
            />
            <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
              {PROCESS_STEPS.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 70} as="li">
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-brand-foreground/15 backdrop-blur-sm items-center justify-center mb-4 ring-4 ring-brand-foreground/20 shadow-brand">
                      <s.icon className="w-6 h-6 text-brand-foreground" strokeWidth={1.7} />
                    </span>
                    <p className="font-heading font-bold text-sm mb-1.5">
                      {i + 1}. {s.title}
                    </p>
                    <p className="text-xs text-brand-foreground/70 leading-relaxed max-w-[180px] mx-auto">
                      {s.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ TECNOLOGÍA ============ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <PillLabel>Tecnología</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Tecnología al servicio del problema
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
              No elegimos herramientas por moda. La tecnología se selecciona en la
              etapa de arquitectura, según lo que tu proyecto realmente necesita.
            </p>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {TECH_CRITERIA.map((c) => (
                <li
                  key={c}
                  className="text-xs md:text-sm font-semibold text-foreground bg-muted border border-border px-4 py-2 rounded-full"
                >
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ RESULTADO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                El resultado no es código. Es una herramienta que funciona para tu negocio
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Un sistema bien diseñado debería reducir fricción, ordenar
                información y facilitar el trabajo de las personas que lo utilizan.
              </p>
              <ul className="space-y-3.5">
                {RESULT_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-foreground text-sm md:text-base font-medium">
                    <span className="inline-flex w-6 h-6 rounded-full bg-secondary/15 items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <img
                src={swResultadoDashboard}
                alt="Dashboard empresarial profesional con métricas operativas en laptop y smartphone"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
              <div className="absolute -left-3 bottom-6 md:-left-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <div className="flex items-center gap-1.5">
                  {RESULT_FLOW.map((step, i) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="text-[10px] md:text-[11px] font-heading font-bold uppercase tracking-wide text-foreground bg-muted border border-border px-2.5 py-1 rounded-full">
                        {step}
                      </span>
                      {i < RESULT_FLOW.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-secondary shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ ¿PARA QUIÉN ES? ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14">
            <PillLabel>¿Para quién es este servicio?</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight">
              Este servicio tiene sentido cuando…
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FIT_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div className="text-center">
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </span>
                  <p className="font-heading font-semibold text-sm md:text-base text-foreground leading-snug max-w-[210px] mx-auto">
                    {item.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONFIANZA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                No empezamos programando. Empezamos entendiendo
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de escribir una línea de código necesitamos entender qué
                problema estamos resolviendo. Eso nos permite definir qué conviene
                construir, qué conviene integrar y qué simplemente no vale la pena
                desarrollar.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {TRUST_PRINCIPLES.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 90}>
                  <div className="flex gap-5 items-start border-l-2 border-secondary pl-6">
                    <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading font-extrabold text-base md:text-lg uppercase tracking-[0.14em] text-foreground mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Preguntas frecuentes</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight">
              Lo que suelen preguntarnos antes de desarrollar
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-semibold text-sm md:text-base text-foreground hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-16 md:py-24 gradient-brand text-brand-foreground overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 85% 50%, hsl(var(--secondary) / 0.15), transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl leading-tight mb-5">
                ¿Tienes un proceso que podría funcionar mejor?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Cuéntanos qué necesitas. Analizamos tu situación y determinamos si
                la mejor solución es desarrollar, integrar o automatizar.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Sin compromiso
                </span>
              </div>
              <Link
                to="/#servicios"
                className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-brand-foreground/85 hover:text-brand-foreground underline underline-offset-4 decoration-brand-foreground/40 hover:decoration-brand-foreground transition-colors"
              >
                Ver todos los servicios
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={swCtaProfesional}
                  shape={4}
                  alt="Profesional trabajando con una plataforma de software empresarial en un entorno tecnológico"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default DesarrolloSoftwareServiceView;
