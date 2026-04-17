import PhaseLandingLayout from "@/components/PhaseLandingLayout";
import fase5 from "@/assets/fase5.png";

const LandingInteligenciaArtificial = () => (
  <PhaseLandingLayout
    phaseNum={5}
    title="Inteligencia Artificial y Automatización"
    subtitle="Escala"
    img={fase5}
    heroHeadline="Escala tu Negocio con IA y Automatización"
    heroDesc="Aprende a usar herramientas de IA de forma segura y práctica para automatizar ventas, tareas operativas y generación de contenido."
    whatIs="En esta fase final implementamos herramientas de IA y automatización adaptadas a tu negocio. Configuramos chatbots para atención al cliente, automatizaciones para procesos repetitivos, generación de contenido con IA y conectamos todo para que trabaje en piloto automático."
    benefits={[
      "Chatbots configurados para atender clientes 24/7.",
      "Automatizaciones de procesos repetitivos en tu negocio.",
      "Uso estratégico de IA para generar contenido y respuestas.",
      "Integración entre tus herramientas para que trabajen juntas.",
      "Ahorro de tiempo significativo en tareas operativas.",
      "Capacidad de escalar tu negocio sin contratar más personal.",
    ]}
    tools={["ChatGPT", "Claude", "Gemini", "ManyChat", "Make", "Zapier", "n8n", "Lovable"]}
  />
);

export default LandingInteligenciaArtificial;
