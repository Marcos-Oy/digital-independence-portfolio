import marcos from "@/assets/marcos.jpg";
import { GraduationCap, ShieldCheck, BrainCircuit, Target, Globe } from "lucide-react";

const credentials = [
  { icon: Target, text: "Fundador y Arquitecto de Independencia Digital" },
  { icon: GraduationCap, text: "Ingeniero en Informática – Estrategia Web, Ciberseguridad, Automatización y Analítica" },
  { icon: ShieldCheck, text: "Máster Europeo en Ciberseguridad y Transformación Digital" },
  { icon: BrainCircuit, text: "Amplio conocimiento en IA Generativa para el ámbito Corporativo" },
];

const AboutSection = () => {
  return (
    <section id="sobremi" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
            Sobre Mí
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            ¿Quién da el Entrenamiento?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="relative shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-brand">
              <img
                src={marcos}
                alt="Marcos Oyarzo"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 gradient-brand rounded-lg px-4 py-2 shadow-brand">
              <span className="text-primary-foreground font-heading font-bold text-sm">
                Marcos Oyarzo
              </span>
            </div>
            <a
              href="https://www.moyarzo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.moyarzo.cl
            </a>
          </div>

          <div className="flex-1">
            <ul className="space-y-5">
              {credentials.map((c) => (
                <li key={c.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {c.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-muted rounded-xl border border-border">
              <p className="text-sm font-semibold text-foreground font-heading mb-1">🎯 Misión:</p>
              <p className="text-sm text-muted-foreground">
                Ayudarte a transformar tu casa digital en una estructura segura, ordenada y lista para escalar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
