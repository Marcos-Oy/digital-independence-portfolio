import type { ServiceArea } from "@/models/services";

export interface AreaLandingContent {
  eyebrow: string;
  headline: string;
  subtext: string;
  painReframe: string;
  rightClient: string;
  // Placeholder hasta tener un VSL grabado específico para esta área.
  wistiaMediaId: string;
}

const SHARED_VSL = "68c4rkopry";

export const AREA_LANDING_CONTENT: Record<ServiceArea, AreaLandingContent> = {
  "estrategia-direccion-ti": {
    eyebrow: "Estrategia y Dirección TI, Independencia Digital",
    headline: "Ordena y dirige la estrategia tecnológica de tu negocio",
    subtext:
      "Arquitectura TI, transformación digital, dirección de TI, dashboards y datos consolidados en un solo lugar.",
    painReframe:
      "Si algo de esto te resulta familiar, no es porque no sepas de tecnología. Es porque nadie ha dirigido tu estrategia tecnológica como un sistema completo: arquitectura, datos y decisiones dispersas en vez de trabajar juntas.",
    rightClient:
      "Dueños y gerentes de PyMEs, empresas u organismos públicos que sienten su tecnología desordenada, sin dirección clara ni datos confiables para decidir.",
    wistiaMediaId: SHARED_VSL,
  },
  "optimizacion-costos": {
    eyebrow: "Optimización y Costos TI, Independencia Digital",
    headline: "Gasta menos en tecnología sin perder rendimiento",
    subtext:
      "Auditoría de costos TI y soporte técnico mensual con SLA, para que sepas exactamente en qué se va tu inversión.",
    painReframe:
      "Si algo de esto te resulta familiar, no es porque gestiones mal tu presupuesto. Es porque nadie ha auditado a fondo en qué se te está yendo la plata en tecnología, ni te ha dado soporte con reglas claras.",
    rightClient:
      "Dueños y gerentes que sienten que gastan de más en tecnología, o que necesitan soporte técnico continuo y predecible sin armar un equipo TI interno.",
    wistiaMediaId: SHARED_VSL,
  },
  "desarrollo-presencia": {
    eyebrow: "Desarrollo y Presencia Digital, Independencia Digital",
    headline: "Una presencia digital y sistemas que realmente venden",
    subtext:
      "Sitios web, software a medida, marketing digital e integración de plataformas, todo con criterio técnico.",
    painReframe:
      "Si algo de esto te resulta familiar, no es porque no sepas de marketing o tecnología. Es porque tu presencia digital y tus sistemas se construyeron por separado, sin nadie que los hiciera trabajar juntos.",
    rightClient:
      "Emprendedores y PyMEs sin presencia digital profesional, con procesos en Excel que no escalan, o que invierten en publicidad sin saber si realmente funciona.",
    wistiaMediaId: SHARED_VSL,
  },
  "seguridad-inteligencia": {
    eyebrow: "Seguridad e Inteligencia Tecnológica, Independencia Digital",
    headline: "Protege tu negocio antes de que el problema te encuentre a ti",
    subtext:
      "Ciberseguridad técnica y humana, cumplimiento normativo y vigilancia tecnológica continua.",
    painReframe:
      "Si algo de esto te resulta familiar, no es porque hayas sido negligente. Es porque la ciberseguridad real, técnica y humana, y la vigilancia tecnológica casi nunca se hacen a tiempo, solo después del primer susto.",
    rightClient:
      "Desde el dueño de PyME sin controles básicos de seguridad hasta el gerente que necesita información tecnológica estructurada, no solo opinión, para decidir.",
    wistiaMediaId: SHARED_VSL,
  },
  "ia-corporativa": {
    eyebrow: "Inteligencia Artificial Corporativa, Independencia Digital",
    headline: "Automatiza y libera a tu equipo del trabajo repetitivo",
    subtext:
      "Agentes de IA con memoria, automatización de procesos y clones digitales operando tu negocio.",
    painReframe:
      "Si algo de esto te resulta familiar, no es porque tu negocio no esté listo para la IA. Es porque nadie ha diagnosticado qué procesos automatizar primero ni cómo conectar la IA de verdad a tu operación.",
    rightClient:
      "PyMEs y empresas con procesos definidos pero ejecutados a mano, listas para liberar a su equipo del trabajo manual repetitivo con IA y automatización.",
    wistiaMediaId: SHARED_VSL,
  },
};
