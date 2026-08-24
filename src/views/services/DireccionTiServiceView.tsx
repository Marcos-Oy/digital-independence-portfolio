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
  Boxes,
  CheckCircle2,
  Clock,
  Compass,
  FileSearch,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  LucideIcon,
  Network,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  Target,
  UserSearch,
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
import dtHero from "@/assets/services/dt-hero.jpg";
import dtProblema from "@/assets/services/dt-problema.jpg";
import dtSolucion from "@/assets/services/dt-solucion.jpg";
import dtResultado from "@/assets/services/dt-resultado.jpg";
import dtCta from "@/assets/services/dt-cta.jpg";

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    num: "01",
    title: "Decisiones tecnológicas sin criterio",
    desc: "Se elige software, proveedores y herramientas sin una evaluación clara de lo que el negocio realmente necesita.",
  },
  {
    num: "02",
    title: "Sin roles definidos",
    desc: "Nadie sabe exactamente quién es responsable de qué en tecnología. Todo termina en la misma persona.",
  },
  {
    num: "03",
    title: "Stack sin coherencia",
    desc: "Se fueron sumando herramientas sin una lógica común. El resultado es un ecosistema que nadie entiende del todo.",
  },
  {
    num: "04",
    title: "Sin dirección para el equipo TI",
    desc: "Si ya existe un equipo técnico interno, trabaja sin una dirección estratégica que alinee sus prioridades con las del negocio.",
  },
];

const SOLUTION_CONCEPTS = [
  {
    icon: Target,
    title: "Decisiones estratégicas",
    desc: "Participamos en las decisiones tecnológicas relevantes, no solamente en la implementación.",
  },
  {
    icon: Layers,
    title: "Estructura del área",
    desc: "Definimos roles, procesos y responsabilidades para que el área TI funcione con criterio.",
  },
  {
    icon: Blocks,
    title: "Stack coherente",
    desc: "Seleccionamos y estandarizamos las herramientas que tiene sentido usar según el negocio.",
  },
  {
    icon: UserSearch,
    title: "Desarrollo del equipo",
    desc: "Si necesitas contratar talento TI interno, acompañamos el proceso de definición de perfiles y selección.",
  },
];

const INCLUDES_AREAS = [
  {
    num: "01",
    icon: Compass,
    title: "Dirección estratégica",
    items: [
      "Participación en decisiones tecnológicas del negocio",
      "Evaluación y selección de proveedores y herramientas",
      "Definición de prioridades TI alineadas con el negocio",
      "Gestión del presupuesto tecnológico",
      "Hoja de ruta tecnológica",
      "Gobierno de la función TI",
    ],
  },
  {
    num: "02",
    icon: Network,
    title: "Estructura del área",
    items: [
      "Diseño de roles y responsabilidades",
      "Definición de procesos internos del área",
      "Políticas y estándares básicos",
      "Modelo de operación TI",
      "Documentación de la función",
      "Preparación para el crecimiento del equipo",
    ],
  },
  {
    num: "03",
    icon: Boxes,
    title: "Stack tecnológico",
    items: [
      "Diagnóstico del stack actual",
      "Estandarización de herramientas",
      "Criterios de selección de tecnología",
      "Gestión de proveedores y contratos",
      "Integración entre plataformas",
      "Revisión y evolución periódica",
    ],
  },
  {
    num: "04",
    icon: UserSearch,
    title: "Talento TI",
    items: [
      "Definición de perfiles para contratación",
      "Apoyo en procesos de selección",
      "Evaluación de candidatos con criterio técnico",
      "Incorporación y alineación del equipo nuevo",
      "Estructura de reporte y coordinación",
      "Transición hacia equipo interno cuando corresponda",
    ],
  },
];

interface ComparisonItem {
  icon: LucideIcon;
  text: string;
}

const SUPPORT_ITEMS: ComparisonItem[] = [
  { icon: Clock, text: "Resuelve problemas cuando ocurren." },
  { icon: Users, text: "Responde a solicitudes del equipo." },
  { icon: Blocks, text: "Opera dentro de las decisiones que alguien más tomó." },
  { icon: Gauge, text: "Se mide por tiempo de respuesta." },
];

const DIRECTION_ITEMS: ComparisonItem[] = [
  { icon: ScanSearch, text: "Anticipa problemas antes de que ocurran." },
  { icon: Compass, text: "Define qué se debería construir, contratar o cambiar." },
  { icon: Target, text: "Participa en las decisiones tecnológicas del negocio." },
  { icon: LineChart, text: "Se mide por el impacto en la operación y el crecimiento." },
];

const EVOLUTION_STAGES = [
  {
    icon: Compass,
    title: "Dirección externa",
    desc: "El negocio tiene dirección estratégica TI sin la estructura de coste de un equipo propio.",
  },
  {
    icon: UserSearch,
    title: "Construcción del equipo",
    desc: "Cuando el volumen lo justifica, definimos los perfiles y acompañamos la contratación del primer equipo interno.",
  },
  {
    icon: GitBranch,
    title: "Transición y continuidad",
    desc: "El equipo interno asume la operación con una base sólida de procesos, roles y stack ya definidos.",
  },
];

const RETAINER_ITEMS = [
  "Sesiones de dirección y toma de decisiones estratégicas",
  "Disponibilidad para consultas y evaluaciones durante el mes",
  "Revisión y actualización de la hoja de ruta tecnológica",
  "Seguimiento de proveedores, contratos y stack",
  "Acompañamiento en decisiones de contratación cuando corresponda",
  "Revisión periódica de resultados y ajuste de prioridades",
];

const PROCESS_STEPS = [
  { icon: FileSearch, title: "Diagnóstico", desc: "Entendemos el estado actual: decisiones tomadas, herramientas en uso, roles existentes y brechas de dirección." },
  { icon: Layers, title: "Diseño del área", desc: "Definimos cómo debería estar organizada la función TI: roles, responsabilidades, procesos y stack." },
  { icon: Compass, title: "Dirección estratégica", desc: "Comenzamos a participar en las decisiones tecnológicas del negocio de forma continua." },
  { icon: Blocks, title: "Estandarización", desc: "Ordenamos el stack, los contratos, los proveedores y los procesos internos del área." },
  { icon: UserSearch, title: "Desarrollo del equipo", desc: "Si corresponde, acompañamos la definición de perfiles y la contratación del equipo TI interno." },
  { icon: RefreshCw, title: "Evolución continua", desc: "Revisamos prioridades, actualizamos la hoja de ruta y ajustamos la dirección según el crecimiento del negocio." },
];

const RESULT_POINTS = [
  "Decisiones tecnológicas tomadas con criterio estratégico",
  "Roles y responsabilidades TI claramente definidos",
  "Stack tecnológico coherente y documentado",
  "Proveedores y contratos gestionados activamente",
  "Hoja de ruta tecnológica alineada con el negocio",
  "Base sólida para construir el equipo interno cuando corresponda",
  "Dirección continua sin la estructura de coste de un CTO a tiempo completo",
];

const FIT_ITEMS = [
  { icon: ScanSearch, title: "Las decisiones tecnológicas las toma quien más sabe, no quien debería." },
  { icon: Users, title: "Tienes un equipo técnico interno pero sin dirección estratégica." },
  { icon: UserSearch, title: "Necesitas saber qué contratar antes de contratar a alguien." },
  { icon: LineChart, title: "El negocio creció y la tecnología no siguió el ritmo." },
  { icon: Compass, title: "Sabes que necesitas un CTO, pero todavía no es el momento de contratar uno a tiempo completo." },
];

const TRUST_PRINCIPLES = [
  {
    icon: FileSearch,
    title: "Conocimiento del negocio",
    desc: "La dirección tecnológica requiere entender el negocio, no solamente la tecnología.",
  },
  {
    icon: Target,
    title: "Decisiones estratégicas",
    desc: "Participamos en las decisiones que importan, no solamente en las operativas.",
  },
  {
    icon: ShieldCheck,
    title: "Independencia de proveedor",
    desc: "No representamos a ninguna plataforma ni recibimos comisiones por recomendar herramientas.",
  },
  {
    icon: GitBranch,
    title: "Transición planificada",
    desc: "El objetivo es que el negocio llegue a tener su propio equipo TI cuando el momento sea el correcto.",
  },
];

const FAQ_ITEMS = [
  {
    q: "¿En qué se diferencia esto del soporte técnico?",
    a: "El soporte técnico resuelve problemas cuando ocurren. La dirección TI toma decisiones estratégicas para que el área funcione con criterio: qué herramientas usar, cómo organizar los roles, qué contratar y cómo alinear la tecnología con el negocio.",
  },
  {
    q: "¿Pueden trabajar con el equipo técnico que ya tenemos?",
    a: "Sí. Si ya existe un equipo TI interno, la dirección externa puede complementarlo, alinearlo estratégicamente y ayudar a que trabaje con más criterio y menos improvisación.",
  },
  {
    q: "¿Qué pasa cuando el negocio está listo para contratar su propio CTO o equipo TI?",
    a: "Ese momento se planifica y acompaña. Definimos el perfil correcto, apoyamos el proceso de selección y aseguramos que el equipo interno reciba una base sólida de procesos, stack y documentación.",
  },
  {
    q: "¿Cuántas horas de dedicación incluye el servicio?",
    a: "Depende del alcance acordado. El modelo es un retainer mensual con dedicación definida según las necesidades del negocio, no un contrato de horas fijas.",
  },
  {
    q: "¿Pueden tomar decisiones de compra o contratación en nombre de la empresa?",
    a: "El rol es de asesoría y dirección estratégica. Las decisiones formales y los contratos los firma el cliente. Independencia Digital evalúa, recomienda y acompaña el proceso.",
  },
  {
    q: "¿Trabajan con cualquier tamaño de empresa?",
    a: "El servicio está diseñado para empresas en crecimiento que ya superaron la etapa donde cualquiera puede tomar las decisiones tecnológicas, pero que todavía no tienen la estructura para un Director de Tecnología a tiempo completo.",
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

const DireccionTiServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Dirección de Departamento TI y Talento | Independencia Digital</title>
        <meta
          name="description"
          content="Director de Tecnología externo para empresas en crecimiento: definición de roles, stack tecnológico, hoja de ruta y dirección estratégica continua sin contratar un CTO a tiempo completo."
        />
        <link rel="canonical" href="https://www.independenciadigital.cl/servicios/direccion-ti" />
        <meta property="og:title" content="Dirección de Departamento TI y Talento | Independencia Digital" />
        <meta
          property="og:description"
          content="Las decisiones tecnológicas de tu empresa no deberían depender de quien más sabe de computadores en la oficina. Actuamos como tu Director de Tecnología externo."
        />
        <meta property="og:url" content="https://www.independenciadigital.cl/servicios/direccion-ti" />
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
                <Compass className="w-3.5 h-3.5" />
                Dirección TI · Estrategia y Talento
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Tu empresa ya necesita dirección tecnológica. Contratar un CTO a
                tiempo completo todavía no
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Actuamos como tu Director de Tecnología externo: definimos roles,
                procesos y stack tecnológico, y tomamos decisiones estratégicas
                contigo de forma continua. Incluyendo apoyo si necesitas construir
                tu primer equipo TI interno.
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
                  src={dtHero}
                  shape={6}
                  alt="Líder tecnológico presentando la estrategia TI de una empresa en una sala moderna y luminosa"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
                <AccentBlob shape={2} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
              </div>
              <div className="absolute -right-3 top-10 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-sm text-foreground leading-none">No es soporte. Es dirección.</p>
                <p className="text-[11px] text-muted-foreground mt-1">Estrategia · Stack · Talento</p>
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
                Hay un momento en que las decisiones tecnológicas superan a quien
                las está tomando
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                En muchas empresas en crecimiento, las decisiones tecnológicas las
                toma quien más sabe de computadores, quien llegó primero, o quien
                tuvo tiempo de ocuparse de eso. Funciona hasta que deja de
                funcionar: cuando el negocio crece, cuando algo falla o cuando hay
                que tomar una decisión que nadie sabe muy bien cómo evaluar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={dtProblema}
                alt="Equipo de empresa discutiendo decisiones tecnológicas sin una dirección clara"
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
                  src={dtSolucion}
                  shape={4}
                  alt="Director de tecnología fraccional guiando al equipo en una reunión estratégica"
                  className="w-full aspect-[4/3] shadow-card-hover"
                />
                <RingLoop color="primary" className="absolute -bottom-2 -right-2 w-24 h-24" />
                <AccentBlob shape={5} className="absolute top-6 right-2 w-8 h-6 opacity-80" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <PillLabel>La solución</PillLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
                Dirección tecnológica continua, sin la estructura de coste de un
                CTO a tiempo completo
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9">
                No enviamos un técnico a resolver tickets. Actuamos como tu
                Director de Tecnología: tomamos decisiones estratégicas contigo,
                definimos cómo debe estar organizado el área TI, establecemos el
                stack que tiene sentido para el negocio y acompañamos el
                crecimiento del equipo cuando llega el momento.
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
              Todo lo que necesita un área TI para funcionar con dirección real
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

      {/* ============ DIRECCIÓN, NO SOPORTE ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>La diferencia</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Esto no es soporte técnico. Es dirección
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Existe una diferencia fundamental entre resolver un problema
              técnico cuando ocurre y tomar decisiones estratégicas para que los
              problemas no ocurran. Hacemos lo segundo.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-muted/50 p-7 md:p-8 h-full">
                <h3 className="font-heading font-extrabold text-sm uppercase tracking-[0.14em] text-muted-foreground mb-5">
                  Soporte técnico
                </h3>
                <ul className="space-y-3.5">
                  {SUPPORT_ITEMS.map((it) => (
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
                    Dirección estratégica TI
                  </h3>
                  <ul className="space-y-3.5">
                    {DIRECTION_ITEMS.map((it) => (
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
              Si tu empresa ya tiene soporte técnico pero le falta dirección, ese
              es exactamente el espacio en que trabajamos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CUANDO EL EQUIPO INTERNO TIENE SENTIDO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-14 max-w-3xl mx-auto">
            <PillLabel>El camino hacia la madurez</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
              Llegará el momento en que necesites tu propio equipo TI
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              No todos los negocios necesitan construir un equipo tecnológico
              interno de inmediato. Pero cuando ese momento llegue, necesitan
              saber qué perfil contratar, cómo evaluarlo y cómo integrarlo.
              Acompañamos ese proceso para que la primera contratación TI sea la
              correcta.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-border"
            />
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {EVOLUTION_STAGES.map((stage, i) => (
                <ScrollReveal key={stage.title} delay={i * 90}>
                  <div className="relative text-center">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-card border border-border items-center justify-center mb-5 shadow-card">
                      <stage.icon className="w-6 h-6 text-primary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 uppercase tracking-wide">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
                      {stage.desc}
                    </p>
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
              Un servicio continuo, no una consultoría puntual
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-9 max-w-2xl mx-auto">
              La dirección tecnológica no funciona como un proyecto que termina.
              Requiere presencia continua, conocimiento acumulado del negocio y
              capacidad de tomar decisiones a medida que el contexto cambia. El
              servicio se estructura como un retainer mensual.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-left max-w-xl mx-auto mb-10">
              {RETAINER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
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
              Del vacío de dirección a un área TI que funciona con criterio
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
                El resultado es un área TI con dirección, no con improvisación
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Cuando la función tecnológica tiene dirección real, las
                decisiones se toman con criterio, el stack tiene coherencia, los
                roles están claros y el negocio puede crecer sin que la
                tecnología sea el cuello de botella.
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
              <ServicePhoto src={dtResultado} alt="Equipo directivo avanzando con una hoja de ruta tecnológica clara" shape={2} />
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
                No gestionamos tickets. Gestionamos decisiones
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Para que la dirección tecnológica funcione necesitamos conocer el
                negocio, entender cómo opera, saber qué prioridades tiene y tener
                la información suficiente para recomendar con criterio. Por eso el
                servicio es continuo y no puntual.
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
                ¿Quién está tomando las decisiones tecnológicas de tu empresa?
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico y conversemos sobre cómo está organizada la
                función TI de tu negocio, qué decisiones están pendientes y qué
                haría diferente una dirección estratégica real.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico" inverse />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Evaluamos primero. Definimos el alcance después.
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
                  src={dtCta}
                  shape={4}
                  alt="Profesional agendando una sesión de dirección tecnológica estratégica"
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

export default DireccionTiServiceView;
