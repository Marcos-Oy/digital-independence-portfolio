import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import {
  CheckCircle2,
  ChevronDown,
  Search,
  Megaphone,
  TrendingUp,
  Smartphone,
  MapPin,
  Gauge,
  XCircle,
  ClipboardList,
  Palette,
  Code2,
  Settings,
  Rocket,
  LifeBuoy,
  Compass,
  Lock,
  Sparkles,
} from "lucide-react";
import { getServiceBySlug, MODALITY_LABELS, MODALITY_COLORS } from "@/models/services";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import webHeroDevices from "@/assets/services/web-resultado-devices.jpg";
import webProblemaBusqueda from "@/assets/services/web-problema-busqueda.jpg";
import webSolucionLaptop from "@/assets/services/web-solucion-laptop.jpg";
import webResultadoCrecimiento from "@/assets/services/web-resultado-crecimiento.jpg";
import webCtaProfesional from "@/assets/services/web-cta-profesional.jpg";

const service = getServiceBySlug("presencia-digital")!;

/* ------------------------------ content ------------------------------ */

const PROBLEMS = [
  {
    badge: "Invisibilidad",
    title: "Tu negocio no aparece cuando te buscan",
    desc: "Tus potenciales clientes te buscan en Google y no te encuentran. Si no estás en los primeros resultados, simplemente no existes para ellos.",
  },
  {
    badge: "Desconfianza",
    title: "Tu presencia digital no genera confianza",
    desc: "Tienes una página desactualizada, lenta o improvisada que espanta clientes en lugar de atraerlos. La primera impresión digital lo es todo.",
  },
  {
    badge: "Dependencia",
    title: "Dependes 100% del boca a boca",
    desc: "Tu flujo de clientes es impredecible. No tienes un canal digital que trabaje por ti las 24 horas del día, los 7 días de la semana.",
  },
];

const SOLUTION_BULLETS = [
  {
    icon: Search,
    title: "Optimizada para buscadores",
    desc: "Cada página está construida con las mejores prácticas de SEO técnico y de contenido para que Google te encuentre.",
  },
  {
    icon: Smartphone,
    title: "Perfecta en todos los dispositivos",
    desc: "Diseño responsive que se adapta a móviles, tablets y computadores sin perder calidad ni funcionalidad.",
  },
  {
    icon: MapPin,
    title: "SEO local incluido",
    desc: "Optimización para búsquedas locales y Google Maps. Tus clientes cercanos te encontrarán primero.",
  },
  {
    icon: Gauge,
    title: "Rendimiento garantizado",
    desc: "Velocidad de carga optimizada. Una web rápida retiene visitantes y mejora tu posicionamiento.",
  },
];

const COVERAGE_AREAS = [
  {
    number: "01",
    kicker: "Cimientos",
    title: "Diseño y desarrollo web profesional",
    desc: "Una web que representa la calidad de tu negocio.",
    items: [
      "Diseño personalizado (sin plantillas genéricas)",
      "Desarrollo responsive (móvil, tablet, escritorio)",
      "Optimización de velocidad de carga",
      "Certificado SSL y seguridad web",
      "Integración con formularios de contacto",
    ],
  },
  {
    number: "02",
    kicker: "Visibilidad",
    title: "Posicionamiento SEO estratégico",
    desc: "Aparece cuando tus clientes te buscan.",
    items: [
      "Investigación de palabras clave de tu industria",
      "Optimización on-page completa",
      "SEO técnico (sitemap, robots, estructura)",
      "SEO local y Google Business Profile",
      "Estrategia de contenidos orientada a buscadores",
    ],
  },
  {
    number: "03",
    kicker: "Crecimiento",
    title: "Estrategia de crecimiento continuo",
    desc: "Tu web como herramienta de ventas activa.",
    items: [
      "Analítica web y medición de resultados",
      "Optimización de conversión (CRO)",
      "Actualizaciones y mejoras continuas",
      "Soporte técnico y mantenimiento",
      "Reportes mensuales de rendimiento",
    ],
  },
];

const GENERIC_PROBLEMS = [
  "No están pensadas para vender ni generar confianza",
  "Sin optimización para buscadores (SEO)",
  "No consideran la experiencia en dispositivos móviles",
  "Se ven iguales a miles de sitios más",
  "Abandonadas después de la entrega",
];

const PROFESSIONAL_BENEFITS = [
  "Diseño enfocado en convertir visitantes en clientes",
  "SEO integrado desde la estructura base",
  "Experiencia perfecta en todos los dispositivos",
  "Identidad única que diferencia tu marca",
  "Acompañamiento y mejora continua",
];

const PROCESS_STEPS = [
  { icon: ClipboardList, title: "Diagnóstico", desc: "Entendemos tu negocio, tus clientes y tus objetivos." },
  { icon: Palette, title: "Diseño estratégico", desc: "Creamos una propuesta visual alineada con tu marca." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos tu web con código limpio y optimizado." },
  { icon: Settings, title: "Optimización SEO", desc: "Configuramos todo para que Google te posicione." },
  { icon: Rocket, title: "Lanzamiento", desc: "Publicamos tu sitio y configuramos las analíticas." },
  { icon: LifeBuoy, title: "Acompañamiento", desc: "Te apoyamos con mejoras y soporte continuo." },
];

const RESULT_POINTS = [
  "Aparecer en Google cuando tus clientes buscan tus servicios",
  "Generar confianza inmediata con una imagen profesional y moderna",
  "Recibir consultas de clientes potenciales de forma constante",
  "Tener un canal de ventas que trabaja por ti las 24 horas",
];

const RESULT_STATS = [
  { value: "3x", label: "más visibilidad" },
  { value: "24/7", label: "canal activo" },
  { value: "100%", label: "medible" },
];

const FIT_ITEMS = [
  {
    title: "Emprendedores",
    desc: "Que necesitan establecer su presencia digital desde cero con una base sólida.",
  },
  {
    title: "Profesionales independientes",
    desc: "Que buscan generar confianza y captar clientes de forma constante por internet.",
  },
  {
    title: "PyMEs establecidas",
    desc: "Que quieren profesionalizar su imagen y competir en el mundo digital.",
  },
  {
    title: "Negocios locales",
    desc: "Que necesitan ser encontrados por clientes de su zona en Google Maps y buscadores.",
  },
];

const TRUST_PRINCIPLES = [
  { icon: Compass, title: "Estrategia primero", desc: "No hacemos páginas por hacer. Cada elemento tiene un propósito estratégico." },
  { icon: Lock, title: "Tecnología confiable", desc: "Usamos herramientas probadas y seguras. Tu web estará en buenas manos." },
  { icon: Sparkles, title: "Diseño que inspira confianza", desc: "Cada detalle está pensado para transmitir profesionalismo y credibilidad." },
];

const FALLBACK_FAQS: ServiceFaq[] = [
  { q: "¿Cuánto tiempo toma crear mi página web?", a: "Dependiendo de la complejidad, entre 2 y 6 semanas. En el diagnóstico te damos un cronograma específico." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Nos encargamos de todo: diseño, desarrollo, contenido, SEO y mantenimiento." },
  { q: "¿Puedo actualizar el contenido yo mismo?", a: "Sí. Te entregamos capacitación para que puedas hacer cambios básicos, o lo hacemos por ti." },
  { q: "¿El posicionamiento en Google es inmediato?", a: "El SEO toma entre 3 y 6 meses en mostrar resultados sólidos, pero la web está optimizada desde el día 1." },
  { q: "¿Qué pasa si ya tengo una página web?", a: "Podemos rediseñarla completamente o mejorarla según lo que necesite. Primero hacemos un diagnóstico gratuito." },
  { q: "¿Incluye el dominio y hosting?", a: "Te asesoramos en la compra y configuración de ambos. Tú eres el dueño de todo desde el primer día." },
];

/* ------------------------------ ui atoms ------------------------------ */

const CtaButton = ({ label, href }: { label: string; href?: string }) => {
  const cls =
    "inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
        <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
      </a>
    );
  }
  return (
    <button className={`${SYSTEME_TRIGGER_CLASS} ${cls}`}>
      {label}
      <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
    </button>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3">
    {children}
  </p>
);

const FramedImage = ({
  src,
  alt,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <div
      aria-hidden="true"
      className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/15 to-transparent blur-2xl"
    />
    <img
      src={src}
      alt={alt}
      width={1024}
      height={768}
      loading={eager ? "eager" : "lazy"}
      className="relative w-full rounded-3xl border border-border object-cover shadow-soft"
    />
  </div>
);

/* ------------------------------ view ------------------------------ */

const PaginasWebServiceView = () => {
  const faqs = SERVICE_FAQS[service.slug] ?? FALLBACK_FAQS;

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--primary) / 0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-secondary/15 blur-[140px] pointer-events-none"
        />
        <div className="relative container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/25 px-4 py-2 rounded-full mb-6">
                <Search className="w-3.5 h-3.5" />
                Presencia digital profesional
              </span>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-5 leading-[1.12] tracking-tight">
                Creación y posicionamiento de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  páginas web
                </span>{" "}
                que generan clientes
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-xl">
                Diseñamos páginas web profesionales, optimizadas para buscadores y pensadas
                para que tu negocio sea encontrado, elegido y contactado.
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-9">
                {["Optimizada para Google", "Diseño responsive", "SEO local incluido"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <CtaButton label="Agendar diagnóstico" />
                <a
                  href="#cobertura"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver cobertura
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <FramedImage
                src={webHeroDevices}
                alt="Sitio web corporativo profesional mostrado en laptop y smartphone con gráfico de crecimiento"
                eager
              />
              <div className="absolute -left-3 top-8 md:-left-6 flex items-center gap-2 bg-card border border-border rounded-xl px-3.5 py-2.5 shadow-soft">
                <Search className="w-4 h-4 text-primary" />
                <div>
                  <p className="font-heading font-extrabold text-sm text-foreground leading-none">Top 3</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">en Google</p>
                </div>
              </div>
              <div className="absolute -right-3 bottom-8 md:-right-5 flex items-center gap-2 bg-card border border-border rounded-xl px-3.5 py-2.5 shadow-soft">
                <TrendingUp className="w-4 h-4 text-secondary" />
                <div>
                  <p className="font-heading font-extrabold text-sm text-foreground leading-none">+ Clientes</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">cada mes</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ EL PROBLEMA ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel>El problema</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-4">
              Si tu negocio no aparece en Google, estás perdiendo clientes todos los días
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hoy, el 97% de los consumidores busca productos y servicios en internet antes de
              comprar. Si tu negocio no tiene una presencia digital profesional, estás entregando
              clientes a tu competencia.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal variant="scale">
              <FramedImage
                src={webProblemaBusqueda}
                alt="Empresario buscando su negocio en Google sin encontrarlo"
              />
            </ScrollReveal>
            <div className="space-y-5">
              {PROBLEMS.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 70}>
                  <div className="flex gap-4 bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-secondary/40 transition-colors">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-secondary/10 items-center justify-center shrink-0">
                      <XCircle className="w-5 h-5 text-secondary" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-heading font-bold text-base md:text-lg text-foreground">{p.title}</h3>
                        <span className="text-[9px] font-heading font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LA SOLUCIÓN ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <SectionLabel>La solución</SectionLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-5 leading-tight">
                Una página web profesional optimizada para vender y posicionar
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                No hacemos páginas web genéricas. Creamos activos digitales estratégicos que
                combinan diseño profesional, optimización para buscadores y una estructura
                pensada para convertir visitas en clientes reales.
              </p>
              <ul className="space-y-6">
                {SOLUTION_BULLETS.map((b, i) => (
                  <ScrollReveal key={b.title} delay={i * 60} as="li">
                    <div className="flex gap-4">
                      <span className="inline-flex w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 items-center justify-center shrink-0">
                        <b.icon className="w-5 h-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-heading font-bold text-base text-foreground mb-1">{b.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100} variant="scale">
              <FramedImage
                src={webSolucionLaptop}
                alt="Laptop mostrando un sitio web corporativo profesional con diseño azul"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ COBERTURA ============ */}
      <section id="cobertura" className="py-16 md:py-24 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Cobertura</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-3">
              Todo lo que incluye este servicio
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Tres pilares que trabajan juntos para que tu presencia digital sea completa.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {COVERAGE_AREAS.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 80} variant="scale">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-7 h-full flex flex-col hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-heading font-extrabold text-3xl text-primary/25 leading-none select-none">
                      {area.number}
                    </span>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {area.kicker}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-1.5 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">{area.desc}</p>
                  <ul className="space-y-2.5 mt-auto">
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

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {service.modality.map((m) => (
              <span
                key={m}
                className={`text-[10px] font-semibold px-3 py-1 rounded-full border ${MODALITY_COLORS[m]}`}
              >
                {MODALITY_LABELS[m]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARACIÓN ESTRATÉGICA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Comparación estratégica</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              La diferencia entre tener una web y tener una presencia digital estratégica
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative grid md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto">
              <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full gradient-brand text-primary-foreground font-heading font-extrabold text-sm items-center justify-center shadow-brand">
                VS
              </span>

              <div className="bg-card border border-border rounded-2xl p-7 md:p-8">
                <p className="text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  Lo que solemos ver
                </p>
                <h3 className="font-heading font-bold text-lg text-foreground mb-6">
                  Páginas web genéricas
                </h3>
                <ul className="space-y-4">
                  {GENERIC_PROBLEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                      <XCircle className="w-5 h-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-card border-2 border-primary/30 rounded-2xl p-7 md:p-8 shadow-brand overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <span className="inline-block text-[10px] font-heading font-bold uppercase tracking-widest text-primary-foreground gradient-brand px-3 py-1 rounded-full mb-4">
                  Nuestro enfoque
                </span>
                <h3 className="font-heading font-bold text-lg text-foreground mb-6">
                  Presencia digital profesional
                </h3>
                <ul className="space-y-4">
                  {PROFESSIONAL_BENEFITS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-3">Proceso</p>
            <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">
              Un proceso claro y probado
            </h2>
            <p className="opacity-70 text-sm md:text-base">
              Trabajamos con metodología definida para que sepas exactamente qué esperar en cada etapa.
            </p>
          </ScrollReveal>

          <div className="relative max-w-6xl mx-auto">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-background/30 to-transparent"
            />
            <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
              {PROCESS_STEPS.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 70} as="li">
                  <div className="relative text-center group">
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-2xl bg-background/10 border border-background/20 items-center justify-center mb-4 group-hover:bg-background/20 group-hover:border-secondary/50 transition-all duration-300">
                      <s.icon className="w-6 h-6 text-secondary" strokeWidth={1.6} />
                    </span>
                    <span className="absolute top-0 right-1/2 translate-x-8 md:translate-x-10 font-heading font-extrabold text-xs opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading font-bold text-sm md:text-base mb-1.5">{s.title}</h3>
                    <p className="text-xs md:text-sm opacity-60 leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ RESULTADOS ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <SectionLabel>Resultados</SectionLabel>
              <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-6 leading-tight">
                Lo que puedes esperar de tu nueva presencia digital
              </h2>
              <ul className="space-y-4 mb-8">
                {RESULT_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="inline-flex w-7 h-7 rounded-full bg-secondary/15 items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                    </span>
                    <span className="text-foreground/90 text-sm md:text-base leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 max-w-md">
                {RESULT_STATS.map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-xl px-4 py-4 text-center">
                    <p className="font-heading font-extrabold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} variant="scale">
              <FramedImage
                src={webResultadoCrecimiento}
                alt="Profesional sonriendo frente a un laptop con gráficos de crecimiento de su sitio web"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ PARA QUIÉN ES ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel>Para quién es</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Este servicio es ideal para ti si…
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {FIT_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div className="flex items-center gap-5 bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-secondary/40 transition-colors">
                  <span className="font-heading font-extrabold text-2xl md:text-3xl text-primary/20 leading-none select-none w-12 shrink-0 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONFIANZA ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel>Por qué elegirnos</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Tecnología seria, trato directo
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {TRUST_PRINCIPLES.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 70} variant="scale">
                <div className="bg-card border border-border rounded-2xl p-7 h-full text-center hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center mb-5">
                    <t.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="mb-10 text-center">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground">
              Dudas habituales antes de agendar
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((f) => (
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

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-20 md:py-28 bg-brand-deep text-brand-foreground overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--brand-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--brand-foreground)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/25 blur-[130px] pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-secondary mb-6">
                <Megaphone className="w-4 h-4" />
                Comienza hoy
              </span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-5 leading-tight">
                Tu negocio merece una presencia digital{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  profesional
                </span>
              </h2>
              <p className="text-brand-foreground/80 mb-4 text-base md:text-lg leading-relaxed max-w-lg">
                Agenda un diagnóstico gratuito y descubre cómo una página web profesional puede
                transformar tu negocio.
              </p>
              <ul className="space-y-2.5 mb-9">
                {["Diagnóstico sin costo y sin compromiso", "Propuesta clara con tiempos reales", "Trato directo con quien ejecuta"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-brand-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <CtaButton label="Agendar diagnóstico" />
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-transparent blur-2xl"
                />
                <img
                  src={webCtaProfesional}
                  alt="Profesional trabajando en su laptop en una oficina moderna por la noche"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="relative w-full rounded-3xl object-cover"
                  style={{ border: "1px solid hsl(var(--brand-foreground) / 0.15)" }}
                />
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
