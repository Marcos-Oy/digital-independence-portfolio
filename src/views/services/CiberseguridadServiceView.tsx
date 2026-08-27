import { Link } from "react-router-dom";
import PageMeta from "@/views/shared/PageMeta";
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
  Award,
  Baby,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Compass,
  Cpu,
  Database,
  Eye,
  FileWarning,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  LifeBuoy,
  Radar,
  RefreshCcw,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Siren,
  Store,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";
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
import csHero from "@/assets/ciberseguridad-hero.jpg";
import csRiesgo from "@/assets/ciberseguridad-riesgo.jpg";
import csChile from "@/assets/ciberseguridad-chile.jpg";
import csDiferencial from "@/assets/ciberseguridad-diferencial.jpg";
import csResultado from "@/assets/ciberseguridad-resultado.jpg";
import csCta from "@/assets/ciberseguridad-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    icon: Database,
    title: "Información expuesta",
    desc: "Datos personales, financieros, estratégicos o confidenciales pueden terminar donde no deberían.",
  },
  {
    num: "02",
    icon: Users,
    title: "Personas vulnerables",
    desc: "Un incidente puede comenzar con una contraseña, un correo, una estafa o una conducta insegura.",
  },
  {
    num: "03",
    icon: FileWarning,
    title: "Operaciones interrumpidas",
    desc: "Un ataque puede afectar sistemas, procesos y continuidad del negocio.",
  },
  {
    num: "04",
    icon: Siren,
    title: "Falta de preparación",
    desc: "Cuando ocurre un incidente, no saber qué hacer puede aumentar considerablemente su impacto.",
  },
];

const RISK_LAYERS = [
  { icon: Users, label: "Personas" },
  { icon: Workflow, label: "Procesos" },
  { icon: Database, label: "Datos" },
  { icon: Cpu, label: "Tecnología" },
  { icon: HeartHandshake, label: "Continuidad" },
];

const APPROACH_PILLARS = [
  {
    num: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Identificamos activos, riesgos, vulnerabilidades y brechas.",
  },
  {
    num: "02",
    icon: Compass,
    title: "Estrategia",
    desc: "Definimos prioridades, controles y acciones según el nivel de riesgo.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Protección",
    desc: "Implementamos o coordinamos medidas técnicas, organizacionales y humanas.",
  },
  {
    num: "04",
    icon: Siren,
    title: "Respuesta",
    desc: "Preparamos procedimientos para detectar, contener y responder ante incidentes.",
  },
  {
    num: "05",
    icon: RefreshCcw,
    title: "Continuidad",
    desc: "Trabajamos para que la organización pueda recuperar sus operaciones y reducir el impacto.",
  },
];

const COVERAGE_AREAS = [
  {
    num: "01",
    icon: Compass,
    title: "Gestión y estrategia",
    items: [
      "Diagnóstico de ciberseguridad",
      "Gestión de riesgos",
      "Políticas y procedimientos",
      "Gobierno de seguridad",
      "Planes de acción",
      "Gestión de activos",
    ],
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Protección",
    items: [
      "Identidades y accesos",
      "Seguridad de endpoints",
      "Seguridad de redes",
      "Protección de información",
      "Seguridad cloud",
      "Seguridad de aplicaciones",
    ],
  },
  {
    num: "03",
    icon: LifeBuoy,
    title: "Respuesta y continuidad",
    items: [
      "Gestión de incidentes",
      "Planes de respuesta",
      "Continuidad operacional",
      "Recuperación",
      "Simulaciones y ejercicios",
      "Lecciones aprendidas",
    ],
  },
  {
    num: "04",
    icon: GraduationCap,
    title: "Personas y cultura",
    items: [
      "Concientización",
      "Capacitación",
      "Phishing simulado cuando corresponda",
      "Buenas prácticas",
      "Protección de cuentas",
      "Seguridad digital personal",
    ],
  },
];

const NNA_FOCUS = [
  "Seguridad de cuentas",
  "Privacidad",
  "Prevención de riesgos digitales",
  "Configuración segura de dispositivos",
  "Acompañamiento a familias",
  "Educación digital",
  "Prevención frente a acoso y amenazas digitales",
  "Buenas prácticas de uso de redes sociales",
  "Identificación de situaciones de riesgo",
];

const MUJERES_FOCUS = [
  "Seguridad de cuentas",
  "Protección de identidad digital",
  "Privacidad",
  "Seguridad de dispositivos",
  "Prevención de acceso no autorizado",
  "Protección frente a exposición de información personal",
  "Configuración de privacidad",
  "Gestión de evidencia digital ante incidentes",
  "Orientación inicial ante situaciones de acoso o violencia digital",
];

const TRAINING_TOPICS = [
  "Phishing",
  "Contraseñas",
  "MFA",
  "Ingeniería social",
  "Manejo de información",
  "Dispositivos",
  "Redes sociales",
  "Seguridad móvil",
];

const PROCESS_STEPS = [
  { icon: Search, title: "Diagnóstico", desc: "¿Qué tienes y qué debes proteger?" },
  { icon: Radar, title: "Identificación", desc: "¿Qué riesgos y vulnerabilidades existen?" },
  { icon: ClipboardCheck, title: "Priorización", desc: "¿Qué riesgos requieren atención primero?" },
  { icon: Compass, title: "Estrategia", desc: "¿Qué controles y acciones tienen sentido?" },
  { icon: ShieldCheck, title: "Implementación", desc: "¿Qué debemos cambiar, configurar o desarrollar?" },
  { icon: RefreshCcw, title: "Mejora continua", desc: "¿Cómo mantenemos y mejoramos la seguridad?" },
];

const RESULT_POINTS = [
  "Mayor visibilidad de riesgos",
  "Mejor gestión de accesos",
  "Mayor protección de información",
  "Preparación ante incidentes",
  "Mayor conciencia de los usuarios",
  "Mejor organización de políticas y procesos",
  "Preparación frente a exigencias regulatorias aplicables",
];

const RESULT_FLOW = ["Riesgo", "Estrategia", "Protección", "Continuidad"];

const AUDIENCES = [
  {
    icon: Building2,
    title: "Empresas",
    desc: "Para organizaciones que necesitan gestionar y reducir riesgos digitales.",
  },
  {
    icon: Store,
    title: "Pymes",
    desc: "Para negocios que necesitan comenzar a ordenar su seguridad sin sobredimensionar la inversión.",
  },
  {
    icon: Landmark,
    title: "Organizaciones",
    desc: "Para instituciones que necesitan fortalecer procesos, políticas y protección de información.",
  },
  {
    icon: Home,
    title: "Personas y familias",
    desc: "Para quienes necesitan mejorar su seguridad y privacidad en el entorno digital.",
  },
];

const TRUST_PRINCIPLES = [
  {
    icon: Compass,
    title: "Estrategia",
    desc: "Priorizamos según riesgo.",
  },
  {
    icon: Eye,
    title: "Contexto",
    desc: "Consideramos la realidad de cada organización.",
  },
  {
    icon: Shield,
    title: "Prevención",
    desc: "Trabajamos antes de que ocurra el incidente.",
  },
  {
    icon: RefreshCcw,
    title: "Mejora continua",
    desc: "La seguridad debe evolucionar con las amenazas.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿La Ley Marco de Ciberseguridad aplica a todas las empresas?",
    a: "No necesariamente. La aplicabilidad y las obligaciones dependen de la naturaleza, actividad y clasificación de cada entidad. Por eso el primer paso es siempre evaluar tu contexto: tipo de organización, servicios que entregas y condición regulatoria, para determinar qué obligaciones efectivamente te corresponden.",
  },
  {
    q: "¿Qué relación tiene la ciberseguridad con la Ley de Protección de Datos Personales?",
    a: "Proteger datos personales requiere medidas organizacionales y técnicas adecuadas: control de accesos, políticas, gestión de incidentes y seguridad de la información. La Ley N.º 21.719 establece un nuevo marco para el tratamiento y protección de datos personales en Chile, con entrada en vigencia prevista para el 1 de diciembre de 2026, por lo que conviene prepararse con anticipación.",
  },
  {
    q: "¿Trabajan con ISO 27001?",
    a: "Sí, podemos trabajar en diagnóstico, implementación y alineamiento de procesos y controles con ISO/IEC 27001 como referencia de buenas prácticas para un Sistema de Gestión de Seguridad de la Información (SGSI). No somos un organismo certificador: cuando un proyecto requiere certificación, ésta la otorga una entidad certificadora externa.",
  },
  {
    q: "¿Pueden evaluar mi nivel actual de ciberseguridad?",
    a: "Sí. Realizamos un diagnóstico adaptado a tu contexto que identifica activos, riesgos, vulnerabilidades y brechas, y que termina en una hoja de ruta priorizada según el impacto real para tu organización.",
  },
  {
    q: "¿Qué pasa si ya tengo antivirus y firewall?",
    a: "Esas herramientas son solamente una parte de una estrategia integral. El riesgo también está en las personas, los procesos, los proveedores, los accesos y la preparación para responder. Una estrategia completa considera todos esos factores, no solo el software instalado.",
  },
  {
    q: "¿También protegen a personas y familias?",
    a: "Sí. Existe una línea de ciberseguridad diferencial enfocada en seguridad digital personal y familiar, con programas específicos para la protección digital de niños, niñas y adolescentes, y para la protección digital de mujeres, siempre desde un enfoque educativo y preventivo.",
  },
  {
    q: "¿Qué pasa si ya tuve un incidente?",
    a: "Podemos evaluar la situación, ayudar a contener riesgos, preservar la información relevante y definir los próximos pasos según el alcance del incidente. Después trabajamos en las medidas necesarias para reducir la probabilidad de que vuelva a ocurrir.",
  },
];

/* ------------------------------ ui atoms ------------------------------ */

const PrimaryCta = ({ label, className = "", inverse = false }: { label: string; className?: string; inverse?: boolean }) => (
  <button
    className={`${BOOKING_TRIGGER_CLASS} inline-flex items-center gap-2 font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 ${
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

/** Mini indicador de riesgo descendente (tarjeta flotante del hero). */
const MiniRiskChart = () => (
  <svg viewBox="0 0 96 40" className="w-24 h-10" fill="none" aria-hidden="true">
    <polyline
      points="2,6 18,10 34,8 50,18 66,16 82,28 94,34"
      stroke="hsl(var(--secondary))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="94" cy="34" r="3" fill="hsl(var(--secondary))" />
  </svg>
);

/* ------------------------------ view ------------------------------ */

const CiberseguridadServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Ciberseguridad, Gestión y Estrategia | Independencia Digital"
        description="Diagnóstico, gestión de riesgos, estrategia de ciberseguridad, protección de datos, preparación ante incidentes y alineamiento con ISO 27001 y normativa chilena."
        path="/servicios/ciberseguridad"
      />

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
                <ShieldCheck className="w-3.5 h-3.5" />
                Ciberseguridad · Gestión &amp; Estrategia
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Protege lo que no puedes permitirte perder
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos estrategias de ciberseguridad para proteger información,
                personas y operaciones, gestionar riesgos y preparar a tu
                organización frente a las amenazas y exigencias del entorno digital.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCta label="Agendar diagnóstico" />
                <a
                  href="#enfoque"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Conocer nuestro enfoque
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={csHero}
                  shape={2}
                  alt="Ecosistema empresarial protegido por una estrategia de ciberseguridad: red, nube, datos e identidades digitales"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Estrategia activa</p>
                <p className="text-[11px] text-muted-foreground mt-1 mb-1.5">Riesgo · Personas · Continuidad</p>
                <MiniRiskChart />
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
                El mayor riesgo no siempre es el ataque. Es no estar preparado
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Una organización puede tener antivirus, firewall y contraseñas
                seguras y aun así estar expuesta. El riesgo también está en las
                personas, los procesos, los proveedores, los datos y la falta de
                preparación para responder ante un incidente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={csRiesgo}
                alt="Organización representada como sistemas digitales interconectados con puntos de exposición al riesgo"
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

      {/* ============ NO EMPIEZA EN EL FIREWALL (diagrama radial) ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>No se trata solamente de tecnología</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              La ciberseguridad no empieza en el firewall
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Empieza entendiendo qué información tienes, quién puede acceder a
              ella, qué procesos dependen de tus sistemas y qué ocurriría si
              dejaran de funcionar.
            </p>
          </ScrollReveal>

          {/* Diagrama radial (desktop) — misma técnica que "Cómo trabajamos" */}
          <ScrollReveal variant="scale" className="hidden md:block">
            <RadialOrbitDiagram
              nodes={RISK_LAYERS}
              centerIcon={ShieldCheck}
              centerTitle="Gestión del riesgo"
              className="mx-auto w-full max-w-[560px]"
            />
          </ScrollReveal>

          {/* Flujo vertical (mobile) */}
          <div className="md:hidden max-w-xs mx-auto">
            {RISK_LAYERS.map((layer, i) => (
              <ScrollReveal key={layer.label} delay={i * 70}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3.5 shadow-card w-full">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <layer.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                    </span>
                    <span className="font-heading font-bold text-sm uppercase tracking-[0.14em] text-foreground">
                      {layer.label}
                    </span>
                  </div>
                  {i < RISK_LAYERS.length - 1 ? (
                    <ChevronDown className="w-5 h-5 text-secondary my-1.5" />
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5 text-secondary my-1.5" />
                      <div className="gradient-brand rounded-2xl px-6 py-4 shadow-brand text-center w-full">
                        <p className="font-heading font-extrabold text-brand-foreground text-xs uppercase tracking-[0.14em]">
                          Gestión del riesgo
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NUESTRO ENFOQUE (5 pilares) ============ */}
      <section id="enfoque" className="py-16 md:py-24 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <PillLabel>Nuestro enfoque</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Una estrategia de seguridad construida alrededor de tu realidad
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No todos los clientes necesitan el mismo nivel de ciberseguridad.
                Por eso partimos con las preguntas correctas: ¿qué necesitas
                proteger?, ¿qué riesgos enfrentas?, ¿qué obligaciones tienes?,
                ¿qué controles necesitas? y ¿cómo responderías si mañana ocurre
                un incidente?
              </p>
            </ScrollReveal>

            <div className="relative">
              <div aria-hidden="true" className="absolute left-[27px] top-4 bottom-4 border-l-2 border-dashed border-border" />
              <div className="space-y-10">
                {APPROACH_PILLARS.map((pillar, i) => (
                  <ScrollReveal key={pillar.num} delay={i * 90}>
                    <div className="relative flex gap-6 items-start">
                      <span className="relative z-10 inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand shrink-0">
                        <pillar.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                      </span>
                      <div className="pt-1">
                        <p className="font-heading font-extrabold text-xs text-secondary tracking-[0.2em] mb-1">
                          {pillar.num}
                        </p>
                        <h3 className="font-heading font-extrabold text-lg md:text-xl uppercase tracking-[0.1em] text-foreground mb-1.5">
                          {pillar.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARCO CHILENO ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <ScrollReveal>
              <PillLabel>Contexto chileno</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Ciberseguridad con mirada local y estándares internacionales
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Trabajamos considerando el marco regulatorio chileno aplicable a
                cada organización y utilizamos estándares internacionales como
                referencia para estructurar una gestión de seguridad consistente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={csChile}
                alt="Mapa de Chile integrado a una red digital de seguridad, privacidad y gobierno de la información"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="h-full bg-card border border-border rounded-3xl p-7 shadow-card">
                <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-5">
                  <Scale className="w-5 h-5 text-primary" strokeWidth={1.7} />
                </span>
                <p className="text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary mb-1.5">
                  Ley Marco de Ciberseguridad
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  Ley N.º 21.663
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Establece el marco institucional y obligaciones de ciberseguridad
                  para determinadas entidades, incluyendo deberes relacionados con
                  prevención, reporte y respuesta a incidentes. Evaluamos la
                  aplicabilidad según el tipo de organización, actividad y
                  condición regulatoria.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={90}>
              <div className="h-full bg-card border border-border rounded-3xl p-7 shadow-card">
                <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-5">
                  <UserCheck className="w-5 h-5 text-primary" strokeWidth={1.7} />
                </span>
                <p className="text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary mb-1.5">
                  Protección de datos personales
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  Ley N.º 21.719
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Establece un nuevo marco para el tratamiento y protección de
                  datos personales y crea la Agencia de Protección de Datos
                  Personales. Su entrada en vigencia está prevista para el 1 de
                  diciembre de 2026: preparamos a las organizaciones para el
                  nuevo escenario chileno de protección de datos personales.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180}>
              <div className="h-full bg-card border border-border rounded-3xl p-7 shadow-card">
                <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-5">
                  <Award className="w-5 h-5 text-primary" strokeWidth={1.7} />
                </span>
                <p className="text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary mb-1.5">
                  Estándar internacional
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  ISO/IEC 27001
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sistema de Gestión de Seguridad de la Información (SGSI).
                  Alineamos procesos y controles con buenas prácticas
                  internacionales de gestión de seguridad de la información
                  cuando el proyecto lo requiere, mediante diagnóstico,
                  preparación e implementación.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120}>
            <p className="mt-10 text-xs md:text-sm text-muted-foreground/80 leading-relaxed max-w-4xl border-l-2 border-border pl-4">
              Los servicios de Independencia Digital tienen carácter de
              diagnóstico, consultoría, implementación y acompañamiento
              tecnológico. El alcance de las obligaciones legales depende de la
              naturaleza, actividad y condición específica de cada organización.
              Cuando corresponda, recomendamos complementar el trabajo con
              asesoría jurídica especializada.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ MATRIZ DE RIESGO ============ */}
      <section className="py-16 md:py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-12 max-w-3xl mx-auto">
            <PillLabel>Gestión de riesgos</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              No todos los riesgos tienen la misma prioridad
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Priorizamos aquello que puede generar mayor impacto en tu
              organización, cruzando la probabilidad de que ocurra con el impacto
              que tendría.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale">
            <div className="flex gap-3 md:gap-5 items-stretch">
              {/* Eje impacto */}
              <div className="flex flex-col justify-between items-center py-2">
                <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground [writing-mode:vertical-rl] rotate-180 my-auto">
                  Impacto
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  {/* Fila impacto alto */}
                  <div className="bg-secondary/10 border border-secondary/15 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto alto · Prob. baja</p>
                  </div>
                  <div className="bg-secondary/25 border border-secondary/30 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-foreground/70 mb-2">Impacto alto · Prob. media</p>
                    <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/70 border border-border px-2 py-1 rounded-full">
                      Interrupción de servicios
                    </span>
                  </div>
                  <div className="bg-secondary/50 border border-secondary/60 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-foreground mb-2">Impacto alto · Prob. alta</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/80 border border-border px-2 py-1 rounded-full">Ransomware</span>
                      <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/80 border border-border px-2 py-1 rounded-full">Filtración de datos</span>
                    </div>
                  </div>
                  {/* Fila impacto medio */}
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto medio · Prob. baja</p>
                  </div>
                  <div className="bg-secondary/15 border border-secondary/20 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto medio · Prob. media</p>
                    <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/70 border border-border px-2 py-1 rounded-full">Fraude</span>
                  </div>
                  <div className="bg-secondary/30 border border-secondary/35 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-foreground/80 mb-2">Impacto medio · Prob. alta</p>
                    <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/70 border border-border px-2 py-1 rounded-full">Acceso no autorizado</span>
                  </div>
                  {/* Fila impacto bajo */}
                  <div className="bg-muted border border-border rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto bajo · Prob. baja</p>
                  </div>
                  <div className="bg-primary/8 border border-primary/12 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto bajo · Prob. media</p>
                    <span className="inline-block text-[10px] md:text-xs font-semibold text-foreground bg-background/70 border border-border px-2 py-1 rounded-full">Pérdida de información</span>
                  </div>
                  <div className="bg-secondary/15 border border-secondary/20 rounded-2xl p-3 md:p-5 min-h-[92px] md:min-h-[120px]">
                    <p className="text-[9px] md:text-[10px] font-heading font-bold uppercase tracking-wide text-muted-foreground mb-2">Impacto bajo · Prob. alta</p>
                  </div>
                </div>
                {/* Eje probabilidad */}
                <div className="flex justify-between mt-3 px-1 text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <span>Probabilidad baja</span>
                  <span>Probabilidad media</span>
                  <span>Probabilidad alta</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ ¿QUÉ INCLUYE? ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>¿Qué incluye?</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Desde el diagnóstico hasta la estrategia de protección
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COVERAGE_AREAS.map((area, i) => (
              <ScrollReveal key={area.num} delay={i * 80}>
                <div className="relative bg-card border border-border rounded-2xl p-6 h-full">
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 font-heading font-extrabold text-3xl text-primary/10 leading-none select-none"
                  >
                    {area.num}
                  </span>
                  <span className="inline-flex w-10 h-10 rounded-lg gradient-brand items-center justify-center shadow-brand mb-4">
                    <area.icon className="w-4.5 h-4.5 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground mb-3 max-w-[80%]">
                    {area.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-foreground/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
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

      {/* ============ CIBERSEGURIDAD DIFERENCIAL ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <ScrollReveal variant="scale" className="relative order-last lg:order-first">
              <div className="relative pt-6 pr-4 pb-6 pl-4">
                <StripeAccent className="absolute -top-1 left-6 w-24 h-14 rounded-xl opacity-90" />
                <BlobImage
                  src={csDiferencial}
                  shape={3}
                  alt="Familias y personas usando dispositivos digitales de forma segura, con autonomía y privacidad"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>Ciberseguridad diferencial</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                La seguridad digital también tiene rostro humano
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                La exposición digital no afecta a todas las personas de la misma
                manera. Por eso desarrollamos una línea de ciberseguridad
                diferencial orientada a contextos donde la protección requiere
                una mirada específica, desde la educación y la prevención.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="h-full bg-card border border-border rounded-3xl p-7 md:p-9 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand shrink-0">
                    <Baby className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-heading font-extrabold text-xs text-secondary tracking-[0.2em] mb-1">01</p>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-foreground leading-snug">
                      Protección digital de niños, niñas y adolescentes
                    </h3>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {NNA_FOCUS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed border-l-2 border-border pl-4">
                  Enfoque educativo y preventivo, con acompañamiento a las
                  familias. No se trata de vigilancia invasiva ni de promesas de
                  protección absoluta: se trata de reducir riesgos y formar
                  buenas prácticas digitales.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="h-full bg-card border border-border rounded-3xl p-7 md:p-9 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand shrink-0">
                    <HeartHandshake className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-heading font-extrabold text-xs text-secondary tracking-[0.2em] mb-1">02</p>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-foreground leading-snug">
                      Protección digital para mujeres
                    </h3>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {MUJERES_FOCUS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground/80 leading-relaxed border-l-2 border-border pl-4">
                  Acompañamiento tecnológico y orientación inicial. Cuando la
                  situación lo requiere, se sugiere la derivación hacia
                  profesionales o instituciones especializadas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ SEGURIDAD SOSTENIBLE ============ */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>Seguridad para organizaciones</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Tu seguridad debe poder sostenerse en el tiempo
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Una organización segura no depende de una única herramienta.
                Depende de que tecnología, personas y gestión trabajen juntas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <RadialOrbitDiagram
                nodes={[
                  { icon: Cpu, label: "Tecnología", desc: "Controles y herramientas" },
                  { icon: Users, label: "Personas", desc: "Conocimiento y cultura" },
                  { icon: ClipboardCheck, label: "Gestión", desc: "Políticas y procesos" },
                ]}
                centerTitle="Seguridad sostenible"
                className="mx-auto w-full max-w-[380px]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ CAPACITACIÓN ============ */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <PillLabel>Concientización y capacitación</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              La primera línea de defensa también son las personas
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
              Gran parte de los incidentes comienza con una acción humana. Por
              eso la capacitación y la cultura de seguridad son parte central de
              cualquier estrategia seria.
            </p>
            <ul className="flex flex-wrap justify-center gap-2.5 mb-9">
              {TRAINING_TOPICS.map((topic) => (
                <li
                  key={topic}
                  className="text-xs md:text-sm font-semibold text-foreground bg-background border border-border px-4 py-2 rounded-full"
                >
                  {topic}
                </li>
              ))}
            </ul>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Conocer capacitaciones
              <ArrowRight className="w-4 h-4" />
            </a>
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
              De la exposición a una estrategia de protección
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
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Más que proteger sistemas: reducir incertidumbre
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Una estrategia de ciberseguridad permite saber qué proteger, qué
                riesgos priorizar, cómo responder ante un incidente y qué
                acciones tomar para mejorar continuamente.
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
                src={csResultado}
                alt="Centro de operaciones de seguridad con indicadores de riesgo, cumplimiento y continuidad en monitores"
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
              Ciberseguridad para distintos niveles de exposición
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {AUDIENCES.map((audience, i) => (
              <ScrollReveal key={audience.title} delay={i * 70}>
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

      {/* ============ CONFIANZA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                Primero entendemos el riesgo. Después hablamos de herramientas
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No recomendamos soluciones por catálogo. Evaluamos tu contexto,
                tus activos, tus procesos y tu nivel de exposición antes de
                definir qué medidas tienen sentido.
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
              Lo que suelen preguntarnos sobre ciberseguridad
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
                ¿Sabes realmente qué tan preparado estás?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conozcamos tu nivel de exposición, los
                riesgos prioritarios y las acciones que podrían fortalecer tu
                seguridad.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Evaluemos primero. Decidamos después.
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
                  src={csCta}
                  shape={5}
                  alt="Entorno tecnológico empresarial protegido por capas de seguridad y gestión de riesgos"
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

export default CiberseguridadServiceView;
