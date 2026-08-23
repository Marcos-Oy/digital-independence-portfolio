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
];

// Una landing por cada uno de los 12 servicios, bajo /landing/servicio/ para no
// chocar con los slugs de las áreas (p. ej. el servicio "ia-corporativa"
// comparte slug con su área).
const SERVICE_LANDINGS: LandingMeta[] = SERVICES.map((s) => ({
  path: `/landing/servicio/${s.slug}`,
  title: s.shortTitle,
  summary: s.summary,
  status: "activa" as const,
}));

export const LANDINGS: LandingMeta[] = [...CORE_LANDINGS, ...SERVICE_LANDINGS];
