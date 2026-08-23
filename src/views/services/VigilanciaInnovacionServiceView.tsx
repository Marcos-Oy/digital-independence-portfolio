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
  ArrowRight,
  Bell,
  Brain,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Compass,
  Cpu,
  Crosshair,
  Eye,
  EyeOff,
  FileText,
  Filter,
  FlaskConical,
  Globe,
  Layers,
  Lightbulb,
  Map,
  Radar,
  Rocket,
  Scale,
  Search,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
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
import RadialOrbitDiagram from "@/views/shared/RadialOrbitDiagram";
import viHero from "@/assets/vigilancia-hero.jpg";
import viInfoxicacion from "@/assets/vigilancia-infoxicacion.jpg";
import viRadar from "@/assets/vigilancia-radar.jpg";
import viCompetencia from "@/assets/vigilancia-competencia.jpg";
import viInforme from "@/assets/vigilancia-informe.jpg";
import viResultado from "@/assets/vigilancia-resultado.jpg";
import viCta from "@/assets/vigilancia-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    icon: Layers,
    title: "Demasiada información",
    desc: "La cantidad de información hace difícil distinguir lo relevante de lo accesorio.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Cambios demasiado rápidos",
    desc: "Una tecnología puede pasar de emergente a competitiva en poco tiempo.",
  },
  {
    num: "03",
    icon: Crosshair,
    title: "Competencia en movimiento",
    desc: "Tus competidores pueden estar adoptando herramientas, modelos o estrategias antes que tú.",
  },
  {
    num: "04",
    icon: Scale,
    title: "Cambios regulatorios",
    desc: "Una modificación normativa puede generar nuevos riesgos, costos u oportunidades.",
  },
];

const DECISION_PATHS = [
  {
    icon: EyeOff,
    label: "Ignorar",
    desc: "Esto no tiene impacto relevante para nuestro negocio.",
    highlight: false,
  },
  {
    icon: Eye,
    label: "Vigilar",
    desc: "Existe una señal que debemos seguir observando.",
    highlight: false,
  },
  {
    icon: Target,
    label: "Actuar",
    desc: "Existe una oportunidad o riesgo que requiere una decisión.",
    highlight: true,
  },
];

const SIGNAL_FLOW = ["Señal", "Análisis", "Impacto", "Decisión"];

const DIMENSION_NODES = [
  { icon: Cpu, label: "Tecnología", desc: "Señales emergentes" },
  { icon: Crosshair, label: "Competencia", desc: "Movimientos relevantes" },
  { icon: TrendingUp, label: "Mercado", desc: "Tendencias y canales" },
  { icon: Scale, label: "Regulación", desc: "Cambios normativos" },
];

const DIMENSIONS = [
  {
    num: "01",
    icon: Cpu,
    title: "Tecnología",
    items: [
      "Tecnologías emergentes",
      "Inteligencia artificial",
      "Automatización",
      "Nuevas plataformas",
      "Herramientas empresariales",
      "Arquitecturas y soluciones",
      "Patentes y desarrollos relevantes cuando corresponda",
    ],
  },
  {
    num: "02",
    icon: Crosshair,
    title: "Competencia",
    items: [
      "Movimientos digitales",
      "Nuevos servicios",
      "Nuevas plataformas",
      "Cambios en posicionamiento",
      "Adopción tecnológica",
      "Nuevos actores",
      "Alianzas y movimientos relevantes",
    ],
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Mercado",
    items: [
      "Tendencias del sector",
      "Nuevos modelos de negocio",
      "Cambios en comportamiento",
      "Nuevos proveedores",
      "Nuevos canales",
      "Oportunidades emergentes",
    ],
  },
  {
    num: "04",
    icon: Scale,
    title: "Entorno regulatorio",
    items: [
      "Cambios legislativos",
      "Normativa y regulaciones",
      "Consultas públicas",
      "Pronunciamientos relevantes",
      "Exigencias que puedan impactar al sector",
    ],
  },
];

const TECH_CHIPS = ["IA", "Automatización", "Cloud", "Ciberseguridad", "Data", "Software"];

const COMPETITOR_NODES = [
  { icon: Building2, label: "Competidor A", desc: "Nueva plataforma" },
  { icon: Store, label: "Competidor B", desc: "Nuevo servicio" },
  { icon: Sparkles, label: "Nuevo actor", desc: "Cambio tecnológico" },
  { icon: Globe, label: "Plataforma", desc: "Nueva alianza" },
  { icon: Users, label: "Proveedor", desc: "Nuevo canal" },
];

const REGULATORY_FLOW = [
  { icon: FileText, label: "Cambio normativo" },
  { icon: Search, label: "Impacto posible" },
  { icon: Building2, label: "Área afectada" },
  { icon: Compass, label: "Acción recomendada" },
];

const CHILE_SOURCES = [
  "Biblioteca del Congreso Nacional",
  "Diario Oficial",
  "Ministerios y subsecretarías",
  "Superintendencias",
  "SERNAC",
  "CMF",
  "SUBTEL",
  "Fiscalía Nacional Económica",
  "INAPI",
  "CORFO",
  "Organismos sectoriales",
  "Organismos internacionales con impacto en Chile",
];

const INNOVATION_FLOW = [
  { icon: TrendingUp, label: "Tendencia" },
  { icon: Lightbulb, label: "Oportunidad" },
  { icon: Search, label: "Evaluación" },
  { icon: FlaskConical, label: "Experimento" },
  { icon: Rocket, label: "Innovación" },
];

const INNOVATION_EXAMPLES = [
  "Nueva tecnología",
  "Nuevo proceso",
  "Nueva solución",
  "Nuevo mercado",
  "Nuevo modelo de negocio",
];

const MATURITY_STAGES = [
  {
    icon: Sparkles,
    label: "Emergente",
    desc: "La tecnología está apareciendo.",
  },
  {
    icon: Eye,
    label: "En observación",
    desc: "Existen señales suficientes para seguirla.",
  },
  {
    icon: TrendingUp,
    label: "Madurando",
    desc: "La adopción y la evidencia están aumentando.",
  },
  {
    icon: CheckCircle2,
    label: "Relevante",
    desc: "Puede justificar una evaluación concreta para el negocio.",
  },
];

const MONTHLY_CYCLE = ["Mes", "Monitoreo", "Análisis", "Priorización", "Entrega", "Revisión"];

const RETAINER_STEPS = [
  {
    num: "01",
    icon: Radar,
    title: "Monitoreo",
    desc: "Seguimiento de fuentes y señales definidas.",
  },
  {
    num: "02",
    icon: Filter,
    title: "Filtrado",
    desc: "Eliminación de información irrelevante o redundante.",
  },
  {
    num: "03",
    icon: Brain,
    title: "Análisis",
    desc: "Evaluación de relevancia e impacto potencial.",
  },
  {
    num: "04",
    icon: ClipboardCheck,
    title: "Priorización",
    desc: "Identificación de señales que requieren atención.",
  },
  {
    num: "05",
    icon: FileText,
    title: "Entrega",
    desc: "Informe ejecutivo mensual.",
  },
  {
    num: "06",
    icon: Bell,
    title: "Alerta",
    desc: "Cuando corresponda, comunicamos señales relevantes sin esperar al cierre mensual.",
  },
];

const REPORT_SECTIONS = [
  "Resumen ejecutivo",
  "Señales relevantes",
  "Tecnologías emergentes",
  "Movimientos competitivos",
  "Cambios regulatorios",
  "Oportunidades",
  "Riesgos",
  "Recomendaciones de seguimiento",
  "Fuentes",
];

const PROCESS_STEPS = [
  { icon: Target, title: "Definición", desc: "Identificamos qué necesitas vigilar." },
  { icon: Map, title: "Mapa", desc: "Definimos fuentes, actores y factores críticos." },
  { icon: Radar, title: "Monitoreo", desc: "Seguimos continuamente el entorno definido." },
  { icon: Filter, title: "Análisis", desc: "Filtramos y contextualizamos las señales." },
  { icon: ClipboardCheck, title: "Priorización", desc: "Determinamos qué merece atención." },
  { icon: FileText, title: "Entrega", desc: "Convertimos la información en inteligencia útil para decidir." },
];

const CRITICAL_QUESTIONS = [
  "¿Qué tecnologías pueden cambiar nuestro sector?",
  "¿Qué está haciendo nuestra competencia?",
  "¿Qué regulaciones podrían afectarnos?",
  "¿Qué nuevos actores están apareciendo?",
  "¿Qué herramientas podrían reducir nuestros costos?",
  "¿Qué oportunidades tecnológicas podrían abrir un nuevo negocio?",
];

const RESULT_POINTS = [
  "Mayor visibilidad del entorno",
  "Detección temprana de tendencias",
  "Seguimiento de competidores",
  "Identificación de oportunidades",
  "Alertas regulatorias relevantes",
  "Mejor preparación estratégica",
  "Información filtrada para la toma de decisiones",
];

const RESULT_FLOW = ["Cambio", "Señal", "Análisis", "Impacto", "Decisión"];

const AUDIENCES = [
  {
    icon: TrendingUp,
    title: "Tu sector cambia rápidamente",
    desc: "Y cada cambio puede alterar tu posición competitiva.",
  },
  {
    icon: Crosshair,
    title: "Tu competencia adopta nuevas tecnologías",
    desc: "Y prefieres saberlo cuando ocurre, no cuando ya te alcanzaron.",
  },
  {
    icon: Lightbulb,
    title: "Necesitas identificar oportunidades antes que otros",
    desc: "Para evaluarlas con tiempo y decidir con criterio.",
  },
  {
    icon: Scale,
    title: "Los cambios regulatorios pueden afectar tu operación",
    desc: "Y requieren preparación, no reacción de último minuto.",
  },
  {
    icon: Clock,
    title: "Tu equipo no tiene tiempo de monitorear todo el entorno",
    desc: "Porque está dedicado a dirigir y operar el negocio.",
  },
];

const SERVICE_MODEL_PILLS = [
  "Retainer mensual",
  "Monitoreo continuo",
  "Entrega mensual",
  "Alertas relevantes",
  "Revisión periódica",
];

const TRUST_PRINCIPLES = [
  {
    icon: Filter,
    title: "Relevancia",
    desc: "Filtramos según los objetivos definidos.",
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

const FAQ_ITEMS = [
  {
    q: "¿Qué es exactamente la vigilancia tecnológica?",
    a: "Consiste en observar sistemáticamente el entorno tecnológico para identificar señales, cambios, oportunidades y riesgos relevantes para tu organización. No es leer noticias: es un proceso estructurado de monitoreo, filtrado, análisis y priorización orientado a apoyar decisiones.",
  },
  {
    q: "¿También monitorean a la competencia?",
    a: "Sí, utilizando únicamente información pública y fuentes legítimamente disponibles: sitios web, comunicaciones públicas, plataformas, registros y publicaciones sectoriales. No realizamos espionaje ni accedemos a información privada o no autorizada.",
  },
  {
    q: "¿Monitorean cambios regulatorios?",
    a: "Sí, dentro del alcance definido para tu sector y organización. Identificamos señales normativas relevantes y las traducimos a posibles impactos. No entregamos asesoría jurídica: cuando una materia requiere interpretación legal especializada, recomendamos la participación de un abogado o asesor jurídico competente.",
  },
  {
    q: "¿Qué recibo cada mes?",
    a: "Un informe ejecutivo mensual con el resumen del período, las señales relevantes detectadas, tecnologías emergentes, movimientos competitivos, cambios regulatorios, oportunidades, riesgos y recomendaciones de seguimiento. Además, cuando corresponda, comunicamos alertas relevantes sin esperar al cierre mensual.",
  },
  {
    q: "¿Puedo solicitar vigilancia sobre un tema específico?",
    a: "Sí. Los factores críticos de vigilancia y los focos de observación se definen según tus objetivos estratégicos: tecnologías, competidores, normativas, mercados o preguntas específicas que necesites responder.",
  },
  {
    q: "¿Es un servicio único o mensual?",
    a: "La modalidad principal es un retainer mensual, porque la vigilancia pierde valor si se realiza solamente una vez: el entorno cambia continuamente y las señales solo tienen sentido cuando se observan en el tiempo.",
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

/** Flujo de pasos conectados: horizontal en desktop, vertical en mobile. */
const FlowSteps = ({
  steps,
  className = "",
}: {
  steps: { icon: React.ElementType; label: string }[];
  className?: string;
}) => (
  <div className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 ${className}`}>
    {steps.map((step, i) => (
      <div key={step.label} className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
        <div className="flex items-center gap-2.5 bg-card border border-border rounded-full px-5 py-2.5 shadow-card">
          <step.icon className="w-4 h-4 text-secondary shrink-0" strokeWidth={1.8} />
          <span className="font-heading font-bold text-xs md:text-sm uppercase tracking-[0.12em] text-foreground whitespace-nowrap">
            {step.label}
          </span>
        </div>
        {i < steps.length - 1 && (
          <>
            <ArrowRight className="hidden md:block w-4 h-4 text-secondary shrink-0" />
            <ChevronDown className="md:hidden w-4 h-4 text-secondary shrink-0" />
          </>
        )}
      </div>
    ))}
  </div>
);

/** Mini gráfico de señales ascendentes (tarjeta flotante del hero). */
const MiniSignalChart = () => (
  <svg viewBox="0 0 96 40" className="w-24 h-10" fill="none" aria-hidden="true">
    <polyline
      points="2,34 18,30 34,32 50,22 66,24 82,12 94,6"
      stroke="hsl(var(--secondary))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="94" cy="6" r="3" fill="hsl(var(--secondary))" />
  </svg>
);

/* ------------------------------ view ------------------------------ */

const VigilanciaInnovacionServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vigilancia e Innovación Tecnológica | Independencia Digital</title>
        <meta
          name="description"
          content="Monitoreamos tendencias tecnológicas, competencia, mercado y cambios regulatorios para detectar señales, oportunidades y riesgos relevantes para tu negocio."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/vigilancia-innovacion" />
        <meta property="og:title" content="Vigilancia e Innovación Tecnológica | Independencia Digital" />
        <meta
          property="og:description"
          content="Vigilancia tecnológica, inteligencia competitiva, vigilancia regulatoria y de mercado en Chile: detectamos señales del entorno y las convertimos en información útil para decidir."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/vigilancia-innovacion" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
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
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">Vigilancia e Innovación Tecnológica</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Radar className="w-3.5 h-3.5" />
                Vigilancia e Innovación Tecnológica
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Lo que cambia afuera puede cambiar tu negocio
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Monitoreamos tecnología, competencia, mercado y entorno
                regulatorio para detectar señales, oportunidades y riesgos que
                puedan influir en tus decisiones.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCta label="Agendar diagnóstico" />
                <a
                  href="#modelo"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver cómo funciona
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={viHero}
                  shape={2}
                  alt="Sistema de inteligencia estratégica que observa señales de tecnología, mercado, competencia y regulación convergiendo en un análisis central"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Vigilancia activa</p>
                <p className="text-[11px] text-muted-foreground mt-1 mb-1.5">Tecnología · Mercado · Regulación</p>
                <MiniSignalChart />
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
                Información hay de sobra. Lo difícil es saber qué importa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Noticias, nuevas tecnologías, movimientos de competidores,
                cambios regulatorios, nuevos proveedores y tendencias aparecen
                todos los días. El problema no es acceder a información. Es
                identificar qué señales pueden afectar realmente a tu negocio.
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

          <div className="mt-14 md:mt-16 border-t border-border">
            {PROBLEMS.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 80}>
                <div className="grid md:grid-cols-[auto_auto_1fr_2fr] gap-3 md:gap-10 items-start py-7 border-b border-border">
                  <span className="font-heading font-extrabold text-3xl md:text-4xl text-primary/25 leading-none">
                    {p.num}
                  </span>
                  <span className="hidden md:inline-flex w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
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

      {/* ============ NO PERSEGUIR TENDENCIAS ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Criterio antes que novedad</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              No se trata de perseguir cada tendencia
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Una nueva tecnología no necesariamente significa una oportunidad
              para tu empresa. La vigilancia tiene valor cuando permite
              distinguir qué merece atención, qué requiere seguimiento y qué
              simplemente puede ignorarse.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14">
            {DECISION_PATHS.map((path, i) => (
              <ScrollReveal key={path.label} delay={i * 90} className="h-full">
                <div
                  className={`h-full rounded-3xl p-7 md:p-8 text-center ${
                    path.highlight
                      ? "gradient-brand text-brand-foreground shadow-brand"
                      : "bg-card border border-border shadow-card"
                  }`}
                >
                  <span
                    className={`inline-flex w-14 h-14 rounded-full items-center justify-center mb-5 ${
                      path.highlight
                        ? "bg-brand-foreground/15 ring-4 ring-brand-foreground/20"
                        : "bg-primary/8 border border-primary/15"
                    }`}
                  >
                    <path.icon
                      className={`w-6 h-6 ${path.highlight ? "text-brand-foreground" : "text-primary"}`}
                      strokeWidth={1.7}
                    />
                  </span>
                  <h3
                    className={`font-heading font-extrabold text-lg md:text-xl uppercase tracking-[0.14em] mb-3 ${
                      path.highlight ? "text-brand-foreground" : "text-foreground"
                    }`}
                  >
                    {path.label}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      path.highlight ? "text-brand-foreground/85" : "text-muted-foreground"
                    }`}
                  >
                    {path.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="scale">
            <FlowSteps
              steps={[
                { icon: Radar, label: "Señal" },
                { icon: Brain, label: "Análisis" },
                { icon: TrendingUp, label: "Impacto" },
                { icon: Target, label: "Decisión" },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ MODELO DE VIGILANCIA (4 dimensiones) ============ */}
      <section id="modelo" className="py-16 md:py-24 bg-muted overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Nuestro modelo de vigilancia</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Observamos cuatro dimensiones del entorno
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Tecnología, competencia, mercado y regulación convergen en un
              único sistema de análisis que convierte señales externas en
              inteligencia para decidir.
            </p>
          </ScrollReveal>

          {/* Diagrama radial (desktop) */}
          <ScrollReveal variant="scale" className="hidden md:block mb-16">
            <RadialOrbitDiagram
              nodes={DIMENSION_NODES}
              centerIcon={Compass}
              centerTitle="Inteligencia para decidir"
              className="mx-auto w-full max-w-[560px]"
            />
          </ScrollReveal>

          {/* Flujo vertical (mobile) */}
          <div className="md:hidden max-w-xs mx-auto mb-12">
            {DIMENSION_NODES.map((node, i) => (
              <ScrollReveal key={node.label} delay={i * 70}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-card w-full">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <node.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                    </span>
                    <span className="font-heading font-bold text-sm uppercase tracking-[0.14em] text-foreground">
                      {node.label}
                    </span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-secondary my-1.5" />
                </div>
              </ScrollReveal>
            ))}
            <div className="gradient-brand rounded-2xl px-6 py-4 shadow-brand text-center w-full">
              <p className="font-heading font-extrabold text-brand-foreground text-xs uppercase tracking-[0.14em]">
                Inteligencia para decidir
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {DIMENSIONS.map((area, i) => (
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

          <ScrollReveal delay={120}>
            <p className="mt-10 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl border-l-2 border-border pl-4">
              No monitoreamos “todo”. El sistema de vigilancia se configura
              según el sector, la empresa, los objetivos y los factores
              críticos de vigilancia definidos junto a cada cliente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ VIGILANCIA TECNOLÓGICA ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>Vigilancia tecnológica</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Detectar una tecnología antes de que se vuelva estándar puede cambiar una decisión
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-7">
                Identificamos tecnologías emergentes y herramientas que podrían
                tener relevancia para la operación, competitividad o estrategia
                de tu organización.
              </p>
              <ul className="flex flex-wrap gap-2.5 mb-7">
                {TECH_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="text-xs md:text-sm font-semibold text-foreground bg-muted border border-border px-4 py-2 rounded-full"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
              <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed border-l-2 border-border pl-4">
                No recomendamos adoptar una tecnología simplemente porque es
                nueva. Analizamos su madurez, relevancia y posible impacto
                antes de sugerir cualquier movimiento.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={viRadar}
                alt="Radar tecnológico con nodos de tecnologías emergentes como inteligencia artificial, automatización, cloud, ciberseguridad y datos"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ INTELIGENCIA COMPETITIVA ============ */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <ScrollReveal variant="scale" className="relative order-last lg:order-first">
              <img
                src={viCompetencia}
                alt="Mapa competitivo: empresas como nodos digitales conectados, con una empresa central analizando señales del entorno"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>Inteligencia competitiva</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Tu competencia también está tomando decisiones
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Monitoreamos señales públicas relevantes sobre competidores
                actuales y potenciales para identificar movimientos digitales,
                nuevas propuestas, tecnologías adoptadas y cambios que puedan
                afectar tu posición.
              </p>
            </ScrollReveal>
          </div>

          {/* Mapa competitivo (desktop) */}
          <ScrollReveal variant="scale" className="hidden md:block">
            <RadialOrbitDiagram
              nodes={COMPETITOR_NODES}
              centerIcon={Building2}
              centerTitle="Tu empresa"
              className="mx-auto w-full max-w-[560px]"
            />
          </ScrollReveal>

          {/* Mapa competitivo (mobile) */}
          <div className="md:hidden max-w-xs mx-auto">
            <div className="gradient-brand rounded-2xl px-6 py-4 shadow-brand text-center w-full mb-1.5">
              <p className="font-heading font-extrabold text-brand-foreground text-xs uppercase tracking-[0.14em]">
                Tu empresa
              </p>
            </div>
            {COMPETITOR_NODES.map((node, i) => (
              <ScrollReveal key={node.label} delay={i * 70}>
                <div className="flex flex-col items-center">
                  <ChevronDown className="w-5 h-5 text-secondary my-1.5" />
                  <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-card w-full">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <node.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                    </span>
                    <div>
                      <span className="block font-heading font-bold text-sm uppercase tracking-[0.14em] text-foreground">
                        {node.label}
                      </span>
                      {node.desc && (
                        <span className="block text-xs text-muted-foreground mt-0.5">
                          {node.desc}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <p className="mt-10 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl mx-auto text-center border-l-2 md:border-l-0 md:border-t-2 border-border pl-4 md:pl-0 md:pt-6 text-left md:text-center">
              La vigilancia competitiva utiliza únicamente información pública
              y legítimamente disponible. No realizamos espionaje, no accedemos
              a información privada y no utilizamos medios no autorizados.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ VIGILANCIA REGULATORIA ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Vigilancia regulatoria</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Una nueva regulación puede convertirse en riesgo antes de que la organización la vea venir
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Monitoreamos cambios regulatorios relevantes para el sector y
              traducimos las señales identificadas a posibles impactos para la
              organización.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <FlowSteps steps={REGULATORY_FLOW} />
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="mt-12 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl mx-auto border-l-2 border-border pl-4">
              Este servicio no constituye asesoría jurídica. Consiste en
              vigilancia, identificación, análisis tecnológico-estratégico y
              alerta. Cuando una materia requiera interpretación jurídica
              especializada, recomendamos la participación de un abogado o
              asesor jurídico competente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CONTEXTO CHILENO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Contexto chileno</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Vigilancia adaptada al entorno chileno
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cuando el cliente opera en Chile, la vigilancia puede considerar
              fuentes públicas nacionales y sectoriales relevantes, según su
              industria y objetivos.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ul className="flex flex-wrap justify-center gap-2.5 mb-10">
              {CHILE_SOURCES.map((source) => (
                <li
                  key={source}
                  className="text-xs md:text-sm font-semibold text-foreground bg-background border border-border px-4 py-2 rounded-full"
                >
                  {source}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto text-center border-t-2 border-border pt-6">
              Estas fuentes son referenciales: no todas se monitorean
              permanentemente para todos los clientes. Las fuentes se definen
              según el sector, los factores críticos de vigilancia y los
              objetivos de cada organización.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ INNOVACIÓN ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Innovación</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Vigilar no sirve si la información no se transforma en acción
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              El objetivo final no es acumular tendencias. Es identificar
              oportunidades que puedan convertirse en decisiones, proyectos o
              líneas de innovación.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-12">
            <FlowSteps steps={INNOVATION_FLOW} />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {INNOVATION_EXAMPLES.map((example) => (
                <li
                  key={example}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground bg-muted border border-border px-4 py-2 rounded-full"
                >
                  <Sparkles className="w-3.5 h-3.5 text-secondary" />
                  {example}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ MADUREZ TECNOLÓGICA ============ */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Madurez tecnológica</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              ¿Está lista esta tecnología para tu negocio?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Evaluamos en qué momento se encuentra una tecnología antes de
              recomendar cualquier decisión de adopción.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-secondary/30"
            />
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {MATURITY_STAGES.map((stage, i) => (
                <ScrollReveal key={stage.label} delay={i * 100}>
                  <div className="relative text-center">
                    <span
                      className={`relative z-10 inline-flex w-16 h-16 rounded-full items-center justify-center mb-4 ring-4 shadow-card ${
                        i === MATURITY_STAGES.length - 1
                          ? "gradient-brand ring-secondary/25"
                          : "bg-card border border-border ring-secondary/15"
                      }`}
                    >
                      <stage.icon
                        className={`w-6 h-6 ${
                          i === MATURITY_STAGES.length - 1 ? "text-primary-foreground" : "text-primary"
                        }`}
                        strokeWidth={1.7}
                      />
                    </span>
                    <p className="font-heading font-extrabold text-sm md:text-base uppercase tracking-[0.14em] text-foreground mb-2">
                      {stage.label}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                      {stage.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={120}>
            <p className="mt-12 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl mx-auto text-center border-t-2 border-border pt-6">
              El nivel de madurez no significa que una tecnología sea “segura”
              o “rentable” por sí sola. El objetivo es apoyar la evaluación,
              no reemplazarla.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ RETAINER / CICLO MENSUAL ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <PillLabel>Un servicio continuo</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              No un informe que termina en un cajón
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Trabajamos de forma recurrente para mantener una vigilancia
              activa sobre los factores críticos definidos para tu organización.
              El servicio se estructura como un retainer mensual con entrega
              ejecutiva.
            </p>
          </ScrollReveal>

          {/* Ciclo mensual */}
          <ScrollReveal variant="scale" className="mb-16">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
              {MONTHLY_CYCLE.map((step, i) => (
                <span key={step} className="flex items-center gap-2 md:gap-2.5">
                  <span
                    className={`text-[10px] md:text-xs font-heading font-bold uppercase tracking-wide px-3.5 py-2 rounded-full border ${
                      i === 0 || i === MONTHLY_CYCLE.length - 1
                        ? "gradient-brand text-primary-foreground border-transparent shadow-brand"
                        : "text-foreground bg-muted border-border"
                    }`}
                  >
                    {step}
                  </span>
                  {i < MONTHLY_CYCLE.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-secondary shrink-0" />
                  )}
                </span>
              ))}
              <span className="flex items-center gap-2 md:gap-2.5">
                <ArrowRight className="w-3.5 h-3.5 text-secondary shrink-0 rotate-45" />
                <span className="text-[10px] md:text-xs font-semibold text-muted-foreground italic">
                  y el ciclo se repite
                </span>
              </span>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {RETAINER_STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 70}>
                <div className="relative border-t-2 border-border pt-7">
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 right-0 font-heading font-extrabold text-5xl md:text-6xl text-primary/10 leading-none select-none"
                  >
                    {step.num}
                  </span>
                  <span className="inline-flex w-12 h-12 rounded-full gradient-brand items-center justify-center shadow-brand mb-4">
                    <step.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg uppercase tracking-wide text-foreground mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <p className="mt-12 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl mx-auto text-center border-t-2 border-border pt-6">
              Las alertas y entregas se realizan según las fuentes y el alcance
              definidos para cada cliente. Ningún sistema de vigilancia puede
              garantizar la detección de absolutamente todas las señales del
              entorno.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ INFORME MENSUAL ============ */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>Entrega mensual</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Un informe ejecutivo, no un resumen de noticias
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Cada entrega organiza lo observado durante el mes en una
                estructura pensada para decidir: qué pasó, qué significa y qué
                conviene hacer a continuación.
              </p>

              {/* Mockup del informe */}
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
                <div className="bg-card rounded-[calc(1rem-1.5px)] p-6 md:p-7 shadow-card">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-secondary mb-1">
                        Independencia Digital
                      </p>
                      <p className="font-heading font-extrabold text-base md:text-lg text-foreground leading-tight">
                        Informe ejecutivo mensual
                      </p>
                    </div>
                    <span className="inline-flex w-10 h-10 rounded-xl gradient-brand items-center justify-center shadow-brand shrink-0">
                      <FileText className="w-4.5 h-4.5 text-primary-foreground" strokeWidth={1.8} />
                    </span>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {REPORT_SECTIONS.map((section, i) => (
                      <li key={section} className="flex items-center gap-2.5 text-sm text-foreground/85">
                        <span className="font-heading font-extrabold text-[10px] text-secondary/80 w-5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={viInforme}
                alt="Informe ejecutivo mensual de inteligencia tecnológica en notebook y tablet con análisis de tendencias y señales"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
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
              De la señal a la decisión
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

      {/* ============ FACTORES CRÍTICOS DE VIGILANCIA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <PillLabel>Factores críticos de vigilancia</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                No vigilamos todo. Vigilamos lo que importa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Cada organización tiene preguntas estratégicas diferentes. Por
                eso definimos factores críticos de vigilancia que determinan
                qué observar, qué fuentes utilizar y qué señales priorizar.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {CRITICAL_QUESTIONS.map((question, i) => (
                <ScrollReveal key={question} delay={i * 70}>
                  <div className="flex items-start gap-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-card">
                    <span className="font-heading font-extrabold text-xl text-primary/25 leading-none mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-heading font-semibold text-sm md:text-base text-foreground leading-snug">
                      {question}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESULTADO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>El resultado</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-5 mb-4 leading-tight">
                Menos sorpresa. Más capacidad de anticipación
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                El objetivo de la vigilancia es reducir incertidumbre y mejorar
                la capacidad de la organización para detectar cambios
                relevantes antes de tomar decisiones.
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
                src={viResultado}
                alt="Organización mirando hacia un horizonte de tecnologías emergentes, oportunidades de mercado y señales regulatorias"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
              <div className="absolute -left-3 bottom-6 md:-left-6 max-w-[calc(100%-0.5rem)] bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <div className="flex flex-wrap items-center gap-1.5">
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

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {AUDIENCES.map((audience, i) => (
              <ScrollReveal key={audience.title} delay={i * 70} className={i === AUDIENCES.length - 1 ? "col-span-2 lg:col-span-1" : ""}>
                <div className="text-center">
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4">
                    <audience.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-snug mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                    {audience.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MODELO DE SERVICIO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <PillLabel>Modelo de servicio</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Un equipo externo observando lo que tu empresa no tiene tiempo de observar
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
              Independencia Digital funciona como una capacidad externa de
              vigilancia e inteligencia para mantener monitoreado el entorno
              tecnológico, competitivo y regulatorio relevante para tu
              organización.
            </p>
            <ul className="flex flex-wrap justify-center gap-2.5 mb-9">
              {SERVICE_MODEL_PILLS.map((pill) => (
                <li
                  key={pill}
                  className="text-xs md:text-sm font-heading font-bold uppercase tracking-[0.12em] text-foreground bg-background border border-border px-4 py-2 rounded-full"
                >
                  {pill}
                </li>
              ))}
            </ul>
            <PrimaryCta label="Consultar modalidad" />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CONFIANZA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                No se trata de enviarte más información. Se trata de ayudarte a entenderla
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tres principios guían cada entrega: relevancia, contexto y
                acción. Si una señal no ayuda a decidir, no pertenece al
                informe.
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Preguntas frecuentes</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight">
              Lo que suelen preguntarnos sobre vigilancia tecnológica
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion type="single" collapsible className="w-full bg-card border border-border rounded-3xl px-6 shadow-card">
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
                Mientras tú tomas decisiones, nosotros observamos lo que está cambiando
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Define qué quieres vigilar y construyamos un sistema de
                observación adaptado a tu negocio. Conversemos sobre qué
                debería estar observando tu empresa.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Retainer mensual · Entrega ejecutiva
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
                  src={viCta}
                  shape={5}
                  alt="Centro de inteligencia estratégica con señales de tecnología, mercado y regulación convergiendo en una interfaz de decisión"
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

export default VigilanciaInnovacionServiceView;
