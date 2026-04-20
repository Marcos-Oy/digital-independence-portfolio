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
    detailedIntro="La fase de IA y Hiperautomatización integra modelos de lenguaje, generación multimedia y flujos automatizados para que tu negocio escale sin sumar más personas."
    outcome="Tendrás agentes y automatizaciones funcionando en tu negocio: respuestas automáticas, generación de contenido, integraciones entre tus herramientas y procesos repetitivos delegados a la IA."
    modules={[
      {
        title: "Fundamentos de IA generativa",
        points: [
          "Cómo funcionan los modelos (ChatGPT, Claude, Gemini) y sus diferencias.",
          "Buenas prácticas de prompting aplicadas a tu negocio.",
          "Uso seguro y ético de la IA con datos sensibles.",
        ],
      },
      {
        title: "Contenido multimedia con IA",
        points: [
          "Generación de textos, imágenes, audios y videos.",
          "Herramientas como ElevenLabs, HeyGen, Canva y CapCut.",
          "Investigación y síntesis con NotebookLM y Gamma.",
        ],
      },
      {
        title: "Automatización con n8n",
        points: [
          "Diseño de flujos automáticos entre tus aplicaciones.",
          "Conexión de correo, redes, formularios y CRM.",
          "Notificaciones, recordatorios y procesos sin intervención manual.",
        ],
      },
      {
        title: "Agentes IA e integraciones",
        points: [
          "Creación de agentes IA para atención al cliente y back office.",
          "Integraciones avanzadas usando MCP y APIs.",
          "Construcción de mini-aplicaciones con Lovable.",
        ],
      },
    ]}
    prevPhase={{ label: "Fase 4: Analítica Aplicada", href: "/analiticaaplicada" }}
  />
);

export default InteligenciaArtificial;
