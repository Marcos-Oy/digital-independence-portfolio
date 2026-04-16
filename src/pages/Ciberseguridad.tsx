import PhasePageLayout from "@/components/PhasePageLayout";
import fase3 from "@/assets/fase3.png";

const Ciberseguridad = () => (
  <PhasePageLayout
    phaseNum={3}
    title="Ciberseguridad Aplicada"
    subtitle="Protección"
    img={fase3}
    heroDescription="Protege tus datos, los de tus clientes y toda tu operación digital con prácticas de seguridad accesibles y efectivas, sin necesidad de ser un experto."
    whatIs="La ciberseguridad no es solo para grandes empresas. En esta fase implementamos medidas de protección reales y prácticas para tu negocio: gestión segura de contraseñas, autenticación en dos pasos, backups automáticos, configuración de antivirus profesional y buenas prácticas de navegación segura. Todo explicado paso a paso para que puedas mantenerlo por tu cuenta."
    benefits={[
      "Gestión profesional de contraseñas con herramientas seguras.",
      "Autenticación en dos pasos (2FA) en todas tus cuentas críticas.",
      "Backups automáticos configurados para tus archivos importantes.",
      "Antivirus y protección activa en todos tus dispositivos.",
      "Conocimiento de amenazas comunes (phishing, malware, ingeniería social).",
      "Tranquilidad de saber que tu información y la de tus clientes está protegida.",
    ]}
    tools={["Norton", "Microsoft Authenticator", "Cloudflare", "Google Workspace", "ANCI", "Linux"]}
    prevPhase={{ label: "Fase 2: Presencia Digital", href: "/presenciadigital" }}
    nextPhase={{ label: "Fase 4: Analítica Aplicada", href: "/analiticaaplicada" }}
  />
);

export default Ciberseguridad;
