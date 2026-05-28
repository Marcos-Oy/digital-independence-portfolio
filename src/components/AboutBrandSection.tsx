import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";

const pillars = [
  {
    n: "01",
    title: "Misión",
    desc: "Diseñar, construir y dirigir la infraestructura tecnológica de emprendedores, PyMEs, grandes empresas y organismos públicos en Chile, con visión de expansión latinoamericana.",
  },
  {
    n: "02",
    title: "A quién atendemos",
    desc: "Personas naturales (emprendedores, profesionales independientes) y personas jurídicas (PyMEs, grandes empresas, sector público vía Mercado Público / ChileCompra).",
  },
  {
    n: "03",
    title: "Enfoque",
    desc: "Cinco áreas de servicio con 11 soluciones contratables por separado. Diagnóstico inicial sin costo, hoja de ruta priorizada y dirección tecnológica activa.",
  },
  {
    n: "04",
    title: "Promesa",
    desc: "Comenzamos con un diagnóstico sin costo, definimos una hoja de ruta priorizada y actuamos con dirección tecnológica activa desde el primer día.",
  },
];

const AboutBrandSection = () => {
  return (
    <section id="sobrenosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Sobre nosotros
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground leading-tight mb-5">
                ¿Qué es Independencia Digital?
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl text-base">
                <strong className="text-foreground font-semibold">Independencia Digital</strong> es
                una consultora tecnológica chilena que diseña, construye y dirige la infraestructura
                tecnológica de emprendedores, profesionales independientes, PyMEs, grandes empresas
                y organismos del sector público, actuando como tu Director de Tecnología externo
                sin el costo de un CTO full-time.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={robotImg}
                alt="Autonomía Digital"
                loading="lazy"
                className="w-48 h-auto rounded-2xl shadow-brand"
              />
            </div>
          </div>

          {/* Pillars — numbered editorial list */}
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden mb-10">
            {pillars.map((p) => (
              <div key={p.n} className="bg-card p-7 group hover:bg-muted/50 transition-colors duration-200">
                <span className="font-heading font-extrabold text-3xl text-border group-hover:text-primary/30 transition-colors duration-200 leading-none block mb-4 select-none">
                  {p.n}
                </span>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <Link
              to="/fundador"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Conoce al fundador
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrandSection;
