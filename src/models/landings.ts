export interface LandingMeta {
  slug: string;
  title: string;
  summary: string;
  status: "activa" | "borrador";
}

export const LANDINGS: LandingMeta[] = [
  {
    slug: "general",
    title: "Independencia Digital General",
    summary:
      "Landing principal de captación con el VSL de Marcos Oyarzo: diagnóstico, arquitectura TI, ciberseguridad, automatización e IA.",
    status: "activa",
  },
  {
    slug: "estrategia-direccion-ti",
    title: "Estrategia y Dirección TI",
    summary:
      "Arquitectura TI, transformación digital, dirección de TI, dashboards y consolidación de bases de datos.",
    status: "activa",
  },
  {
    slug: "optimizacion-costos",
    title: "Optimización y Costos TI",
    summary: "Reducción de costos TI y soporte técnico gestionado con SLA.",
    status: "activa",
  },
  {
    slug: "desarrollo-presencia",
    title: "Desarrollo y Presencia Digital",
    summary:
      "Presencia digital, desarrollo de software, marketing digital e integración de plataformas.",
    status: "activa",
  },
  {
    slug: "seguridad-inteligencia",
    title: "Seguridad e Inteligencia Tecnológica",
    summary: "Ciberseguridad técnica y humana, cumplimiento normativo y vigilancia tecnológica.",
    status: "activa",
  },
  {
    slug: "ia-corporativa",
    title: "Inteligencia Artificial Corporativa",
    summary: "Agentes de IA, automatización de procesos y clones digitales.",
    status: "activa",
  },
];
