import { CheckCircle2 } from "lucide-react";

const benefits = [
  "No dependes más de técnicos externos.",
  "No pierdes tiempo buscando contraseñas o accesos.",
  "No más caos entre correos, archivos y redes.",
  "Sitio web profesional, optimizado y seguro.",
  "Configuración completa de Instagram, WhatsApp Business y Google Business.",
  "Conexión de herramientas publicitarias (Meta Ads, Google Ads, Pixel).",
  "Recuperas el control total de tu operación digital.",
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
            Beneficios
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            ¿Lo mejor?
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm md:text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
