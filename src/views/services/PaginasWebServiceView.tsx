import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import presenciaDigitalMockup from "@/assets/services/presencia-digital.jpg";
import banerOficina from "@/assets/banner-servicios-extra.png";
import {
  Search,
  Smartphone,
  Gauge,
  Link2,
  Palette,
  MousePointerClick,
  Compass,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  X,
  ChevronDown,
  Target,
  Wrench,
  ArrowRight,
  FileSearch,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
  Building2,
  Sparkles,
  Handshake,
} from "lucide-react";

const CtaButton = ({ label, className = "" }: { label: string; className?: string }) => (
  <button
    className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-2.5 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 ${className}`}
  >
    {label}
    <ArrowRight className="w-4 h-4" />
  </button>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
    <span className="w-4 h-px bg-secondary" />
    {children}
  </p>
);

/** Mockup de navegador construido en CSS (sin depender de una captura de
 * pantalla real), para no repetir la misma foto en varias secciones. */
const BrowserMockup = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-xl border border-border bg-card shadow-card-hover overflow-hidden ${className}`}>
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted">
      <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
      <span className="w-2.5 h-2.5 rounded-full bg-primary/50" />
      <div className="ml-3 flex-1 h-5 rounded-full bg-background border border-border flex items-center px-3">
        <span className="text-[10px] text-muted-foreground font-mono truncate">tuempresa.cl</span>
      </div>
    </div>
    <div className="p-5 space-y-4">
      <div className="h-3 w-2/3 rounded-full gradient-brand opacity-90" />
      <div className="space-y-1.5">
        <div className="h-2 w-full rounded-full bg-muted" />
        <div className="h-2 w-5/6 rounded-full bg-muted" />
      </div>
      <div className="h-7 w-28 rounded-lg gradient-brand" />
      <div className="grid grid-cols-3 gap-2 pt-2">
        <div className="h-12 rounded-lg bg-muted" />
        <div className="h-12 rounded-lg bg-muted" />
        <div className="h-12 rounded-lg bg-muted" />
      </div>
    </div>
  </div>
);

/** Mockup de celular en CSS, para acompañar el navegador en composiciones. */
const PhoneMockup = ({ className = "" }: { className?: string }) => (
  <div className={`rounded-[1.75rem] border-[6px] border-foreground/90 bg-card shadow-card-hover overflow-hidden ${className}`}>
    <div className="p-3.5 space-y-3">
      <div className="h-2.5 w-1/2 rounded-full gradient-brand opacity-90" />
      <div className="space-y-1">
        <div className="h-1.5 w-full rounded-full bg-muted" />
        <div className="h-1.5 w-4/5 rounded-full bg-muted" />
      </div>
      <div className="h-16 rounded-lg bg-muted" />
      <div className="h-5 w-16 rounded-md gradient-brand" />
    </div>
  </div>
);

/** Sparkline ascendente simple, sin cifras inventadas: solo comunica
 * tendencia al alza. */
const GrowthSparkline = () => (
  <svg viewBox="0 0 120 48" className="w-full h-12" preserveAspectRatio="none">
    <polyline
      points="0,40 20,34 40,36 60,22 80,24 100,10 120,6"
      fill="none"
      stroke="hsl(var(--secondary))"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PROBLEMS = [
  { icon: Search, title: "No apareces cuando te buscan", desc: "Tus clientes potenciales escriben lo que ofreces en Google, y encuentran primero a tu competencia." },
  { icon: ShieldCheck, title: "Tu sitio no transmite confianza", desc: "Un diseño anticuado o lento hace dudar antes de escribirte, aunque tu servicio sea excelente." },
  { icon: MousePointerClick, title: "Recibes visitas, pero no oportunidades", desc: "La gente entra, mira y se va, porque nada en la página la guía a dar el siguiente paso." },
];

const SOLUTION_POINTS = [
  { icon: Palette, label: "Diseño profesional" },
  { icon: Compass, label: "Experiencia de usuario" },
  { icon: Search, label: "SEO técnico" },
  { icon: TrendingUp, label: "Optimización para buscadores" },
  { icon: MousePointerClick, label: "Llamadas a la acción" },
  { icon: Link2, label: "Integraciones digitales" },
  { icon: Gauge, label: "Rendimiento" },
  { icon: Smartphone, label: "Adaptación móvil" },
];

const COVERAGE_AREAS = [
  {
    n: "01",
    icon: Code2,
    title: "Desarrollo Web",
    desc: "La base técnica de tu sitio, construida para verse bien y funcionar en cualquier dispositivo.",
    items: [
      "Sitios corporativos y landing pages",
      "Portafolios profesionales",
      "Diseño responsive",
      "Formularios y WhatsApp",
      "Google Maps e integraciones",
      "Arquitectura de navegación",
    ],
  },
  {
    n: "02",
    icon: Search,
    title: "Posicionamiento SEO",
    desc: "Que Google entienda tu sitio y lo muestre cuando alguien busca lo que ofreces.",
    items: [
      "SEO técnico desde el inicio",
      "Estructura de contenidos",
      "Meta títulos y descripciones",
      "URLs optimizadas",
      "Google Search Console",
      "Velocidad, rendimiento e indexación",
    ],
  },
  {
    n: "03",
    icon: Target,
    title: "Conversión",
    desc: "Que la visita se convierta en un contacto real, no en una salida silenciosa.",
    items: [
      "Arquitectura orientada a objetivos",
      "Llamadas a la acción estratégicas",
      "Formularios estratégicos",
      "Recorrido del usuario",
      "Elementos de confianza",
      "Experiencia mobile-first",
    ],
  },
];

const COMPARISON_TRADITIONAL = [
  "Existe en internet",
  "Espera que alguien la encuentre",
  "Presenta información",
  "Depende del visitante",
];

const COMPARISON_STRATEGIC = [
  "Está optimizada para buscadores",
  "Facilita que te encuentren",
  "Construye confianza",
  "Orienta al usuario",
  "Genera oportunidades",
];

const PROCESS_STEPS = [
  { n: "01", icon: FileSearch, title: "Diagnóstico", desc: "Analizamos tu negocio, público objetivo y competencia." },
  { n: "02", icon: ClipboardList, title: "Arquitectura", desc: "Definimos la estructura y el recorrido ideal del usuario." },
  { n: "03", icon: PenTool, title: "Diseño", desc: "Creamos una interfaz alineada con tu marca y objetivos." },
  { n: "04", icon: Code2, title: "Desarrollo", desc: "Construimos tu sitio con tecnologías modernas y seguras." },
  { n: "05", icon: Search, title: "SEO técnico", desc: "Optimizamos tu sitio para que Google pueda encontrarlo." },
  { n: "06", icon: Rocket, title: "Publicación", desc: "Puesta en marcha, pruebas y revisión final para asegurar calidad." },
];

const RESULT_ITEMS = [
  "Mayor visibilidad en Google",
  "Mejor experiencia para tus usuarios",
  "Mayor confianza y credibilidad",
  "Más oportunidades comerciales",
  "Sitio preparado para dispositivos móviles",
  "Base digital lista para futuras campañas",
];

const FOR_YOU = [
  { icon: Building2, text: "Necesitas una presencia digital profesional." },
  { icon: Rocket, text: "Quieres captar clientes desde internet." },
  { icon: Wrench, text: "Tu página actual está desactualizada." },
  { icon: TrendingUp, text: "Quieres mejorar tu visibilidad en Google." },
];

const PRINCIPLES = [
  { icon: Compass, title: "Estrategia", desc: "Cada proyecto parte desde los objetivos reales de tu negocio, no desde una plantilla." },
  { icon: Wrench, title: "Tecnología", desc: "Usamos las herramientas adecuadas para cada necesidad, no las más de moda." },
  { icon: Sparkles, title: "Resultados", desc: "La tecnología debe cumplir una función concreta dentro de tu negocio, siempre." },
];

const FAQ_ITEMS = [
  { q: "¿Qué diferencia existe entre una página web y una landing page?", a: "Un sitio web corporativo presenta tu negocio en varias secciones (servicios, nosotros, contacto). Una landing page está enfocada en un solo objetivo, por ejemplo captar contactos para una campaña puntual. Te ayudamos a definir cuál corresponde a tu caso." },
  { q: "¿El servicio incluye posicionamiento en Google?", a: "Sí. El SEO técnico va incluido desde el diseño del sitio, no como un servicio aparte que se cobra después: estructura, velocidad, metaetiquetas y Google Search Console quedan configurados desde el inicio." },
  { q: "¿Cuánto tiempo toma desarrollar una página?", a: "Depende del alcance del proyecto. En el diagnóstico inicial te damos un plazo real para tu caso, según si es un sitio corporativo, una landing page o un portafolio." },
  { q: "¿Pueden trabajar sobre una página web existente?", a: "Sí. Podemos rediseñar, optimizar o hacer SEO técnico sobre un sitio que ya tienes, sin necesidad de partir de cero." },
  { q: "¿Pueden integrar WhatsApp, formularios, mapas u otras herramientas?", a: "Sí, son parte estándar del servicio: WhatsApp, formularios de contacto, Google Maps y otras integraciones según lo que tu negocio necesite." },
  { q: "¿Cómo comienza el proyecto?", a: "Agendas un diagnóstico sin costo. Ahí revisamos tu situación actual y te proponemos el alcance y los tiempos reales para tu caso." },
];

const PaginasWebServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* Hero */}
      <section className="gradient-hero relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">Creación y Posicionamiento de Páginas Web</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 bg-card border border-border text-[11px] font-semibold uppercase tracking-[0.15em] text-secondary px-3.5 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3 h-3" /> Desarrollo Web + SEO
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-5 leading-[1.05] tracking-tight">
                Creación y Posicionamiento de Páginas Web
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-9 leading-relaxed">
                Diseñamos sitios profesionales que se hacen visibles, generan confianza y convierten visitantes en oportunidades.
              </p>
              <div className="flex flex-wrap gap-3">
                <CtaButton label="Agendar diagnóstico" />
                <a
                  href="#proceso"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver cómo trabajamos
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} variant="scale" className="relative">
              <div className="absolute -inset-8 gradient-brand opacity-15 blur-3xl rounded-full" aria-hidden="true" />
              <div className="relative rounded-2xl overflow-hidden shadow-brand border border-border/50">
                <img
                  src={presenciaDigitalMockup}
                  alt="Sitio web profesional mostrado en laptop y celular, con diseño responsive"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl px-4 py-3 shadow-card-hover flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold">Visibilidad</p>
                  <p className="text-xs font-bold text-foreground">Optimizada para SEO</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="bg-card border border-border rounded-2xl p-7 shadow-card max-w-sm">
                <div className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2.5 mb-5">
                  <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-muted-foreground truncate">servicio que ofreces + tu ciudad</span>
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 w-3/4 rounded-full bg-muted" />
                  <div className="h-2 w-full rounded-full bg-muted/60" />
                  <div className="h-2 w-5/6 rounded-full bg-muted/60" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-destructive/40 flex items-center justify-center mt-5 mx-auto">
                  <X className="w-4 h-4 text-destructive/60" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80} className="order-1 lg:order-2">
              <Eyebrow>El problema</Eyebrow>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-4 leading-tight">
                Tu empresa puede estar perdiendo oportunidades antes de que alguien te contacte.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-9 max-w-lg">
                Una página lenta, desactualizada o que no aparece cuando tus clientes buscan tus servicios puede hacer que las oportunidades terminen en manos de tu competencia.
              </p>
              <div className="space-y-6">
                {PROBLEMS.map((p) => (
                  <div key={p.title} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <p.icon className="w-[18px] h-[18px] text-destructive/80" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-0.5">{p.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* La solución */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="scale">
              <BrowserMockup className="max-w-md" />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <Eyebrow>La solución</Eyebrow>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-4 leading-tight">
                Desarrollo web + SEO + conversión
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-9 max-w-lg">
                No diseñamos sitios solamente para que se vean bien. Construimos plataformas digitales pensadas para atraer, convencer y convertir.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {SOLUTION_POINTS.map((s) => (
                  <div key={s.label} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-4 h-4 text-secondary" />
                    </span>
                    <span className="text-foreground text-sm font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>
              <span className="mx-auto">¿Qué incluye?</span>
            </Eyebrow>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight">
              Todo lo que necesitas para tener una presencia digital que trabaje por tu negocio.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {COVERAGE_AREAS.map((area, i) => (
              <ScrollReveal key={area.n} delay={i * 80} variant="scale">
                <div className="h-full flex flex-col">
                  <span className="font-heading font-extrabold text-5xl text-border leading-none block mb-4 select-none">
                    {area.n}
                  </span>
                  <span className="inline-flex w-12 h-12 rounded-xl gradient-brand items-center justify-center mb-5">
                    <area.icon className="w-6 h-6 text-primary-foreground" />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{area.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {area.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 text-sm">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* No es solo una página web */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-2 leading-tight">
              Una página web es solo el comienzo.
            </h2>
            <p className="text-lg text-secondary font-heading font-semibold">
              Lo importante es qué ocurre después.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-6">
                  Página web tradicional
                </p>
                <ul className="space-y-4">
                  {COMPARISON_TRADITIONAL.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full gradient-brand items-center justify-center text-primary-foreground text-[11px] font-bold z-10 shadow-brand">
              VS
            </div>
            <ScrollReveal delay={80}>
              <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 h-full shadow-card-hover">
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-6">
                  Presencia digital estratégica
                </p>
                <ul className="space-y-4">
                  {COMPARISON_STRATEGIC.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm font-medium">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>
              <span className="mx-auto text-primary">Nuestro proceso</span>
            </Eyebrow>
            <h2 className="font-heading font-bold text-2xl md:text-4xl leading-tight">
              Un proceso claro, desde la estrategia hasta la publicación.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 60} variant="scale" className="text-center">
                <div className="w-14 h-14 rounded-full bg-background/10 border border-background/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-[11px] font-mono text-primary mb-1.5">{step.n}</p>
                <p className="font-heading font-bold text-sm mb-1.5">{step.title}</p>
                <p className="text-background/60 text-xs leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultado */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <Eyebrow>El resultado</Eyebrow>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-8 leading-tight">
                Una presencia digital preparada para crecer.
              </h2>
              <ul className="space-y-3.5">
                {RESULT_ITEMS.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm md:text-base">{it}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100} variant="scale" className="relative">
              <BrowserMockup className="max-w-sm ml-auto" />
              <PhoneMockup className="absolute -bottom-8 -left-4 w-28 shadow-brand hidden sm:block" />
              <div className="absolute -top-6 -right-2 bg-card border border-border rounded-xl px-4 py-3 shadow-card-hover w-36">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold mb-1">Tráfico orgánico</p>
                <GrowthSparkline />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>
              <span className="mx-auto">¿Para quién es este servicio?</span>
            </Eyebrow>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight">
              Este servicio es para ti si…
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {FOR_YOU.map((f, i) => (
              <ScrollReveal key={f.text} delay={i * 60} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-sm font-medium leading-relaxed">{f.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>
              <span className="mx-auto">Independencia Digital</span>
            </Eyebrow>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-4 leading-tight">
              No construimos tecnología por construirla.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Primero entendemos tu negocio. Luego definimos qué necesitas realmente y construimos una solución alineada con tus objetivos.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {PRINCIPLES.map((p) => (
              <ScrollReveal key={p.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="font-heading font-bold text-foreground text-sm mb-2 uppercase tracking-wide">{p.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="mb-10 text-center">
            <Eyebrow>
              <span className="mx-auto">Preguntas frecuentes</span>
            </Eyebrow>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Dudas habituales sobre este servicio
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {FAQ_ITEMS.map((f) => (
              <ScrollReveal key={f.q}>
                <details className="group bg-card border border-border rounded-xl p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-foreground text-sm md:text-base">
                    {f.q}
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">{f.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-20 md:py-28 gradient-brand overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src={banerOficina} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center max-w-5xl mx-auto">
            <ScrollReveal variant="scale">
              <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                Tu próxima página web debería hacer más que verse bien.
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
                Agenda un diagnóstico y conversemos sobre cómo transformar tu presencia digital en una herramienta para generar oportunidades.
              </p>
              <button
                className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-2.5 bg-background text-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:opacity-90 active:scale-[0.97] transition-all duration-200`}
              >
                Agendar diagnóstico
                <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollReveal>
            <ScrollReveal delay={100} variant="scale" className="hidden lg:flex justify-center">
              <div className="w-40 h-40 rounded-3xl bg-background/10 border border-background/20 backdrop-blur-sm flex items-center justify-center">
                <Handshake className="w-16 h-16 text-primary-foreground" strokeWidth={1.3} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default PaginasWebServiceView;
