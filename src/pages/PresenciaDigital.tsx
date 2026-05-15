import PhasePageLayout from "@/components/PhasePageLayout";
import fase2 from "@/assets/fase2.png";

const PresenciaDigital = () => (
  <PhasePageLayout
    phaseNum={2}
    title="Presencia Digital"
    subtitle="Visibilidad"
    img={fase2}
    heroDescription="Creamos o mejoramos tu sitio web profesional, configuramos tus redes sociales de forma estratégica y entregamos fundamentos de dirección de marketing para que tu negocio sea visible, atractivo y rentable en internet."
    whatIs="En esta fase nos enfocamos en tu presencia online y en cómo dirigir tu marketing. Si no tienes sitio web, lo creamos desde cero con herramientas accesibles. Si ya tienes uno, lo optimizamos para que sea profesional, rápido y seguro. Además, configuramos tus redes sociales de negocio (Instagram Business, WhatsApp Business, Google Business Profile) y aprenderás los principios de dirección de marketing: propuesta de valor, segmentación, posicionamiento y embudo de conversión, dejando las bases listas para escalar con publicidad."
    benefits={[
      "Sitio web profesional, rápido y optimizado para móviles.",
      "Dominio propio configurado con DNS seguro (Cloudflare).",
      "Perfiles de redes sociales de negocio configurados estratégicamente.",
      "WhatsApp Business, Instagram Business y Google Business activos.",
      "Fundamentos de dirección de marketing aplicados a tu negocio.",
      "Bases técnicas listas para conectar herramientas de tracking y publicidad.",
      "Presencia digital coherente y profesional en todos los canales.",
    ]}
    tools={["WordPress", "Lovable", "Cloudflare", "Hostinger", "NIC Chile", "Canva", "Systeme.io", "ManyChat", "Calendly", "Meta Ads"]}
    detailedIntro="Presencia Digital cubre toda tu visibilidad online y la dirección de marketing: desde la construcción de tu sitio web hasta la integración de canales de venta, publicidad y estrategia comercial."
    outcome="Quedarás con tu sitio web publicado, redes sociales de negocio configuradas, canales de contacto activos (WhatsApp Business, formularios), fundamentos de dirección de marketing claros y herramientas de tracking listas para escalar con publicidad."
    modules={[
      {
        title: "Sitio web profesional",
        points: [
          "Diseño y publicación de tu sitio web (WordPress, Lovable u otros).",
          "Optimización para móviles, velocidad y SEO básico.",
          "Conexión con tu dominio propio y certificado SSL.",
        ],
      },
      {
        title: "Redes sociales de negocio",
        points: [
          "Configuración estratégica de Instagram Business y Facebook Business.",
          "Optimización de perfiles para conversión y branding coherente.",
          "Plantillas y guías de contenido con Canva.",
        ],
      },
      {
        title: "Google Business y WhatsApp Business",
        points: [
          "Creación y verificación de tu ficha en Google Business Profile.",
          "Configuración profesional de WhatsApp Business y catálogo.",
          "Integración con tu sitio web y enlaces de contacto.",
        ],
      },
      {
        title: "Embudo y herramientas de captura",
        points: [
          "Formularios de contacto, agenda con Calendly y captura de leads.",
          "Integración con Systeme.io y bots básicos con ManyChat.",
          "Configuración base para tracking y eventos de conversión.",
        ],
      },
      {
        title: "Dirección de Marketing",
        points: [
          "Definición de propuesta de valor, segmentación y posicionamiento.",
          "Diseño de embudo de conversión y recorrido del cliente.",
          "Planificación de contenidos, oferta y métricas clave para crecer.",
        ],
      },
    ]}
    prevPhase={{ label: "Fase 1: Arquitectura TI", href: "/arquitecturati" }}
    nextPhase={{ label: "Fase 3: Ciberseguridad", href: "/ciberseguridad" }}
  />
);

export default PresenciaDigital;
