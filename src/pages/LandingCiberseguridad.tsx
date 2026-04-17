import PhaseLandingLayout from "@/components/PhaseLandingLayout";
import fase3 from "@/assets/fase3.png";

const LandingCiberseguridad = () => (
  <PhaseLandingLayout
    phaseNum={3}
    title="Ciberseguridad Aplicada"
    subtitle="Protección"
    img={fase3}
    heroHeadline="Protege tu Negocio y a tus Clientes"
    heroDesc="Implementamos prácticas de seguridad reales y aplicables para que tu información y la de tus clientes esté siempre protegida."
    whatIs="En esta fase implementamos prácticas de ciberseguridad que cualquier negocio debería tener. Configuramos gestores de contraseñas, activamos verificación en dos pasos, establecemos sistemas de respaldo automático, configuramos antivirus y enseñamos hábitos seguros para evitar phishing y otros ataques."
    benefits={[
      "Gestor de contraseñas profesional configurado.",
      "Verificación en dos pasos activada en todas tus cuentas críticas.",
      "Sistema de respaldo automático funcionando.",
      "Protección contra phishing y ataques comunes.",
      "Antivirus y herramientas de seguridad implementadas.",
      "Tranquilidad de saber que tu información está segura.",
    ]}
    tools={["Bitwarden", "1Password", "Google Authenticator", "Microsoft Authenticator", "Backblaze", "Cloudflare", "Bitdefender", "Malwarebytes"]}
  />
);

export default LandingCiberseguridad;
