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
  AtSign,
  BookOpenCheck,
  Boxes,
  Cable,
  CheckCircle2,
  Cloud,
  Compass,
  FileSearch,
  FileStack,
  Globe,
  KeyRound,
  Layers,
  LifeBuoy,
  Network,
  Rocket,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  UserCog,
  Users,
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
    title: "Nadie sabe exactamente qué hay",
    desc: "El correo está en un proveedor, el dominio en otro, el hosting en un tercero y los accesos los tiene alguien que ya no trabaja en la empresa.",
  },
  {
    num: "02",
    title: "Herramientas sin criterio",
    desc: "Se fueron sumando plataformas y aplicaciones sin que nadie evaluara si eran las más adecuadas para el negocio.",
  },
  {
    num: "03",
    title: "Sin documentación",
    desc: "Si falla algo, nadie sabe exactamente qué es, dónde está ni cómo se recupera.",
  },
  {
    num: "04",
    title: "Accesos sin gobierno",
    desc: "Personas que tienen acceso a cosas que ya no deberían, contraseñas compartidas y cuentas sin propietario claro.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: FileSearch,
    title: "Diagnóstico previo",
    desc: "Antes de proponer nada, entendemos cómo opera el negocio y qué tiene hoy.",
  },
  {
    icon: Compass,
    title: "Selección justificada",
    desc: "Cada herramienta se elige por lo que aporta a la operación, no por tendencia ni por precio.",
  },
  {
    icon: ServerCog,
    title: "Configuración completa",
    desc: "No solamente se instala. Se configura, se protege, se conecta y se valida.",
  },
  {
    icon: BookOpenCheck,
    title: "Documentación y control",
    desc: "Todo queda registrado: qué hay, quién lo controla, cómo se accede y cómo se recupera.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: AtSign,
    title: "Identidad y dominio",
    items: [
      "Registro y gestión del dominio",
      "DNS y configuración de registros",
      "Certificados SSL",
      "Correo corporativo",
      "Alias y cuentas de usuario",
      "Protección contra suplantación",
    ],
  },
  {
    num: "02",
    icon: Cloud,
    title: "Hosting e infraestructura",
    items: [
      "Selección de hosting o plataforma cloud",
      "Configuración del servidor o entorno",
      "Arquitectura según el volumen del negocio",
      "Backups y recuperación",
      "Monitoreo básico",
      "Escalabilidad planificada",
    ],
  },
  {
    num: "03",
    icon: KeyRound,
    title: "Accesos y gobierno",
    items: [
      "Inventario de herramientas y cuentas",
      "Gestión de usuarios y roles",
      "Contraseñas y autenticación",
      "Accesos a terceros y proveedores",
      "Políticas de acceso básicas",
      "Recuperación de cuentas",
    ],
  },
  {
    num: "04",
    icon: Boxes,
    title: "Ecosistema de herramientas",
    items: [
      "Selección según el negocio",
      "Comunicación y colaboración",
      "Productividad y documentos",
      "Almacenamiento y archivos",
      "Integración entre plataformas",
      "Documentación del ecosistema completo",
    ],
  },
];

const OWNERSHIP_FLOW = ["Diagnóstico", "Diseño", "Implementación", "Documentación", "Control"];

const OWNERSHIP_RESULTS = [
  {
    icon: FileStack,
    title: "Sabes qué tienes",
    desc: "Un inventario completo y actualizado de todo lo que compone tu infraestructura digital.",
  },
  {
    icon: UserCog,
    title: "Sabes quién lo controla",
    desc: "Cada herramienta, cuenta y acceso tiene un responsable definido. No depende de que alguien se acuerde.",
  },
  {
    icon: LifeBuoy,
    title: "Sabes qué hacer si algo falla",
    desc: "Cada componente está documentado con su procedimiento de recuperación.",
  },
];

const PATHS = [
  {
    icon: Rocket,
    title: "Construir desde cero",
    desc: "Para negocios que están comenzando o que nunca tuvieron una base tecnológica diseñada.",
  },
  {
    icon: ScanSearch,
    title: "Ordenar lo que existe",
    desc: "Para negocios que ya tienen herramientas funcionando pero sin documentación, con accesos dispersos o con configuraciones que nadie revisó en años.",
  },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico", desc: "Revisamos qué existe: herramientas, cuentas, accesos, dominios, contratos y estado actual." },
  { icon: Layers, title: "Diseño", desc: "Definimos la arquitectura adecuada para el negocio: qué mantener, qué cambiar y qué incorporar." },
  { icon: Compass, title: "Selección", desc: "Elegimos las herramientas según el tamaño, la operación y el presupuesto, no según tendencia." },
  { icon: ServerCog, title: "Implementación", desc: "Configuramos cada componente, lo conectamos con el resto y lo validamos antes de entregar." },
  { icon: BookOpenCheck, title: "Documentación", desc: "Todo queda registrado: qué hay, dónde está, quién lo controla y cómo se recupera." },
  { icon: Users, title: "Transferencia", desc: "El negocio queda con el control total de su ecosistema y sabe exactamente cómo operarlo." },
];

const RESULT_POINTS = [
  "Ecosistema completo documentado y bajo control",
  "Correo, dominio, hosting y herramientas seleccionados según el negocio",
  "Accesos organizados con responsables definidos",
  "Configuraciones validadas y protegidas",
  "Procedimientos de recuperación documentados",
  "Base preparada para crecer sin acumular desorden",
  "Independencia de proveedores externos o personas específicas",
];

const FIT_ITEMS = [
  { icon: FileStack, title: "Tu negocio usa herramientas que nadie documentó." },
  { icon: Users, title: "Los accesos están dispersos entre personas que ya no trabajan contigo." },
  { icon: Globe, title: "No sabes exactamente dónde está tu dominio ni quién lo controla." },
  { icon: Rocket, title: "Estás comenzando y quieres construir la base tecnológica desde el principio." },
  { icon: LifeBuoy, title: "Algo falló y te diste cuenta de que no sabes cómo recuperarlo." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Diagnóstico primero",
    desc: "No proponemos nada antes de entender qué existe y cómo opera el negocio.",
  },
  {
    icon: Compass,
    title: "Criterio, no catálogo",
    desc: "Cada herramienta se elige según la necesidad real, no según lo que está de moda.",
  },
  {
    icon: BookOpenCheck,
    title: "Documentación real",
    desc: "Todo queda registrado de forma que cualquier persona pueda entenderlo y operarlo.",
  },
  {
    icon: ShieldCheck,
    title: "Control del cliente",
    desc: "El objetivo es que el negocio sea completamente independiente, no que dependa de nosotros para operar.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Para qué tamaño de empresa es este servicio?",
    a: "Se adapta desde negocios unipersonales hasta organizaciones medianas. La arquitectura se diseña según el tamaño, la operación y el presupuesto de cada caso.",
  },
  {
    q: "¿Pueden trabajar sobre lo que ya tenemos?",
    a: "Sí. El diagnóstico determina qué conviene mantener, qué conviene mejorar y qué conviene reemplazar. No siempre es necesario empezar desde cero.",
  },
  {
    q: "¿Qué pasa si ya tenemos correo y dominio con otro proveedor?",
    a: "Evaluamos las condiciones actuales y, si conviene migrar, gestionamos el proceso completo con el mínimo impacto para tu operación.",
  },
  {
    q: "¿La documentación queda solo con ustedes o también con nosotros?",
    a: "Todo queda en manos del cliente. El objetivo es que el negocio tenga control total e independencia, no que dependa de Independencia Digital para operar su ecosistema.",
  },
  {
    q: "¿Cuánto demora implementar una arquitectura?",
    a: "Depende del estado actual, el tamaño del ecosistema y si se construye desde cero o se ordena lo que existe. Preferimos no dar un plazo genérico sin revisar el caso.",
  },
  {
    q: "¿También pueden acompañar la operación después de la implementación?",
    a: "Sí. Según el alcance acordado, se puede definir un acompañamiento posterior para soporte, ajustes y evolución del ecosistema.",
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

/** Nodo del ecosistema: icono + etiqueta + estado (gobernado / conectado). */
const EcosystemNode = ({ icon: Icon, label, governed = true }: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; label: string; governed?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <span className={`inline-flex w-7 h-7 rounded-lg items-center justify-center shrink-0 ${governed ? "bg-primary/10" : "bg-muted"}`}>
      <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.8} />
    </span>
    <span className="text-[10px] font-semibold text-foreground/80 flex-1 truncate">{label}</span>
    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${governed ? "bg-secondary" : "bg-border"}`} aria-hidden="true" />
  </div>
);

/** Panel del hero: laptop con ecosistema gobernado + teléfono con panel de control. */
const HeroEcosystemPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Ecosistema gobernado
      </p>
      <div className="space-y-3">
        <EcosystemNode icon={AtSign} label="Correo corporativo" />
        <EcosystemNode icon={Globe} label="Dominio y DNS" />
        <EcosystemNode icon={Cloud} label="Hosting / cloud" />
        <EcosystemNode icon={KeyRound} label="Accesos y roles" />
      </div>
    </LaptopMock>
    <PhoneMock className="w-24 shadow-card hidden sm:block">
      <p className="text-[8px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Control
      </p>
      <div className="space-y-1.5">
        <span className="block text-[8px] font-semibold text-secondary bg-secondary/10 rounded px-1.5 py-1">Documentado</span>
        <span className="block text-[8px] font-semibold text-primary bg-primary/8 rounded px-1.5 py-1">Con dueño</span>
        <span className="block text-[8px] font-semibold text-foreground/70 bg-muted rounded px-1.5 py-1">Recuperable</span>
      </div>
    </PhoneMock>
  </div>
);

/** Panel del problema: componentes dispersos, sin gobierno central. */
const FragmentedPanel = () => {
  const rows = [
    { icon: AtSign, label: "Correo", governed: false },
    { icon: Globe, label: "Dominio", governed: false },
    { icon: Cloud, label: "Hosting", governed: true },
    { icon: KeyRound, label: "Accesos", governed: false },
    { icon: Boxes, label: "Herramientas", governed: true },
    { icon: Cable, label: "Integraciones", governed: false },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-4">
        Componentes sin visibilidad central
      </p>
      <div className="grid grid-cols-2 gap-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
              r.governed ? "border-border bg-muted/40" : "border-dashed border-border/70"
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

/** Panel de solución: laptop + monitor con ecosistema conectado y panel central. */
const GovernedPlatformPanel = () => (
  <div className="grid grid-cols-2 gap-3">
    <LaptopMock className="col-span-2 shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Panel de gobierno central
      </p>
      <div className="space-y-3">
        <EcosystemNode icon={AtSign} label="Identidad y dominio" />
        <EcosystemNode icon={Cloud} label="Hosting e infraestructura" />
        <EcosystemNode icon={KeyRound} label="Accesos y roles" />
      </div>
    </LaptopMock>
    <div className="col-span-2 rounded-xl border border-border bg-muted/60 px-4 py-3">
      <p className="text-[9px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">
        Documentación
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] font-semibold text-secondary bg-secondary/10 rounded-full px-2.5 py-1">Con dueño</span>
        <span className="text-[9px] font-semibold text-primary bg-primary/8 rounded-full px-2.5 py-1">Recuperable</span>
      </div>
    </div>
  </div>
);

/** Panel de resultado: inventario ordenado del ecosistema completo. */
const ResultPanel = () => (
  <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
    <LaptopMock className="shadow-card-hover">
      <p className="text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-3">
        Inventario del ecosistema
      </p>
      <div className="space-y-2.5">
        <EcosystemNode icon={AtSign} label="Correo corporativo" />
        <EcosystemNode icon={Globe} label="Dominio y DNS" />
        <EcosystemNode icon={Cloud} label="Hosting / cloud" />
        <EcosystemNode icon={KeyRound} label="Accesos y roles" />
        <EcosystemNode icon={Boxes} label="Herramientas" />
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
      {["Diagnóstico", "Diseño", "Implementación", "Documentación"].map((step, i) => (
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

const ArquitecturaTiServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Arquitectura TI | Independencia Digital</title>
        <meta
          name="description"
          content="Diseño e implementación del ecosistema tecnológico de tu negocio: correo corporativo, dominio, hosting, infraestructura cloud, accesos y herramientas seleccionadas según tu operación."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/arquitectura-ti" />
        <meta property="og:title" content="Arquitectura TI | Independencia Digital" />
        <meta
          property="og:description"
          content="Tu negocio corre sobre tecnología que probablemente nadie diseñó. Diseñamos y documentamos tu ecosistema completo: correo, dominio, hosting, accesos y herramientas."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/arquitectura-ti" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={3} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
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
            <span className="text-foreground">Arquitectura TI</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Network className="w-3.5 h-3.5" />
                Arquitectura TI
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                La base tecnológica de tu negocio necesita un diseño, no solo herramientas instaladas
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos e implementamos tu ecosistema tecnológico completo: correo,
                dominio, hosting, nube, accesos y herramientas, seleccionados según
                cómo opera tu negocio. El resultado es una base documentada: sabes
                exactamente qué tienes, quién la controla y cómo recuperarla si algo
                falla.
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
                <div className="blob-shape-2 overflow-hidden shadow-card-hover">
                  <div className="bg-gradient-to-br from-muted via-background to-muted p-6 md:p-8 aspect-[4/3] flex items-center">
                    <HeroEcosystemPanel />
                  </div>
                </div>
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Ecosistema con dueño</p>
                <p className="text-[11px] text-muted-foreground mt-1">Correo · Dominio · Accesos</p>
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
                Cada negocio tiene una base tecnológica. Muy pocos saben exactamente
                cómo está armada
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Alguien configuró el correo en algún momento. Alguien registró el
                dominio. Alguien contrató el hosting. Pero si hoy te preguntaran
                dónde está documentado todo eso, quién tiene los accesos y qué
                pasaría si esa persona ya no está, la respuesta probablemente sería
                complicada.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <FragmentedPanel />
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
                    <GovernedPlatformPanel />
                  </div>
                </div>
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Un ecosistema diseñado para tu negocio, no heredado por accidente
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                Revisamos lo que tienes o lo construimos desde cero. Seleccionamos
                las herramientas adecuadas para tu tamaño, tu operación y tu
                presupuesto. Configuramos cada componente, documentamos todo y
                definimos quién controla qué.
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
              Cada componente de tu ecosistema tecnológico, diseñado y documentado
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

      {/* ============ NO ES UNA LISTA DE HERRAMIENTAS ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <PillLabel>Gobernanza, no instalación</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              El resultado no es una lista de herramientas instaladas. Es un
              ecosistema con dueño
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cuando terminamos, el negocio tiene algo que muy pocas
              organizaciones de su tamaño tienen: sabe exactamente qué
              herramientas usa, quién controla cada una, cómo están conectadas y
              qué hacer si algo falla.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={60} className="flex justify-center mb-14">
            <FlowChips steps={OWNERSHIP_FLOW} />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {OWNERSHIP_RESULTS.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 90}>
                <div className="text-center">
                  <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                    <r.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                    {r.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ORDENAR LO QUE YA EXISTE ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Dos caminos posibles</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              No siempre se necesita empezar desde cero
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Si el negocio ya tiene correo, dominio y herramientas funcionando,
              el trabajo puede ser ordenar lo que existe: documentar, limpiar
              accesos, corregir configuraciones y dejar todo bajo control. No hay
              que destruir para mejorar.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[28%] right-[28%] border-t-2 border-dashed border-border"
            />
            <div className="grid md:grid-cols-2 gap-10 md:gap-8 max-w-2xl mx-auto">
              {PATHS.map((path, i) => (
                <ScrollReveal key={path.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <path.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 uppercase tracking-wide">
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

          <ScrollReveal delay={150} className="text-center mt-12">
            <p className="text-sm md:text-base font-semibold text-foreground max-w-xl mx-auto">
              Ambos caminos terminan en el mismo lugar: un ecosistema documentado,
              controlado y preparado para crecer.
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
              Del desorden tecnológico a un ecosistema bajo control
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
                El resultado es un negocio que sabe sobre qué tecnología está
                corriendo
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Un ecosistema tecnológico bien diseñado no es un lujo. Es la base
                mínima que debería tener cualquier negocio que depende de
                herramientas digitales para operar.
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
                Primero entendemos tu negocio. Después decidimos qué tecnología
                tiene sentido
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No existe una arquitectura estándar que funcione para todos. Una
                empresa de tres personas no necesita lo mismo que una de treinta,
                y una operación remota no necesita lo mismo que una con oficinas
                físicas. Por eso el diagnóstico no es un trámite, es la parte más
                importante del proceso.
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
              Lo que suelen preguntarnos antes de diseñar
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
                ¿Sabes exactamente sobre qué tecnología está corriendo tu negocio?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y revisemos qué tienes, cómo está
                configurado y qué se necesita para tener un ecosistema
                tecnológico que realmente esté bajo control.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Primero revisamos. Después diseñamos.
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

export default ArquitecturaTiServiceView;
