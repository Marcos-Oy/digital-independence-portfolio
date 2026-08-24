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
  Blocks,
  CheckCircle2,
  ClipboardList,
  Cog,
  FileSearch,
  FileStack,
  Gauge,
  Layers,
  LucideIcon,
  Network,
  Plug,
  Radar,
  RefreshCw,
  Repeat,
  ScanSearch,
  ShieldCheck,
  SplitSquareHorizontal,
  Unlink,
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
import intHero from "@/assets/services/int-hero.jpg";
import intProblema from "@/assets/services/int-problema.jpg";
import intSolucion from "@/assets/services/int-solucion.jpg";
import intResultado from "@/assets/services/int-resultado.jpg";
import intCta from "@/assets/services/int-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "Datos que viven en silos",
    desc: "Cada área tiene su versión de la verdad. Ventas ve una cifra, finanzas ve otra y operaciones ve una tercera.",
  },
  {
    num: "02",
    title: "Trabajo manual de traslado",
    desc: "Alguien exporta, copia, limpia y carga información entre sistemas que deberían sincronizarse solos.",
  },
  {
    num: "03",
    title: "Información desactualizada",
    desc: "Como los datos no fluyen en tiempo real, las decisiones se toman sobre información que ya no refleja el estado actual.",
  },
  {
    num: "04",
    title: "Integraciones improvisadas",
    desc: "Se construyeron conexiones parciales entre sistemas que nadie documentó y que se rompen cuando algo cambia.",
  },
];

const SOLUTION_CONCEPTS = [
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
    desc: "El trabajo es conectar y consolidar, no descartar la inversión tecnológica previa.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: FileSearch,
    title: "Diagnóstico de sistemas",
    items: [
      "Inventario de plataformas existentes",
      "Mapa de flujos de datos actuales",
      "Identificación de silos y duplicidades",
      "Evaluación de APIs disponibles",
      "Puntos de integración prioritarios",
      "Criterios de consolidación de datos",
    ],
  },
  {
    num: "02",
    icon: Plug,
    title: "Integración de plataformas",
    items: [
      "Conexión vía APIs nativas",
      "Middleware y conectores cuando corresponde",
      "Sincronización entre CRM, ERP, e-commerce y otras plataformas",
      "Automatización de flujos de datos entre sistemas",
      "Manejo de errores y reconexión automática",
      "Documentación de cada integración",
    ],
  },
  {
    num: "03",
    icon: FileStack,
    title: "Consolidación de datos",
    items: [
      "Diseño de la base de datos unificada",
      "Procesos de limpieza y normalización",
      "Reglas de deduplicación y calidad de datos",
      "Fuente única de verdad por entidad",
      "Trazabilidad del origen de cada dato",
      "Actualización en tiempo real o por lotes según el caso",
    ],
  },
  {
    num: "04",
    icon: Radar,
    title: "Operación y mantenimiento",
    items: [
      "Monitoreo de las integraciones activas",
      "Alertas ante errores o desconexiones",
      "Documentación técnica y operacional",
      "Gestión de cambios cuando las plataformas se actualizan",
      "Revisión periódica de flujos",
      "Soporte ante incidentes de integración",
    ],
  },
];

const MATURITY_LEVELS = [
  {
    icon: Plug,
    title: "Conexión básica",
    desc: "Las plataformas intercambian datos. Los flujos funcionan. Nadie tiene que mover información a mano.",
  },
  {
    icon: Gauge,
    title: "Datos coherentes",
    desc: "Los datos que fluyen entre sistemas están limpios, normalizados y deduplicados. No hay versiones distintas por área.",
  },
  {
    icon: FileStack,
    title: "Fuente única de verdad",
    desc: "Existe una base de datos consolidada desde la que todas las áreas consultan la misma información, actualizada y confiable.",
  },
];

interface ComparisonItem {
  icon: LucideIcon;
  text: string;
}

const FRAGILE_ITEMS: ComparisonItem[] = [
  { icon: Unlink, text: "Conexión directa entre sistemas, sin capa intermedia." },
  { icon: AlertTriangle, text: "Si cambia una plataforma, hay que rehacer la integración completa." },
  { icon: Repeat, text: "Cada cambio implica volver a intervenir todo el flujo." },
];

const SUSTAINABLE_ITEMS: ComparisonItem[] = [
  { icon: Layers, text: "Capa de integración que aísla a los sistemas entre sí." },
  { icon: Cog, text: "Cambiar una plataforma implica actualizar solo su conector." },
  { icon: ShieldCheck, text: "El resto de la arquitectura no se ve afectado." },
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico", desc: "Inventariamos los sistemas existentes, los datos que manejan y los flujos actuales entre ellos." },
  { icon: Layers, title: "Arquitectura", desc: "Diseñamos la capa de integración, la estructura de la base de datos consolidada y los flujos de sincronización." },
  { icon: Blocks, title: "Desarrollo", desc: "Construimos las integraciones vía APIs y los procesos de consolidación y limpieza de datos." },
  { icon: ScanSearch, title: "Pruebas", desc: "Validamos que los datos fluyen correctamente, que las reglas de negocio se respetan y que los errores se manejan adecuadamente." },
  { icon: Plug, title: "Implementación", desc: "Activamos las integraciones en producción con monitoreo desde el primer día." },
  { icon: RefreshCw, title: "Operación y evolución", desc: "Mantenemos las integraciones activas, gestionamos los cambios y ajustamos los flujos cuando el negocio evoluciona." },
];

const RESULT_POINTS = [
  "Plataformas conectadas que sincronizan datos automáticamente",
  "Base de datos consolidada como fuente única de verdad",
  "Datos limpios, normalizados y sin duplicidades",
  "Eliminación de tareas manuales de traslado de información",
  "Todas las áreas consultando la misma versión de los datos",
  "Integraciones documentadas y sostenibles ante cambios de plataforma",
  "Monitoreo activo de los flujos de datos",
];

const FIT_ITEMS = [
  { icon: FileStack, title: "Tu equipo exporta planillas para pasarlas de un sistema a otro." },
  { icon: SplitSquareHorizontal, title: "Ventas, finanzas y operaciones tienen versiones distintas de la misma información." },
  { icon: Unlink, title: "Ya tienes CRM, ERP u otras plataformas pero no se comunican entre sí." },
  { icon: ClipboardList, title: "Los reportes tardan más de lo necesario porque hay que consolidar datos a mano." },
  { icon: Repeat, title: "Cambiaste o quieres cambiar una plataforma y te preocupa perder el historial de datos." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Inventario primero",
    desc: "No proponemos ninguna arquitectura de integración antes de entender qué sistemas existen y qué datos manejan.",
  },
  {
    icon: RefreshCw,
    title: "Sostenibilidad",
    desc: "Diseñamos integraciones que puedan mantenerse y evolucionar cuando cambien las plataformas.",
  },
  {
    icon: Gauge,
    title: "Calidad de datos",
    desc: "Conectar sistemas no es suficiente si los datos que fluyen no son confiables.",
  },
  {
    icon: ShieldCheck,
    title: "Sin reemplazar lo que funciona",
    desc: "El trabajo es conectar la inversión tecnológica existente, no descartarla.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿Pueden integrar cualquier plataforma?",
    a: "Depende de si la plataforma expone una API o tiene mecanismos de integración disponibles. La mayoría de las plataformas empresariales modernas los tienen. El diagnóstico determina qué es posible en cada caso.",
  },
  {
    q: "¿Qué pasa con los datos históricos que ya están en los sistemas?",
    a: "Los datos históricos pueden consolidarse como parte del proceso, siempre que estén disponibles y en condiciones que permitan su limpieza y normalización. Esto se evalúa en el diagnóstico.",
  },
  {
    q: "¿Necesitamos reemplazar nuestras plataformas actuales?",
    a: "No. El servicio conecta lo que existe, no reemplaza plataformas que ya están funcionando. En algunos casos el diagnóstico puede identificar plataformas que ya no aportan valor, pero esa es una decisión del cliente.",
  },
  {
    q: "¿Qué pasa si después de integrar cambiamos una de las plataformas?",
    a: "Una integración bien diseñada tiene una capa que aísla a los sistemas entre sí. Cambiar una plataforma implica actualizar su conector, no rediseñar toda la arquitectura.",
  },
  {
    q: "¿Cuánto tiempo toma una integración?",
    a: "Depende del número de sistemas, la complejidad de los datos, las APIs disponibles y el alcance de la consolidación. No corresponde dar un plazo sin revisar el caso.",
  },
  {
    q: "¿Queda documentado lo que construyeron?",
    a: "Sí. Cada integración queda documentada: qué sistemas conecta, qué datos fluyen, cómo se manejan los errores y qué hacer cuando algo falla. Esa documentación es del cliente.",
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

const IntegracionPlataformasServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Integración de Plataformas y Bases de Datos | Independencia Digital</title>
        <meta
          name="description"
          content="Conectamos CRM, ERP, e-commerce y otras plataformas vía APIs y consolidamos datos dispersos en una base única, estructurada y confiable. Integración de sistemas para empresas en Chile."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/integracion-plataformas" />
        <meta property="og:title" content="Integración de Plataformas y Bases de Datos | Independencia Digital" />
        <meta
          property="og:description"
          content="El problema no es que te falten plataformas. Es que las que tienes no se hablan entre sí. Conectamos lo que ya tienes, no hace falta empezar de cero."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/integracion-plataformas" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={5} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
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
            <span className="text-foreground">Integración de Plataformas y Bases de Datos</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Network className="w-3.5 h-3.5" />
                Integración de Plataformas y Datos
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Tus plataformas ya existen. El problema es que no se hablan entre
                sí
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Conectamos tus sistemas existentes vía APIs y consolidamos tus
                datos dispersos en una base única, estructurada y confiable. El
                resultado: tus plataformas conversan entre sí y tus datos dejan de
                tener versiones distintas por área.
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
                  src={intHero}
                  shape={2}
                  alt="Consultores integrando plataformas y bases de datos de una empresa en una oficina luminosa"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">Conectamos lo que ya tienes</p>
                <p className="text-[11px] text-muted-foreground mt-1">APIs · Sincronización · Datos</p>
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
                Cuando las plataformas no se hablan, alguien en tu equipo está
                haciendo ese trabajo a mano
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Una empresa que ya invirtió en CRM, ERP, e-commerce y contabilidad
                debería tener información fluyendo entre esos sistemas. En cambio,
                lo que suele ocurrir es que alguien exporta un reporte, lo pega en
                una planilla, lo limpia y lo carga en otro sistema. Todos los
                días. Sin que nadie lo haya decidido así.
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
                  src={intSolucion}
                  shape={4}
                  alt="Equipo técnico conectando las plataformas empresariales de un negocio"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={3} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Conectamos lo que ya tienes. No hace falta empezar de cero
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No reemplazamos las plataformas en las que ya invertiste. Las
                conectamos entre sí mediante APIs y middleware, y consolidamos la
                información en una base de datos única y confiable. El resultado
                es que los datos fluyen solos y todas las áreas consultan la misma
                versión de la información.
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
              Desde el mapa de sistemas hasta los datos fluyendo en tiempo real
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

      {/* ============ INTEGRAR NO ES LO MISMO QUE CONECTAR ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-10 max-w-3xl mx-auto">
            <PillLabel>Niveles de integración</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Hay una diferencia entre conectar dos sistemas y hacer que sus
              datos sean confiables
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Conectar dos plataformas vía API es el primer paso. Pero si los
              datos llegan con formatos distintos, registros duplicados o reglas
              de negocio diferentes entre sistemas, la integración existe pero
              los datos siguen sin ser confiables. Ese detalle es el que define
              si la integración realmente funciona.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-border"
            />
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {MATURITY_LEVELS.map((level, i) => (
                <ScrollReveal key={level.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <level.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      {level.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                      {level.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={150} className="text-center mt-12">
            <p className="text-sm md:text-base font-semibold text-foreground max-w-xl mx-auto">
              No todas las integraciones llegan al tercer nivel. El diagnóstico
              determina cuál es el que tiene sentido para cada negocio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ QUÉ PASA CUANDO CAMBIA UNA PLATAFORMA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>La pregunta frecuente</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              ¿Qué pasa si cambiamos una plataforma después de integrarla?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Es una pregunta válida. La respuesta depende de cómo se diseñó la
              integración. Una integración bien documentada y con una capa de
              abstracción adecuada permite reemplazar una plataforma sin deshacer
              todo el trabajo. Por eso la arquitectura de la integración importa
              tanto como la integración misma.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-card p-7 md:p-8 h-full">
                <h3 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  Integración frágil
                </h3>
                <ul className="space-y-3.5">
                  {FRAGILE_ITEMS.map((it) => (
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
                    Integración sostenible
                  </h3>
                  <ul className="space-y-3.5">
                    {SUSTAINABLE_ITEMS.map((it) => (
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
              Diseñamos integraciones pensando en que los sistemas van a cambiar,
              porque siempre cambian.
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
              Del mapa de sistemas a los datos fluyendo solos
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
                El resultado es una empresa donde la información fluye sin que
                nadie tenga que moverla
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando los sistemas están integrados y los datos consolidados, las
                áreas dejan de trabajar con versiones distintas de la misma
                información y el equipo deja de perder tiempo en tareas de
                traslado que no agregan valor.
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
              <ServicePhoto src={intResultado} alt="Equipo trabajando con información unificada entre todas sus plataformas" shape={2} />
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
                Primero entendemos qué datos tienes y cómo deberían fluir.
                Después definimos cómo integrar
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No existe una arquitectura de integración estándar que funcione
                para todos los negocios. Las plataformas, los volúmenes de datos,
                las reglas de negocio y los presupuestos son distintos en cada
                caso. Por eso el diagnóstico no es un trámite, es la base sobre
                la que se diseña todo lo demás.
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
              Lo que suelen preguntarnos antes de integrar
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
                ¿Cuántas versiones distintas de la misma información tiene tu
                empresa hoy?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre qué sistemas tienes,
                cómo deberían estar conectados y qué haría diferente tener una
                base de datos única y confiable para todas las áreas.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Primero mapeamos. Después integramos.
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
                  src={intCta}
                  shape={4}
                  alt="Profesional planificando la integración de las plataformas de su negocio"
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

export default IntegracionPlataformasServiceView;
