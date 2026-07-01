import { Link } from "react-router-dom";
import { XCircle, Check, Linkedin, Globe, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import marcosAzul from "@/assets/marcos-terno-azul.jpg";
import marcosNegro from "@/assets/marcos-terno-negro.jpeg";
import ThemeToggleView from "@/views/ThemeToggleView";
import ScrollReveal from "@/views/shared/ScrollReveal";
import WistiaEmbed from "@/views/shared/WistiaEmbed";
import SafeTechLogosCarousel from "@/views/shared/SafeTechLogosCarousel";
import LeadFormDialogView from "@/views/landing/LeadFormDialogView";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AREAS, SERVICES } from "@/models/services";
import { PAIN_POINTS, PAIN_REFRAME, METHOD_STEPS, BENEFITS } from "@/models/generalLandingContent";
import { useGeneralLandingController } from "@/controllers/landing/useGeneralLandingController";

const GeneralLandingView = () => {
  const { leadOpen, setLeadOpen } = useGeneralLandingController();

  return (
    <div className="min-h-screen bg-background">
      {/* Header minimalista de funnel: solo logo y toggle, sin navegación del sitio */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Independencia Digital" className="h-8 w-8" />
            <span className="font-heading font-bold text-sm leading-none">
              <span className="text-[#2E6FB5]">Independencia</span>{" "}
              <span className="text-[#3CB878]">Digital</span>
            </span>
          </Link>
          <ThemeToggleView />
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero pt-16 pb-14 md:pt-20 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Plan 360, Independencia Digital
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Ordena tu tecnología, protege tu negocio y hazlo crecer
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diagnóstico, arquitectura TI, ciberseguridad, automatización e IA para PyMEs, empresas y
            organismos públicos en Chile.
          </p>
          <button
            onClick={() => setLeadOpen(true)}
            className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 btn-shimmer"
          >
            Quiero mi diagnóstico
            <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
          </button>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId="68c4rkopry" />
        </ScrollReveal>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Dolor / Problema */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3 leading-tight">
              ¿Alguna de estas señales te resulta familiar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Antes de agendar, revisa si tu negocio hoy vive alguna de estas situaciones.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {PAIN_POINTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-destructive/70 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/90 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-foreground/90 leading-relaxed">{PAIN_REFRAME}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Nutrir: quién está detrás */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground leading-tight">
              ¿Quién está detrás de Independencia Digital?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
            <ScrollReveal variant="scale" className="mx-auto">
              <img
                src={marcosAzul}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-40 md:w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] block dark:hidden"
              />
              <img
                src={marcosNegro}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-40 md:w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] hidden dark:block"
              />
            </ScrollReveal>
            <ScrollReveal variant="left">
              <p className="font-heading font-bold text-lg text-foreground mb-1">
                Marcos Alberto Oyarzo Alvarez
              </p>
              <p className="text-sm text-secondary font-semibold mb-4">CEO y Fundador de Independencia Digital</p>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Ingeniero en Informática con especialización en Ciberseguridad, Transformación Digital e
                Inteligencia Artificial Generativa. Diseño, construyo y dirijo la infraestructura tecnológica
                de mis clientes desde la arquitectura TI y el desarrollo de software hasta la ciberseguridad
                y la IA corporativa.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-5">
                Mi promesa es clara: en poco tiempo de trabajo conjunto, tu tecnología deja de ser un
                problema y se convierte en el motor real del crecimiento de tu negocio.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.moyarzo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" /> moyarzo.cl
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos-alberto-o-766456170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* 5 áreas de servicio */}
          <ScrollReveal className="mt-14" variant="up">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-6">
              Todo lo que podemos ordenar contigo
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {AREAS.map((area) => (
                <div key={area.id} className="bg-card border border-border rounded-xl p-5 h-full">
                  <area.icon className="w-5 h-5 text-primary mb-3" />
                  <p className="font-heading font-bold text-sm text-foreground mb-1.5 leading-snug">
                    {area.label}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Detalle por servicio */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Qué hacemos exactamente en cada servicio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              15 soluciones agrupadas en 5 áreas. Abre la que te interesa: el problema que resuelve, qué
              hacemos y qué obtienes.
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {AREAS.map((area) => (
              <ScrollReveal key={area.id} variant="up">
                <div className="flex items-center gap-2.5 mb-3">
                  <area.icon className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">
                    {area.label}
                  </h3>
                </div>
                <Accordion type="multiple" className="bg-card border border-border rounded-xl px-5">
                  {SERVICES.filter((s) => s.area === area.id).map((s) => (
                    <AccordionItem key={s.slug} value={s.slug} className="border-border">
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                        <span className="flex items-center gap-3">
                          <img
                            src={s.image}
                            alt=""
                            loading="lazy"
                            className="w-12 h-12 rounded-lg object-cover shrink-0"
                          />
                          {s.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-5 pt-1">
                          <img
                            src={s.image}
                            alt={s.title}
                            loading="lazy"
                            className="w-full aspect-[16/7] object-cover rounded-lg"
                          />

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-destructive/80 mb-2">
                              El problema
                            </p>
                            <ul className="space-y-1.5">
                              {s.painPoints.map((p) => (
                                <li key={p} className="flex items-start gap-2">
                                  <XCircle className="w-3.5 h-3.5 text-destructive/70 mt-0.5 shrink-0" />
                                  <span className="text-sm text-foreground/90 leading-relaxed">{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                              Qué hacemos
                            </p>
                            <p className="text-sm text-foreground/90 leading-relaxed">{s.description}</p>
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                              Qué incluye
                            </p>
                            <ul className="space-y-1.5">
                              {s.includes.map((inc) => (
                                <li key={inc} className="flex items-start gap-2">
                                  <Check className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                                  <span className="text-sm text-foreground/90 leading-relaxed">{inc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-muted/60 rounded-lg p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                              El resultado
                            </p>
                            <p className="text-sm text-foreground/90 leading-relaxed">{s.valuePromise}</p>
                          </div>

                          <Link
                            to={`/servicios/${s.slug}`}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                          >
                            Ver servicio completo
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* El Método */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              El método: Plan 360
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cuatro pasos, sin letra chica. No necesitas contratarlo todo de una vez: empezamos por lo
              que resuelve tu situación más urgente.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {METHOD_STEPS.map((step) => (
              <ScrollReveal key={step.n} variant="scale" className="h-full">
                <div className="bg-card p-7 h-full">
                  <span className="font-heading font-extrabold text-3xl text-border leading-none block mb-4 select-none">
                    {step.n}
                  </span>
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setLeadOpen(true)}
              className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              Quiero mi diagnóstico
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Satisfacción / Beneficios */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Así se ve tu negocio después
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              El mismo negocio, con la tecnología resuelta.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <ScrollReveal key={b.title} delay={i * 60} variant="scale">
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <span className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-secondary" />
                    </span>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Conversamos sobre tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y encuentra el punto de partida ideal para tu caso.
              </p>
              <button
                onClick={() => setLeadOpen(true)}
                className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Quiero mi diagnóstico
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="py-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <img src={logo} alt="Independencia Digital" className="h-8 w-8 mx-auto mb-3" />
          <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed mb-3">
            Los resultados pueden variar según el estado actual de tu negocio, tus herramientas y tu nivel
            de participación. Independencia Digital SpA entrega servicios de consultoría, asesoría y
            mentoría tecnológica según el alcance contratado.
          </p>
          <p className="text-xs text-muted-foreground mb-2">
            © {new Date().getFullYear()} Independencia Digital
          </p>
          <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Volver al sitio principal
          </Link>
        </div>
      </footer>

      <LeadFormDialogView open={leadOpen} onOpenChange={setLeadOpen} source="landing-general" />
    </div>
  );
};

export default GeneralLandingView;
