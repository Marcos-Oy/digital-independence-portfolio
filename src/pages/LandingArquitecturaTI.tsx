import PhaseLandingLayout from "@/components/PhaseLandingLayout";
import fase1 from "@/assets/fase1.png";

const LandingArquitecturaTI = () => (
  <PhaseLandingLayout
    phaseNum={1}
    title="Arquitectura TI"
    subtitle="Cimientos"
    img={fase1}
    heroHeadline="Construye los Cimientos de tu Ecosistema Digital"
    heroDesc="Organizamos tus cuentas, correos, archivos y accesos sobre una base clara, segura y escalable, lista para crecer."
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
  />
);

export default LandingArquitecturaTI;
