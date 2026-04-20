import PhasePageLayout from "@/components/PhasePageLayout";
import fase1 from "@/assets/fase1.png";

const ArquitecturaTI = () => (
  <PhasePageLayout
    phaseNum={1}
    title="Arquitectura TI"
    subtitle="Cimientos"
    img={fase1}
    heroDescription="Construimos la base sólida de tu ecosistema digital: organizamos tus cuentas, correos, archivos y accesos para que todo funcione de forma clara, segura y escalable."
    whatIs="En esta primera fase establecemos los cimientos de tu infraestructura tecnológica. Auditamos tu situación actual, identificamos vulnerabilidades y desorden, y reorganizamos todo desde cero. Configuramos tus cuentas de correo profesional, organizamos tu almacenamiento en la nube, establecemos permisos de acceso y creamos un mapa claro de todas tus herramientas digitales."
    benefits={[
      "Cuentas de correo profesionales configuradas y organizadas.",
      "Almacenamiento en la nube estructurado y con respaldos.",
      "Mapa completo de tus herramientas y accesos digitales.",
      "Eliminación del caos de contraseñas y accesos dispersos.",
      "Base técnica lista para escalar sin problemas.",
      "Independencia total: sabrás administrar todo tú mismo.",
    ]}
    tools={["Google Workspace", "Microsoft 365", "Cloudflare", "Outlook", "Gmail", "OneDrive", "Google Drive", "Windows 11 Pro"]}
    detailedIntro="En Arquitectura TI sentamos los cimientos digitales de tu negocio. Trabajaremos paso a paso desde la identidad hasta los respaldos, dejando todo listo para escalar."
    outcome="Tendrás un dominio propio, correos corporativos profesionales, almacenamiento ordenado en la nube, respaldos automáticos y un mapa claro de toda tu infraestructura digital."
    modules={[
      {
        title: "Identidad y dominio profesional",
        points: [
          "Elección estratégica del nombre y dominio para tu negocio.",
          "Compra y configuración técnica del dominio.",
          "Configuración de DNS para correo, web y servicios.",
        ],
      },
      {
        title: "Suite ofimática y correo corporativo",
        points: [
          "Configuración de Microsoft 365 o Google Workspace.",
          "Creación de tus correos corporativos (cada discípulo recibe su correo profesional).",
          "Firmas, alias y configuración de buzones por área.",
        ],
      },
      {
        title: "Almacenamiento y organización en la nube",
        points: [
          "Estructura de carpetas pensada para crecer.",
          "Permisos por rol y políticas de acceso.",
          "Sincronización con tu equipo de trabajo.",
        ],
      },
      {
        title: "Equipos, dispositivos y respaldos",
        points: [
          "Configuración segura de tu computador y dispositivos.",
          "Respaldos automáticos de información crítica.",
          "Buenas prácticas de mantenimiento y orden digital.",
        ],
      },
    ]}
    nextPhase={{ label: "Fase 2: Presencia Digital", href: "/presenciadigital" }}
  />
);

export default ArquitecturaTI;
