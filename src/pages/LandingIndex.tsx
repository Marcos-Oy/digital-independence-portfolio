import { Link } from "react-router-dom";
import { ChevronRight, Server, Users, Shield, BarChart3, Brain, Layers } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const landings = [
  {
    title: "Landing General",
    desc: "Vista completa del programa Independencia Digital con todas las fases.",
    href: "/landing/general",
    icon: Layers,
    badge: "General",
  },
  {
    title: "Arquitectura TI",
    desc: "Cimientos: orden de cuentas, correos, archivos y accesos.",
    href: "/landing/arquitecturati",
    icon: Server,
    badge: "Fase 1",
  },
  {
    title: "Presencia Digital",
    desc: "Sitio web profesional y redes sociales con estrategia.",
    href: "/landing/presenciadigital",
    icon: Users,
    badge: "Fase 2",
  },
  {
    title: "Ciberseguridad",
    desc: "Protección de datos, contraseñas, backups y verificación.",
    href: "/landing/ciberseguridad",
    icon: Shield,
    badge: "Fase 3",
  },
  {
    title: "Analítica Aplicada",
    desc: "Tableros de control y decisiones basadas en datos.",
    href: "/landing/analiticaaplicada",
    icon: BarChart3,
    badge: "Fase 4",
  },
  {
    title: "IA y Automatización",
    desc: "Automatiza ventas, tareas y reportes con IA segura.",
    href: "/landing/inteligenciaartificial",
    icon: Brain,
    badge: "Fase 5",
  },
];

const LandingIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-hero pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <img src={logoFull} alt="Independencia Digital" className="h-16 md:h-20 mb-6" />
          <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4 max-w-3xl">
            Landing Pages — <span className="text-gradient-brand">Independencia Digital</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Selecciona la landing page que deseas visitar. Cada fase cuenta con su propia landing
            optimizada para campañas segmentadas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {landings.map((l) => {
              const Icon = l.icon;
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="absolute -top-3 left-6 gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand">
                    {l.badge}
                  </span>
                  <Icon className="w-10 h-10 text-primary mb-4 mt-2" />
                  <h2 className="font-heading font-bold text-lg text-foreground mb-2">{l.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{l.desc}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    Ver landing <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Volver al sitio oficial
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default LandingIndex;
