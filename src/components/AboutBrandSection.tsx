import { Link } from "react-router-dom";
import { Compass, Users, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";

const pillars = [
  {
    icon: Compass,
    title: "Nuestra Misión",
    desc: "Diseñar, construir y dirigir la infraestructura tecnológica de emprendedores, PyMEs, grandes empresas y organismos públicos en Chile, con visión de expansión latinoamericana.",
  },
  {
    icon: Users,
    title: "A quién atendemos",
    desc: "Personas naturales (emprendedores, profesionales independientes) y personas jurídicas (PyMEs, grandes empresas, sector público vía Mercado Público / ChileCompra).",
  },
  {
    icon: Sparkles,
    title: "Nuestro enfoque",
    desc: "Cinco áreas de servicio con 11 soluciones contratables por separado. Diagnóstico inicial sin costo, hoja de ruta priorizada y dirección tecnológica activa.",
  },
  {
    icon: ShieldCheck,
    title: "Nuestra promesa",
    desc: "Durante los primeros 90 días de trabajo conjunto, tu tecnología deja de ser un problema y se convierte en el motor real del crecimiento de tu negocio.",
  },
];

const AboutBrandSection = () => {
  return (
    <section id="sobrenosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
            Sobre Nosotros
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            ¿Qué es Independencia Digital?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            <strong className="text-foreground">Independencia Digital SpA</strong> es una consultora tecnológica
            chilena constituida formalmente (RUT 78.430.447-7). Diseñamos, construimos y dirigimos la
            infraestructura tecnológica de emprendedores, profesionales independientes, PyMEs, grandes empresas
            y organismos del sector público, actuando como tu Director de Tecnología externo sin el costo de un
            CTO full-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mb-4 shadow-brand">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={robotImg}
              alt="Autonomía Digital — robot sosteniendo una planta sobre laptop con dashboards"
              loading="lazy"
              className="w-56 sm:w-64 md:w-72 lg:w-[320px] h-auto rounded-2xl shadow-brand"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/fundador"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-muted px-5 py-3 rounded-lg border border-border"
          >
            Conoce al fundador <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutBrandSection;
