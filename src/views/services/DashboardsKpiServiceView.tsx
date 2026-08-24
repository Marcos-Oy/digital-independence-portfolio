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
  BarChart3,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Copy,
  Database,
  FileSearch,
  Gauge,
  Layers,
  LineChart,
  Plug,
  ScanSearch,
  Split,
  Target,
  UserCog,
  Users,
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
import dashHero from "@/assets/services/dash-hero.jpg";
import dashProblema from "@/assets/services/dash-problema.jpg";
import dashSolucion from "@/assets/services/dash-solucion.jpg";
import dashResultado from "@/assets/services/dash-resultado.jpg";
import dashCta from "@/assets/services/dash-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "Datos desactualizados",
    desc: "Las decisiones se toman sobre información del período anterior porque el reporte actual todavía lo está armando alguien.",
  },
  {
    num: "02",
    title: "Versiones distintas de la misma cifra",
    desc: "Ventas reporta un número, finanzas reporta otro. Nadie sabe cuál es el correcto porque cada uno mide diferente.",
  },
  {
    num: "03",
    title: "Tiempo perdido en armar reportes",
    desc: "Alguien dedica horas a consolidar, limpiar y formatear datos que deberían estar disponibles de forma automática.",
  },
  {
    num: "04",
    title: "Sin visibilidad sobre lo que importa",
    desc: "Hay muchos datos disponibles pero no está claro cuáles son los indicadores que realmente permiten tomar decisiones.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: Target,
    title: "Definición de KPIs",
    desc: "Antes de diseñar cualquier pantalla, acordamos qué indicadores importan y cómo se calculan.",
  },
  {
    icon: Plug,
    title: "Conexión a fuentes reales",
    desc: "El dashboard se alimenta de las plataformas que ya usa el negocio, no de datos cargados manualmente.",
  },
  {
    icon: Layers,
    title: "Diseño con jerarquía",
    desc: "Cada panel se diseña pensando en quién lo va a usar y qué decisión necesita tomar.",
  },
  {
    icon: BookOpenCheck,
    title: "Capacitación incluida",
    desc: "Un dashboard que nadie usa no cambia nada. Por eso la adopción del equipo forma parte del proyecto.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: Target,
    title: "Definición de indicadores",
    items: [
      "Taller de definición de KPIs con el equipo",
      "Alineación entre áreas sobre qué medir y cómo",
      "Jerarquía de indicadores por nivel de decisión",
      "Definición de fórmulas y criterios de cálculo",
      "Identificación de fuentes de datos por indicador",
      "Criterios de alerta y rangos de referencia",
    ],
  },
  {
    num: "02",
    icon: Database,
    title: "Conexión de datos",
    items: [
      "Diagnóstico de fuentes disponibles",
      "Conexión a plataformas existentes",
      "Transformación y limpieza de datos",
      "Modelo de datos para el dashboard",
      "Frecuencia de actualización por fuente",
      "Documentación de la arquitectura de datos",
    ],
  },
  {
    num: "03",
    icon: LineChart,
    title: "Diseño e implementación",
    items: [
      "Diseño del dashboard por perfil de usuario",
      "Implementación en Power BI, Looker Studio o Metabase",
      "Jerarquía visual y experiencia de uso",
      "Filtros interactivos y vistas por período",
      "Versión para escritorio y móvil",
      "Pruebas con datos reales antes de publicar",
    ],
  },
  {
    num: "04",
    icon: UserCog,
    title: "Capacitación y adopción",
    items: [
      "Capacitación por perfil de usuario",
      "Guía de uso y referencia rápida",
      "Definición de rutina de uso por equipo",
      "Acompañamiento en las primeras semanas",
      "Ajustes según el uso real",
      "Evolución del dashboard con el negocio",
    ],
  },
];

const COMMON_ERRORS = [
  {
    num: "Error 01",
    icon: Copy,
    title: "Mostrar todo lo disponible",
    desc: "Se pone en el dashboard todo dato que existe, sin jerarquía ni propósito. El resultado es ruido visual, no información útil.",
  },
  {
    num: "Error 02",
    icon: FileSearch,
    title: "Copiar el formato de los reportes existentes",
    desc: "Se digitaliza el reporte manual tal como está, sin cuestionar si los indicadores que mide son los correctos.",
  },
  {
    num: "Error 03",
    icon: Users,
    title: "No pensar en quién lo usa",
    desc: "Un dashboard para el gerente general necesita indicadores distintos al de un jefe de área. Si es igual para todos, no sirve bien para ninguno.",
  },
];

const ABANDON_REASONS = [
  {
    icon: ScanSearch,
    title: "El equipo no sabe cómo interpretarlo",
    desc: "El panel existe pero nadie lo puede leer bien. Solución: capacitación por perfil de usuario y diseño orientado a la decisión, no a la visualización.",
  },
  {
    icon: CalendarClock,
    title: "No se integra a la rutina de trabajo",
    desc: "El equipo lo revisa las primeras semanas y después vuelve a las planillas. Solución: definición de una rutina de uso concreta y acompañamiento en las primeras semanas de operación real.",
  },
];

const TOOL_CARDS = [
  { name: "Power BI", desc: "Cuando el negocio opera en el ecosistema Microsoft o necesita análisis más complejos con grandes volúmenes de datos." },
  { name: "Looker Studio", desc: "Cuando las fuentes de datos son principalmente Google (Analytics, Sheets, Ads) o se necesita un acceso rápido y sin costo de licencia." },
  { name: "Metabase", desc: "Cuando el equipo técnico necesita conectarse directamente a bases de datos y generar consultas más flexibles." },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico de datos", desc: "Identificamos qué fuentes de datos existen, en qué estado están y qué indicadores se pueden calcular a partir de ellas." },
  { icon: Target, title: "Definición de KPIs", desc: "Trabajamos con el equipo para definir qué indicadores importan realmente, cómo se calculan y para quién." },
  { icon: Database, title: "Arquitectura de datos", desc: "Diseñamos el modelo de datos que va a alimentar el dashboard: transformaciones, reglas y frecuencia de actualización." },
  { icon: LineChart, title: "Diseño del dashboard", desc: "Construimos el panel con jerarquía visual, filtros interactivos y vistas adaptadas por perfil de usuario." },
  { icon: ScanSearch, title: "Pruebas con datos reales", desc: "Validamos que los indicadores se calculan correctamente y que el panel funciona con información real del negocio." },
  { icon: UserCog, title: "Capacitación y rutina de uso", desc: "Capacitamos al equipo por perfil, definimos cómo se integra el dashboard a la rutina de trabajo y acompañamos las primeras semanas." },
];

const RESULT_POINTS = [
  "Indicadores definidos de forma común entre áreas",
  "Dashboard conectado a las fuentes de datos reales del negocio",
  "Información actualizada según la frecuencia de cada fuente",
  "Panel diseñado por perfil de usuario y tipo de decisión",
  "Equipo capacitado para interpretar y usar el dashboard a diario",
  "Eliminación del tiempo dedicado a armar reportes manuales",
  "Base de datos documentada y escalable para nuevos indicadores",
];

const FIT_ITEMS = [
  { icon: Split, title: "Cada área tiene su propio reporte en su propio formato." },
  { icon: Clock3, title: "Los reportes se arman manualmente cada semana o cada mes." },
  { icon: ScanSearch, title: "Cuando necesitas una cifra, alguien tiene que ir a buscarla." },
  { icon: BarChart3, title: "Ventas y finanzas reportan números distintos sobre lo mismo." },
  { icon: Gauge, title: "Ya probaste un dashboard y el equipo dejó de usarlo al poco tiempo." },
];

const TRUST_PRINCIPLES = [
  {
    icon: Target,
    title: "Indicadores primero",
    desc: "No diseñamos ningún panel antes de definir qué mide, cómo se calcula y para qué sirve cada indicador.",
  },
  {
    icon: Database,
    title: "Datos reales",
    desc: "El dashboard se alimenta de las fuentes que ya usa el negocio, no de datos de muestra o ejemplos.",
  },
  {
    icon: LineChart,
    title: "Diseño orientado a decisiones",
    desc: "Cada elemento del panel existe porque ayuda a alguien a tomar una decisión, no para mostrar que hay datos disponibles.",
  },
  {
    icon: BookOpenCheck,
    title: "Adopción como parte del proyecto",
    desc: "Un dashboard que el equipo no usa no cambia nada. Por eso la capacitación y la rutina de uso no son opcionales.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Pueden conectar el dashboard a cualquier fuente de datos?",
    a: "Depende de si la fuente tiene una API, conector nativo o exportación estructurada disponible. El diagnóstico inicial determina qué es posible con las fuentes de datos existentes.",
  },
  {
    q: "¿Los datos se actualizan en tiempo real?",
    a: "La frecuencia de actualización depende de la fuente de datos. Algunas permiten actualización en tiempo real o cada pocos minutos, otras se actualizan por lotes diarios o en horarios programados. Eso se define en el diagnóstico.",
  },
  {
    q: "¿Qué plataforma recomiendan?",
    a: "Depende de las fuentes de datos, el perfil del equipo y el presupuesto. Power BI, Looker Studio y Metabase tienen casos de uso distintos y la selección se define una vez conocido el contexto.",
  },
  {
    q: "¿Pueden trabajar con los datos que ya tenemos en planillas?",
    a: "Sí. Las planillas pueden ser una fuente de datos para el dashboard, aunque en algunos casos conviene evaluar si migrar esa información a una fuente más estructurada mejora la confiabilidad del indicador.",
  },
  {
    q: "¿Qué pasa si necesitamos agregar un nuevo indicador después?",
    a: "Un dashboard bien construido tiene una arquitectura que permite agregar nuevos indicadores sin rehacer todo. La documentación del modelo de datos facilita esa evolución.",
  },
  {
    q: "¿La capacitación es solo para el equipo de TI?",
    a: "No. La capacitación se define por perfil de usuario: quién consulta el dashboard para tomar decisiones estratégicas necesita una capacitación distinta a quien lo usa para seguimiento operativo diario.",
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

/* ------------------------------ view ------------------------------ */

const DashboardsKpiServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dashboards y KPI | Independencia Digital</title>
        <meta
          name="description"
          content="Definimos los indicadores que importan, conectamos tus fuentes de datos reales y construimos dashboards interactivos en Power BI, Looker Studio o Metabase con capacitación para tu equipo."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/dashboards-kpi" />
        <meta property="og:title" content="Dashboards y KPI | Independencia Digital" />
        <meta
          property="og:description"
          content="Tomar decisiones con el reporte de la semana pasada, armado a mano por cada área, no es tener visibilidad. Es reconstruir el panorama cada vez."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/dashboards-kpi" />
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
                <LineChart className="w-3.5 h-3.5" />
                Dashboards y KPI
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Tus datos ya existen. El problema es que nadie los ve en tiempo
                real y de la misma forma
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Definimos los indicadores que realmente importan para tu
                negocio, conectamos tus fuentes de datos reales y construimos
                dashboards interactivos con capacitación para que tu equipo los
                use a diario.
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
                  src={dashHero}
                  shape={4}
                  alt="Equipo directivo analizando dashboards con indicadores del negocio en una sala luminosa"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Un mismo panorama</p>
                <p className="text-[11px] text-muted-foreground mt-1">Ventas · Operaciones · Finanzas</p>
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
                Cuando cada área tiene su propio reporte, nadie tiene el
                panorama completo
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Ventas exporta su planilla, finanzas tiene la suya y
                operaciones usa otro formato. Alguien los consolida cada semana
                o cada mes, y cuando el reporte está listo ya es tarde para
                actuar sobre lo que muestra. Eso no es visibilidad. Es
                reconstruir el estado del negocio cada vez que alguien necesita
                una cifra.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={dashProblema}
                alt="Profesionales con reportes dispersos y datos contradictorios en una reunión"
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
                  src={dashSolucion}
                  shape={3}
                  alt="Consultores construyendo un tablero de KPIs a medida para una empresa"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Primero definimos qué medir. Después construimos el panel que
                lo muestre
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No empezamos por el diseño del dashboard. Empezamos por definir
                contigo cuáles son los indicadores que realmente importan para
                el negocio, cómo se calculan y desde qué fuentes de datos se
                van a alimentar. Eso determina qué se construye, no al revés.
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
              Desde la definición de indicadores hasta el panel funcionando con
              tu equipo usándolo
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

      {/* ============ EL PROBLEMA SON LOS INDICADORES ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>Criterio, no solo diseño</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Un dashboard con los indicadores equivocados muestra muchas cosas
              y no dice nada
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              La mayoría de los dashboards fracasan porque se construyeron sin
              definir primero qué información se necesita para tomar
              decisiones. El resultado es un panel lleno de gráficos que nadie
              sabe interpretar, que el equipo deja de consultar en pocas
              semanas y que no cambia nada en la forma en que el negocio opera.
            </p>
          </ScrollReveal>

          <div className="border-t border-border">
            {COMMON_ERRORS.map((err, i) => (
              <ScrollReveal key={err.title} delay={i * 80}>
                <div className="grid md:grid-cols-[auto_1fr_2fr] gap-3 md:gap-10 items-start py-7 border-b border-border">
                  <span className="font-heading font-extrabold text-sm text-primary/60 uppercase tracking-wide">
                    {err.num}
                  </span>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground flex items-center gap-2.5">
                    <err.icon className="w-5 h-5 text-primary shrink-0" strokeWidth={1.7} />
                    {err.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {err.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={150} className="text-center mt-12">
            <p className="text-sm md:text-base font-semibold text-foreground max-w-xl mx-auto">
              Por eso empezamos por la definición de indicadores, no por el
              diseño del panel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ EL DASHBOARD QUE NADIE USA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>La objeción más común</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Ya tuvimos un dashboard. Nadie lo usó después del primer mes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Es más común de lo que parece. Un dashboard que no forma parte de
              la rutina del equipo termina siendo una presentación que se
              muestra una vez y después se olvida. Por eso la capacitación y la
              definición de una rutina de uso no son un anexo del proyecto, son
              parte del entregable.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {ABANDON_REASONS.map((reason, i) => (
              <ScrollReveal key={reason.title} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-card p-7 md:p-8 h-full">
                  <span className="inline-flex w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-4">
                    <reason.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-2 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HERRAMIENTAS ============ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <PillLabel>Herramientas</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              La herramienta se elige según la fuente de datos y el equipo que
              lo va a usar
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {TOOL_CARDS.map((tool) => (
              <ScrollReveal key={tool.name}>
                <div className="rounded-xl border border-border bg-muted px-5 py-4 h-full">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">{tool.name}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100} className="text-center">
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              En todos los casos, la selección de la herramienta se define
              después de conocer las fuentes de datos y el perfil del equipo
              que va a usar el dashboard, no antes.
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
              De los datos dispersos al panel que el equipo consulta todos los
              días
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
                El resultado es un equipo que toma decisiones con información
                actualizada, sin que nadie tenga que armar el reporte
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando los indicadores están bien definidos y el panel
                conectado a las fuentes reales, el equipo deja de construir el
                panorama cada vez que lo necesita y empieza a consultarlo
                cuando necesita decidir.
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
              <ServicePhoto src={dashResultado} alt="Equipo tomando decisiones con un dashboard claro de indicadores en tiempo real" shape={2} />
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
                Primero definimos qué medir. El diseño viene después
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Antes de abrir Power BI necesitamos saber qué indicadores
                importan para el negocio, cómo se calculan, desde qué fuentes
                se alimentan y quién va a usar el dashboard para tomar qué
                decisión. Sin eso, cualquier panel es decoración.
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
              "radial-gradient(ellipse 60% 70% at 85% 50%, hsl(var(--secondary) / 0.15), transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl leading-tight mb-5">
                ¿Cuánto tiempo pierde tu equipo armando reportes que deberían
                estar disponibles solos?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre qué indicadores
                importan para tu negocio, qué fuentes de datos tienes
                disponibles y qué haría diferente tener esa información
                visible cuando la necesitas.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Primero definimos qué medir. Después construimos el panel.
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
                  src={dashCta}
                  shape={4}
                  alt="Profesional revisando los indicadores clave de su negocio en un dashboard"
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

export default DashboardsKpiServiceView;
