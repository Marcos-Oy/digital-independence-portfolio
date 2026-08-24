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
  AlertTriangle,
  ArrowRight,
  Bell,
  Blocks,
  CheckCircle2,
  Clock3,
  Code2,
  FastForward,
  FileSearch,
  Gauge,
  Handshake,
  Hourglass,
  Layers,
  ListChecks,
  MessagesSquare,
  Puzzle,
  RefreshCw,
  ScanSearch,
  Users,
  Workflow,
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
    title: "Tareas que dependen de una persona",
    desc: "Si quien las ejecuta no está disponible, el proceso espera. No debería funcionar así.",
  },
  {
    num: "02",
    title: "Errores por ejecución manual",
    desc: "Copiar, pegar, rellenar y enviar a mano son pasos donde algo siempre puede salir mal.",
  },
  {
    num: "03",
    title: "Sin trazabilidad",
    desc: "Nadie sabe exactamente cuándo se ejecutó cada tarea, si se hizo correctamente o si quedó alguna pendiente.",
  },
  {
    num: "04",
    title: "Volumen que supera al equipo",
    desc: "Cuando el negocio crece, los procesos manuales no escalan. El equipo se convierte en el cuello de botella.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: FileSearch,
    title: "Levantamiento del proceso",
    desc: "Entendemos cómo funciona el proceso hoy, paso a paso, con sus variaciones y excepciones.",
  },
  {
    icon: Layers,
    title: "Rediseño antes de automatizar",
    desc: "No automatizamos el caos. Primero ordenamos el proceso y después lo convertimos en flujo automático.",
  },
  {
    icon: Blocks,
    title: "Automatización con las herramientas adecuadas",
    desc: "Seleccionamos la herramienta correcta según el proceso: N8N, ManyChat, Power Automate o scripts a medida.",
  },
  {
    icon: ListChecks,
    title: "Trazabilidad de cada ejecución",
    desc: "Cada vez que el flujo se ejecuta queda registrado: qué pasó, cuándo y si algo requiere atención.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: FileSearch,
    title: "Diagnóstico y levantamiento",
    items: [
      "Mapeo del proceso actual paso a paso",
      "Identificación de cuellos de botella",
      "Evaluación de viabilidad de automatización",
      "Análisis de variaciones y excepciones",
      "Priorización por impacto y esfuerzo",
      "Criterios de éxito del proceso automatizado",
    ],
  },
  {
    num: "02",
    icon: Layers,
    title: "Diseño del flujo",
    items: [
      "Rediseño del proceso antes de automatizar",
      "Definición de disparadores y condiciones",
      "Manejo de excepciones y errores",
      "Reglas de negocio incorporadas al flujo",
      "Notificaciones y alertas por evento",
      "Definición de reportes y trazabilidad",
    ],
  },
  {
    num: "03",
    icon: Workflow,
    title: "Automatización e implementación",
    items: [
      "Automatización con N8N",
      "Automatización de conversaciones con ManyChat",
      "Flujos con Power Automate cuando corresponde",
      "Scripts a medida para casos específicos",
      "Integración con plataformas existentes",
      "Pruebas en entorno real antes de activar",
    ],
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Operación y mantenimiento",
    items: [
      "Monitoreo de ejecuciones activas",
      "Alertas ante errores o interrupciones",
      "Documentación del flujo automatizado",
      "Ajuste de reglas cuando el proceso cambia",
      "Revisión periódica de resultados",
      "Evolución del flujo con el negocio",
    ],
  },
];

interface ComparisonItem {
  icon: typeof AlertTriangle;
  text: string;
}

const DIRECT_ITEMS: ComparisonItem[] = [
  { icon: FastForward, text: "Se toma el proceso actual y se automatiza tal como existe." },
  { icon: Clock3, text: "Rápido de implementar." },
  { icon: AlertTriangle, text: "Hereda todos los problemas del proceso manual." },
];

const REDESIGN_ITEMS: ComparisonItem[] = [
  { icon: FileSearch, text: "Se levanta el proceso y se identifican los problemas." },
  { icon: Layers, text: "Se rediseña el flujo y después se automatiza." },
  { icon: CheckCircle2, text: "El resultado es un proceso que funciona bien, no solo más rápido." },
];

const CANDIDATE_PROFILES = [
  {
    icon: CheckCircle2,
    title: "Buen candidato para automatizar",
    desc: "Proceso repetitivo, bien definido, alto volumen, pocas excepciones, ejecutado igual cada vez.",
  },
  {
    icon: Layers,
    title: "Requiere rediseño previo",
    desc: "Proceso con pasos innecesarios, excepciones no documentadas o variaciones que nadie registró. Se puede automatizar después de ordenarlo.",
  },
  {
    icon: Handshake,
    title: "No conviene automatizar",
    desc: "Proceso que requiere criterio, relación humana o decisiones que no pueden estandarizarse. La automatización no agrega valor aquí.",
  },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Levantamiento", desc: "Mapeamos el proceso actual paso a paso: disparadores, pasos, responsables, excepciones y herramientas involucradas." },
  { icon: ScanSearch, title: "Diagnóstico", desc: "Identificamos cuellos de botella, pasos innecesarios y puntos donde el proceso falla o se retrasa." },
  { icon: Layers, title: "Rediseño", desc: "Ordenamos el flujo antes de automatizarlo: eliminamos pasos redundantes, definimos excepciones y establecemos reglas de negocio." },
  { icon: Workflow, title: "Automatización", desc: "Implementamos el flujo automatizado con la herramienta adecuada para el proceso y las plataformas existentes." },
  { icon: Puzzle, title: "Pruebas", desc: "Validamos el flujo con casos reales, incluyendo las excepciones y los errores que el proceso debe manejar." },
  { icon: Gauge, title: "Activación y seguimiento", desc: "El flujo entra en producción con monitoreo activo y se ajusta en las primeras semanas según el comportamiento real." },
];

const TOOL_CARDS = [
  { name: "N8N", desc: "Automatización de flujos entre plataformas, integraciones vía API y procesos que requieren lógica personalizada." },
  { name: "ManyChat", desc: "Automatización de conversaciones en WhatsApp, Instagram y otras plataformas de mensajería." },
  { name: "Power Automate", desc: "Flujos integrados con el ecosistema Microsoft cuando el negocio ya opera en ese entorno." },
  { name: "Scripts a medida", desc: "Cuando ninguna herramienta no-code cubre el caso específico, desarrollamos la automatización directamente." },
];

const RESULT_POINTS = [
  "Procesos que se ejecutan solos sin intervención manual",
  "Notificaciones automáticas ante eventos relevantes",
  "Trazabilidad de cada ejecución: qué pasó, cuándo y con qué resultado",
  "Reducción de errores por ejecución manual",
  "Flujos que escalan sin necesidad de aumentar el equipo",
  "Reportes automáticos sin que nadie los genere manualmente",
  "Documentación de cada flujo automatizado",
];

const FIT_ITEMS = [
  { icon: RefreshCw, title: "Tu equipo ejecuta la misma tarea decenas de veces por semana." },
  { icon: Users, title: "Cuando alguien falta, algunos procesos se detienen." },
  { icon: ScanSearch, title: "No hay forma de saber si una tarea se ejecutó correctamente o quedó pendiente." },
  { icon: Gauge, title: "El negocio creció y los procesos manuales ya no alcanzan a sostenerse." },
  { icon: AlertTriangle, title: "Hay pasos repetitivos que generan errores porque siempre dependen de una persona." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Levantamiento primero",
    desc: "No proponemos nada sin entender el proceso completo, incluyendo sus variaciones y excepciones.",
  },
  {
    icon: Layers,
    title: "Rediseño antes de automatizar",
    desc: "Si el proceso tiene problemas, los resolvemos antes de automatizarlo, no después.",
  },
  {
    icon: Blocks,
    title: "Herramienta correcta",
    desc: "Seleccionamos la herramienta según el proceso, no al revés.",
  },
  {
    icon: ListChecks,
    title: "Trazabilidad siempre",
    desc: "Cada ejecución queda registrada para que el equipo pueda supervisar, no solamente confiar.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Qué procesos se pueden automatizar?",
    a: "Los mejores candidatos son procesos repetitivos, bien definidos, con alto volumen y pocas excepciones. El diagnóstico determina qué tiene sentido automatizar en cada caso.",
  },
  {
    q: "¿Necesitamos cambiar las plataformas que ya usamos?",
    a: "No. La automatización se construye sobre las plataformas existentes. En algunos casos puede requerir que una plataforma tenga una API disponible, lo que se evalúa en el diagnóstico.",
  },
  {
    q: "¿Qué pasa cuando el proceso cambia?",
    a: "Los flujos automatizados se pueden actualizar cuando cambia el proceso. Una buena documentación y una arquitectura bien diseñada facilitan esos ajustes sin tener que reconstruir todo.",
  },
  {
    q: "¿Qué herramientas utilizan?",
    a: "Depende del proceso y las plataformas involucradas. N8N, ManyChat, Power Automate y scripts a medida son las principales, y la selección se define según el caso.",
  },
  {
    q: "¿La automatización elimina completamente el error humano?",
    a: "No. Reduce significativamente los errores asociados a la ejecución manual repetitiva, pero el diseño del flujo y el manejo de excepciones son críticos. Por eso el levantamiento y el rediseño previos son parte esencial del trabajo.",
  },
  {
    q: "¿Cuánto demora implementar una automatización?",
    a: "Depende de la complejidad del proceso, las plataformas involucradas, el número de excepciones y la calidad de la documentación existente. No corresponde dar un plazo sin revisar el caso.",
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

/** Fila de paso del flujo: icono + etiqueta + estado de ejecución. */
const FlowStepRow = ({ icon: Icon, label, done = true }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; done?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <span className={`inline-flex w-7 h-7 rounded-lg items-center justify-center shrink-0 ${done ? "bg-primary/10" : "bg-muted"}`}>
      <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
    </span>
    <span className="text-[10px] font-semibold text-foreground/80 flex-1 truncate">{label}</span>
    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${done ? "bg-secondary" : "bg-border"}`} aria-hidden="true" />
  </div>
);

/** Panel del hero: laptop con flujo automatizado en ejecución + teléfono con notificaciones. */
const HeroFlowPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Flujo en ejecución
      </p>
      <div className="space-y-3">
        <FlowStepRow icon={Workflow} label="Disparador" />
        <FlowStepRow icon={Blocks} label="Validación" />
        <FlowStepRow icon={MessagesSquare} label="Notificación" />
        <FlowStepRow icon={ListChecks} label="Registro" done={false} />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Log de ejecución
      </p>
      <div className="space-y-1.5">
        <span className="block text-[8px] font-semibold text-secondary bg-secondary/10 rounded px-1.5 py-1">Completado</span>
        <span className="block text-[8px] font-semibold text-primary bg-primary/8 rounded px-1.5 py-1">Trazable</span>
        <span className="block text-[8px] font-semibold text-foreground/70 bg-muted rounded px-1.5 py-1">Sin intervención</span>
      </div>
    </PhoneMock>
  </div>
);

/** Panel del problema: pasos manuales dependientes de personas, sin trazabilidad. */
const ManualStepsPanel = () => {
  const rows = [
    { icon: FileSearch, label: "Revisión manual", done: false },
    { icon: MessagesSquare, label: "Aviso por chat", done: false },
    { icon: ListChecks, label: "Registro en Excel", done: false },
    { icon: Workflow, label: "Envío de correo", done: true },
    { icon: Users, label: "Depende de alguien", done: false },
    { icon: Hourglass, label: "Espera de turno", done: false },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-4">
        Pasos ejecutados a mano
      </p>
      <div className="grid grid-cols-2 gap-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
              r.done ? "border-border bg-muted/40" : "border-dashed border-border/70"
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

/** Panel de solución: laptop + monitor con flujo rediseñado y automatizado. */
const RedesignedFlowPanel = () => (
  <div className="grid grid-cols-2 gap-3">
    <LaptopMock className="col-span-2 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Flujo rediseñado y automático
      </p>
      <div className="space-y-3">
        <FlowStepRow icon={Workflow} label="Disparador validado" />
        <FlowStepRow icon={Blocks} label="Reglas aplicadas" />
        <FlowStepRow icon={Bell} label="Notificación automática" />
      </div>
    </LaptopMock>
    <div className="col-span-2 rounded-xl border border-border bg-muted/60 px-4 py-3">
      <p className="text-[9px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Trazabilidad
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">Registrado</span>
        <span className="text-[9px] font-semibold text-primary bg-primary/8 rounded-full px-2.5 py-1">Sin excepciones</span>
      </div>
    </div>
  </div>
);

/** Panel de resultado: automatizaciones activas con log de ejecuciones. */
const ResultPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Automatizaciones activas
      </p>
      <div className="space-y-2.5">
        <FlowStepRow icon={Workflow} label="Proceso de ventas" />
        <FlowStepRow icon={MessagesSquare} label="Seguimiento de clientes" />
        <FlowStepRow icon={Bell} label="Alertas de operación" />
        <FlowStepRow icon={ListChecks} label="Reportes automáticos" />
        <FlowStepRow icon={Code2} label="Nuevo flujo" done={false} />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Estado
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
      {["Levantamiento", "Diagnóstico", "Rediseño", "Automatización"].map((step, i) => (
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

const AutomatizacionProcesosServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Automatización de Procesos | Independencia Digital</title>
        <meta
          name="description"
          content="Levantamos procesos manuales, los rediseñamos y automatizamos flujos completos con N8N, ManyChat, Power Automate y scripts a medida, con trazabilidad de cada ejecución."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/automatizacion-procesos" />
        <meta property="og:title" content="Automatización de Procesos | Independencia Digital" />
        <meta
          property="og:description"
          content="Tu equipo no debería estar ejecutando a mano lo que ya podría funcionar solo. Levantamos, rediseñamos y automatizamos con trazabilidad completa."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/automatizacion-procesos" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={6} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={3} className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
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
            <span className="text-foreground">Automatización de Procesos</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Workflow className="w-3.5 h-3.5" />
                Automatización de Procesos
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Tu equipo no debería estar ejecutando a mano lo que ya podría
                funcionar solo
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Levantamos tus procesos críticos, identificamos los cuellos de
                botella y automatizamos el flujo completo con notificaciones,
                reportes y trazabilidad de cada ejecución.
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
                <div className="blob-shape-3 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <HeroFlowPanel />
                  </div>
                </div>
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={5} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Se ejecuta solo</p>
                <p className="text-[11px] text-muted-foreground mt-1">Trazable · Notificado · Documentado</p>
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
                Cada tarea que tu equipo ejecuta a mano es una tarea que puede
                fallar, olvidarse o depender de que alguien esté disponible
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Los procesos manuales repetitivos no son solamente lentos. Son
                una fuente constante de errores, retrasos y dependencias
                personales. Cuando la persona que sabe cómo hacerlo no está, el
                proceso se detiene. Cuando hay presión, se saltean pasos. Cuando
                hay volumen, algo siempre queda pendiente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <ManualStepsPanel />
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
                <div className="blob-shape-4 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <RedesignedFlowPanel />
                  </div>
                </div>
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={2} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Levantamos el proceso, lo rediseñamos y lo automatizamos con
                trazabilidad completa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No automatizamos el proceso tal como existe hoy. Primero lo
                levantamos, identificamos los pasos que generan fricción y lo
                rediseñamos antes de automatizarlo. El resultado es un flujo que
                se ejecuta solo, con notificaciones, reportes y registro de cada
                ejecución.
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
              Desde el levantamiento del proceso hasta el flujo automatizado
              funcionando
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

      {/* ============ PRIMERO SE REDISEÑA, DESPUÉS SE AUTOMATIZA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>La diferencia</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Automatizar un proceso mal diseñado solamente hace que el error
              ocurra más rápido
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Hay una diferencia entre ejecutar una automatización y diseñar un
              proceso que funcione correctamente de forma automática. Si el
              proceso tiene pasos innecesarios, excepciones no consideradas o
              dependencias que no se documentaron, la automatización va a
              heredar todos esos problemas, pero a mayor velocidad.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-muted/50 p-7 md:p-8 h-full">
                <h3 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  Automatización directa
                </h3>
                <ul className="space-y-3.5">
                  {DIRECT_ITEMS.map((it) => (
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
                    Rediseño + automatización
                  </h3>
                  <ul className="space-y-3.5">
                    {REDESIGN_ITEMS.map((it) => (
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
              Por eso el levantamiento y el rediseño no son opcionales. Son la
              parte más importante del trabajo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ QUÉ SE PUEDE AUTOMATIZAR Y QUÉ NO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Criterio, no automatismo</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              No todo proceso manual debería automatizarse
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un proceso es candidato real para automatización cuando es
              repetitivo, está bien definido, tiene pocos criterios de excepción
              y el esfuerzo de automatizarlo es menor que el costo de seguir
              ejecutándolo a mano. Cuando no se cumplen esas condiciones,
              automatizar puede ser más caro que el problema que resuelve.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {CANDIDATE_PROFILES.map((profile, i) => (
              <ScrollReveal key={profile.title} delay={i * 90}>
                <div className="text-center">
                  <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                    <profile.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    {profile.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={150} className="text-center mt-12">
            <p className="text-sm md:text-base font-semibold text-foreground max-w-xl mx-auto">
              El diagnóstico determina en cuál de estas categorías cae cada
              proceso. Si no tiene sentido automatizar, lo decimos antes de
              invertir en hacerlo.
            </p>
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
              Del proceso manual al flujo que se ejecuta solo
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
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Herramientas</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              La herramienta se elige según el proceso
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              No existe una herramienta de automatización que funcione igual
              para todos los procesos y todas las plataformas. La selección
              depende del tipo de flujo, las integraciones necesarias, el
              volumen de ejecuciones y el presupuesto disponible.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {TOOL_CARDS.map((tool) => (
              <ScrollReveal key={tool.name}>
                <div className="rounded-xl border border-border bg-muted px-5 py-4">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{tool.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTADO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                El resultado es un flujo que se ejecuta solo, con visibilidad
                completa sobre cada ejecución
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando un proceso está automatizado correctamente, el equipo deja
                de ejecutarlo a mano y empieza a supervisarlo. Eso libera tiempo,
                reduce errores y permite que el proceso escale sin que el equipo
                crezca al mismo ritmo.
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                No automatizamos sin entender primero cómo funciona el proceso
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de proponer cualquier automatización necesitamos levantar
                el proceso paso a paso: cómo se dispara, quién lo ejecuta, qué
                pasa cuando hay excepciones y qué resultado se espera. Sin eso,
                cualquier automatización es una apuesta.
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
              Lo que suelen preguntarnos antes de automatizar
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
                ¿Qué tarea está ejecutando tu equipo a mano que ya podría
                funcionar sola?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre qué procesos tienen
                sentido automatizar, qué pasos generan más fricción y qué
                resultado concreto podría tener en la operación.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Primero levantamos. Después automatizamos.
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

export default AutomatizacionProcesosServiceView;
