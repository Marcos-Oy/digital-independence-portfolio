import PhasePageLayout from "@/components/PhasePageLayout";
import fase2 from "@/assets/fase2.png";

const PresenciaDigital = () => (
  <PhasePageLayout
    phaseNum={2}
    title="Presencia Digital"
    subtitle="Visibilidad"
    img={fase2}
    heroDescription="Creamos o mejoramos tu sitio web profesional y configuramos tus redes sociales de forma estratégica para que tu negocio sea visible y atractivo en internet."
    whatIs="En esta fase nos enfocamos en tu presencia online. Si no tienes sitio web, lo creamos desde cero con herramientas accesibles. Si ya tienes uno, lo optimizamos para que sea profesional, rápido y seguro. Además, configuramos tus redes sociales de negocio (Instagram Business, WhatsApp Business, Google Business Profile) y conectamos las herramientas publicitarias necesarias como Meta Pixel y Google Ads para que estés listo para campañas futuras."
    benefits={[
      "Sitio web profesional, rápido y optimizado para móviles.",
      "Dominio propio configurado con DNS seguro (Cloudflare).",
      "Perfiles de redes sociales de negocio configurados estratégicamente.",
      "WhatsApp Business, Instagram Business y Google Business activos.",
      "Conexión de Meta Pixel y herramientas de tracking.",
      "Presencia digital coherente y profesional en todos los canales.",
    ]}
    tools={["WordPress", "Lovable", "Cloudflare", "Hostinger", "NIC Chile", "Canva", "Systeme.io", "ManyChat", "Calendly", "Meta Ads"]}
    prevPhase={{ label: "Fase 1: Arquitectura TI", href: "/arquitecturati" }}
    nextPhase={{ label: "Fase 3: Ciberseguridad", href: "/ciberseguridad" }}
  />
);

export default PresenciaDigital;
