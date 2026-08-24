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
  BookOpenText,
  Bot,
  CheckCircle2,
  Database,
  FileSearch,
  FlaskConical,
  GaugeCircle,
  Gem,
  Handshake,
  Layers,
  MessageCircle,
  MessagesSquare,
  Plug,
  Radar,
  RefreshCw,
  Scale,
  ScanSearch,
  Sparkles,
  UserCircle2,
  Users,
  Workflow,
} from "lucide-react";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import {
  BlobImage,
  AccentBlob,
  GlowOrb,
  RingLoop,
  SparkleDots,
  StripeAccent,
} from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import ServicePhoto from "@/views/shared/ServicePhoto";
import iaHero from "@/assets/services/ia-hero.jpg";
import iaProblema from "@/assets/services/ia-problema.jpg";
import iaSolucion from "@/assets/services/ia-solucion.jpg";
import iaResultado from "@/assets/services/ia-resultado.jpg";
import iaCta from "@/assets/services/ia-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "IA sin contexto del negocio",
    desc: "Una herramienta de IA que no conoce tus documentos, tus procesos ni tu forma de operar responde de forma genérica, no de forma útil.",
  },
  {
    num: "02",
    title: "Automatizaciones que no se mantienen",
    desc: "Se implementan flujos automáticos que funcionan las primeras semanas y luego se rompen porque nadie los diseñó pensando en la operación real.",
  },
  {
    num: "03",
    title: "Procesos que parecen automatizables pero no lo son",
    desc: "No todo lo que parece que la IA puede hacer tiene sentido automatizar. Sin un diagnóstico previo, se invierte en lo incorrecto.",
  },
  {
    num: "04",
    title: "Herramientas sin integración",
    desc: "Se usan modelos de IA aislados que no se conectan con el resto de las plataformas que usa el negocio.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "Identificamos qué procesos son realmente automatizables antes de implementar cualquier cosa.",
  },
  {
    icon: Bot,
    title: "Agentes con contexto",
    desc: "Construimos agentes que conocen tus documentos, tu historial y tu forma de operar.",
  },
  {
    icon: Workflow,
    title: "Automatización conectada",
    desc: "Los flujos automáticos se integran con las herramientas que ya usa el negocio.",
  },
  {
    icon: GaugeCircle,
    title: "Operación real",
    desc: "El objetivo es que funcione en el día a día del equipo, no solo en una demo.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: FileSearch,
    title: "Diagnóstico de automatización",
    items: [
      "Levantamiento de procesos candidatos",
      "Evaluación de viabilidad y rentabilidad",
      "Identificación de datos y documentos disponibles",
      "Priorización según impacto y esfuerzo",
      "Mapa de automatización por etapas",
      "Criterios de éxito por proceso",
    ],
  },
  {
    num: "02",
    icon: Bot,
    title: "Agentes e IA conectada",
    items: [
      "Agentes con memoria y contexto del negocio",
      "Acceso a documentos y bases de conocimiento",
      "Ingeniería de prompts orientada a procesos reales",
      "Personalización por rol y caso de uso",
      "Integración con herramientas existentes",
      "Clones digitales cuando corresponda",
    ],
  },
  {
    num: "03",
    icon: Workflow,
    title: "Automatización de flujos",
    items: [
      "Automatización con N8N y herramientas no-code",
      "Flujos de trabajo entre plataformas",
      "Respuestas automáticas y seguimientos",
      "Notificaciones y alertas inteligentes",
      "Integración con CRM, correo y comunicación",
      "ManyChat y automatización de conversaciones",
    ],
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Implementación y continuidad",
    items: [
      "Configuración y pruebas en entorno real",
      "Documentación de cada automatización",
      "Capacitación del equipo",
      "Monitoreo y ajuste post-implementación",
      "Evolución de los agentes con el negocio",
      "Revisión periódica de resultados",
    ],
  },
];

const DECISION_FLOW = ["Proceso", "Evaluación", "Tipo de solución", "Implementación"];

const DECISION_PATHS = [
  {
    icon: Scale,
    title: "Automatización simple",
    desc: "El proceso puede optimizarse con una regla o un flujo automático sin necesidad de IA. Más barato, más predecible.",
  },
  {
    icon: Bot,
    title: "IA conectada",
    desc: "El proceso requiere comprensión del contexto, memoria o manejo de información no estructurada. Aquí la IA agrega valor real.",
  },
  {
    icon: Users,
    title: "Intervención humana",
    desc: "El proceso involucra criterio, relación o responsabilidad que no conviene delegar a un sistema automático.",
  },
];

const CLONE_USE_CASES = [
  {
    icon: MessageCircle,
    title: "Atención y consultas",
    desc: "El clon responde preguntas frecuentes, consultas de clientes o dudas del equipo usando el conocimiento real del negocio o del profesional.",
  },
  {
    icon: Handshake,
    title: "Procesos de venta",
    desc: "Acompaña al potencial cliente durante el proceso de consideración, responde objeciones y cualifica antes de la conversación humana.",
  },
  {
    icon: UserCircle2,
    title: "Presencia digital",
    desc: "Representa al profesional o a la marca en canales como WhatsApp, Instagram u otras plataformas con coherencia de voz y estilo.",
  },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico", desc: "Identificamos qué procesos son candidatos reales para automatización o IA, y cuáles no lo son." },
  { icon: Layers, title: "Diseño", desc: "Definimos qué tipo de solución tiene sentido para cada proceso: automatización simple, agente con IA o clon digital." },
  { icon: BookOpenText, title: "Entrenamiento", desc: "Preparamos el conocimiento, los documentos y el contexto que necesita el agente para funcionar con información del negocio." },
  { icon: Plug, title: "Implementación", desc: "Construimos e integramos el agente o flujo en las herramientas y plataformas que ya usa el negocio." },
  { icon: FlaskConical, title: "Pruebas en entorno real", desc: "Validamos el funcionamiento con casos reales antes de activar en producción." },
  { icon: RefreshCw, title: "Operación y evolución", desc: "El agente entra en funcionamiento y se ajusta con el tiempo según el comportamiento real y las necesidades del negocio." },
];

const TOOL_CATEGORIES = [
  "Modelos de lenguaje y IA generativa",
  "Plataformas de automatización no-code",
  "Herramientas de orquestación de agentes",
  "Plataformas de comunicación y mensajería",
  "Bases de conocimiento y gestión documental",
  "Integraciones y APIs",
];

const RESULT_POINTS = [
  "Procesos automatizados que funcionan en el entorno real del negocio",
  "Agentes con acceso al conocimiento y contexto de la operación",
  "Flujos de trabajo conectados entre plataformas",
  "Reducción de tareas repetitivas sin valor agregado",
  "Atención y respuesta más rápida en canales digitales",
  "Clones digitales funcionando con coherencia de voz y estilo",
  "Equipo enfocado en las tareas que requieren criterio humano",
];

const FIT_ITEMS = [
  { icon: MessagesSquare, title: "Tu equipo responde las mismas preguntas una y otra vez." },
  { icon: RefreshCw, title: "Tienes procesos repetitivos que consumen tiempo sin agregar valor." },
  { icon: Bot, title: "Usas ChatGPT pero no está conectado a nada de tu negocio." },
  { icon: Radar, title: "Quieres atender más consultas sin aumentar el equipo." },
  { icon: Database, title: "Necesitas que tu conocimiento o el de tu marca esté disponible de forma automática." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "No recomendamos ninguna herramienta antes de entender el proceso que debería soportar.",
  },
  {
    icon: ScanSearch,
    title: "Viabilidad real",
    desc: "Si un proceso no tiene sentido automatizar, lo decimos antes de invertir en implementarlo.",
  },
  {
    icon: Database,
    title: "Contexto del negocio",
    desc: "Un agente sin información real del negocio no es más útil que una búsqueda en Google.",
  },
  {
    icon: GaugeCircle,
    title: "Operación, no demo",
    desc: "El objetivo es que funcione en el día a día del equipo, no solamente en una presentación.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿En qué se diferencia esto de usar ChatGPT?",
    a: "ChatGPT es una herramienta de IA genérica. Un agente corporativo está entrenado con el conocimiento, los documentos y el contexto del negocio específico, se integra con las plataformas que usa la empresa y puede ejecutar tareas dentro de flujos de trabajo reales.",
  },
  {
    q: "¿Qué es un clon digital?",
    a: "Es un agente de IA entrenado con la voz, el conocimiento y el estilo de comunicación de una persona o marca. No reemplaza a la persona, sino que permite escalar su presencia y conocimiento en canales digitales.",
  },
  {
    q: "¿Todos los procesos se pueden automatizar con IA?",
    a: "No. El diagnóstico determina qué procesos son candidatos reales. Hay procesos donde la IA agrega valor, procesos donde una automatización simple es suficiente y procesos donde la intervención humana sigue siendo lo más conveniente.",
  },
  {
    q: "¿Qué herramientas utilizan?",
    a: "Depende del proceso, las plataformas existentes y el presupuesto. N8N y ManyChat son ejemplos de herramientas utilizadas, pero la selección se define caso a caso.",
  },
  {
    q: "¿El agente tiene acceso a nuestros documentos internos?",
    a: "Sí. Parte del proceso de implementación incluye conectar el agente a la base de conocimiento del negocio: documentos, manuales, respuestas tipo y cualquier información relevante para que funcione con contexto real.",
  },
  {
    q: "¿Qué pasa si el agente comete errores?",
    a: "Ningún agente de IA es perfecto. Por eso existe una etapa de pruebas en entorno real antes de activar en producción, y una revisión posterior para ajustar el comportamiento según los casos que el sistema no resuelva correctamente.",
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

const FlowChips = ({ steps, className = "" }: { steps: string[]; className?: string }) => (
  <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
    {steps.map((step, i) => (
      <span key={step} className="flex items-center gap-1.5">
        <span className="text-[10px] md:text-[11px] font-heading font-bold uppercase tracking-wide text-foreground bg-muted border border-border px-2.5 py-1 rounded-full">
          {step}
        </span>
        {i < steps.length - 1 && <ArrowRight className="w-3 h-3 text-secondary shrink-0" />}
      </span>
    ))}
  </div>
);

/* ------------------------------ view ------------------------------ */

const IaCorporativaServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Inteligencia Artificial Corporativa | Independencia Digital</title>
        <meta
          name="description"
          content="Diagnóstico de procesos automatizables, agentes con memoria e IA conectada a tus documentos y operación, automatización con N8N y ManyChat, y clones digitales para empresas en Chile."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/ia-corporativa" />
        <meta property="og:title" content="Inteligencia Artificial Corporativa | Independencia Digital" />
        <meta
          property="og:description"
          content="La mayoría de las empresas ya probaron la IA genérica. Lo que no han probado es la IA conectada a su negocio."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/ia-corporativa" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-secondary/10 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-primary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-secondary/6 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={1} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={4} color="secondary" className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
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
            <span className="text-foreground">Inteligencia Artificial Corporativa</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Sparkles className="w-3.5 h-3.5" />
                Inteligencia Artificial Corporativa
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Usar ChatGPT no es lo mismo que tener IA conectada a tu negocio
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diagnosticamos qué procesos son realmente automatizables,
                implementamos agentes con memoria y acceso a tus documentos, y
                automatizamos flujos con las herramientas adecuadas. Incluyendo
                clones digitales cuando tiene sentido.
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
                  src={iaHero}
                  shape={1}
                  alt="Equipo de empresa trabajando con herramientas de inteligencia artificial en una oficina moderna"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">IA conectada, no genérica</p>
                <p className="text-[11px] text-muted-foreground mt-1">Documentos · Contexto · Flujos</p>
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
                La IA genérica responde preguntas. La IA conectada trabaja para tu
                negocio
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Muchas empresas usan ChatGPT para redactar correos o resumir
                textos, y lo llaman inteligencia artificial corporativa. Pero eso
                no es lo mismo que un agente que conoce tus documentos, recuerda
                el contexto de cada cliente, ejecuta tareas dentro de tus sistemas
                y se conecta a tus flujos de trabajo reales.
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
                  src={iaSolucion}
                  shape={3}
                  alt="Consultores implementando inteligencia artificial conectada a los datos de una empresa"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} color="secondary" className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                IA diseñada alrededor de cómo funciona tu negocio
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No instalamos herramientas de IA genéricas. Diagnosticamos qué
                procesos tienen sentido automatizar, diseñamos agentes con acceso
                a tus documentos y contexto, implementamos las automatizaciones
                adecuadas y las conectamos a los flujos reales de la operación.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
                {SOLUTION_CONCEPTS.map((c) => (
                  <div key={c.title} className="flex gap-3.5">
                    <span className="inline-flex w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-secondary" strokeWidth={1.7} />
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

      {/* ============ QUÉ INCLUYE ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>Qué incluye</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Desde el diagnóstico hasta los agentes funcionando en tu operación
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {INCLUDES_AREAS.map((area, i) => (
              <ScrollReveal key={area.num} delay={i * 80}>
                <div className="relative border-t-2 border-border pt-8">
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 right-0 font-heading font-extrabold text-6xl md:text-7xl text-secondary/10 leading-none select-none"
                  >
                    {area.num}
                  </span>
                  <span className="inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand mb-5">
                    <area.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-bold text-lg md:text-xl uppercase tracking-wide text-foreground mb-5 max-w-[80%]">
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

      {/* ============ NO TODO NECESITA IA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <PillLabel>Cómo decidimos</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Primero determinamos si la IA realmente tiene sentido para ese
              proceso
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No todo lo que parece automatizable lo es. Hay procesos donde la IA
              agrega valor real, hay procesos donde una automatización simple sin
              IA es suficiente y hay procesos donde la intervención humana sigue
              siendo lo más conveniente. Esa distinción es la que define dónde
              vale la pena invertir.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60} className="flex justify-center mb-14">
            <FlowChips steps={DECISION_FLOW} />
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-border"
            />
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {DECISION_PATHS.map((path, i) => (
                <ScrollReveal key={path.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <path.icon className="w-6 h-6 text-secondary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                      {path.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CLONES DIGITALES ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>
              <Gem className="w-3.5 h-3.5" />
              Clones digitales
            </PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Un clon digital no es un chatbot genérico
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un clon digital es un agente de IA entrenado con la voz, el
              conocimiento y el estilo de comunicación de una persona o marca
              específica. Puede responder consultas, acompañar procesos de venta,
              atender a clientes o representar a un profesional en canales
              digitales, manteniendo coherencia con su forma real de comunicarse.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {CLONE_USE_CASES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="text-center">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-secondary" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={150}>
            <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/30 via-border to-secondary/30 max-w-2xl mx-auto">
              <div className="rounded-[calc(1rem-1.5px)] bg-card px-6 py-5 text-center">
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                  El clon digital requiere una etapa de entrenamiento con
                  información real: documentos, respuestas tipo, estilo de
                  comunicación y conocimiento del negocio o del profesional. No
                  reemplaza a la persona: es una herramienta de escala.
                </p>
              </div>
            </div>
          </ScrollReveal>
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
              Del proceso manual al agente funcionando en tu operación
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

      {/* ============ HERRAMIENTAS ============ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <PillLabel>Herramientas</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Las herramientas se eligen según el proceso
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
              No existe un stack estándar de IA que funcione igual para todos los
              negocios. La selección depende del tipo de proceso, las plataformas
              que ya usa el negocio, el volumen de información y el presupuesto
              disponible. N8N y ManyChat son ejemplos de herramientas que
              utilizamos, entre otras.
            </p>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {TOOL_CATEGORIES.map((c) => (
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
                El resultado no es tener IA. Es tener procesos que funcionan
                mejor porque la IA está donde debe estar
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando la IA está conectada al negocio correcto, en el proceso
                correcto y con el contexto correcto, el equipo deja de hacer
                tareas repetitivas que ya no necesitan intervención humana.
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
              <ServicePhoto src={iaResultado} alt="Equipo tomando decisiones con apoyo de inteligencia artificial corporativa" shape={2} />
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
            {FIT_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div className="text-center">
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                  </span>
                  <p className="font-heading font-semibold text-sm md:text-base text-foreground leading-snug max-w-[200px] mx-auto">
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
                No empezamos con herramientas. Empezamos con tus procesos
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de recomendar cualquier agente o automatización necesitamos
                entender qué procesos existen, cuáles tienen sentido automatizar
                y qué información está disponible para entrenarlo. Sin ese
                diagnóstico, cualquier implementación de IA es una apuesta.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {TRUST_PRINCIPLES.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 90}>
                  <div className="flex gap-5 items-start border-l-2 border-secondary pl-6">
                    <span className="inline-flex w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 items-center justify-center shrink-0">
                      <p.icon className="w-5 h-5 text-secondary" strokeWidth={1.7} />
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
              Lo que suelen preguntarnos antes de empezar
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
              "radial-gradient(ellipse 60% 70% at 85% 50%, hsl(var(--secondary) / 0.2), transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl leading-tight mb-5">
                ¿Qué proceso de tu negocio podría funcionar con IA conectada de
                verdad?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre qué tareas tiene
                sentido automatizar, qué información está disponible para
                entrenar un agente y qué resultado concreto podría tener en tu
                operación.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Primero evaluamos. Después implementamos.
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
                  src={iaCta}
                  shape={4}
                  alt="Profesional explorando casos de uso de inteligencia artificial para su empresa"
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

export default IaCorporativaServiceView;
