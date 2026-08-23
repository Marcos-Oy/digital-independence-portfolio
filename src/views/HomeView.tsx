import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { SoftBlob, AccentBlob, LayeredWaveDivider, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import TypewriterText from "@/views/shared/TypewriterText";
import ParticleNetworkBackground from "@/views/shared/ParticleNetworkBackground";
import AnimatedProcessCircle from "@/views/shared/AnimatedProcessCircle";
import DrawIcon from "@/views/shared/DrawIcon";
import TechNetworkBlob from "@/views/shared/TechNetworkBlob";
import { useSiteExplored } from "@/controllers/useSiteExplored";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import AboutBrandSectionView from "@/views/AboutBrandSectionView";
import ReviewsView from "@/views/ReviewsView";
import logoFull from "@/assets/logo-full.png";
import bannerHero from "@/assets/banner-hero.png";
import bannerPlan360 from "@/assets/banner-plan360.png";
import { ChevronRight, ChevronDown, Instagram, Facebook, Linkedin, Mail, Search, X } from "lucide-react";
import { AREAS, MODALITY_LABELS, MODALITY_COLORS, type ServiceArea, type ServiceModality } from "@/models/services";
import { ALL_MODALITIES, filterAndSortServices } from "@/models/serviceSearch";
import { SEGMENTS } from "@/models/segments";
import { FAQS } from "@/models/faq";
import { METHOD_STEPS } from "@/models/method";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";

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

const HomeView = () => {
  const explored = useSiteExplored();
  const [query, setQuery] = useState("");
  const [activeModality, setActiveModality] = useState<ServiceModality | null>(null);
  const [activeArea, setActiveArea] = useState<ServiceArea | null>(null);

  const { filtered: filteredServices, isSearching } = filterAndSortServices({
    query,
    modality: activeModality,
    area: activeArea,
  });
  const isFiltering = isSearching || activeModality !== null || activeArea !== null;
  const clearServiceFilters = () => {
    setQuery("");
    setActiveModality(null);
    setActiveArea(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden">
        <div
          aria-hidden="true"
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${explored ? "opacity-100" : "opacity-0"}`}
        >
          <img src={bannerHero} alt="" className="w-full h-full object-cover opacity-60 dark:opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
          {/* Ambient orbs */}
          <div className="hero-orb w-96 h-96 bg-primary/8 top-1/4 -left-20 animate-float" style={{ animationDelay: "0s" }} />
          <div className="hero-orb w-72 h-72 bg-secondary/8 top-1/3 right-0 animate-float" style={{ animationDelay: "2s" }} />
          <div className="hero-orb w-56 h-56 bg-primary/5 bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: "1s" }} />
          <AccentBlob shape={1} color="secondary" className="w-16 h-12 top-[18%] right-[18%] opacity-80 animate-float-slow" />
          <AccentBlob shape={2} className="w-8 h-11 bottom-[22%] left-[12%] opacity-70 animate-float" />
          <GlowOrb color="secondary" className="absolute w-12 h-12 md:w-16 md:h-16 top-[12%] left-[8%]" />
          <SparkleDots color="secondary" className="absolute w-64 h-64 bottom-[8%] right-[6%] text-white" />
          <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={70} active={explored} />
        </div>

        <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
          <img
            src={logoFull}
            alt="Independencia Digital"
            className={`h-16 md:h-24 mb-8 ${explored ? "animate-fade-in" : "opacity-0"}`}
          />

          {/* Eyebrow tag */}
          <span className={`inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full mb-6 ${explored ? "animate-fade-in" : "opacity-0"}`}>
            {explored ? (
              <TypewriterText text="Consultora Tecnológica · Chile" speed={38} />
            ) : (
              <span className="invisible font-mono">Consultora Tecnológica · Chile</span>
            )}
          </span>

          <h1
            className={`font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-5xl mb-6 text-foreground ${explored ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Diseñamos y construimos con servicios integrales tu{" "}
            <span className="text-primary">infraestructura <span className="text-secondary">digital</span></span>
          </h1>

          <p
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed ${explored ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Desde arquitectura TI y desarrollo de software hasta ciberseguridad e inteligencia artificial.
            Atendemos emprendedores, PyMEs, grandes empresas y el sector público.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 ${explored ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <button
              className={`${SYSTEME_TRIGGER_CLASS} btn-shimmer inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200`}
            >
              Agendar diagnóstico gratis
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
            </button>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-muted active:scale-[0.97] transition-all duration-200"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Quiénes somos + Cómo trabajamos — mismo bloque para reducir el scroll */}
      <section id="quienes-somos" className="relative py-20 md:py-28 bg-background overflow-hidden">
        <SoftBlob shape={3} className="w-[460px] h-[360px] -top-32 -right-40" />
        <SoftBlob shape={4} color="secondary" className="w-64 h-80 bottom-0 -left-24" />
        <SoftBlob shape={5} color="primary" className="w-72 h-96 -bottom-24 -right-24" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-14">
            <div>
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                  <TypewriterText text="Quiénes somos" />
                </p>
                <h2 className="font-heading font-extrabold text-3xl md:text-4xl leading-tight text-foreground mb-5">
                  Tu Asesor en Tecnologías de la Información,<br className="hidden md:block" />
                  sin el costo de uno a tiempo completo.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  Independencia Digital es una consultora tecnológica chilena que atiende personas
                  naturales y jurídicas, incluyendo el sector público mediante licitaciones en
                  Mercado Público.
                </p>
              </ScrollReveal>

              <ScrollReveal variant="scale" delay={100} className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                {[
                  { n: "14", label: "Servicios especializados" },
                  { n: "6", label: "Áreas de consultoría" },
                  { n: "4", label: "Segmentos atendidos" },
                ].map(({ n, label }) => (
                  <div key={label} className="bg-card px-4 py-8 text-center">
                    <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-1.5">{n}</p>
                    <p className="text-xs text-muted-foreground leading-snug">{label}</p>
                  </div>
                ))}
              </ScrollReveal>
            </div>

            <div id="metodo" className="md:pl-16 md:border-l border-border">
              <div className="grid sm:grid-cols-[1fr_auto] gap-x-10 gap-y-6 mb-10">
                <ScrollReveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                    <TypewriterText text="Cómo trabajamos" />
                  </p>
                  <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-5">
                    Un mismo método,<br className="hidden md:block" /> ciclo tras ciclo.
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    No entregamos un proyecto y desaparecemos. Diagnosticamos, priorizamos,
                    implementamos y te acompañamos de forma continua.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                  <ul className="space-y-2 sm:pt-9">
                    {METHOD_STEPS.map((step, i) => (
                      <li key={step.title} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-semibold text-foreground whitespace-nowrap">{step.title}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>

              <ScrollReveal variant="scale" delay={100}>
                <AnimatedProcessCircle steps={METHOD_STEPS} className="w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] mx-auto" enabled={explored} />
              </ScrollReveal>
            </div>
          </div>
        </div>
        <LayeredWaveDivider seed={1} className="absolute bottom-0 left-0 w-full h-28 md:h-40" />
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="relative py-20 md:py-28 bg-muted/50 overflow-hidden">
        <SoftBlob shape={6} className="w-[340px] h-[420px] top-0 -right-32" />
        <AccentBlob shape={1} color="secondary" className="hidden md:block w-12 h-16 top-24 left-8 opacity-90" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                <TypewriterText text="A quién servimos" />
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
                        <DrawIcon icon={Icon} className="w-5 h-5 text-primary" active={explored} />
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
        <LayeredWaveDivider seed={2} className="absolute bottom-0 left-0 w-full h-20 md:h-28" />
      </section>

      {/* Servicios — 15 service cards con imagen */}
      <section id="servicios" className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-96 pointer-events-none">
          <img src={bannerPlan360} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <ParticleNetworkBackground
          className="absolute inset-x-0 top-0 h-96 w-full opacity-70 [mask-image:linear-gradient(to_right,black_0%,black_38%,transparent_72%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_38%,transparent_72%)]"
          density={36}
          active={explored}
        />
        <TechNetworkBlob className="hidden md:block absolute w-56 h-56 lg:w-80 lg:h-80 xl:w-96 xl:h-96 top-6 right-[3%] lg:right-[6%] xl:right-[8%]" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="mb-10 text-left max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                <TypewriterText text="Nuestros servicios" />
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-4">
                Tecnología que resuelve problemas reales
              </h2>
              <p className="text-muted-foreground">
                12 soluciones especializadas en 6 áreas. Cada una pensada en tu operación diaria, no en la tecnología por sí sola.
              </p>
            </ScrollReveal>

            {/* Buscador */}
            <ScrollReveal delay={60} className="max-w-2xl mb-6">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-4 h-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar servicio… ej: página web, ciberseguridad, IA"
                  className="w-full bg-card border border-border rounded-xl pl-10 pr-10 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 shadow-card"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </ScrollReveal>

            {/* Filtro por modalidad */}
            <ScrollReveal delay={70} className="flex flex-wrap justify-start gap-2 mb-4">
              <button
                onClick={() => setActiveModality(null)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  activeModality === null
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {ALL_MODALITIES.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveModality(activeModality === m ? null : m)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                    activeModality === m
                      ? MODALITY_COLORS[m] + " border-current"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {MODALITY_LABELS[m]}
                </button>
              ))}
            </ScrollReveal>

            {/* Filtro por área */}
            <ScrollReveal delay={80} className="flex flex-wrap justify-start gap-2 mb-10">
              {AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                    activeArea === area.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {area.label}
                </button>
              ))}
            </ScrollReveal>

            {isFiltering && (
              <p className="text-left text-xs text-muted-foreground mb-8">
                {filteredServices.length} servicio{filteredServices.length !== 1 ? "s" : ""} encontrado{filteredServices.length !== 1 ? "s" : ""}.{" "}
                <button onClick={clearServiceFilters} className="text-primary font-semibold hover:underline">
                  Limpiar filtros
                </button>
              </p>
            )}

            {filteredServices.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-12">
                No se encontraron servicios con esos filtros.{" "}
                <button onClick={clearServiceFilters} className="text-primary font-semibold hover:underline">
                  Limpiar filtros
                </button>
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <ScrollReveal key={s.slug} delay={(i % 3) * 80} variant="scale">
                      <Link
                        to={`/servicios/${s.slug}`}
                        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <img
                            src={s.image}
                            alt={s.title}
                            loading="lazy"
                            width={1024}
                            height={768}
                            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-background/85 backdrop-blur-sm border border-border rounded-full px-2.5 py-1">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                              {s.areaLabel.split(" ")[0]}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                            {s.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                            {s.summary}
                          </p>
                          <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                            Ver servicio
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                          </span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Sobre la marca */}
      <AboutBrandSectionView />

      {/* Reseñas */}
      <ReviewsView />

      {/* FAQ */}
      <section id="faq" className="relative py-20 md:py-28 bg-muted/50 overflow-hidden">
        <SoftBlob shape={4} color="secondary" className="w-[340px] h-72 -bottom-24 -left-24" />
        <div className="relative container mx-auto px-4">
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
              {FAQS.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </ScrollReveal>
          </div>
        </div>
        <LayeredWaveDivider seed={3} className="absolute bottom-0 left-0 w-full h-28 md:h-40" />
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative py-20 md:py-28 bg-background overflow-hidden">
        <SoftBlob shape={5} className="w-[380px] h-64 -top-20 left-1/2 -translate-x-1/2" />
        <GlowOrb color="primary" className="absolute w-14 h-14 md:w-20 md:h-20 top-10 right-[10%]" />
        <div className="relative container mx-auto px-4">
          <ScrollReveal variant="scale" className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden">
              {/* Inner double-bezel */}
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
                <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-5">
                    <TypewriterText text="Contacto" />
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
                      href="https://www.linkedin.com/company/independencia-digital-chile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Independencia Digital</span>
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

                  <button
                    className={`${SYSTEME_TRIGGER_CLASS} inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200`}
                  >
                    Agendar diagnóstico
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <LayeredWaveDivider seed={1} className="absolute bottom-0 left-0 w-full h-24 md:h-32" />
      </section>

      <SiteFooterView />
    </div>
  );
};

export default HomeView;
