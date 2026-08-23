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
  Blocks,
  CheckCircle2,
  Compass,
  FileSearch,
  FileStack,
  GitBranch,
  Handshake,
  KeyRound,
  Layers,
  ListOrdered,
  LucideIcon,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import {
  AccentBlob,
  GlowOrb,
  RingLoop,
  SparkleDots,
  StripeAccent,
} from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "Procesos que dependen de personas",
    desc: "Si la persona que coordina algo no está, el proceso se detiene. No debería funcionar así.",
  },
  {
    num: "02",
    title: "Información en lugares distintos",
    desc: "El archivo está en el correo, el registro en la planilla y el seguimiento en un mensaje de WhatsApp. Nadie tiene el cuadro completo.",
  },
  {
    num: "03",
    title: "Herramientas que no se comunican",
    desc: "Se usan plataformas distintas para tareas relacionadas y alguien tiene que trasladar la información manualmente entre ellas.",
  },
  {
    num: "04",
    title: "Cambios que el equipo no adopta",
    desc: "Se implementan herramientas nuevas, pero el equipo sigue trabajando igual porque nadie los acompañó en el cambio.",
  },
];

const SOLUTION_CONCEPTS = [
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
    desc: "El equipo aprende cada herramienta con tiempo y apoyo, no de golpe.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad incorporada",
    desc: "Cada flujo digital se diseña considerando quién accede, cómo se protege y cómo se recupera.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: FileSearch,
    title: "Diagnóstico digital",
    items: [
      "Levantamiento de procesos actuales",
      "Identificación de dependencias manuales",
      "Mapeo de herramientas existentes",
      "Evaluación de madurez digital",
      "Brechas y oportunidades",
      "Priorización según impacto",
    ],
  },
  {
    num: "02",
    icon: ListOrdered,
    title: "Hoja de ruta",
    items: [
      "Secuencia de modernización por etapas",
      "Justificación de cada cambio",
      "Estimación de esfuerzo y plazos",
      "Dependencias entre etapas",
      "Plan de adopción por equipo",
      "Revisión y ajuste periódico",
    ],
  },
  {
    num: "03",
    icon: Workflow,
    title: "Digitalización de procesos",
    items: [
      "Conversión de procesos manuales a flujos digitales",
      "Automatización de tareas repetitivas",
      "Integración entre herramientas",
      "Formularios, flujos de aprobación y notificaciones",
      "Trazabilidad y registro automático",
      "Reducción de intervención manual",
    ],
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Seguridad y continuidad",
    items: [
      "Seguridad incorporada en cada flujo",
      "Gestión de accesos y roles",
      "Protección de información",
      "Respaldo y recuperación",
      "Monitoreo básico",
      "Procedimientos ante incidentes",
    ],
  },
];

interface ComparisonItem {
  icon: LucideIcon;
  text: string;
}

const INSTALL_ITEMS: ComparisonItem[] = [
  { icon: Blocks, text: "Se elige una herramienta." },
  { icon: GitBranch, text: "Se configura e instala." },
  { icon: Users, text: "Se capacita al equipo." },
  { icon: X, text: "El proceso sigue igual, pero ahora en digital." },
];

const TRANSFORM_ITEMS: ComparisonItem[] = [
  { icon: FileSearch, text: "Se entiende el proceso." },
  { icon: Workflow, text: "Se rediseña el flujo." },
  { icon: Compass, text: "Se elige la herramienta que lo soporta." },
  { icon: Handshake, text: "El equipo adopta el nuevo flujo con acompañamiento." },
  { icon: Sparkles, text: "El proceso funciona mejor, no solo diferente." },
];

const SECURITY_PRINCIPLES = [
  {
    icon: KeyRound,
    title: "Accesos definidos",
    desc: "Cada flujo define quién puede ver, editar o aprobar. No todo es para todos.",
  },
  {
    icon: ShieldCheck,
    title: "Información protegida",
    desc: "Los datos que circulan dentro de los flujos digitales tienen criterios de protección desde el diseño.",
  },
  {
    icon: RefreshCw,
    title: "Continuidad considerada",
    desc: "Cada proceso digitalizado tiene un procedimiento claro para el caso en que algo falle.",
  },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico", desc: "Levantamos los procesos actuales, identificamos dependencias manuales y evaluamos el estado digital del negocio." },
  { icon: Compass, title: "Priorización", desc: "Definimos qué conviene digitalizar primero según el impacto, el esfuerzo requerido y la disposición del equipo." },
  { icon: ListOrdered, title: "Hoja de ruta", desc: "Diseñamos la secuencia de cambios por etapas, con justificación, plazos estimados y seguridad incorporada." },
  { icon: Workflow, title: "Digitalización", desc: "Convertimos los procesos priorizados en flujos digitales: automatizaciones, integraciones, formularios y trazabilidad." },
  { icon: Users, title: "Adopción", desc: "Acompañamos al equipo en cada cambio para que la herramienta nueva realmente se use y el proceso antiguo quede atrás." },
  { icon: RefreshCw, title: "Revisión y evolución", desc: "Evaluamos el resultado de cada etapa y ajustamos la hoja de ruta para las siguientes." },
];

const RESULT_POINTS = [
  "Procesos manuales convertidos en flujos digitales",
  "Menor dependencia de personas específicas para que las cosas funcionen",
  "Información centralizada y trazable",
  "Herramientas integradas que se comunican entre sí",
  "Equipo que adopta los cambios con acompañamiento real",
  "Seguridad incorporada en cada flujo desde el diseño",
  "Hoja de ruta clara para seguir evolucionando",
];

const FIT_ITEMS = [
  { icon: RefreshCw, title: "Tu equipo pierde tiempo en tareas que deberían ser automáticas." },
  { icon: MessagesSquare, title: "La información del negocio está dispersa en correos, planillas y WhatsApp." },
  { icon: Users, title: "Cuando una persona no está, el proceso se detiene." },
  { icon: Blocks, title: "Ya intentaste implementar herramientas nuevas y el equipo no las adoptó." },
  { icon: Compass, title: "Sabes que el negocio necesita modernizarse, pero no tienes claro por dónde empezar." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "No recomendamos ninguna herramienta antes de entender el proceso que debería soportar.",
  },
  {
    icon: ListOrdered,
    title: "Por etapas, no de golpe",
    desc: "Cada cambio tiene su momento. Un equipo que no puede seguir el ritmo termina resistiendo el cambio.",
  },
  {
    icon: Handshake,
    title: "Adopción real",
    desc: "Una herramienta que nadie usa no transforma nada. El acompañamiento forma parte del proyecto.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad desde el diseño",
    desc: "Cada flujo digital incorpora criterios de acceso, protección y continuidad desde el principio.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Por dónde se empieza?",
    a: "Por el diagnóstico: identificamos los procesos actuales, las dependencias manuales y las oportunidades de digitalización con mayor impacto. Eso determina la hoja de ruta.",
  },
  {
    q: "¿Tienen que cambiar todas las herramientas que usamos?",
    a: "No. El diagnóstico puede mostrar que algunas herramientas ya son adecuadas y que el problema está en cómo se usan o en cómo se conectan. No se cambia lo que funciona bien.",
  },
  {
    q: "¿Cuánto tiempo toma una transformación digital?",
    a: "Depende del tamaño del negocio, la cantidad de procesos involucrados, el estado actual y el ritmo de adopción del equipo. Por eso se trabaja en etapas: cada una tiene su plazo y su resultado concreto.",
  },
  {
    q: "¿Qué herramientas usan?",
    a: "Las herramientas se seleccionan según el proceso, el equipo y el presupuesto de cada caso. No existe un stack estándar que funcione igual para todos los negocios.",
  },
  {
    q: "¿Qué pasa si el equipo no adopta los cambios?",
    a: "La adopción forma parte del proyecto. Cada etapa incluye acompañamiento para que el equipo entienda el nuevo flujo, lo pruebe y lo incorpore antes de pasar a la siguiente.",
  },
  {
    q: "¿La ciberseguridad se cobra por separado?",
    a: "No. Los criterios de seguridad básicos se incorporan en el diseño de cada flujo digital. Si el proyecto requiere un trabajo específico de ciberseguridad más profundo, se define como parte del alcance.",
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

/* ------------------------------ device mockups (CSS-only, sin fotografía) ------------------------------ */

const DeviceDots = () => (
  <span className="flex items-center gap-1.5">
    <span className="w-2 h-2 rounded-full bg-primary/30" />
    <span className="w-2 h-2 rounded-full bg-secondary/40" />
    <span className="w-2 h-2 rounded-full bg-muted-foreground/25" />
  </span>
);

const LaptopMock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border border-border bg-card overflow-hidden ${className}`}>
    <div className="h-7 bg-muted border-b border-border flex items-center px-3">
      <DeviceDots />
    </div>
    <div className="p-4 md:p-5">{children}</div>
  </div>
);

const PhoneMock = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-[1.4rem] border border-border bg-card overflow-hidden ${className}`}>
    <div className="h-5 bg-muted border-b border-border flex items-center justify-center">
      <span className="w-8 h-1 rounded-full bg-border" />
    </div>
    <div className="p-3">{children}</div>
  </div>
);

/** Etapa de la hoja de ruta: número + etiqueta + barra de progreso. */
const RoadmapStage = ({ n, label, progress }: { n: number; label: string; progress: number }) => (
  <div className="flex items-center gap-2.5">
    <span className="inline-flex w-5 h-5 rounded-full bg-primary/10 items-center justify-center text-[9px] font-bold text-primary shrink-0">
      {n}
    </span>
    <span className="text-[10px] font-semibold text-foreground/80 w-20 shrink-0 truncate">{label}</span>
    <span className="relative flex-1 h-2 rounded-full bg-muted overflow-hidden">
      <span
        className={`absolute inset-y-0 left-0 rounded-full ${progress === 100 ? "bg-secondary" : "bg-primary/60"}`}
        style={{ width: `${progress}%` }}
      />
    </span>
  </div>
);

/** Panel del hero: laptop con hoja de ruta por etapas + teléfono con flujo activo. */
const HeroRoadmapPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Hoja de ruta por etapas
      </p>
      <div className="space-y-3">
        <RoadmapStage n={1} label="Diagnóstico" progress={100} />
        <RoadmapStage n={2} label="Prioridad" progress={100} />
        <RoadmapStage n={3} label="Digitalizar" progress={62} />
        <RoadmapStage n={4} label="Adopción" progress={20} />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Flujo activo
      </p>
      <div className="space-y-1.5">
        <span className="block text-[8px] font-semibold text-secondary bg-secondary/10 rounded px-1.5 py-1">Automatizado</span>
        <span className="block text-[8px] font-semibold text-primary bg-primary/8 rounded px-1.5 py-1">Conectado</span>
        <span className="block text-[8px] font-semibold text-foreground/70 bg-muted rounded px-1.5 py-1">Seguro</span>
      </div>
    </PhoneMock>
  </div>
);

/** Panel del problema: procesos fragmentados entre correo, planilla y mensajería. */
const FragmentedProcessPanel = () => {
  const rows = [
    { icon: MessagesSquare, label: "Coordinación por chat", linked: false },
    { icon: FileStack, label: "Registro en planilla", linked: false },
    { icon: Workflow, label: "Seguimiento manual", linked: false },
    { icon: Layers, label: "Herramienta A", linked: true },
    { icon: Blocks, label: "Herramienta B", linked: true },
    { icon: Users, label: "Depende de una persona", linked: false },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-4">
        Fricción operacional
      </p>
      <div className="grid grid-cols-2 gap-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
              r.linked ? "border-border bg-muted/40" : "border-dashed border-border/70"
            }`}
          >
            <r.icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" strokeWidth={1.8} />
            <span className="text-[10px] text-foreground/70 truncate">{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Panel de solución: laptop + monitor con flujo digital conectado y seguro. */
const ConnectedFlowPanel = () => (
  <div className="grid grid-cols-2 gap-3">
    <LaptopMock className="col-span-2 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Flujo digital conectado
      </p>
      <div className="space-y-3">
        <RoadmapStage n={1} label="Formulario" progress={100} />
        <RoadmapStage n={2} label="Aprobación" progress={100} />
        <RoadmapStage n={3} label="Registro" progress={80} />
      </div>
    </LaptopMock>
    <div className="col-span-2 rounded-xl border border-border bg-muted/60 px-4 py-3">
      <p className="text-[9px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Seguridad incorporada
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">Accesos definidos</span>
        <span className="text-[9px] font-semibold text-primary bg-primary/8 rounded-full px-2.5 py-1">Trazable</span>
      </div>
    </div>
  </div>
);

/** Panel de resultado: dashboard de procesos digitalizados y adopción por etapa. */
const ResultPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Procesos digitalizados
      </p>
      <div className="space-y-2.5">
        <RoadmapStage n={1} label="Ventas" progress={100} />
        <RoadmapStage n={2} label="Soporte" progress={100} />
        <RoadmapStage n={3} label="Operaciones" progress={70} />
        <RoadmapStage n={4} label="Finanzas" progress={40} />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Adopción
      </p>
      <div className="space-y-1.5">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-1.5">
            <CheckCircle2 className="w-2.5 h-2.5 text-secondary shrink-0" />
            <span className="h-1.5 flex-1 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </PhoneMock>
  </div>
);

/** Panel del CTA final: diagnóstico agendado, tono calmo. */
const CtaPanel = () => (
  <div className="rounded-2xl border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur-sm p-5 md:p-6">
    <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-brand-foreground/70 mb-4">
      Diagnóstico agendado
    </p>
    <div className="space-y-3">
      {["Diagnóstico", "Priorización", "Hoja de ruta", "Digitalización"].map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span className="w-5 h-5 rounded-full bg-brand-foreground/15 border border-brand-foreground/25 flex items-center justify-center text-[9px] font-bold text-brand-foreground shrink-0">
            {i + 1}
          </span>
          <span className="h-1.5 flex-1 rounded-full bg-brand-foreground/15 overflow-hidden">
            <span className="block h-full bg-brand-foreground/50 rounded-full" style={{ width: i === 0 ? "100%" : "0%" }} />
          </span>
          <span className="text-[10px] text-brand-foreground/80 w-24 shrink-0">{step}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------ view ------------------------------ */

const TransformacionDigitalServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Transformación Digital | Independencia Digital</title>
        <meta
          name="description"
          content="Diagnóstico de procesos, hoja de ruta de modernización por etapas y digitalización de flujos manuales con seguridad incorporada. Transformación digital para empresas y pymes en Chile."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/transformacion-digital" />
        <meta property="og:title" content="Transformación Digital | Independencia Digital" />
        <meta
          property="og:description"
          content="Cuando una empresa dice que quiere digitalizarse, casi siempre se refiere a algo más específico: dejar de perder tiempo en tareas que ya deberían funcionar solas."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/transformacion-digital" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={4} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={1} className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
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
            <span className="text-foreground">Transformación Digital</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Workflow className="w-3.5 h-3.5" />
                Transformación Digital · Estrategia
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Digitalizarse no es comprar software. Es cambiar cómo funcionan tus
                procesos
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diagnosticamos qué está frenando a tu negocio, diseñamos una hoja
                de ruta por etapas y convertimos procesos manuales en flujos
                digitales seguros que el equipo puede adoptar sin que todo se
                detenga.
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
                <div className="blob-shape-5 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <HeroRoadmapPanel />
                  </div>
                </div>
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Por etapas, no de golpe</p>
                <p className="text-[11px] text-muted-foreground mt-1">Diagnóstico · Ruta · Adopción</p>
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
                El problema no es que tu empresa use poca tecnología. Es que la
                tecnología que usa no trabaja junta
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Hay correos para coordinar lo que debería fluir solo, planillas
                para registrar lo que debería capturarse automáticamente y
                reuniones para resolver lo que debería estar visible en tiempo
                real. El resultado es un equipo que trabaja duro para sostener
                procesos que deberían funcionar sin tanto esfuerzo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <FragmentedProcessPanel />
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
                <div className="blob-shape-3 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <ConnectedFlowPanel />
                  </div>
                </div>
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Una hoja de ruta que convierte procesos en flujos, por etapas
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No proponemos un cambio de golpe. Identificamos qué procesos
                generan más fricción, definimos qué debería digitalizarse primero
                y diseñamos una secuencia que el equipo pueda seguir sin que la
                operación se detenga. La ciberseguridad entra desde el primer
                paso, no al final.
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

      {/* ============ QUÉ INCLUYE ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>Qué incluye</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Del diagnóstico a los flujos digitales funcionando
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {INCLUDES_AREAS.map((area, i) => (
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

      {/* ============ NO ES UN PROYECTO DE TI ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>La diferencia</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Implementar una herramienta no es transformarse. Cambiar cómo
              funciona el proceso sí lo es
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              La mayoría de los proyectos de digitalización fracasan porque
              instalan software sin cambiar el proceso que hay detrás. Nosotros
              empezamos por el proceso, no por la herramienta.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-muted/50 p-7 md:p-8 h-full">
                <h3 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  Instalar tecnología
                </h3>
                <ul className="space-y-3.5">
                  {INSTALL_ITEMS.map((it) => (
                    <li key={it.text} className="flex items-start gap-2.5 text-sm text-foreground/75 leading-relaxed">
                      <it.icon className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" strokeWidth={1.7} />
                      {it.text}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <div className="flex md:flex-col items-center justify-center gap-2 text-muted-foreground">
              <span className="hidden md:block w-px h-16 bg-border" />
              <span className="text-[11px] font-heading font-bold uppercase tracking-[0.18em]">Versus</span>
              <span className="hidden md:block w-px h-16 bg-border" />
            </div>

            <ScrollReveal delay={100}>
              <div className="rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/40 via-border to-secondary/30 h-full">
                <div className="rounded-[calc(1rem-1.5px)] bg-card p-7 md:p-8 h-full">
                  <h3 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-primary mb-5">
                    Transformación digital
                  </h3>
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
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150} className="text-center mt-12">
            <p className="text-sm md:text-base font-semibold text-foreground max-w-xl mx-auto">
              La tecnología viene después de entender qué necesita cambiar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ SEGURIDAD DESDE EL DISEÑO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Seguridad desde el diseño</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Cada flujo digital que creamos considera desde el principio quién
              accede, qué puede hacer y cómo se protege
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un proceso digitalizado sin criterios de seguridad puede exponer
              información, crear accesos sin control o generar dependencias que
              nadie revisó. Por eso la seguridad no es una capa que se agrega
              después. Es parte del diseño.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8">
            {SECURITY_PRINCIPLES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="text-center">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
              Del proceso manual al flujo digital que funciona solo
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

      {/* ============ RESULTADO ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                El resultado no es un negocio más tecnológico. Es un negocio que
                opera con menos fricción
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando los procesos fluyen solos, el equipo deja de sostener
                manualmente lo que debería funcionar de forma automática. Eso
                libera tiempo, reduce errores y permite que las personas se
                concentren en lo que realmente importa.
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
              <ResultPanel />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ ¿PARA QUIÉN ES? ============ */}
      <section className="py-16 md:py-24 bg-muted">
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
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                No empezamos con tecnología. Empezamos con tus procesos
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de proponer cualquier herramienta necesitamos entender cómo
                funciona el negocio hoy: qué procesos existen, quién los ejecuta,
                dónde se pierde tiempo y qué pasaría si alguno falla. Eso
                determina qué tiene sentido digitalizar y en qué orden.
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
              Lo que suelen preguntarnos antes de digitalizar
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
                ¿Qué proceso de tu negocio debería estar funcionando solo y
                todavía depende de alguien?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre qué está frenando a tu
                negocio, qué conviene digitalizar primero y cómo hacerlo sin que
                el equipo quede atrás.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Empezamos por entender. Después diseñamos el camino.
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
              <CtaPanel />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default TransformacionDigitalServiceView;
