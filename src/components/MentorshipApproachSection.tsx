import { Users, UserCheck, MessageCircle, CalendarClock, GraduationCap, Wrench } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Sesiones grupales",
    desc: "Encuentros semanales para resolver dudas comunes y avanzar en conjunto con otros discípulos.",
  },
  {
    icon: UserCheck,
    title: "Sesiones 1:1",
    desc: "Acompañamiento personalizado mediante agenda para revisar avances y desbloquear temas técnicos.",
  },
  {
    icon: MessageCircle,
    title: "Chat y llamadas",
    desc: "Comunicación directa con el mentor a través de la plataforma centralizada cuando lo necesites.",
  },
  {
    icon: CalendarClock,
    title: "Avance progresivo",
    desc: "Los contenidos se habilitan por etapas. Cada módulo construye la base del siguiente, a tu ritmo.",
  },
  {
    icon: GraduationCap,
    title: "Plataforma centralizada",
    desc: "Canales por módulo, materiales descargables, recursos prácticos y apoyo con herramientas de IA.",
  },
  {
    icon: Mail,
    title: "Correo corporativo",
    desc: "Cada discípulo recibe un correo corporativo profesional con su propia identidad digital incluida.",
  },
];

const MentorshipApproachSection = () => {
  return (
    <section id="enfoque" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
            Enfoque de la Mentoría
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Mucho más que crear redes o una página web
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Esta mentoría está diseñada para que estructures tu{" "}
            <strong className="text-foreground">ecosistema digital completo</strong>, tomes decisiones correctas,
            conectes todas tus plataformas en un solo sistema e implementes activos reales que generen resultados.
            Cada módulo incluye contenido formativo, aplicación directa sobre tu negocio y validación por parte del mentor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg gradient-brand flex items-center justify-center mb-4 shadow-brand">
                <it.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipApproachSection;
