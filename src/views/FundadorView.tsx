import { Link } from "react-router-dom";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import { ArrowLeft, Linkedin, Globe } from "lucide-react";
import marcosAzul from "@/assets/marcos-terno-azul.jpg";
import marcosNegro from "@/assets/marcos-terno-negro.jpeg";

const FundadorView = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
            Fundador y CEO
          </p>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
            Marcos Alberto <span className="text-primary">Oyarzo Alvarez</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Director de Tecnología externo para PyMEs, grandes empresas y organismos del sector público.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
            <div className="block md:hidden mb-2">
              <img
                src={marcosAzul}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-40 mx-auto rounded-2xl shadow-card-hover object-cover aspect-[3/4] block dark:hidden"
              />
              <img
                src={marcosNegro}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-40 mx-auto rounded-2xl shadow-card-hover object-cover aspect-[3/4] hidden dark:block"
              />
            </div>
            <div className="space-y-6 text-foreground/90 leading-relaxed text-base md:text-lg text-justify">
              <p>
                Ingeniero en Informática con especialización en Ciberseguridad, Transformación Digital e
                Inteligencia Artificial Generativa. Fundador de <strong>Independencia Digital</strong>, una
                consultora tecnológica chilena.
              </p>
              <p>
                Diseño, construyo y dirijo la infraestructura tecnológica de mis clientes desde la arquitectura TI
                y el desarrollo de software hasta la ciberseguridad y la inteligencia artificial corporativa.
                Trabajo con personas naturales y jurídicas, incluyendo el sector público mediante licitaciones en
                Mercado Público.
              </p>
              <p>
                Mi promesa es clara: en poco tiempo de trabajo conjunto, tu tecnología deja de ser un
                problema y se convierte en el motor real del crecimiento del negocio.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.moyarzo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" /> moyarzo.cl
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos-alberto-o-766456170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={marcosAzul}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] block dark:hidden"
              />
              <img
                src={marcosNegro}
                alt="Marcos Alberto Oyarzo Alvarez"
                className="w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Conversamos sobre tu negocio?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y encuentra el punto de partida ideal para tu caso.
              </p>
              <a
                href="https://independencia-digital.systeme.io/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Agendar diagnóstico
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default FundadorView;
