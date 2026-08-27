// Placeholder hasta tener un VSL grabado específico por servicio.
export const SERVICE_LANDING_WISTIA_ID = "68c4rkopry";

// VSL específico por servicio: sobrescribe el placeholder de arriba solo
// para los servicios que ya tienen su video grabado.
const SERVICE_LANDING_WISTIA_OVERRIDES: Record<string, string> = {
  "desarrollo-software": "ukdtz42bwp",
};

export const getServiceLandingWistiaId = (slug: string): string =>
  SERVICE_LANDING_WISTIA_OVERRIDES[slug] ?? SERVICE_LANDING_WISTIA_ID;

export const SERVICE_PAIN_REFRAME =
  "Si algo de esto te resulta familiar, no es porque hagas las cosas mal. Es porque falta un proceso claro para resolverlo, y postergarlo solo hace que cueste más caro después.";
