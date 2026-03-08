import fase1 from "@/assets/fase1.png";
import fase2 from "@/assets/fase2.png";
import fase3 from "@/assets/fase3.png";
import fase4 from "@/assets/fase4.png";
import fase5 from "@/assets/fase5.png";

const phases = [
  {
    img: fase1,
    title: "Arquitectura TI – Cimientos",
    desc: "Organizamos tus cuentas, correos, archivos y tu acceso sobre una base clara y escalable.",
  },
  {
    img: fase2,
    title: "Presencia Digital",
    desc: "Tengas o construyas tu sitio web profesional y configuramos tus redes sociales de forma estratégica.",
  },
  {
    img: fase3,
    title: "Ciberseguridad Aplicada",
    desc: "Protege tus datos y clientes mediante contraseñas, prácticas seguras, backups y verificación.",
  },
  {
    img: fase4,
    title: "Analítica Aplicada",
    desc: "Convierte tus datos en decisiones claras mediante tableros de control en tiempo real.",
  },
  {
    img: fase5,
    title: "IA y Automatización",
    desc: "Implementa herramientas de IA de forma segura para automatizar ventas, tareas y reportes.",
  },
];

const PlanSection = () => {
  return (
    <section id="plan360" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
            Plan 360
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Las 5 Fases de tu Independencia Digital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un camino paso a paso para que tu operación digital esté ordenada, protegida y lista para escalar.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 gradient-brand opacity-20" />

          {phases.map((phase, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={phase.title}
                className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <span className="inline-block gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 font-heading">
                    Fase {i + 1}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full gradient-brand shadow-brand z-10 shrink-0" />
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={phase.img}
                    alt={phase.title}
                    className="h-24 md:h-28 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
