// Mapa de formularios de HubSpot por servicio. Cada servicio tiene su
// propio formulario (mismo portal, distinto data-form-id) para que los
// leads lleguen segmentados por el servicio que estaban mirando. Fuera de
// una página de servicio o de su landing, se usa el formulario general.
//
// Las claves son los slugs de src/models/services.ts.
export const GENERAL_HUBSPOT_FORM_ID = "1e48917a-7f40-4380-993f-435b88fb7df2";

export const SERVICE_HUBSPOT_FORM_IDS: Record<string, string> = {
  "presencia-digital": "d523c803-de86-40c1-acff-498cf0a53da3",
  "desarrollo-software": "c8272152-345b-47cf-8b8c-d2cc281f9085",
  "ciberseguridad": "dbc6d2be-7bad-416d-9d55-2226165119d6",
  "vigilancia-innovacion": "44ab59cd-aa40-4789-bb9a-3b240d954dff",
  "optimizacion-costos-ti": "899297ff-62d2-418d-8a1b-44c9c92c6ad0",
  "arquitectura-ti": "1450c391-f2c0-48fd-8ffd-7204fcbbb174",
  "transformacion-digital": "4797cd8a-58c3-4bce-8192-f4038c254480",
  "direccion-ti": "9a3e53ba-d76f-4c30-a229-88b28c596b44",
  "ia-corporativa": "0293f881-e597-4065-a41b-856202671d39",
  "integracion-plataformas": "8ffff5e7-055d-4527-97ef-80109a49ff9a",
  "automatizacion-procesos": "e18dc2a8-beff-4fe9-a162-17270ba435d6",
  "dashboards-kpi": "032d9220-8023-4922-8d2e-b4967f71a9d8",
};

// Determina qué formulario mostrar según la ruta desde la que se abrió el
// modal de agendamiento: la página de un servicio (/servicios/:slug) y su
// landing (/landing/servicio/:slug) usan el formulario de ese servicio;
// cualquier otra ruta (home, landing general, fundador, etc.) usa el
// formulario general de contacto.
export const getHubspotFormIdForPath = (pathname: string): string => {
  const match =
    pathname.match(/^\/servicios\/([^/]+)/) ??
    pathname.match(/^\/landing\/servicio\/([^/]+)/);
  if (match) {
    const slug = match[1];
    return SERVICE_HUBSPOT_FORM_IDS[slug] ?? GENERAL_HUBSPOT_FORM_ID;
  }
  return GENERAL_HUBSPOT_FORM_ID;
};
