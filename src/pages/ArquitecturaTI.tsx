import PhasePageLayout from "@/components/PhasePageLayout";
import fase1 from "@/assets/fase1.png";

const ArquitecturaTI = () => (
  <PhasePageLayout
    phaseNum={1}
    title="Arquitectura TI"
    subtitle="Cimientos"
    img={fase1}
    heroDescription="Construimos la base sólida de tu ecosistema digital: organizamos tus cuentas, correos, archivos y accesos para que todo funcione de forma clara, segura y escalable."
    whatIs="En esta primera fase establecemos los cimientos de tu infraestructura tecnológica. Auditamos tu situación actual, identificamos vulnerabilidades y desorden, y reorganizamos todo desde cero. Configuramos tus cuentas de correo profesional, organizamos tu almacenamiento en la nube, establecemos permisos de acceso y creamos un mapa claro de todas tus herramientas digitales. Al finalizar este mes, tendrás una base técnica ordenada sobre la cual construir todo lo demás."
    benefits={[
      "Cuentas de correo profesionales configuradas y organizadas.",
      "Almacenamiento en la nube estructurado y con respaldos.",
      "Mapa completo de tus herramientas y accesos digitales.",
      "Eliminación del caos de contraseñas y accesos dispersos.",
      "Base técnica lista para escalar sin problemas.",
      "Independencia total: sabrás administrar todo tú mismo.",
    ]}
    tools={["Google Workspace", "Microsoft 365", "Cloudflare", "Outlook", "Gmail", "OneDrive", "Google Drive", "Windows 11 Pro"]}
    nextPhase={{ label: "Fase 2: Presencia Digital", href: "/presenciadigital" }}
  />
);

export default ArquitecturaTI;
