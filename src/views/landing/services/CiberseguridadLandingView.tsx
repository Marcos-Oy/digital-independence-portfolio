import {
  CheckCircle2,
  Clock3,
  Compass,
  Eye,
  FileWarning,
  RefreshCcw,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Siren,
  Users,
  XCircle,
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
import csRiesgo from "@/assets/ciberseguridad-riesgo.jpg";
import csDiferencial from "@/assets/ciberseguridad-diferencial.jpg";
import csResultado from "@/assets/ciberseguridad-resultado.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "Cualquiera de tu equipo podría caer en un correo de phishing bien armado, y hoy nadie está entrenado para detectarlo.",
  "No sabes con certeza si cumples con la Ley 19.628, ni qué exige realmente la nueva Ley Marco de Ciberseguridad.",
  "Tienes antivirus y firewall, pero cero formación humana contra ingeniería social.",
  "Si ocurriera un incidente mañana, nadie en tu equipo sabría exactamente qué hacer los primeros minutos.",
  "Información de clientes, financiera o estratégica podría estar más expuesta de lo que crees.",
  "Un ataque no solo compromete datos: puede detener tu operación completa por días.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, no es porque tu empresa sea descuidada. Es que la ciberseguridad real no se resuelve solo con herramientas: requiere estrategia, procesos y personas preparadas.";

const RIGHT_CLIENT_TEXT =
  "Desde el dueño de PyME sin controles básicos hasta la empresa con certificaciones pero sin seguridad real en las personas: cualquier organización que maneja información, procesos o continuidad que no puede permitirse perder.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Users,
    title: "El eslabón humano",
    desc: "La mayoría de los ataques no vulneran la tecnología: engañan a una persona.",
  },
  {
    icon: FileWarning,
    title: "Sin gestión de riesgo",
    desc: "Sin un diagnóstico real, no sabes qué proteger primero ni cuánto estás exponiendo.",
  },
  {
    icon: Siren,
    title: "Sin plan de respuesta",
    desc: "Cuando ocurre un incidente, no saber qué hacer multiplica el daño.",
  },
];

interface SolutionConcept {
  icon: typeof Search;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Search,
    title: "Diagnóstico",
    desc: "Identificamos activos, riesgos, vulnerabilidades y brechas reales.",
  },
  {
    icon: Compass,
    title: "Estrategia",
    desc: "Priorizamos según el impacto real para tu organización, no según catálogo.",
  },
  {
    icon: ShieldCheck,
    title: "Protección",
    desc: "Implementamos medidas técnicas, organizacionales y humanas.",
  },
  {
    icon: Siren,
    title: "Respuesta",
    desc: "Preparamos procedimientos para detectar, contener y responder ante incidentes.",
  },
];

const INCLUDES = [
  "Auditoría técnica y controles",
  "Formación contra phishing e ingeniería social",
  "Cumplimiento ISO 27001 y Ley 19.628",
  "Ciberseguridad industrial OT/ICS",
  "Módulos diferenciales: infantil y de género",
];

interface MethodStep {
  n: string;
  icon: typeof Search;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "¿Qué tienes y qué debes proteger? Identificamos activos, riesgos y vulnerabilidades.",
  },
  {
    n: "02",
    icon: CheckCircle2,
    title: "Priorización",
    desc: "¿Qué riesgos requieren atención primero, según su probabilidad e impacto real?",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Implementación",
    desc: "¿Qué debemos cambiar, configurar o desarrollar para reducir tu exposición?",
  },
  {
    n: "04",
    icon: RefreshCcw,
    title: "Mejora continua",
    desc: "¿Cómo mantenemos y mejoramos la seguridad a medida que las amenazas evolucionan?",
  },
];

interface Benefit {
  icon: typeof Search;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    title: "Tu equipo sabe reconocer un ataque",
    desc: "Formación real contra phishing e ingeniería social, no una charla una vez al año.",
  },
  {
    icon: Search,
    title: "Sabes exactamente qué proteger primero",
    desc: "Un diagnóstico que prioriza según el impacto real para tu negocio.",
  },
  {
    icon: Siren,
    title: "Un plan si algo falla",
    desc: "Procedimientos claros para detectar, contener y responder ante un incidente.",
  },
  {
    icon: Scale,
    title: "Preparación frente a la normativa chilena",
    desc: "Alineado con la Ley 19.628, la nueva Ley Marco de Ciberseguridad y estándares como ISO 27001 cuando corresponde.",
  },
];

interface TrustPoint {
  icon: typeof Search;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Compass,
    title: "Estrategia, no catálogo",
    desc: "Priorizamos según riesgo real, no según lo que sea más fácil de vender.",
  },
  {
    icon: Eye,
    title: "Contexto",
    desc: "Consideramos la realidad concreta de tu organización.",
  },
  {
    icon: Shield,
    title: "Prevención",
    desc: "Trabajamos antes de que ocurra el incidente, no después.",
  },
];

const PROMISE_TEXT =
  "Una postura de seguridad real: controles técnicos activos, tu equipo formado para detectar ataques de ingeniería social y un plan documentado para cuando algo falle (no una checklist genérica).";

/* ------------------------------ view ------------------------------ */

const CiberseguridadLandingView = () => {
  useLandingController("Ciberseguridad, Gestión y Estrategia | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Ciberseguridad, Gestión y Estrategia | Independencia Digital"
        description="Diagnóstico, gestión de riesgos, formación contra phishing y alineamiento con la Ley 19.628, la Ley Marco de Ciberseguridad e ISO 27001. Diagnóstico sin costo."
        path="/landing/servicio/ciberseguridad"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Shield}
          mode="unlock"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Ciberseguridad, Gestión y Estrategia, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Tu empresa puede tener antivirus, firewall y contraseñas seguras, y aun así
            estar expuesta.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diseñamos una estrategia de ciberseguridad real: gestionamos el riesgo en tus
            sistemas, tus procesos y tus personas, antes de que ocurra un incidente.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("ciberseguridad")} />
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
                El mayor riesgo no siempre es el ataque. Es no estar preparado
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                El riesgo no vive solo en la tecnología. Vive en las personas que hacen
                clic en el correo equivocado, en los procesos que nadie documentó, en los
                proveedores con acceso a tus sistemas y en la falta de un plan para cuando
                algo falla. Una organización puede invertir en herramientas de seguridad y
                seguir completamente expuesta, porque nadie evaluó el riesgo real ni
                preparó una respuesta.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={csRiesgo}
                alt="Organización representada como sistemas digitales interconectados con puntos de exposición al riesgo"
                width={1536}
                height={1024}
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
                src={csDiferencial}
                alt="Personas usando dispositivos digitales de forma segura, con autonomía y privacidad"
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
                Una estrategia de seguridad construida alrededor de tu realidad
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No vendemos herramientas por catálogo. Evaluamos tu contexto, tus riesgos
                y tu nivel de exposición real antes de definir qué medidas tienen sentido:
                auditoría técnica, formación de tu equipo contra phishing e ingeniería
                social, y alineamiento con la normativa chilena y estándares como ISO
                27001 cuando corresponde.
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

          <div>
            <ScrollReveal className="text-center mb-12">
              <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground mb-3 leading-tight">
                Cómo lo hacemos
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Cuatro etapas, sin letra chica. Un proceso pensado para reducir riesgo real.
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
              Más que proteger sistemas: reducir incertidumbre
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
                src={csResultado}
                alt="Centro de operaciones de seguridad con indicadores de riesgo, cumplimiento y continuidad en monitores"
                width={1536}
                height={1024}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20 max-w-3xl mx-auto mb-14">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
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
                ¿Sabes realmente qué tan preparado está tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico y conversemos sobre tu nivel de exposición, los
                riesgos prioritarios y las acciones que fortalecerían tu seguridad.
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

export default CiberseguridadLandingView;
