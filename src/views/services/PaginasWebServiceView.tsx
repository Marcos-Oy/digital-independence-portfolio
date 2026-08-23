import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Code2,
  Globe,
  MonitorSmartphone,
  Network,
  Palette,
  RefreshCw,
  Rocket,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";
import { AccentBlob, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import bannerHero from "@/assets/banner-hero.png";
import webHeroDevices from "@/assets/services/web-resultado-devices.jpg";
import webSolucionLaptop from "@/assets/services/web-solucion-laptop.jpg";
import webResultadoCrecimiento from "@/assets/services/web-resultado-crecimiento.jpg";
import webCtaProfesional from "@/assets/services/web-cta-profesional.jpg";

/* ------------------------------ content ------------------------------ */

const INCLUDE_CARDS = [
  {
    icon: MonitorSmartphone,
    accent: "bg-primary",
    title: "Desarrollo Web Profesional",
    items: [
      "Diseño personalizado y responsive",
      "Páginas corporativas y landing pages",
      "Integración de formularios y WhatsApp",
      "Mapas, redes sociales y más",
      "Desarrollo rápido, seguro y escalable",
    ],
  },
  {
    icon: Search,
    accent: "bg-secondary",
    title: "Posicionamiento en Google (SEO)",
    items: [
      "SEO técnico desde el inicio",
      "Optimización de contenidos y estructura",
      "Meta títulos, descripciones y URLs",
      "Google Search Console",
      "Mejor rendimiento y velocidad",
    ],
  },
  {
    icon: Target,
    accent: "bg-primary",
    title: "Conversión y Experiencia de Usuario",
    items: [
      "Estructura pensada para convertir",
      "Llamadas a la acción estratégicas",
      "Formularios optimizados",
      "Recorrido del usuario intuitivo",
      "Experiencia mobile-first",
    ],
  },
];

const PROCESS_STEPS = [
  { icon: ClipboardList, title: "Diagnóstico", desc: "Analizamos tu negocio, público objetivo y competencia." },
  { icon: Network, title: "Arquitectura", desc: "Definimos la estructura y el recorrido ideal del usuario." },
  { icon: Palette, title: "Diseño", desc: "Creamos una interfaz alineada con tu marca y objetivos." },
  { icon: Code2, title: "Desarrollo", desc: "Construimos tu sitio con tecnologías modernas y seguras." },
  { icon: Search, title: "SEO Técnico", desc: "Optimizamos tu sitio para que Google pueda encontrarlo." },
  { icon: Rocket, title: "Publicación", desc: "Puesta en marcha, pruebas y revisión final para asegurar calidad." },
];

const RESULT_POINTS = [
  "Más visibilidad en Google",
  "Mejor experiencia para tus usuarios",
  "Más confianza y credibilidad",
  "Más oportunidades de negocio",
];

const FIT_ITEMS = [
  { icon: Building2, title: "Necesitan una presencia digital profesional" },
  { icon: Rocket, title: "Quieren captar más clientes desde internet" },
  { icon: RefreshCw, title: "Tienen una web desactualizada o poco efectiva" },
  { icon: TrendingUp, title: "Buscan mejorar su posicionamiento en Google y su conversión" },
];

/* ------------------------------ ui atoms ------------------------------ */

const PrimaryCta = ({ label, className = "" }: { label: string; className?: string }) => (
  <button
    className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-2 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 ${className}`}
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

/** Mini gráfico de línea ascendente (tarjeta flotante del hero). */
const MiniLineChart = () => (
  <svg viewBox="0 0 96 40" className="w-24 h-10" fill="none" aria-hidden="true">
    <polyline
      points="2,34 20,26 36,30 52,18 68,22 84,8 94,4"
      stroke="hsl(var(--secondary))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="94" cy="4" r="3" fill="hsl(var(--secondary))" />
  </svg>
);

/** Mini gráfico de barras (tarjeta flotante de resultados). */
const MiniBarChart = () => (
  <svg viewBox="0 0 96 48" className="w-24 h-12" fill="none" aria-hidden="true">
    {[18, 26, 22, 34, 30, 42].map((h, i) => (
      <rect
        key={i}
        x={4 + i * 16}
        y={46 - h}
        width="9"
        height={h}
        rx="2"
        fill={i === 5 ? "hsl(var(--secondary))" : "hsl(var(--primary))"}
        opacity={i === 5 ? 1 : 0.45 + i * 0.09}
      />
    ))}
  </svg>
);

/* ------------------------------ view ------------------------------ */

const PaginasWebServiceView = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* ============ HERO ============ */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-background">
        {/* Fondo: mismo banner y efectos del hero principal, por debajo del contenido */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src={bannerHero} alt="" className="w-full h-full object-cover opacity-60 dark:opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
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
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/#servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-foreground">Creación y Posicionamiento de Páginas Web</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <PillLabel>
                <Globe className="w-3.5 h-3.5" />
                Desarrollo Web + SEO
              </PillLabel>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mt-5 mb-5 leading-[1.12] tracking-tight">
                Creación y Posicionamiento de Páginas Web
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Diseñamos sitios profesionales que te hacen visible, generan confianza y
                convierten visitantes en clientes.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCta label="Agendar diagnóstico" />
                <Link
                  to="/#resenas"
                  className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  Ver casos de éxito
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale" className="relative">
              <img
                src={webHeroDevices}
                alt="Página web profesional mostrada en laptop y smartphone con gráfico de crecimiento"
                width={1024}
                height={768}
                loading="eager"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
              <div className="absolute -right-3 top-6 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-extrabold text-lg text-secondary leading-none">+120%</p>
                <p className="text-[11px] text-muted-foreground mt-1 mb-1.5">Más visitas orgánicas</p>
                <MiniLineChart />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ PROBLEMA → SOLUCIÓN ============ */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_auto_1.3fr] gap-10 lg:gap-8 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4 leading-snug">
                Tu empresa puede estar perdiendo oportunidades todos los días
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Una página web lenta, desactualizada o que no aparece en Google puede hacer
                que tus potenciales clientes elijan a tu competencia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={80} variant="scale" className="hidden lg:flex">
              <span className="inline-flex w-14 h-14 rounded-full gradient-brand items-center justify-center shadow-brand">
                <ArrowRight className="w-6 h-6 text-primary-foreground" />
              </span>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3 leading-snug">
                    La solución: Desarrollo web + SEO + Conversión
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Creamos páginas web profesionales pensadas para atraer, convencer y
                    convertir. No solo diseñamos sitios bonitos, construimos herramientas
                    digitales que generan resultados.
                  </p>
                </div>
                <img
                  src={webSolucionLaptop}
                  alt="Profesional trabajando en el desarrollo de una página web"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full rounded-2xl border border-border object-cover shadow-card"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ ¿QUÉ INCLUYE? ============ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <PillLabel>¿Qué incluye?</PillLabel>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
              Todo lo que necesitas para tener una página web que trabaja por tu negocio
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {INCLUDE_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80} variant="scale">
                <div className="relative bg-card border border-border rounded-2xl p-7 pt-12 h-full shadow-card hover:shadow-brand hover:border-primary/30 transition-all duration-300">
                  <span
                    className={`absolute -top-7 left-1/2 -translate-x-1/2 inline-flex w-14 h-14 rounded-full ${card.accent} items-center justify-center shadow-brand ring-4 ring-background`}
                  >
                    <card.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground text-center mb-5">
                    {card.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
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

      {/* ============ NUESTRO PROCESO ============ */}
      <section className="py-16 md:py-24 gradient-brand text-brand-foreground relative overflow-hidden">
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
              Un proceso claro, enfocado en resultados
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
                    <span className="relative z-10 inline-flex w-16 h-16 rounded-full bg-primary items-center justify-center mb-4 ring-4 ring-white/15 shadow-brand">
                      <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.7} />
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

      {/* ============ EL RESULTADO ============ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                El resultado
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-7">
                Al finalizar tendrás una página web profesional, rápida, segura y optimizada
                para buscadores.
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
                src={webResultadoCrecimiento}
                alt="Profesional revisando el crecimiento de visitas de su página web"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
              <div className="absolute -right-3 bottom-8 md:-right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-card">
                <p className="font-heading font-bold text-sm text-foreground mb-1.5">
                  Mejores resultados para tu negocio
                </p>
                <MiniBarChart />
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
              Ideal para empresas y profesionales que...
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FIT_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div className="text-center">
                  <span className="inline-flex w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </span>
                  <p className="font-heading font-semibold text-sm md:text-base text-foreground leading-snug max-w-[210px] mx-auto">
                    {item.title}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                Tu próxima página web debería hacer más que verse bien
              </h2>
              <p className="text-brand-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Agenda un diagnóstico gratuito y conversemos sobre tu proyecto. Te ayudaremos
                a construir una presencia digital que genere resultados.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PrimaryCta label="Agendar diagnóstico gratuito" />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-foreground/80 bg-brand-foreground/10 border border-brand-foreground/20 px-4 py-2.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                  Diagnóstico sin costo y sin compromiso
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={webCtaProfesional}
                alt="Profesional trabajando en su nueva página web"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-3xl border border-brand-foreground/20 object-cover shadow-card"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default PaginasWebServiceView;
