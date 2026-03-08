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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className={`relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group ${
                i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Phase badge */}
              <span className="absolute -top-3 left-6 gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand">
                Fase {i + 1}
              </span>

              <div className="flex justify-center mt-4 mb-5">
                <img
                  src={phase.img}
                  alt={phase.title}
                  className="h-20 md:h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="font-heading font-bold text-lg text-foreground mb-2 text-center">
                {phase.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
