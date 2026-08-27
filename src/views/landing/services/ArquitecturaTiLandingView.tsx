import {
  AtSign,
  BookOpenCheck,
  Boxes,
  CheckCircle2,
  Cloud,
  Compass,
  FileSearch,
  FileStack,
  KeyRound,
  Layers,
  LifeBuoy,
  Server,
  ServerCog,
  ShieldCheck,
  UserCog,
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
import arqProblema from "@/assets/services/arq-problema.jpg";
import arqSolucion from "@/assets/services/arq-solucion.jpg";
import arqResultado from "@/assets/services/arq-resultado.jpg";

/* ------------------------------ content ------------------------------ */

const PAIN_POINTS = [
  "No tienes un mapa de qué cuentas, dominios y accesos existen en tu negocio, ni quién los controla realmente.",
  "Si se va un colaborador clave mañana, nadie sabe qué contraseñas o sistemas manejaba.",
  "Tu correo, tu nube y tu hosting quedaron configurados por distintas personas, en distintos momentos, sin ningún criterio en común.",
  "Hay herramientas que se fueron sumando con el tiempo y nadie evaluó si realmente eran las más adecuadas para tu negocio.",
  "Si algo falla hoy, nadie sabe exactamente qué es, dónde está ni cómo se recupera.",
  "Personas que ya no trabajan contigo todavía tienen acceso a cosas que deberían haber perdido hace tiempo.",
];

const PAIN_REFRAME =
  "Si te reconociste en alguna de estas situaciones, tu negocio no tiene un problema de tecnología. Tiene un problema de diseño: nadie construyó tu ecosistema digital a propósito, se fue armando solo.";

const RIGHT_CLIENT_TEXT =
  "Dueños de PyME o gerentes con tecnología desordenada, accesos perdidos entre personas que ya no están, y sin ninguna documentación de cómo funciona todo.";

interface RootCause {
  icon: typeof Boxes;
  title: string;
  desc: string;
}

const ROOT_CAUSES: RootCause[] = [
  {
    icon: Boxes,
    title: "Decisiones sueltas",
    desc: "Cada herramienta se contrató para resolver un problema puntual, sin pensar en cómo se conecta con el resto.",
  },
  {
    icon: KeyRound,
    title: "Accesos sin dueño",
    desc: "Nadie asignó un responsable claro a cada cuenta, contraseña o sistema del negocio.",
  },
  {
    icon: FileSearch,
    title: "Cero documentación",
    desc: "Lo que existe vive en la cabeza de una o dos personas, no en un registro que cualquiera pueda consultar.",
  },
];

interface SolutionConcept {
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const SOLUTION_CONCEPTS: SolutionConcept[] = [
  {
    icon: FileSearch,
    title: "Diagnóstico previo",
    desc: "Antes de proponer nada, entendemos cómo opera tu negocio y qué tienes hoy.",
  },
  {
    icon: Compass,
    title: "Selección justificada",
    desc: "Cada herramienta se elige por lo que aporta a tu operación, no por tendencia.",
  },
  {
    icon: ServerCog,
    title: "Configuración completa",
    desc: "No solo se instala: se configura, se protege, se conecta y se valida.",
  },
  {
    icon: BookOpenCheck,
    title: "Documentación y control",
    desc: "Todo queda registrado: qué hay, quién lo controla y cómo se recupera.",
  },
];

const INCLUDES = [
  "Google Workspace o Microsoft 365 (usuarios, permisos, seguridad)",
  "Cloudflare: DNS, CDN, protección DDoS, SSL y firewall",
  "Hosting con Hostinger (compartido o VPS)",
  "SQL avanzado y modelado de datos",
  "Documentación completa del ecosistema",
  "Selección de herramientas por negocio",
];

interface EcosystemArea {
  icon: typeof AtSign;
  title: string;
  desc: string;
}

// Cada área del ecosistema hecha concreta, para que se entienda qué significa
// "arquitectura tecnológica" en la práctica, no solo como concepto.
const ECOSYSTEM_AREAS: EcosystemArea[] = [
  {
    icon: AtSign,
    title: "Identidad y dominio",
    desc: "Correo corporativo, DNS, certificados SSL y protección contra suplantación.",
  },
  {
    icon: Cloud,
    title: "Hosting e infraestructura",
    desc: "Servidor o nube, backups, monitoreo y capacidad según tu volumen de negocio.",
  },
  {
    icon: KeyRound,
    title: "Accesos y gobierno",
    desc: "Usuarios, roles, contraseñas y políticas de acceso completamente documentadas.",
  },
  {
    icon: Boxes,
    title: "Ecosistema de herramientas",
    desc: "Comunicación, productividad, almacenamiento e integración entre plataformas.",
  },
];

interface MethodStep {
  n: string;
  icon: typeof FileSearch;
  title: string;
  desc: string;
}

const METHOD_STEPS: MethodStep[] = [
  {
    n: "01",
    icon: FileSearch,
    title: "Diagnóstico sin costo",
    desc: "Revisamos qué existe hoy: herramientas, cuentas, accesos, dominios y contratos.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Diseño del ecosistema",
    desc: "Definimos qué mantener, qué cambiar y qué incorporar, según tu tamaño y operación.",
  },
  {
    n: "03",
    icon: ServerCog,
    title: "Implementación",
    desc: "Configuramos cada componente, lo conectamos con el resto y lo validamos antes de entregar.",
  },
  {
    n: "04",
    icon: BookOpenCheck,
    title: "Documentación y entrega",
    desc: "Todo queda registrado y tú quedas con el control total, no nosotros.",
  },
];

interface Benefit {
  icon: typeof FileStack;
  title: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: FileStack,
    title: "Sabes exactamente qué tienes",
    desc: "Un inventario completo y actualizado de todo lo que compone tu infraestructura digital.",
  },
  {
    icon: UserCog,
    title: "Sabes quién controla cada cosa",
    desc: "Cada herramienta, cuenta y acceso tiene un responsable definido, no depende de la memoria de alguien.",
  },
  {
    icon: Compass,
    title: "Todo con un mismo criterio",
    desc: "Ya no queda tecnología configurada por distintas personas, en distintos momentos, sin coherencia.",
  },
  {
    icon: LifeBuoy,
    title: "Sabes qué hacer si algo falla",
    desc: "Cada componente está documentado con su procedimiento de recuperación.",
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
    title: "Diagnóstico primero",
    desc: "No proponemos nada antes de entender qué existe y cómo opera tu negocio.",
  },
  {
    icon: Compass,
    title: "Criterio, no catálogo",
    desc: "Cada herramienta se elige según tu necesidad real, no según lo que está de moda.",
  },
  {
    icon: ShieldCheck,
    title: "El control queda contigo",
    desc: "El objetivo es que seas completamente independiente, no que dependas de nosotros para operar.",
  },
];

const PROMISE_TEXT =
  "Infraestructura tecnológica completamente ordenada, documentada y bajo tu control directo, con cada herramienta seleccionada según tu negocio real.";

/* ------------------------------ view ------------------------------ */

const ArquitecturaTiLandingView = () => {
  useLandingController("Arquitectura TI | Independencia Digital");

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Arquitectura TI | Independencia Digital"
        description="Diseñamos y documentamos el ecosistema tecnológico completo de tu negocio: correo, dominio, hosting, accesos y herramientas. Diagnóstico sin costo."
        path="/landing/servicio/arquitectura-ti"
        noindex
      />
      <LandingHeader />

      {/* ============ HOOK ============ */}
      <section className="relative gradient-hero pt-16 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <ParticleNetworkBackground className="absolute inset-0 w-full h-full" density={50} />
        <ScrollContextIcon
          icon={Server}
          mode="rotate"
          className="absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 text-primary/[0.14]"
        />
        <AccentBlob shape={3} color="secondary" className="absolute w-10 h-8 top-[16%] left-[8%] opacity-80 animate-float-slow" />
        <div className="relative container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            <TypewriterText text="Arquitectura TI, Independencia Digital" speed={30} />
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground leading-tight tracking-tight mb-5 max-w-3xl mx-auto">
            Si hoy se va la persona que sabe cómo funciona tu tecnología, ¿alguien más podría hacerla funcionar?
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Diseñamos y documentamos el ecosistema tecnológico completo de tu negocio:
            correo, dominio, hosting, accesos y herramientas, para que sepas exactamente
            qué tienes y quién lo controla.
          </p>
        </div>

        <ScrollReveal className="container mx-auto px-4 max-w-3xl mt-12" variant="scale">
          <WistiaEmbed mediaId={getServiceLandingWistiaId("arquitectura-ti")} />
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
                Cada negocio tiene una base tecnológica. Casi ninguno la diseñó a propósito
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                Alguien configuró el correo en algún momento. Alguien registró el
                dominio. Alguien contrató el hosting. Cada decisión se tomó por separado,
                resolviendo un problema puntual, sin que existiera un plan detrás. El
                resultado es un ecosistema que funciona por acumulación, no por diseño:
                nadie lo armó pensando en el negocio completo, y por eso nadie puede
                explicarlo completo tampoco.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={120} variant="scale">
              <img
                src={arqProblema}
                alt="Dueño de negocio revisando accesos y documentación tecnológica desordenada en su oficina"
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
        <AccentBlob shape={2} className="hidden md:block w-9 h-12 bottom-12 left-[6%] opacity-70" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal variant="scale" className="order-last lg:order-first">
              <img
                src={arqSolucion}
                alt="Consultores TI implementando un ecosistema tecnológico ordenado y documentado para una empresa"
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
                Diseñamos tu ecosistema tecnológico y lo dejamos completamente documentado
              </h2>
              <p className="text-foreground/90 leading-relaxed mb-8">
                Revisamos lo que tienes o lo construimos desde cero. Seleccionamos las
                herramientas adecuadas para tu tamaño, tu operación y tu presupuesto,
                configuramos cada componente y documentamos todo: qué hay, quién lo
                controla, cómo se accede y cómo se recupera si algo falla.
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
                Cada componente de tu ecosistema, bajo control
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                "Arquitectura tecnológica" hecho concreto, no un concepto abstracto.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {ECOSYSTEM_AREAS.map((ex, i) => (
                <ScrollReveal key={ex.title} delay={i * 60}>
                  <div className="bg-card border border-border rounded-2xl p-5 h-full">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 items-center justify-center mb-3">
                      <ex.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.7} />
                    </span>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1.5">
                      {ex.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ex.desc}</p>
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
                Cuatro etapas, sin letra chica. No hace falta empezar de cero si lo que tienes ya sirve.
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
              Un ecosistema con dueño, no una acumulación de herramientas
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
                src={arqResultado}
                alt="Equipo de negocio trabajando con confianza sobre una base tecnológica gobernada"
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
                  <Server className="w-5 h-5 text-secondary" />
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
                ¿Sabes exactamente sobre qué tecnología está corriendo tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y revisemos qué tienes, cómo está
                configurado y qué se necesita para tener un ecosistema bajo control.
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

export default ArquitecturaTiLandingView;
