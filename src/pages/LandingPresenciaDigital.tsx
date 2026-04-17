import PhaseLandingLayout from "@/components/PhaseLandingLayout";
import fase2 from "@/assets/fase2.png";

const LandingPresenciaDigital = () => (
  <PhaseLandingLayout
    phaseNum={2}
    title="Presencia Digital"
    subtitle="Visibilidad"
    img={fase2}
    heroHeadline="Hazte Visible en Internet de Forma Profesional"
    heroDesc="Creamos o mejoramos tu sitio web profesional y configuramos tus redes sociales de forma estratégica para que tu negocio brille online."
    whatIs="En esta fase nos enfocamos en tu presencia online. Si no tienes sitio web, lo creamos desde cero. Si ya tienes uno, lo optimizamos para que sea profesional, rápido y seguro. Además, configuramos tus redes sociales de negocio (Instagram Business, WhatsApp Business, Google Business Profile) y conectamos las herramientas publicitarias necesarias."
    benefits={[
      "Sitio web profesional, rápido y optimizado para móviles.",
      "Dominio propio configurado con DNS seguro (Cloudflare).",
      "Perfiles de redes sociales de negocio configurados estratégicamente.",
      "WhatsApp Business, Instagram Business y Google Business activos.",
      "Conexión de Meta Pixel y herramientas de tracking.",
      "Presencia digital coherente y profesional en todos los canales.",
    ]}
    tools={["WordPress", "Lovable", "Cloudflare", "Hostinger", "NIC Chile", "Canva", "Systeme.io", "ManyChat", "Calendly", "Meta Ads"]}
  />
);

export default LandingPresenciaDigital;
