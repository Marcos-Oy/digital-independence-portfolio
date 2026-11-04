import ScrollReveal from "@/views/shared/ScrollReveal";
import { ClipboardCheck, FileSearch, Layers, Scale, ShieldCheck, Siren, BookOpenText, Radar } from "lucide-react";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";

type Variant = "ciberseguridad" | "ia";

export const AI_GOVERNANCE_SERVICES = [
  {
    icon: Layers,
    title: "Sistema de Gestión de IA (ISO/IEC 42001)",
    text: "Diseño e implementación de un AIMS: contexto, política de IA, roles, inventario de sistemas, 38 controles del Anexo A y declaración de aplicabilidad, listo para certificación externa.",
    tag: "ISO/IEC 42001",
  },
  {
    icon: Radar,
    title: "Gestión del riesgo de IA (ISO/IEC 23894)",
    text: "Identificación, análisis y tratamiento de riesgos propios de la IA: sesgo, alucinaciones, deriva del modelo, opacidad y uso indebido, integrados a tu gestión de riesgos corporativa.",
    tag: "ISO/IEC 23894",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad de sistemas de IA (ISO/IEC 27090)",
    text: "Protección frente a inyección de prompts, envenenamiento de datos, robo de modelos, modelos maliciosos en repositorios y fugas de información a través de asistentes de IA.",
    tag: "ISO/IEC 27090",
  },
  {
    icon: Scale,
    title: "Evaluación de impacto de IA y EIPD (Ley 21.719)",
    text: "Evaluación de impacto del sistema de IA sobre personas y Evaluación de Impacto en la Protección de Datos (PIA/EIPD) conforme a la Ley N.º 21.719 de Chile.",
    tag: "AIIA · EIPD",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría interna de IA y preparación a certificación",
    text: "Auditoría con evidencias, hallazgos y no conformidades, análisis de causa raíz y plan de acción para llegar preparado a la auditoría de certificación de etapa 1 y 2.",
    tag: "Auditoría",
  },
  {
    icon: FileSearch,
    title: "Integración SGSI + AIMS (ISO/IEC 27001)",
    text: "Usamos ISO/IEC 27001 como cimiento y lo integramos con 42001 y la gestión de privacidad, evitando duplicar políticas, procesos y documentación.",
    tag: "ISO/IEC 27001",
  },
  {
    icon: Siren,
    title: "Fraude con IA y deepfakes",
    text: "Prevención de fraudes por suplantación con voz y video sintéticos, protocolos de verificación y respuesta a incidentes con alerta temprana según la Ley 21.663.",
    tag: "Ley 21.663",
  },
  {
    icon: BookOpenText,
    title: "Gobernanza y uso responsable de la IA",
    text: "Políticas de uso de IA, comité de gobernanza, terminología común (ISO/IEC 22989) y alineamiento con el EU AI Act para empresas que operan con Europa.",
    tag: "ISO/IEC 22989 · AI Act",
  },
];

const COPY: Record<Variant, { pill: string; title: string; text: string }> = {
  ciberseguridad: {
    pill: "Ciberseguridad de la IA",
    title: "Gobernanza, auditoría y ciberseguridad de la inteligencia artificial",
    text: "Si tu organización ya usa o desarrolla IA, también necesita protegerla y gobernarla. Implementamos y auditamos las normas ISO/IEC que hoy definen cómo se gestiona una IA segura y confiable, alineadas con el marco legal chileno.",
  },
  ia: {
    pill: "IA confiable y certificable",
    title: "Gobernanza, riesgo y cumplimiento de tu IA corporativa",
    text: "Implementar IA no termina en el agente. Te ayudamos a gobernarla, evaluar su impacto y prepararla para certificación ISO/IEC 42001, protegiendo datos personales y cumpliendo la Ley 21.719.",
  },
};

const AiGovernanceServicesSection = ({ variant }: { variant: Variant }) => {
  const c = COPY[variant];
  return (
    <section id="gobernanza-ia" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
              {c.pill}
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">{c.title}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AI_GOVERNANCE_SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 hover:border-secondary/50 hover:shadow-brand transition-all">
                <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-[10px] font-heading font-bold uppercase tracking-wide text-secondary">{s.tag}</span>
                <h3 className="font-heading font-bold text-base text-foreground mt-1 mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
          No somos organismo certificador: preparamos a tu organización y la certificación la otorga una entidad acreditada independiente.
        </p>
        <div className="text-center mt-6">
          <button className={`${BOOKING_TRIGGER_CLASS} inline-flex items-center gap-2 font-heading font-bold text-sm px-7 py-3.5 rounded-full gradient-brand text-primary-foreground shadow-brand hover:opacity-90 transition-all`}>
            Quiero gobernar mi IA
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiGovernanceServicesSection;
