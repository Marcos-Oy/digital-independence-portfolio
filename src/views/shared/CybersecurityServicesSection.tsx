import type { ReactNode } from "react";
import ScrollReveal from "@/views/shared/ScrollReveal";
import {
  Bug as SvcBug,
  Globe as SvcGlobe,
  FileCheck2 as SvcPolicy,
  Siren as SvcSiren,
  Server as SvcServer,
  ShieldPlus as SvcAntivirus,
  MailWarning as SvcPhishing,
  Headset as SvcExpert,
  GraduationCap as SvcTraining,
  Wrench as SvcExec,
} from "lucide-react";

export const CYBERSECURITY_SERVICES = [
  { icon: SvcBug, title: "Ethical Hacking", desc: "Pruebas de penetración proactivas que simulan ataques reales para identificar vulnerabilidades críticas y fortalecer la seguridad de tus sistemas." },
  { icon: SvcGlobe, title: "Monitoreo de dominios", desc: "Vigilancia continua mediante SIEM (Security Information and Event Management) para detectar accesos no autorizados, vulnerabilidades y amenazas en tiempo real." },
  { icon: SvcPolicy, title: "Políticas de ciberseguridad", desc: "Diseño de un Sistema de Gestión de Seguridad de la Información (SGSI) alineado con ISO/IEC 27001, garantizando cumplimiento y estructura organizacional." },
  { icon: SvcSiren, title: "Gestión ante incidentes", desc: "Respuesta rápida para mitigar ataques de phishing, ransomware o consultas técnicas, minimizando el impacto operativo y financiero." },
  { icon: SvcServer, title: "Monitoreo de servidores", desc: "Protección de infraestructura crítica mediante SIEM, monitoreando servidores por IP para prevenir intrusiones y fallos de seguridad." },
  { icon: SvcAntivirus, title: "Administración de antivirus", desc: "Gestión proactiva de soluciones antivirus con actualizaciones automatizadas, análisis de amenazas y reportes de incidentes (no incluye licencia)." },
  { icon: SvcPhishing, title: "Simulacro de phishing", desc: "Evaluación del riesgo humano mediante simulaciones personalizadas de phishing, con métricas para mejorar la concienciación de tu equipo." },
  { icon: SvcExpert, title: "Contacto con expertos", desc: "Acceso prioritario a especialistas en ciberseguridad para asesoría técnica, resolución de emergencias y estrategias preventivas." },
  { icon: SvcTraining, title: "Capacitación en ciberseguridad", desc: "Programas de formación adaptados: cursos en plataforma digital y sesiones prácticas para reducir riesgos por errores humanos." },
  { icon: SvcExec, title: "Ejecución de servicios", desc: "Implementación integral de soluciones por nuestro equipo técnico, asegurando un despliegue eficiente y sin interrupciones." },
];

interface CybersecurityServicesSectionProps {
  tone?: "muted" | "background";
  cta?: ReactNode;
}

const CybersecurityServicesSection = ({ tone = "muted", cta }: CybersecurityServicesSectionProps) => (
  <section id="servicios-ciberseguridad" className={`py-16 md:py-24 ${tone === "muted" ? "bg-muted" : "bg-background"} scroll-mt-20`}>
    <div className="container mx-auto px-4 max-w-6xl">
      <ScrollReveal className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
          Servicios
        </span>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 leading-tight max-w-2xl mx-auto">
          Servicios de ciberseguridad que puedes contratar
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {CYBERSECURITY_SERVICES.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={(i % 5) * 70}>
            <article className="h-full bg-card border border-border rounded-2xl p-5 shadow-card">
              <span className="inline-flex w-10 h-10 rounded-lg gradient-brand items-center justify-center shadow-brand mb-4">
                <svc.icon className="w-4.5 h-4.5 text-primary-foreground" strokeWidth={1.8} />
              </span>
              <h3 className="font-heading font-bold text-sm text-foreground mb-2">{svc.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
      {cta && <div className="text-center mt-12">{cta}</div>}
    </div>
  </section>
);

export default CybersecurityServicesSection;
