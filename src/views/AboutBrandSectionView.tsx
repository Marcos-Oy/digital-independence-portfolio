import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";
import { ABOUT_PILLARS } from "@/models/aboutPillars";
import { SoftBlob, AccentBlob, CircuitLines, WaveDivider } from "@/views/shared/BackgroundBlobs";
import ScrollContextIcon from "@/views/shared/ScrollContextIcon";

const AboutBrandSectionView = () => {
  return (
    <section id="sobrenosotros" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <SoftBlob shape={3} className="w-[380px] h-[380px] -top-24 -left-40" />
      <AccentBlob shape={2} className="w-10 h-10 top-10 right-[8%] opacity-70" />
      <CircuitLines className="absolute bottom-0 right-0 w-72 h-56 text-secondary/[0.16]" />
      <ScrollContextIcon
        icon={Building2}
        mode="pulse"
        className="absolute -bottom-10 -right-10 w-64 h-64 text-primary/[0.14]"
      />
      <div className="relative container mx-auto px-4">
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
            {ABOUT_PILLARS.map((p) => (
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
      <WaveDivider gradient className="absolute bottom-0 left-0 h-16 md:h-24" />
    </section>
  );
};

export default AboutBrandSectionView;
