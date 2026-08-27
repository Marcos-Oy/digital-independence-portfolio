import {
  BookOpenCheck,
  Building2,
  CheckCircle2,
  Clock3,
  FileSearch,
  GitBranch,
  Layers,
  Network,
  ScanSearch,
  Search,
  ShieldCheck,
  Target,
  UserCog,
  UserSearch,
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
import dtProblema from "@/assets/services/dt-problema.jpg";
import dtSolucion from "@/assets/services/dt-solucion.jpg";
import dtResultado from "@/assets/services/dt-resultado.jpg";

/* ------------------------------ content ------------------------------ */

// Dolor: específico y verosímil, no genérico.
const PAIN_POINTS = [
  "Las decisiones de tecnología las toma quien \"sabe más de computadores\", no quien debería evaluarlas con criterio de negocio.",
  "Cada área (marketing, ventas, operaciones) eligió sus propias herramientas, y hoy nadie sabe muy bien por qué existen todas.",
  "Sabes que necesitas dirección tecnológica, pero contratar un CTO a tiempo completo hoy no es viable para tu presupuesto.",
  "Si ya tienes un equipo técnico interno, trabaja resolviendo tickets, no definiendo hacia dónde debería ir la tecnología de la empresa.",
  "Cuando hay que evaluar un proveedor o una herramienta nueva, la decisión se toma rápido y sin comparar alternativas, porque nadie tiene tiempo de hacerlo bien.",
  "El negocio creció, pero la forma de tomar decisiones tecnológicas se quedó del tamaño de cuando eran cinco personas.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, el problema no es falta de talento técnico. Es que nadie está mirando la tecnología con perspectiva de negocio y responsabilidad continua.";

const RIGHT_CLIENT_TEXT =
  "Dueños y gerentes de empresas en crecimiento que necesitan dirección tecnológica real, pero que todavía no tienen el volumen ni el presupuesto para contratar un Director de Tecnología a tiempo completo.";

interface RootCause {
  icon: typeof Clock3;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: ScanSearch,
    title: "Decisiones reactivas",
    desc: "Sin dirección, la tecnología se gestiona apagando incendios, no anticipando problemas.",
  },
  {
    icon: Layers,
    title: "Herramientas sin criterio común",
    desc: "Cada área elige lo que le sirve a corto plazo, sin pensar en cómo eso encaja con el resto del negocio.",
  },
  {
    icon: UserCog,
    title: "El techo del presupuesto",
    desc: "Contratar un Director de Tecnología a tiempo completo es un salto de costo que muchas empresas en crecimiento todavía no pueden dar.",
  },
];

interface SolutionConcept {
  icon: typeof Target;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: Target,
    title: "Decisiones estratégicas",
    desc: "Participamos en las decisiones tecnológicas relevantes, no solo en la ejecución.",
  },
  {
    icon: Layers,
    title: "Estructura real",
    desc: "Definimos roles, procesos y responsabilidades para que el área TI funcione con criterio.",
  },
  {
    icon: Network,
    title: "Stack coherente",
    desc: "Seleccionamos y estandarizamos las herramientas que tiene sentido usar según tu negocio.",
  },
  {
    icon: UserSearch,
    title: "Talento con criterio",
    desc: "Si necesitas contratar, definimos el perfil y evaluamos candidatos con criterio técnico real.",
  },
];

const INCLUDES = [
  "Roles y responsabilidades del área TI",
  "Procesos internos y políticas",
  "Stack tecnológico estandarizado",
  "Dirección estratégica activa",
  "Perfiles TI y criterios de evaluación",
  "Onboarding tecnológico de colaboradores",
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
    title: "Diagnóstico sin costo",
    desc: "Revisamos el estado actual: decisiones tomadas, herramientas en uso, roles existentes y brechas de dirección.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Diseño del área",
    desc: "Definimos cómo debería estar organizada la función TI: roles, procesos y stack.",
  },
  {
    n: "03",
    icon: Target,
    title: "Dirección continua",
    desc: "Empezamos a participar en las decisiones tecnológicas del negocio mes a mes.",
  },
  {
    n: "04",
    icon: UserSearch,
    title: "Evolución y talento",
    desc: "Ajustamos la dirección según el crecimiento del negocio y acompañamos la contratación de tu equipo interno cuando llega el momento.",
  },
];

interface Benefit {
  icon: typeof Target;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Target,
    title: "Decisiones con criterio estratégico",
    desc: "Cada decisión tecnológica se evalúa con perspectiva de negocio, no solo técnica.",
  },
  {
    icon: Layers,
    title: "Un área TI con estructura",
    desc: "Roles, procesos y responsabilidades claros, no una lista de tareas sueltas.",
  },
  {
    icon: ShieldCheck,
    title: "Dirección sin el costo de un CTO full-time",
    desc: "Tienes dirección estratégica continua, ajustada a lo que tu presupuesto puede sostener hoy.",
  },
  {
    icon: UserSearch,
    title: "Contrataciones TI con criterio real",
    desc: "Cuando llega el momento de construir tu equipo interno, sabes exactamente qué perfil necesitas.",
  },
];

interface TrustPoint {
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const TRUST_POINTS: TrustPoint[] = [
  {
    icon: FileSearch,
    title: "Conocemos tu negocio, no solo tu tecnología",
    desc: "La dirección tecnológica requiere entender cómo opera tu empresa, no solamente qué sistemas usa.",
  },
  {
    icon: ShieldCheck,
    title: "Independencia de proveedor",
    desc: "No representamos a ninguna plataforma ni recibimos comisiones por recomendar herramientas.",
  },
  {
    icon: GitBranch,
    title: "Transición planificada",
    desc: "El objetivo es que tu negocio llegue a tener su propio equipo TI cuando el momento sea el correcto.",
  },
];

const PROMISE_TEXT =
  "Un área TI estructurada, con procesos documentados y dirección estratégica activa trabajando junto a tu negocio (no un consultor que aparece una vez al mes sin contexto).";

/* ------------------------------ view ------------------------------ */

const DireccionTiLandingView = () => {
  useLandingController("Dirección de Departamento TI y Talento | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Dirección de Departamento TI y Talento | Independencia Digital"
        description="Actuamos como tu Director de Tecnología externo: roles, stack y decisiones estratégicas continuas, sin el costo de un CTO a tiempo completo. Diagnóstico sin costo."
        path="/landing/servicio/direccion-ti"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Building2}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={4} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Dirección de Departamento TI y Talento, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Alguien en tu empresa está tomando decisiones de tecnología que no debería estar tomando solo.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Actuamos como tu Director de Tecnología externo: definimos roles, stack y hoja de
            ruta, y tomamos decisiones estratégicas contigo mes a mes. Sin el costo de un CTO
            a tiempo completo.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("direccion-ti")} />
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
                Ninguna empresa decide no tener dirección tecnológica. Simplemente nunca la
                contrató
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                En la mayoría de las empresas, las decisiones tecnológicas empezaron
                tomándolas quien tenía más maña con los computadores. Funcionó cuando el
                negocio era chico. Pero a medida que crece, esas mismas decisiones (qué
                herramientas usar, a quién contratar, cómo organizar el área) empiezan a
                tener consecuencias reales: dinero mal gastado, herramientas que no se
                hablan entre sí, y un equipo técnico, si existe, que reacciona a problemas
                en vez de anticiparlos. Nadie decidió que fuera así. Simplemente nunca se
                destinó presupuesto para dirigir la tecnología con criterio, porque
                contratar un CTO a tiempo completo parecía prematuro.
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
                src={dtSolucion}
                alt="Director de tecnología fraccional guiando al equipo en una reunión estratégica"
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
                Actuamos como tu Director de Tecnología externo, sin el costo de uno a
                tiempo completo
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                No enviamos a alguien a resolver tickets. Asumimos el rol de Director de
                Tecnología: definimos los roles y procesos que debería tener tu área TI,
                seleccionamos un stack coherente, y tomamos decisiones estratégicas contigo
                de forma continua. Si necesitas contratar talento TI, también te ayudamos a
                definir el perfil, evaluar candidatos y guiar su incorporación.
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
                Cuatro etapas, sin letra chica. Un servicio continuo, no una consultoría puntual.
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
              Decisiones tecnológicas con criterio, no con improvisación
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
                src={dtResultado}
                alt="Equipo directivo avanzando con una hoja de ruta tecnológica clara"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="scale">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20 max-w-3xl mx-auto mb-14">
              <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
                <span className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-5">
                  <Building2 className="w-5 h-5 text-secondary" />
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
                ¿Quién está tomando las decisiones tecnológicas de tu empresa ahora mismo?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Cuéntanos cómo está organizada tu área TI hoy. Te decimos, sin compromiso,
                qué falta para que tenga dirección real.
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

export default DireccionTiLandingView;
