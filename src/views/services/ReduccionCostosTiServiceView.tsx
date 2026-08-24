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
  ArrowRightLeft,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Cloud,
  FileCheck2,
  FileText,
  Gauge,
  Handshake,
  HardDrive,
  KeyRound,
  ListChecks,
  RefreshCw,
  Scale,
  Search,
  ServerCog,
  Settings2,
  ShieldQuestion,
  Trash2,
  Wallet,
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
    title: "Licencias que nadie usa",
    desc: "Se siguen pagando cuentas de usuarios que ya no están, planes sobredimensionados o herramientas duplicadas que cumplen la misma función.",
  },
  {
    num: "02",
    title: "Infraestructura cloud sobredimensionada",
    desc: "Recursos aprovisionados para una carga que ya no existe, ambientes de prueba encendidos permanentemente y almacenamiento que nadie revisa.",
  },
  {
    num: "03",
    title: "Hardware fuera de ciclo",
    desc: "Equipos y contratos que se mantienen sin evaluar si conviene renovar, redistribuir o dar de baja.",
  },
  {
    num: "04",
    title: "Renovaciones automáticas",
    desc: "Contratos que se renuevan por inercia, sin comparación de alternativas ni renegociación.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: Search,
    title: "Inventario real",
    desc: "Sabemos exactamente qué hardware, licencias y servicios se están pagando hoy.",
  },
  {
    icon: Scale,
    title: "Uso versus contratado",
    desc: "Comparamos la capacidad y las cuentas contratadas con el uso efectivo.",
  },
  {
    icon: Gauge,
    title: "Costo por unidad de valor",
    desc: "Evaluamos qué aporta cada gasto a la operación, no solamente cuánto cuesta.",
  },
  {
    icon: ListChecks,
    title: "Plan de acción priorizado",
    desc: "Cada hallazgo se traduce en una acción concreta, ordenada por impacto y esfuerzo.",
  },
];

const AUDIT_AREAS = [
  {
    num: "01",
    icon: HardDrive,
    title: "Hardware e infraestructura",
    items: [
      "Inventario de equipos y activos",
      "Estado y ciclo de vida",
      "Contratos de arriendo y leasing",
      "Garantías y soporte",
      "Servidores y equipamiento de red",
      "Capacidad instalada versus utilizada",
    ],
  },
  {
    num: "02",
    icon: KeyRound,
    title: "Licencias y software",
    items: [
      "Inventario de licencias y suscripciones",
      "Usuarios activos e inactivos",
      "Planes sobredimensionados",
      "Herramientas duplicadas",
      "Modalidad de contratación",
      "Fechas de renovación",
    ],
  },
  {
    num: "03",
    icon: Cloud,
    title: "Infraestructura cloud",
    items: [
      "Recursos aprovisionados versus utilizados",
      "Instancias y ambientes activos",
      "Almacenamiento y respaldos",
      "Tráfico y transferencia de datos",
      "Modelos de facturación y compromiso",
      "Recursos huérfanos y sin uso",
    ],
  },
  {
    num: "04",
    icon: FileText,
    title: "Contratos y proveedores",
    items: [
      "Condiciones vigentes",
      "Renovaciones automáticas",
      "Comparación de alternativas",
      "Oportunidades de renegociación",
      "Consolidación de proveedores",
      "Dependencias y costos de salida",
    ],
  },
];

const DECISION_FLOW = ["Hallazgo", "Impacto", "Riesgo", "Decisión"];

const DECISION_PATHS = [
  {
    icon: Trash2,
    title: "Eliminar",
    desc: "El gasto no tiene uso ni justificación actual y puede darse de baja.",
  },
  {
    icon: Settings2,
    title: "Optimizar",
    desc: "El servicio es necesario, pero está sobredimensionado o mal configurado.",
  },
  {
    icon: Handshake,
    title: "Renegociar",
    desc: "La necesidad existe, pero las condiciones contratadas pueden mejorarse.",
  },
  {
    icon: ShieldQuestion,
    title: "Mantener",
    desc: "El gasto está justificado y reducirlo generaría más costo o riesgo del que ahorra.",
  },
];

const COST_DIMENSIONS = [
  {
    title: "Costo directo",
    desc: "Lo que se paga mes a mes.",
  },
  {
    title: "Costo de cambio",
    desc: "El esfuerzo, tiempo y riesgo de migrar o reemplazar.",
  },
  {
    title: "Riesgo operacional",
    desc: "El impacto sobre la continuidad y el trabajo de las personas.",
  },
  {
    title: "Seguridad y cumplimiento",
    desc: "Las condiciones que no pueden sacrificarse por precio.",
  },
];

const PROCESS_STEPS = [
  { icon: FileText, title: "Levantamiento", desc: "Recopilamos contratos, facturas, licencias, inventario y accesos necesarios para la revisión." },
  { icon: HardDrive, title: "Inventario", desc: "Construimos el mapa completo de hardware, software y servicios cloud efectivamente contratados." },
  { icon: Scale, title: "Análisis de uso", desc: "Comparamos lo contratado con el uso real de cada recurso, licencia y servicio." },
  { icon: Search, title: "Hallazgos", desc: "Identificamos sobregasto, duplicidades, recursos sin uso y condiciones mejorables." },
  { icon: ListChecks, title: "Plan de acción", desc: "Priorizamos cada hallazgo según impacto, esfuerzo y riesgo, con su ahorro estimado." },
  { icon: RefreshCw, title: "Implementación y control", desc: "Acompañamos la ejecución y definimos cómo mantener el gasto bajo control en el tiempo." },
];

const RESULT_POINTS = [
  "Inventario completo de hardware, licencias y servicios cloud",
  "Identificación de recursos duplicados o sin uso",
  "Comparación entre capacidad contratada y uso real",
  "Oportunidades de optimización y renegociación",
  "Plan de acción priorizado por impacto y esfuerzo",
  "Ahorro estimado por cada acción propuesta",
  "Criterios para mantener el gasto controlado en el tiempo",
];

const RESULT_FLOW = ["Gasto actual", "Hallazgos", "Decisiones", "Gasto controlado"];

const CHILE_ITEMS = [
  {
    icon: ArrowRightLeft,
    title: "Moneda y tipo de cambio",
    desc: "Servicios facturados en dólares que afectan el presupuesto en pesos.",
  },
  {
    icon: FileText,
    title: "Condiciones contractuales",
    desc: "Plazos, renovaciones automáticas y cláusulas de permanencia con proveedores locales e internacionales.",
  },
  {
    icon: Scale,
    title: "Tratamiento tributario",
    desc: "Considerar cómo se factura y registra cada servicio para evaluar su costo real.",
  },
];

const FIT_ITEMS = [
  { icon: ArrowUpRight, title: "Tu gasto en tecnología creció sin que nadie lo revisara." },
  { icon: KeyRound, title: "No sabes con certeza cuántas licencias estás pagando." },
  { icon: Cloud, title: "Tu factura de cloud aumenta mes a mes sin una explicación clara." },
  { icon: RefreshCw, title: "Renuevas contratos por inercia, sin comparar alternativas." },
  { icon: Wallet, title: "Necesitas liberar presupuesto para invertirlo en algo que sí aporta." },
];

const TRUST_PRINCIPLES = [
  {
    icon: ServerCog,
    title: "Independencia",
    desc: "Recomendamos según tu caso, no según un catálogo de proveedores.",
  },
  {
    icon: FileCheck2,
    title: "Evidencia",
    desc: "Cada hallazgo se sostiene en datos de uso, contratos y facturación reales.",
  },
  {
    icon: Scale,
    title: "Criterio",
    desc: "Evaluamos el impacto operacional antes de proponer cualquier reducción.",
  },
  {
    icon: CalendarClock,
    title: "Continuidad",
    desc: "El objetivo es que el gasto quede ordenado y siga controlado después del proyecto.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Cuánto puedo ahorrar?",
    a: "Depende del tamaño, la madurez y la estructura de gasto de cada organización. El ahorro estimado se calcula sobre los datos reales que levantamos durante la auditoría, no sobre cifras generales de referencia.",
  },
  {
    q: "¿Qué información necesitan para hacer la auditoría?",
    a: "Según el alcance definido, necesitamos acceso a contratos, facturación, inventario de equipos, listado de licencias y consolas de administración cloud.",
  },
  {
    q: "¿Van a proponer que cambie todos mis proveedores?",
    a: "No. Cada hallazgo se clasifica en eliminar, optimizar, renegociar o mantener, y en muchos casos la mejor decisión es no cambiar nada.",
  },
  {
    q: "¿Trabajan con cualquier proveedor cloud?",
    a: "Sí. La revisión se adapta a los servicios que tu organización ya utiliza y no existe una preferencia comercial por ninguna plataforma.",
  },
  {
    q: "¿Ustedes ejecutan los cambios o solamente los recomiendan?",
    a: "Entregamos el plan priorizado y, según el alcance acordado, también podemos acompañar la implementación.",
  },
  {
    q: "¿Cuánto demora una auditoría?",
    a: "Depende del tamaño del inventario, la cantidad de proveedores, el nivel de documentación disponible y el alcance definido. Preferimos no dar plazos genéricos antes de conocer tu caso.",
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

/** Fila de inventario: icono + etiqueta + barra "contratado vs. uso real". */
const InventoryRow = ({ icon: Icon, label, contracted, used, flagged = false }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; contracted: number; used: number; flagged?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <Icon className="w-3.5 h-3.5 text-muted-foreground shrink-0" strokeWidth={1.8} />
    <span className="text-[10px] font-semibold text-foreground/80 w-16 shrink-0 truncate">{label}</span>
    <span className="relative flex-1 h-2 rounded-full bg-muted overflow-hidden">
      <span className="absolute inset-y-0 left-0 rounded-full bg-border" style={{ width: `${contracted}%` }} />
      <span
        className={`absolute inset-y-0 left-0 rounded-full ${flagged ? "bg-secondary" : "bg-primary/70"}`}
        style={{ width: `${used}%` }}
      />
    </span>
    {flagged && <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" aria-hidden="true" />}
  </div>
);

/** Panel del hero: laptop con inventario de gasto + teléfono con hallazgos clasificados. */
const HeroSpendPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Inventario de gasto
      </p>
      <div className="space-y-3">
        <InventoryRow icon={ServerCog} label="Hardware" contracted={100} used={78} />
        <InventoryRow icon={KeyRound} label="Licencias" contracted={100} used={46} flagged />
        <InventoryRow icon={Cloud} label="Cloud" contracted={100} used={54} flagged />
        <InventoryRow icon={FileText} label="Contratos" contracted={100} used={83} />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Hallazgos
      </p>
      <div className="space-y-1.5">
        <span className="block text-[8px] font-semibold text-secondary bg-secondary/10 rounded px-1.5 py-1">Optimizar</span>
        <span className="block text-[8px] font-semibold text-primary bg-primary/8 rounded px-1.5 py-1">Renegociar</span>
        <span className="block text-[8px] font-semibold text-foreground/70 bg-muted rounded px-1.5 py-1">Mantener</span>
      </div>
    </PhoneMock>
  </div>
);

/** Panel del problema: acumulación ordenada de gasto, sin caos. */
const AccumulationPanel = () => {
  const rows = [
    { label: "Licencias activas", w: 92 },
    { label: "Suscripciones", w: 78 },
    { label: "Instancias cloud", w: 86 },
    { label: "Contratos vigentes", w: 64 },
    { label: "Equipos y leasing", w: 70 },
    { label: "Ambientes de prueba", w: 40 },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-4">
        Gasto acumulado por categoría
      </p>
      <div className="space-y-3">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-center gap-3">
            <span className="text-[10px] text-foreground/70 w-28 shrink-0 truncate">{r.label}</span>
            <span className="relative flex-1 h-3 rounded-full bg-muted overflow-hidden">
              <span
                className={`absolute inset-y-0 left-0 rounded-full ${i === 1 || i === 5 ? "bg-secondary/70" : "bg-primary/40"}`}
                style={{ width: `${r.w}%` }}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/** Panel de solución: laptop + monitor con comparación uso vs. contratado. */
const AnalysisPlatformPanel = () => (
  <div className="grid grid-cols-2 gap-3">
    <LaptopMock className="col-span-2 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Uso versus contratado
      </p>
      <div className="space-y-3">
        <InventoryRow icon={ServerCog} label="Hardware" contracted={100} used={81} />
        <InventoryRow icon={KeyRound} label="Licencias" contracted={100} used={39} flagged />
        <InventoryRow icon={Cloud} label="Cloud" contracted={100} used={58} flagged />
      </div>
    </LaptopMock>
    <div className="col-span-2 rounded-xl border border-border bg-muted/60 px-4 py-3">
      <p className="text-[9px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Plan de acción
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">Optimizar cloud</span>
        <span className="text-[9px] font-semibold text-primary bg-primary/8 rounded-full px-2.5 py-1">Renegociar licencias</span>
      </div>
    </div>
  </div>
);

/** Panel de resultado: antes vs. después del orden en el gasto, sin cifras. */
const ResultPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Estructura de gasto
      </p>
      <div className="space-y-4">
        <div>
          <p className="text-[9px] text-muted-foreground mb-1.5">Antes</p>
          <div className="flex gap-1 h-3">
            <span className="rounded-sm bg-border" style={{ width: "22%" }} />
            <span className="rounded-sm bg-secondary/60" style={{ width: "14%" }} />
            <span className="rounded-sm bg-border" style={{ width: "18%" }} />
            <span className="rounded-sm bg-secondary/60" style={{ width: "10%" }} />
            <span className="rounded-sm bg-border" style={{ width: "20%" }} />
            <span className="rounded-sm bg-secondary/60" style={{ width: "9%" }} />
          </div>
        </div>
        <div>
          <p className="text-[9px] text-muted-foreground mb-1.5">Después</p>
          <div className="flex gap-1 h-3">
            <span className="rounded-sm bg-primary/50" style={{ width: "38%" }} />
            <span className="rounded-sm bg-primary/30" style={{ width: "26%" }} />
            <span className="rounded-sm bg-primary/70" style={{ width: "20%" }} />
          </div>
        </div>
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Plan priorizado
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

/** Panel del CTA final: plan de acción confirmado, tono calmo. */
const CtaPanel = () => (
  <div className="rounded-2xl border border-brand-foreground/20 bg-brand-foreground/10 backdrop-blur-sm p-5 md:p-6">
    <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-brand-foreground/70 mb-4">
      Diagnóstico agendado
    </p>
    <div className="space-y-3">
      {["Levantamiento", "Inventario", "Análisis de uso", "Plan de acción"].map((step, i) => (
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

const ReduccionCostosTiServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Reducción de Costos TI | Independencia Digital</title>
        <meta
          name="description"
          content="Auditoría de hardware, licencias de software e infraestructura cloud para identificar sobregasto, optimizar contratos y controlar el gasto en tecnología de tu organización."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/optimizacion-costos-ti" />
        <meta property="og:title" content="Reducción de Costos TI | Independencia Digital" />
        <meta
          property="og:description"
          content="El gasto en tecnología crece solo. Reducirlo requiere revisarlo: auditamos hardware, licencias y cloud para mostrarte dónde estás pagando de más."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/optimizacion-costos-ti" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={2} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={5} className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
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
            <span className="text-foreground">Reducción de Costos TI</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Wallet className="w-3.5 h-3.5" />
                Reducción de Costos TI
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Estás pagando por tecnología que nadie está revisando
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Auditamos tu hardware, licencias de software e infraestructura cloud
                para mostrarte con números concretos dónde se está gastando de más y
                qué conviene hacer al respecto.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCta label="Agendar diagnóstico" />
                <a
                  href="#que-auditamos"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver cómo auditamos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
                <div className="blob-shape-1 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <HeroSpendPanel />
                  </div>
                </div>
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Uso vs. contratado</p>
                <p className="text-[11px] text-muted-foreground mt-1">Hardware · Licencias · Cloud</p>
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
                El gasto en tecnología casi nunca se revisa con lupa
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Las licencias se renuevan solas, los contratos de hardware se
                arrastran por años y los servicios en la nube se contratan para una
                necesidad puntual que después nadie vuelve a revisar. El resultado
                es un gasto que crece de forma silenciosa y que nadie está
                evaluando.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <AccumulationPanel />
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
                    <AnalysisPlatformPanel />
                  </div>
                </div>
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Primero medimos. Después decidimos
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No se puede reducir lo que no se ha medido. Levantamos el inventario
                real de tu tecnología, comparamos lo que estás pagando con lo que
                efectivamente se usa y te entregamos un plan con acciones concretas
                y su impacto estimado en el gasto.
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

      {/* ============ QUÉ AUDITAMOS ============ */}
      <section id="que-auditamos" className="py-16 md:py-24 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>Qué auditamos</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Todo lo que estás pagando por tecnología, revisado en un mismo lugar
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {AUDIT_AREAS.map((area, i) => (
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

      {/* ============ REDUCIR NO ES CORTAR ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <PillLabel>Cómo decidimos</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Reducir costos no es cortar por cortar
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Eliminar un gasto sin entender su función puede terminar costando más
              que mantenerlo. Por eso cada hallazgo se clasifica según lo que
              realmente conviene hacer. Y si tu gasto tecnológico está bien
              dimensionado, también te lo vamos a decir.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
              {DECISION_PATHS.map((path, i) => (
                <ScrollReveal key={path.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <path.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                      {path.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ EL COSTO NO ES SOLO LA FACTURA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Costo total</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              El precio de una decisión tecnológica no termina en el precio
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un servicio más barato puede aumentar el trabajo del equipo,
              complicar una migración o generar riesgos de seguridad y
              continuidad. Por eso evaluamos el costo total, no solamente el monto
              mensual.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {COST_DIMENSIONS.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 80}>
                <div className="flex gap-5 items-start border-l-2 border-secondary pl-6">
                  <div>
                    <h3 className="font-heading font-extrabold text-base md:text-lg uppercase tracking-[0.1em] text-foreground mb-1.5">
                      {d.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
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
              Del gasto acumulado a un plan concreto
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
                El resultado no es un informe. Es un plan con números
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Al terminar la auditoría sabes exactamente qué estás pagando, qué se
                está usando, dónde existe sobregasto y qué acciones concretas
                tomar, ordenadas por el impacto que tienen sobre tu gasto.
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
              <p className="text-xs text-muted-foreground mt-6 max-w-md">
                El ahorro estimado se calcula sobre los datos reales levantados en
                tu auditoría, no sobre porcentajes generales.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <ResultPanel />
              <div className="mt-6 flex justify-center">
                <FlowChips steps={RESULT_FLOW} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ CONTEXTO CHILENO ============ */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Realidad local</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-5 mb-5 leading-tight">
              Una revisión que considera la realidad de operar en Chile
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Buena parte del gasto tecnológico se contrata en dólares mientras el
              negocio factura en pesos. A eso se suman contratos con proveedores
              locales, condiciones de renovación, impuestos y modalidades de pago
              que influyen directamente en el costo real de cada servicio.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8">
            {CHILE_ITEMS.map((item, i) => (
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

          <p className="text-xs text-muted-foreground text-center mt-10 max-w-xl mx-auto">
            Este servicio no constituye asesoría contable ni tributaria. Cuando
            corresponda, recomendamos complementar la revisión con el contador o
            asesor tributario de tu organización.
          </p>
        </div>
      </section>

      {/* ============ PARA QUIÉN ES ============ */}
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
                No ganamos vendiéndote otra herramienta
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No representamos a proveedores ni recibimos comisiones por
                recomendar plataformas. Nuestro trabajo es entregarte una lectura
                independiente de tu gasto tecnológico y las opciones que tienes,
                incluida la de no cambiar nada.
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

      {/* ============ MODELO DE SERVICIO ============ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <PillLabel>Modelo de servicio</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-6 leading-tight">
              Una auditoría acotada, con la opción de mantener el control en el tiempo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl mx-auto">
              El servicio se estructura como una auditoría con alcance definido,
              que entrega inventario, hallazgos y un plan de acción priorizado.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9 max-w-2xl mx-auto">
              Adicionalmente, puede mantenerse una revisión periódica para
              controlar la evolución del gasto, evitar que vuelva a crecer sin
              control y evaluar renovaciones antes de que se activen
              automáticamente.
            </p>
            <a
              href="#contacto"
              className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors`}
            >
              Consultar modalidad
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Preguntas frecuentes</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight">
              Lo que suelen preguntarnos antes de auditar
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
                ¿Sabes exactamente en qué se va tu presupuesto de tecnología?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y revisemos dónde se está gastando de más, qué
                conviene optimizar y qué debería mantenerse tal como está.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Medimos primero. Recomendamos después.
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

export default ReduccionCostosTiServiceView;
