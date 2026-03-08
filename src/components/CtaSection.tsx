const CtaSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-10 md:p-16 text-center shadow-brand">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
            ¿Listo para tu Independencia Digital?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Agenda una sesión de diagnóstico gratuita para descubrir cómo aplicar este sistema en tu negocio.
          </p>
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
