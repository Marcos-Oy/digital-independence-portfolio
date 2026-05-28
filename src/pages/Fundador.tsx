import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { ArrowLeft, Linkedin, Globe } from "lucide-react";

const WHATSAPP = "56928362758";

const Fundador = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
            Fundador y CEO
          </p>
          <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4">
            Marcos Alberto <span className="text-gradient-brand">Oyarzo Alvarez</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Director de Tecnología externo para PyMEs, grandes empresas y organismos del sector público.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg">
          <p>
            Ingeniero en Informática con especialización en Ciberseguridad, Transformación Digital e
            Inteligencia Artificial Generativa. Fundador de <strong>Independencia Digital SpA</strong>, una
            consultora tecnológica chilena con marca registrada en INAPI y operación formal vía Sociedad por
            Acciones.
          </p>
          <p>
            Diseño, construyo y dirijo la infraestructura tecnológica de mis clientes desde la arquitectura TI
            y el desarrollo de software hasta la ciberseguridad y la inteligencia artificial corporativa.
            Trabajo con personas naturales y jurídicas, incluyendo el sector público mediante licitaciones en
            Mercado Público.
          </p>
          <p>
            Mi promesa es clara: durante los <strong>primeros 90 días</strong> de trabajo conjunto, tu
            tecnología deja de ser un problema y se convierte en el motor real del crecimiento del negocio.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://www.moyarzo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" /> moyarzo.cl
            </a>
            <a
              href="https://www.linkedin.com/in/marcosoyarzoalvarez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-8 md:p-14 text-center shadow-brand">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              ¿Conversamos sobre tu negocio?
            </h2>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Marcos, quiero agendar un diagnóstico con Independencia Digital.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-card text-foreground font-heading font-bold px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              Agendar diagnóstico por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Fundador;
