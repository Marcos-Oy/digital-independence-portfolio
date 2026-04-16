import PhasePageLayout from "@/components/PhasePageLayout";
import fase5 from "@/assets/fase5.png";

const InteligenciaArtificial = () => (
  <PhasePageLayout
    phaseNum={5}
    title="IA y Automatización"
    subtitle="Escala"
    img={fase5}
    heroDescription="Implementa herramientas de Inteligencia Artificial de forma segura y práctica para automatizar ventas, tareas operativas y generación de contenido."
    whatIs="La fase final del Plan 360 te introduce al mundo de la IA generativa y la automatización de procesos. Te enseñamos a usar ChatGPT, Claude, Gemini y otras herramientas de IA para generar contenido, automatizar respuestas, crear flujos de trabajo con n8n y optimizar tareas repetitivas. Todo implementado de forma segura, ética y alineada a tu negocio."
    benefits={[
      "Herramientas de IA configuradas para tu contexto de negocio.",
      "Automatización de tareas repetitivas con flujos inteligentes.",
      "Generación de contenido asistida por IA (textos, imágenes, videos).",
      "Chatbots y respuestas automáticas para atención al cliente.",
      "Flujos de trabajo automatizados con n8n y herramientas no-code.",
      "Conocimiento para evaluar y adoptar nuevas tecnologías de IA de forma segura.",
    ]}
    tools={["ChatGPT", "Claude", "Gemini", "n8n", "ElevenLabs", "HeyGen", "NotebookLM", "Canva", "CapCut", "Clipchamp", "Gamma", "MCP", "Google Labs", "Lovable"]}
    prevPhase={{ label: "Fase 4: Analítica Aplicada", href: "/analiticaaplicada" }}
  />
);

export default InteligenciaArtificial;
