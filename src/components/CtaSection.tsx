import { Instagram, Facebook, Mail, Globe } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-10 md:p-16 text-center shadow-brand">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
            ¿Listo para tu Independencia Digital?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contáctanos por cualquiera de estos canales.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/_marcos.oyarzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">_marcos.oyarzo</span>
            </a>
            <a
              href="https://www.facebook.com/IndependenciaDigital.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">IndependenciaDigital.cl</span>
            </a>
            <a
              href="mailto:contacto@independenciadigital.cl"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">contacto@independenciadigital.cl</span>
            </a>
            <a
              href="https://www.moyarzo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">moyarzo.cl</span>
            </a>
          </div>
          <a
            href="https://www.independenciadigital.cl/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-card text-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
          >
            Quiero Mi Independencia Digital →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;