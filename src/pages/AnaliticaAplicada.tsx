import PhasePageLayout from "@/components/PhasePageLayout";
import fase4 from "@/assets/fase4.png";

const AnaliticaAplicada = () => (
  <PhasePageLayout
    phaseNum={4}
    title="Analítica Aplicada"
    subtitle="Decisiones"
    img={fase4}
    heroDescription="Convierte tus datos en decisiones claras y accionables mediante tableros de control en tiempo real, sin necesidad de conocimientos avanzados en estadística."
    whatIs="En esta fase te enseñamos a entender y aprovechar los datos que tu negocio ya genera. Configuramos tableros de control visuales con Power BI o Google Data Studio, conectamos tus fuentes de datos (sitio web, redes sociales, ventas) y te enseñamos a interpretar métricas clave. Al finalizar, podrás tomar decisiones informadas basadas en datos reales, no en suposiciones."
    benefits={[
      "Tableros de control visuales configurados con tus datos reales.",
      "Conexión de múltiples fuentes de datos en un solo lugar.",
      "Métricas clave de tu negocio identificadas y monitoreadas.",
      "Capacidad de tomar decisiones basadas en datos, no en intuición.",
      "Reportes automáticos configurados para seguimiento periódico.",
      "Autonomía para consultar y entender tus números en cualquier momento.",
    ]}
    tools={["Power BI", "Excel", "Google Workspace", "Access", "SQL Server", "Oracle", "MySQL"]}
    prevPhase={{ label: "Fase 3: Ciberseguridad", href: "/ciberseguridad" }}
    nextPhase={{ label: "Fase 5: IA y Automatización", href: "/inteligenciaartificial" }}
  />
);

export default AnaliticaAplicada;
