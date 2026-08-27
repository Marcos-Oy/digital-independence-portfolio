import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  ClipboardList,
  Code2,
  Globe,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  Store,
  Target,
  XCircle,
  Zap,
} from "lucide-react";
import PageMeta from "@/views/shared/PageMeta";
import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LandingHeader from "@/views/landing/LandingHeader";
import LandingFooter from "@/views/landing/LandingFooter";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import RightClientSection from "@/views/landing/RightClientSection";
import { getServiceLandingWistiaId } from "@/models/serviceLandingContent";
import { useLandingController } from "@/controllers/landing/useLandingController";
import { SoftBlob, AccentBlob, LayeredWaveDivider, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import ScrollContextIcon from "@/views/shared/ScrollContextIcon";
import TypewriterText from "@/views/shared/TypewriterText";
import webHeroDevices from "@/assets/services/web-resultado-devices.jpg";
import webSolucionLaptop from "@/assets/services/web-solucion-laptop.jpg";
import webResultadoCrecimiento from "@/assets/services/web-resultado-crecimiento.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "Buscas tu propio negocio en Google y apareces en la página 2 en adelante, si es que apareces.",
  "Tu sitio web, si existe, se ve como si lo hubieran hecho hace ocho años.",
  "No tienes correo con tu propio dominio, y respondes a clientes desde una cuenta de Gmail o Hotmail.",
  "Cada vez que alguien abre tu sitio desde el celular, tarda tanto en cargar que se cansa de esperar.",
  "Un cliente potencial te compara con la competencia, y la competencia tiene un sitio más profesional.",
  "Pagaste por una página web hace tiempo, y nadie te dijo que sin SEO nadie la va a encontrar.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, el problema no es tu negocio: es que tu presencia digital no está construida para generar confianza ni para que te encuentren.";

const RIGHT_CLIENT_TEXT =
  "Profesionales independientes y dueños de PyME que hoy no tienen presencia digital profesional, o tienen una que no genera confianza ni aparece cuando alguien busca lo que ofrecen.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Palette,
    title: "Diseño sin estrategia",
    desc: "Un sitio bonito que Google no puede indexar bien no aparece en las búsquedas, sin importar cuánto se invirtió en diseño.",
  },
  {
    icon: Clock3,
    title: "Velocidad ignorada",
    desc: "Cada segundo extra de carga aumenta la probabilidad de que un visitante se vaya antes de conocerte.",
  },
  {
    icon: Target,
    title: "Sin plan de conversión",
    desc: "Un sitio sin llamados a la acción claros recibe visitas que nunca se convierten en contactos.",
  },
];

interface SolutionConcept {
  icon: typeof Search;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: MonitorSmartphone,
    title: "Diseño profesional y responsive",
    desc: "Un sitio que se ve bien y funciona en cualquier dispositivo, alineado con tu marca.",
  },
  {
    icon: Search,
    title: "SEO técnico desde el día uno",
    desc: "Search Console, velocidad, estructura y metaetiquetas, no un servicio aparte que se cobra después.",
  },
  {
    icon: Target,
    title: "Pensado para convertir",
    desc: "Cada página tiene un objetivo claro: que el visitante te contacte.",
  },
  {
    icon: Globe,
    title: "Dominio y correo propio",
    desc: "Tu marca con la seriedad de un dominio y un correo corporativo propios.",
  },
];

const INCLUDES = [
  "Sitio web corporativo, landing o portafolio",
  "SEO técnico (Search Console, velocidad, metaetiquetas)",
  "Perfil de Negocio Google y Maps",
  "Dominio propio y correo corporativo",
  "Hosting con Cloudflare y Hostinger",
];

interface SiteType {
  icon: typeof Building2;
  title: string;
  desc: string;
}

const SITE_TYPES: SiteType[] = [
  {
    icon: Building2,
    title: "Sitio corporativo",
    desc: "Presenta tu empresa, tus servicios y genera confianza profesional.",
  },
  {
    icon: Megaphone,
    title: "Landing page de alta conversión",
    desc: "Una sola página enfocada en un objetivo: que te contacten o compren.",
  },
  {
    icon: Briefcase,
    title: "Portafolio profesional",
    desc: "Muestra tu trabajo y tu experiencia con una estructura clara.",
  },
  {
    icon: Store,
    title: "Catálogo digital",
    desc: "Presenta tus productos o servicios de forma ordenada y navegable.",
  },
];

interface MethodStep {
  n: string;
  icon: typeof ClipboardList;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Analizamos tu negocio, tu público objetivo y tu competencia.",
  },
  {
    n: "02",
    icon: Palette,
    title: "Diseño",
    desc: "Creamos una interfaz alineada con tu marca y tus objetivos.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Desarrollo y SEO técnico",
    desc: "Construimos tu sitio con tecnologías modernas, optimizado para que Google pueda encontrarlo.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Publicación y ajuste",
    desc: "Puesta en marcha, pruebas y revisión final antes de lanzar.",
  },
];

interface Benefit {
  icon: typeof Search;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Search,
    title: "Apareces cuando te buscan",
    desc: "Tu sitio optimizado con SEO técnico ayuda a que te encuentren en Google.",
  },
  {
    icon: Palette,
    title: "Un sitio que genera confianza",
    desc: "Diseño profesional y actualizado, no una web de hace una década.",
  },
  {
    icon: Mail,
    title: "Correo con tu propio dominio",
    desc: "Tu marca se ve seria desde el primer contacto.",
  },
  {
    icon: Zap,
    title: "Carga rápido, en cualquier dispositivo",
    desc: "Menos visitantes perdidos por una carga lenta.",
  },
];

interface TrustPoint {
  icon: typeof Search;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Search,
    title: "Primero entendemos tu negocio",
    desc: "No armamos un sitio genérico: partimos por tu negocio, tu público y tu competencia.",
  },
  {
    icon: CheckCircle2,
    title: "El SEO no es un extra",
    desc: "Está incluido desde el diseño, no se vende aparte después.",
  },
  {
    icon: Target,
    title: "Diseñado para convertir, no solo para existir",
    desc: "Cada página tiene un propósito claro.",
  },
];

const PROMISE_TEXT =
  "Tu presencia digital completamente operativa: sitio web bajo tu propio dominio, correo corporativo, Perfil de Negocio en Google Maps y SEO técnico funcionando desde el primer día.";

/* ------------------------------ view ------------------------------ */

const PaginasWebLandingView = () => {
  useLandingController("Creación y Posicionamiento de Páginas Web | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Creación y Posicionamiento de Páginas Web | Independencia Digital"
        description="Diseñamos tu sitio web con SEO técnico desde el día uno: dominio propio, correo corporativo, Google Maps y una página pensada para convertir. Diagnóstico sin costo."
        path="/landing/servicio/presencia-digital"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Globe}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Creación y Posicionamiento de Páginas Web, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Si tu negocio no aparece en Google, para muchos clientes simplemente no existe.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diseñamos tu sitio web con SEO técnico desde el día uno: no solo para que se vea
            bien, para que te encuentren y te elijan.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("presencia-digital")} />
        </ScrollReveal>

        <div className="relative container mx-auto px-4 text-center mt-8">
          <LandingCtaButton className="btn-shimmer" />
          <p className="text-xs text-muted-foreground mt-4">Diagnóstico sin costo · Sin compromiso</p>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* ============ DOLOR ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={2} color="primary" className="w-72 h-96 -top-16 -right-24" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
              ¿Alguna de estas señales te resulta familiar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Antes de agendar, revisa si tu negocio hoy vive alguna de estas situaciones.
            </p>
          </ScrollReveal>

          <div className="space-y-4 max-w-2xl mx-auto">
            {PAIN_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed mb-8">{PAIN_REFRAME}</p>
            <LandingCtaButton />
          </ScrollReveal>
        </div>
      </section>

      <RightClientSection text={RIGHT_CLIENT_TEXT} />

      {/* ============ PROBLEMA ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SoftBlob shape={5} className="w-64 h-64 -bottom-16 -left-20" />
        <div className="relative container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Por qué pasa esto
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Una página web bonita no es lo mismo que una página web que funciona
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Muchos sitios se construyen pensando solamente en cómo se ven, sin SEO
                técnico, sin velocidad de carga optimizada y sin una estrategia de
                conversión. El resultado es un sitio que "existe" pero no aparece en
                Google, no genera confianza y no convierte visitas en contactos reales.
                Tener una página web no es lo mismo que tener presencia digital que
                trabaja para tu negocio.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={webHeroDevices}
                alt="Página web mostrada en laptop y smartphone"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {ROOT_CAUSES.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 90}>
                <div className="text-center">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 items-center justify-center mb-4 mx-auto">
                    <c.icon className="w-6 h-6 text-primary" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px] mx-auto">
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <LayeredWaveDivider seed={1} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ SOLUCIÓN - qué hacemos y qué cubre ============ */}
      <section id="que-hacemos" className="relative py-16 md:py-24 bg-muted/50 overflow-hidden scroll-mt-20">
        <SoftBlob shape={6} color="secondary" className="w-72 h-64 -top-14 -right-20" />
        <AccentBlob shape={1} className="hidden md:block w-9 h-12 bottom-12 left-[6%] opacity-70" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal variant="scale" className="order-last lg:order-first">
              <img
                src={webSolucionLaptop}
                alt="Profesional trabajando en el desarrollo de una página web"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                Qué hacemos
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                Construimos un sitio que trabaja para ti, no uno que solo existe
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                Diseñamos tu sitio web, landing page o portafolio bajo tu propio dominio,
                con SEO técnico desde el primer día: Search Console, velocidad de carga,
                estructura y metaetiquetas correctas. Configuramos tu Perfil de Negocio en
                Google y Maps para que te encuentren cerca, y dejamos tu hosting
                funcionando de forma segura y estable.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                {SOLUTION_CONCEPTS.map((c) => (
                  <div key={c.title} className="flex gap-3">
                    <span className="inline-flex w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4 text-primary" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-foreground mb-0.5">
                        {c.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="mb-16">
            <ScrollReveal className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Qué cubre este servicio
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                No es una propuesta genérica: esto es exactamente lo que recibes.
              </p>
            </ScrollReveal>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
              {INCLUDES.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-16">
            <ScrollReveal className="text-center mb-10">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Qué tipo de sitio podemos construir
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cada negocio necesita un formato distinto. Así se ve en la práctica.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {SITE_TYPES.map((t, i) => (
                <ScrollReveal key={t.title} delay={i * 60}>
                  <div className="bg-card border border-border rounded-2xl p-5 h-full">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center mb-3">
                      <t.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.7} />
                    </span>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1.5">
                      {t.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, sin letra chica. Un proceso claro, enfocado en resultados.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {METHOD_STEPS.map((step) => (
                <ScrollReveal key={step.n} variant="scale" className="h-full">
                  <div className="bg-card p-7 h-full">
                    <span className="font-heading font-extrabold text-3xl text-border leading-none block mb-4 select-none">
                      {step.n}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <LandingCtaButton />
          </div>
        </div>
        <LayeredWaveDivider seed={2} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ SATISFACCIÓN ============ */}
      <section className="relative py-16 md:py-24 bg-background overflow-hidden">
        <SparkleDots color="secondary" className="absolute w-48 h-48 top-[8%] right-[8%] text-secondary" />
        <GlowOrb color="primary" className="absolute w-9 h-9 md:w-11 md:h-11 bottom-[12%] left-[8%]" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
              Así se ve tu negocio después
            </p>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              Un sitio que te encuentra clientes, no que solo existe
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {BENEFITS.map((b) => (
                  <div key={b.title}>
                    <span className="inline-flex w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 items-center justify-center mb-3">
                      <b.icon className="w-5 h-5 text-secondary" strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={webResultadoCrecimiento}
                alt="Profesional revisando el crecimiento de visitas de su página web"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20 max-w-3xl mx-auto mb-14">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <Globe className="w-5 h-5 text-secondary" />
                </span>
                <p className="font-heading font-bold text-xl md:text-2xl text-foreground leading-snug">
                  {PROMISE_TEXT}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TRUST_POINTS.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 90}>
                <div className="text-center">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 items-center justify-center mb-4 mx-auto">
                    <t.icon className="w-5 h-5 text-primary" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{t.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                    {t.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <LayeredWaveDivider seed={3} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <SoftBlob shape={1} color="primary" className="w-72 h-56 -top-16 -right-16" />
        <SoftBlob shape={4} color="secondary" className="w-64 h-72 -bottom-20 -left-20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Tu negocio está listo para aparecer donde lo buscan?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos sobre tu negocio. Te decimos, sin compromiso, qué necesita tu
                presencia digital para generar resultados reales.
              </p>
              <LandingCtaButton />
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default PaginasWebLandingView;
