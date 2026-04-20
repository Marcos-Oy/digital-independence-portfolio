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
    detailedIntro="Ciberseguridad Aplicada se trabaja por niveles de protección, partiendo por hábitos básicos hasta resiliencia operativa de tu negocio."
    outcome="Tendrás contraseñas robustas, MFA activado en todas tus cuentas críticas, antivirus y respaldos funcionando, y un plan claro de qué hacer ante un incidente."
    modules={[
      {
        title: "Identidad digital y contraseñas",
        points: [
          "Higiene de contraseñas y uso de gestores seguros.",
          "Activación de autenticación multifactor (MFA/2FA).",
          "Revisión y limpieza de cuentas antiguas.",
        ],
      },
      {
        title: "Protección de dispositivos",
        points: [
          "Configuración de antivirus profesional en computador y móvil.",
          "Hardening básico de Windows y navegadores.",
          "Buenas prácticas para redes Wi-Fi y conexiones públicas.",
        ],
      },
      {
        title: "Respaldo y resiliencia",
        points: [
          "Estrategia de respaldos 3-2-1 para información crítica.",
          "Pruebas de restauración para validar que los backups funcionan.",
          "Plan básico ante pérdida de equipo, robo o ransomware.",
        ],
      },
      {
        title: "Conciencia y prevención",
        points: [
          "Cómo detectar phishing, smishing e ingeniería social.",
          "Protección de datos personales y de clientes.",
          "Marco normativo aplicable y referencias de la ANCI.",
        ],
      },
    ]}
    prevPhase={{ label: "Fase 2: Presencia Digital", href: "/presenciadigital" }}
    nextPhase={{ label: "Fase 4: Analítica Aplicada", href: "/analiticaaplicada" }}
  />
);

export default Ciberseguridad;
