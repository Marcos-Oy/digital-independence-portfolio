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
];
