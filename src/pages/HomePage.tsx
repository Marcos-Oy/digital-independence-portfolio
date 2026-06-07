import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import SafeTechLogosCarousel from "@/components/SafeTechLogosCarousel";
import AboutBrandSection from "@/components/AboutBrandSection";
import ReviewsSection from "@/components/ReviewsSection";
import logoFull from "@/assets/logo-full.png";
import bannerHero from "@/assets/banner-hero.png";
import bannerPlan360 from "@/assets/banner-plan360.png";
import { ChevronRight, ChevronDown, Instagram, Facebook, Mail } from "lucide-react";
import { AREAS, SERVICES } from "@/data/services";
import { SEGMENTS } from "@/data/segments";

const WHATSAPP = "56928362758";
const waText = (m: string) => encodeURIComponent(m);

const faqs = [
  {
    q: "¿Qué hace exactamente Independencia Digital?",
    a: "Somos una consultora tecnológica chilena. Diseñamos, construimos y dirigimos la infraestructura tecnológica de emprendedores, profesionales independientes, PyMEs, grandes empresas y organismos públicos.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Depende del servicio y tu punto de partida. En el diagnóstico inicial evaluamos tu situación y te damos una hoja de ruta con tiempos reales para tu caso.",
  },
  {
    q: "¿Atienden a personas naturales y empresas?",
    a: "Sí. Trabajamos con personas naturales (emprendedores, profesionales independientes) y personas jurídicas (PyMEs, grandes empresas y sector público vía Mercado Público).",
  },
  {
    q: "¿Necesito contratar todos los servicios?",
    a: "No. Cada servicio es independiente y se contrata por separado. En el primer diagnóstico identificamos qué necesitas y proponemos una hoja de ruta priorizada.",
  },
  {
    q: "¿Trabajan con Mercado Público?",
    a: "Sí. Participamos en licitaciones de ChileCompra para ciberseguridad, formación, infraestructura TI y transformación digital.",
  },
  {
    q: "¿Cómo es el primer contacto?",
    a: "Agendas un diagnóstico inicial por correo. Te entendemos, revisamos tu situación actual y te proponemos los servicios que tienen sentido para tu caso, sin compromiso.",
  },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 group"
      >
        <span className="font-heading font-semibold text-foreground text-sm md:text-base leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src={bannerHero} alt="" className="w-full h-full object-cover opacity-60 dark:opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
          {/* Ambient orbs */}
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" style={{ animationDelay: "0s" }} />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
          <img
            src={logoFull}
            alt="Independencia Digital"
            className="h-16 md:h-24 mb-8 animate-fade-in"
          />

          {/* Eyebrow tag */}
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            Consultora Tecnológica · Chile
          </span>

          <h1
            className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl mb-6 animate-fade-in-up text-foreground"
            style={{ animationDelay: "0.1s" }}
          >
            Diseñamos, construimos y dirigimos tu{" "}
            <span className="text-primary">infraestructura tecnológica</span>
          </h1>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Desde arquitectura TI y desarrollo de software hasta ciberseguridad e inteligencia artificial.
            Atendemos emprendedores, PyMEs, grandes empresas y el sector público.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://independencia-digital.systeme.io/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              Agendar diagnóstico gratis
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
            </a>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Quiénes somos — editorial metrics */}
      <section id="quienes-somos" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="grid md:grid-cols-[1fr_auto] gap-12 items-end mb-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                  Quiénes somos
                </p>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight text-foreground mb-5">
                  Tu Director de Tecnología externo,<br className="hidden md:block" />
                  sin el costo de uno a tiempo completo.
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  Independencia Digital es una consultora tecnológica chilena que atiende personas
                  naturales y jurídicas, incluyendo el sector público mediante licitaciones en
                  Mercado Público.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={100} className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { n: "11", label: "Servicios especializados" },
                { n: "5", label: "Áreas de consultoría" },
                { n: "4", label: "Segmentos atendidos" },
              ].map(({ n, label }) => (
                <div key={label} className="bg-card px-6 py-8 text-center">
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-1.5">{n}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{label}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                A quién servimos
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight">
                Cuatro segmentos,<br className="hidden md:block" /> un mismo método.
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-4">
              {SEGMENTS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={s.id} delay={i * 80} variant="scale">
                    <Link
                      to={`/segmentos/${s.slug}`}
                      className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 flex gap-5 items-start"
                    >
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-200">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="font-heading font-bold text-base text-foreground">{s.shortTitle}</h3>
                          <span className="text-xs text-muted-foreground shrink-0 hidden sm:block">
                            {s.ticket}
                          </span>
                        </div>
                        <p className="text-xs text-secondary font-semibold mb-2.5 uppercase tracking-wide">{s.audience}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.description}</p>
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3">
                          Ver segmento <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios — 5 área cards */}
      <section id="servicios" className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-96 pointer-events-none">
          <img src={bannerPlan360} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Portafolio
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-3">
                Cinco áreas de servicio
              </h2>
              <p className="text-muted-foreground max-w-xl">
                11 soluciones contratables por separado. Elige el área que necesitas.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {AREAS.map((area, i) => {
                const AreaIcon = area.icon;
                const count = SERVICES.filter((s) => s.area === area.id).length;
                return (
                  <ScrollReveal key={area.id} delay={i * 70} variant="scale">
                    <Link
                      to={`/servicios?area=${area.id}`}
                      className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full overflow-hidden"
                    >
                      {/* Large muted number background */}
                      <span
                        aria-hidden="true"
                        className="absolute top-4 right-5 font-heading font-extrabold text-6xl text-border/40 leading-none select-none pointer-events-none"
                      >
                        0{i + 1}
                      </span>

                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-5 group-hover:bg-primary/15 transition-colors duration-200">
                        <AreaIcon className="w-5 h-5 text-primary" />
                      </div>

                      <h3 className="font-heading font-bold text-base text-foreground leading-tight mb-3">
                        {area.label}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                        {area.desc}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                          {count} servicio{count !== 1 ? "s" : ""}
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                          Ver área
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={100} className="text-center mt-12">
              <Link
                to="/servicios"
                className="btn-shimmer inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Ver portafolio completo
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Sobre la marca */}
      <AboutBrandSection />

      {/* Reseñas */}
      <ReviewsSection />

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12">
            <ScrollReveal variant="left" className="md:sticky md:top-28 h-fit">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                FAQ
              </p>
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Si tu pregunta no está aquí, escríbenos por WhatsApp. Respondemos personalmente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="divide-y divide-border">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              {/* Inner double-bezel */}
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
                <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-5">
                    Contacto
                  </p>
                  <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-foreground mb-4 leading-tight">
                    ¿Hablamos de tu tecnología?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm md:text-base">
                    Agenda un diagnóstico inicial sin costo. Te respondemos personalmente.
                  </p>

                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap mb-8 text-sm">
                    <a
                      href="https://www.instagram.com/_marcos.oyarzo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>@_marcos.oyarzo</span>
                    </a>
                    <span className="hidden sm:block text-border">·</span>
                    <a
                      href="https://www.facebook.com/IndependenciaDigital.cl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                      <span>IndependenciaDigital.cl</span>
                    </a>
                    <span className="hidden sm:block text-border">·</span>
                    <a
                      href="mailto:contacto@independenciadigital.cl"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      <span>contacto@independenciadigital.cl</span>
                    </a>
                  </div>

                  <a
                    href="https://independencia-digital.systeme.io/registro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
                  >
                    Agendar diagnóstico
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default HomePage;
