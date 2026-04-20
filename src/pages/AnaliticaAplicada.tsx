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
    detailedIntro="Analítica Aplicada parte por ordenar tus datos, identificar tus KPIs y termina con tableros visuales que te entregan información para decidir."
    outcome="Tendrás tus indicadores clave definidos, tus fuentes de datos conectadas y al menos un dashboard interactivo en Power BI listo para revisar tu negocio en tiempo real."
    modules={[
      {
        title: "Datos en tu negocio",
        points: [
          "Identificación de los datos que ya generas y los que faltan.",
          "Definición de KPIs e indicadores clave por área.",
          "Buenas prácticas de orden y calidad del dato.",
        ],
      },
      {
        title: "Excel y bases de datos",
        points: [
          "Modelos de datos limpios en Excel para PyMEs.",
          "Introducción a bases de datos (Access, SQL).",
          "Cómo integrar información de CRM, ERP o ventas.",
        ],
      },
      {
        title: "Visualización con Power BI",
        points: [
          "Conexión de múltiples fuentes de datos.",
          "Diseño de dashboards visuales y filtros interactivos.",
          "Publicación y compartición segura del tablero.",
        ],
      },
      {
        title: "Cultura de decisiones con datos",
        points: [
          "Lectura e interpretación de métricas.",
          "Reportes automáticos periódicos.",
          "Cómo iterar tu estrategia con base en resultados.",
        ],
      },
    ]}
    prevPhase={{ label: "Fase 3: Ciberseguridad", href: "/ciberseguridad" }}
    nextPhase={{ label: "Fase 5: IA y Automatización", href: "/inteligenciaartificial" }}
  />
);

export default AnaliticaAplicada;
