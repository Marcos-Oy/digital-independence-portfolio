import { Briefcase, Globe } from "lucide-react";

const extraServices = [
  {
    icon: Briefcase,
    title: "Asesorías y Consultorías",
    subtitle: "Para organizaciones, municipios y empresas",
    desc: "Acompañamiento profesional puntual para resolver desafíos tecnológicos concretos: diagnóstico de infraestructura, ciberseguridad, transformación digital, gobernanza de datos y adopción de IA. Trabajamos con equipos públicos y privados que necesitan una mirada experta sin contratar un equipo TI completo.",
    bullets: [
      "Auditorías y diagnósticos digitales",
      "Planes de transformación digital",
      "Capacitaciones in-company",
      "Asesoría estratégica por sesión o proyecto",
    ],
  },
  {
    icon: Globe,
    title: "Agencia Digital",
    subtitle: "Sitios, portafolios y landing pages a medida",
    desc: "¿Solo quieres tu página web y listo? También lo hacemos. Nuestra unidad de agencia diseña y desarrolla tu presencia online completa (sitio web, portafolio o landing page) con tu propio dominio y posicionamiento SEO para que aparezcas en Google y conviertas visitas en clientes.",
    bullets: [
      "Sitios web corporativos e institucionales",
      "Portafolios web para profesionales",
      "Landing pages de alta conversión",
      "Registro y configuración de dominio propio",
      "Posicionamiento SEO técnico y de contenidos",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            ¿Qué hace la Independencia Digital?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Ayudamos a personas, profesionales independientes y dueños de PyMEs a contar con una estructura digital clara, eficiente y alineada a sus objetivos, logrando resultados visibles a partir de los primeros <strong className="text-foreground">90 días</strong>, sin confusión tecnológica ni pérdida de tiempo operativa, con el <strong className="text-foreground">Plan 360 - para la Independencia Digital</strong> de las 5 fases, eliminando el caos digital y dejando sus operaciones funcionando con herramientas seguras y mayor eficiencia, sin depender de nadie externo.
          </p>
        </div>

        {/* Servicios complementarios */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary font-heading mb-2">
              Otros servicios
            </p>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Más allá de la mentoría
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {extraServices.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-brand transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground mb-1">
                  {s.title}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  {s.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>
                <ul className="space-y-2 mt-auto">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#contacto"
              className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Cotizar un servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
