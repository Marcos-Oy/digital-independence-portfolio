import { Shield, Globe, BarChart3, Bot, Server } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Arquitectura TI",
    desc: "Ordenamos tus cuentas, correos, archivos y software sobre una base clara y escalable.",
  },
  {
    icon: Globe,
    title: "Presencia Digital",
    desc: "Sitio web profesional, redes sociales configuradas y presencia que proyecta confianza.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    desc: "Protege tus datos y los de tus clientes con prácticas y herramientas seguras.",
  },
  {
    icon: BarChart3,
    title: "Analítica Aplicada",
    desc: "Tableros de control claros para tomar decisiones basadas en datos reales.",
  },
  {
    icon: Bot,
    title: "IA y Automatización",
    desc: "Implementa herramientas de IA para automatizar ventas, reportes y tareas repetitivas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            ¿Qué hace la Independencia Digital?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Ayudamos a personas, profesionales independientes y dueños de PyMEs a contar con una estructura digital clara, eficiente y alineada a sus objetivos, logrando resultados visibles a partir de los primeros <strong className="text-foreground">90 días</strong>, sin confusión tecnológica ni pérdida de tiempo operativa, con el <strong className="text-foreground">Plan 360 – para la Independencia Digital</strong> de las 5 fases, eliminando el caos digital y dejando sus operaciones funcionando con herramientas seguras y mayor eficiencia, sin depender de nadie externo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="bg-card rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
