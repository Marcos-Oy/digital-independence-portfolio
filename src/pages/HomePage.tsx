import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import SafeTechLogosCarousel from "@/components/SafeTechLogosCarousel";
import AboutBrandSection from "@/components/AboutBrandSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import logoFull from "@/assets/logo-full.png";
import fase1 from "@/assets/fase1.png";
import fase2 from "@/assets/fase2.png";
import fase3 from "@/assets/fase3.png";
import fase4 from "@/assets/fase4.png";
import fase5 from "@/assets/fase5.png";
import { CheckCircle2, Clock, Users, Shield, BarChart3, Brain, Server, ChevronRight, Instagram, Facebook, Mail, UserCheck, MessageCircle } from "lucide-react";

const phases = [
  {
    img: fase1,
    num: 1,
    title: "Arquitectura TI",
    subtitle: "Cimientos",
    desc: "Organizamos tus cuentas, correos, archivos y accesos sobre una base clara y escalable.",
    href: "/arquitecturati",
    icon: Server,
  },
  {
    img: fase2,
    num: 2,
    title: "Presencia Digital",
    subtitle: "Visibilidad",
    desc: "Construimos o mejoramos tu sitio web profesional y configuramos tus redes sociales de forma estratégica.",
    href: "/presenciadigital",
    icon: Users,
  },
  {
    img: fase3,
    num: 3,
    title: "Ciberseguridad",
    subtitle: "Protección",
    desc: "Protege tus datos y clientes mediante contraseñas, prácticas seguras, backups y verificación.",
    href: "/ciberseguridad",
    icon: Shield,
  },
  {
    img: fase4,
    num: 4,
    title: "Analítica Aplicada",
    subtitle: "Decisiones",
    desc: "Convierte tus datos en decisiones claras mediante tableros de control en tiempo real.",
    href: "/analiticaaplicada",
    icon: BarChart3,
  },
  {
    img: fase5,
    num: 5,
    title: "IA y Automatización",
    subtitle: "Escala",
    desc: "Implementa herramientas de IA de forma segura para automatizar ventas, tareas y reportes.",
    href: "/inteligenciaartificial",
    icon: Brain,
  },
];

const faqs = [
  {
    q: "¿Para quién es este servicio?",
    a: "Para personas, profesionales independientes y dueños de PyMEs que quieren ordenar, proteger y escalar su operación digital sin depender de terceros.",
  },
  {
    q: "¿Cómo se desarrolla la mentoría?",
    a: "El programa se desarrolla a través de sesiones grupales y acompañamiento personalizado de profesionales especializados, para que avances con apoyo real en cada fase.",
  },
  {
    q: "¿Necesito conocimientos técnicos previos?",
    a: "No. La mentoría es paso a paso y está diseñada para que cualquier persona pueda implementar lo aprendido, sin importar su nivel técnico.",
  },
  {
    q: "¿Qué herramientas se usan?",
    a: "Usamos herramientas accesibles y prácticas como Google Workspace, Cloudflare, WordPress, Canva, ChatGPT, entre otras, siempre adaptadas al perfil de profesionales independientes y PyMEs.",
  },
  {
    q: "¿El servicio es solo para Chile?",
    a: "Actualmente ofrecemos nuestros servicios enfocados en el mercado chileno, con herramientas y estrategias adaptadas al contexto local.",
  },
  {
    q: "¿Qué pasa después de las 5 fases?",
    a: "Al completar el programa, tendrás autonomía total sobre tu ecosistema digital. Opcionalmente, ofrecemos seguimiento y asesoría continua.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <img src={logoFull} alt="Independencia Digital" className="h-20 md:h-28 mb-8 animate-fade-in" />
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mb-6 animate-fade-in-up text-foreground">
            Mentorías Tecnológicas{" "}
            <span className="text-gradient-brand">Profesionales</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Ayudamos a personas, profesionales independientes y PyMEs a crear, proteger y optimizar
            su ecosistema digital con un programa práctico de 5 fases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://independencia-digital.systeme.io/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Quiero Mi Independencia Digital
            </a>
            <Link
              to="/#servicios"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="border border-border bg-card text-foreground font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-muted transition-colors"
            >
              Conocer Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Qué es Independencia Digital? */}
      <section id="servicios" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Nuestro Servicio
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              ¿Qué es Independencia Digital?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Somos una consultora de <strong className="text-foreground">mentorías tecnológicas profesionales</strong> que
              ayuda a personas, profesionales independientes y dueños de PyMEs a contar con una estructura digital
              clara, eficiente y alineada a sus objetivos. Nuestro <strong className="text-foreground">Plan 360</strong> de
              5 fases entrega resultados visibles a partir del primer mes, eliminando el caos digital y logrando
              autonomía total sin depender de nadie externo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Sesiones Grupales</h3>
              <p className="text-sm text-muted-foreground">Aprende junto a otros profesionales y PyMEs</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
              <UserCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Mentoría 1:1</h3>
              <p className="text-sm text-muted-foreground">Acompañamiento personalizado paso a paso</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Chat y Llamadas</h3>
              <p className="text-sm text-muted-foreground">Soporte continuo cuando lo necesites</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border shadow-card text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Autonomía Total</h3>
              <p className="text-sm text-muted-foreground">Sin depender de técnicos externos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Metodología - Las 5 Fases */}
      <section id="metodologia" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Plan 360
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Las 5 Fases de tu Independencia Digital
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada fase es <strong className="text-foreground">independiente</strong> y puedes contratarlas por separado.
              El orden que proponemos es solo una <strong className="text-foreground">recomendación</strong> para comenzar
              con cimientos sólidos y escalar digitalmente paso a paso.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phases.slice(0, 3).map((phase) => (
              <Link
                key={phase.title}
                to={phase.href}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group block"
              >
                <span className="absolute -top-3 left-6 gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand">
                  Fase {phase.num}
                </span>
                <div className="flex justify-center mt-4 mb-5">
                  <img src={phase.img} alt={phase.title} className="h-20 md:h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1 text-center">{phase.title}</h3>
                <p className="text-xs text-secondary font-semibold text-center mb-2">{phase.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-center mb-4">{phase.desc}</p>
                <div className="flex items-center justify-center gap-1 text-primary text-sm font-medium">
                  Ver más <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-6">
            {phases.slice(3).map((phase) => (
              <Link
                key={phase.title}
                to={phase.href}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group block w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <span className="absolute -top-3 left-6 gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand">
                  Fase {phase.num}
                </span>
                <div className="flex justify-center mt-4 mb-5">
                  <img src={phase.img} alt={phase.title} className="h-20 md:h-24 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1 text-center">{phase.title}</h3>
                <p className="text-xs text-secondary font-semibold text-center mb-2">{phase.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-center mb-4">{phase.desc}</p>
                <div className="flex items-center justify-center gap-1 text-primary text-sm font-medium">
                  Ver más <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - la marca */}
      <AboutBrandSection />

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              FAQ
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-card border border-border rounded-xl group">
                <summary className="p-5 cursor-pointer font-heading font-semibold text-foreground text-sm md:text-base flex items-center justify-between list-none">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contacto */}
      <section id="contacto" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-6 sm:p-10 md:p-16 text-center shadow-brand overflow-hidden">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              ¿Listo para tu Independencia Digital?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Contáctanos por cualquiera de estos canales.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 mb-8">
              <a href="https://www.instagram.com/_marcos.oyarzo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="font-medium">_marcos.oyarzo</span>
              </a>
              <a href="https://www.facebook.com/IndependenciaDigital.cl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="font-medium">IndependenciaDigital.cl</span>
              </a>
              <a href="mailto:contacto@independenciadigital.cl" className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm sm:text-base break-all sm:break-normal">
                <Mail className="w-5 h-5" />
                <span className="font-medium">contacto@independenciadigital.cl</span>
              </a>
            </div>
            <a
              href="https://independencia-digital.systeme.io/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-card text-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              Quiero Mi Independencia Digital →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default HomePage;
