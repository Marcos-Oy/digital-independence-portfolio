import { SERVICES } from "@/models/services";

export interface LandingMeta {
  path: string;
  title: string;
  summary: string;
  status: "activa" | "borrador";
}

const CORE_LANDINGS: LandingMeta[] = [
  {
    path: "/landing/general",
    title: "Independencia Digital General",
    summary:
      "Landing principal de captación con el VSL de Marcos Oyarzo: diagnóstico, arquitectura TI, ciberseguridad, automatización e IA.",
    status: "activa",
  },
  {
    path: "/landing/estrategia-direccion-ti",
    title: "Estrategia y Dirección TI",
    summary:
      "Arquitectura TI, transformación digital, dirección de TI, dashboards y consolidación de bases de datos.",
    status: "activa",
  },
  {
    path: "/landing/optimizacion-costos",
    title: "Optimización y Costos TI",
    summary: "Reducción de costos TI y soporte técnico gestionado con SLA.",
    status: "activa",
  },
  {
    path: "/landing/desarrollo-presencia",
    title: "Desarrollo y Presencia Digital",
    summary:
      "Presencia digital, desarrollo de software, marketing digital e integración de plataformas.",
    status: "activa",
  },
  {
    path: "/landing/seguridad-inteligencia",
    title: "Seguridad e Inteligencia Tecnológica",
    summary: "Ciberseguridad técnica y humana, cumplimiento normativo y vigilancia tecnológica.",
    status: "activa",
  },
  {
    path: "/landing/ia-corporativa",
    title: "Inteligencia Artificial Corporativa",
    summary: "Agentes de IA, automatización de procesos y clones digitales.",
    status: "activa",
  },
];

// Una landing por cada uno de los 15 servicios, bajo /landing/servicio/ para no
// chocar con los slugs de las áreas (p. ej. el servicio "ia-corporativa"
// comparte slug con su área).
const SERVICE_LANDINGS: LandingMeta[] = SERVICES.map((s) => ({
  path: `/landing/servicio/${s.slug}`,
  title: s.shortTitle,
  summary: s.summary,
  status: "activa" as const,
}));

export const LANDINGS: LandingMeta[] = [...CORE_LANDINGS, ...SERVICE_LANDINGS];
