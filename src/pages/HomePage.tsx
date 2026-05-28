import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import SafeTechLogosCarousel from "@/components/SafeTechLogosCarousel";
import AboutBrandSection from "@/components/AboutBrandSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import WelcomeModal from "@/components/WelcomeModal";
import ReviewsSection from "@/components/ReviewsSection";
import logoFull from "@/assets/logo-full.png";
import bannerHero from "@/assets/banner-hero.png";
import bannerPlan360 from "@/assets/banner-plan360.png";
import { ChevronRight, Instagram, Facebook, Mail, Clock, Shield, BarChart3 } from "lucide-react";
import { SERVICES, AREAS } from "@/data/services";
import { SEGMENTS } from "@/data/segments";

const WHATSAPP = "56928362758";
const waText = (m: string) => encodeURIComponent(m);

const faqs = [
  {
    q: "¿Qué hace exactamente Independencia Digital?",
    a: "Somos una consultora tecnológica chilena. Diseñamos, construimos y dirigimos la infraestructura tecnológica de emprendedores, profesionales independientes, PyMEs, grandes empresas y organismos públicos.",
  },
  {
    q: "¿En cuánto tiempo veo resultados?",
    a: "Nuestra promesa general es que durante los primeros 90 días de trabajo conjunto tu tecnología deje de ser un problema y se convierta en el motor real de tu crecimiento. Cada servicio tiene su propio factor tiempo detallado en su página.",
  },
  {
    q: "¿Atienden a personas naturales y empresas?",
    a: "Sí. Trabajamos con personas naturales (emprendedores, profesionales independientes) y personas jurídicas (PyMEs, grandes empresas y sector público vía Mercado Público).",
  },
  {
    q: "¿Necesito contratar todos los servicios?",
    a: "No. Cada servicio es independiente y se contrata por separado. En el primer diagnóstico identificamos qué necesitas y proponemos una hoja de ruta priorizada.",
  },
  {
    q: "¿Trabajan con Mercado Público?",
    a: "Sí. Estamos constituidos como SpA con registro INAPI activo y participamos en licitaciones de ChileCompra para ciberseguridad, formación, infraestructura TI y transformación digital.",
  },
  {
    q: "¿Cómo es el primer contacto?",
    a: "Agendas un diagnóstico inicial por WhatsApp o correo. Te entendemos, revisamos tu situación actual y te proponemos los servicios que tienen sentido para tu caso, sin compromiso.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="relative gradient-hero pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src={bannerHero} alt="" className="w-full h-full object-cover opacity-70 dark:opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/70" />
        </div>
        <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
          <img src={logoFull} alt="Independencia Digital" className="h-20 md:h-28 mb-8 animate-fade-in" />
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-secondary mb-4 font-heading">
            Consultora Tecnológica · Chile
          </p>
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-tight max-w-5xl mb-6 animate-fade-in-up text-foreground">
            Diseñamos, construimos y dirigimos tu{" "}
            <span className="text-gradient-brand">infraestructura tecnológica</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Desde arquitectura TI y desarrollo de software hasta ciberseguridad e inteligencia artificial, para
            que durante los primeros <strong className="text-foreground">90 días</strong> de trabajo conjunto
            tu tecnología deje de ser un problema y se convierta en el motor real de tu crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waText("Hola, quiero agendar un diagnóstico con Independencia Digital.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Agendar diagnóstico gratis
            </a>
            <Link
              to="/servicios"
              className="border border-border bg-card text-foreground font-heading font-semibold text-base px-8 py-4 rounded-lg hover:bg-muted transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre nosotros (consultora TI) */}
      <section id="quienes-somos" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Quiénes somos
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Tu Director de Tecnología externo
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Independencia Digital SpA es una consultora tecnológica chilena. Atendemos personas naturales y
              jurídicas, incluyendo el sector público mediante licitaciones en Mercado Público. Operamos desde
              Chile con visión de expansión latinoamericana.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Promesa 90 días</h3>
              <p className="text-sm text-muted-foreground">Tu tecnología deja de ser un problema</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">SpA + INAPI</h3>
              <p className="text-sm text-muted-foreground">Sociedad formal y marca registrada</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">7 servicios · 5 áreas</h3>
              <p className="text-sm text-muted-foreground">Portafolio integral de consultoría</p>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              A quién servimos
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Cuatro segmentos, un mismo método
            </h2>
            <p className="text-muted-foreground">
              Adaptamos lenguaje, alcance y entregables según el tipo de cliente.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {SEGMENTS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.id}
                  to={`/segmentos/${s.slug}`}
                  className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">{s.shortTitle}</h3>
                  <p className="text-xs text-secondary font-semibold mb-3">{s.audience}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium">
                    Ver segmento <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Áreas y Servicios */}
      <section id="servicios" className="relative py-20 md:py-28 bg-background overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[420px] md:h-[480px] pointer-events-none"
        >
          <img src={bannerPlan360} alt="" className="w-full h-full object-cover opacity-50 dark:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Portafolio
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Cinco áreas de servicio
            </h2>
            <p className="text-foreground/80">
              Cada área agrupa servicios contratables por separado. Elige por lo que necesitas hoy.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {AREAS.map((area, i) => {
              const list = SERVICES.filter((s) => s.area === area.id);
              return (
                <div key={area.id}>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1 font-heading">
                      Área {i + 1}
                    </p>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-1">
                      {area.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{area.desc}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {list.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/servicios/${s.slug}`}
                          className="bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h4 className="font-heading font-bold text-base text-foreground">{s.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                            {s.summary}
                          </p>
                          <div className="flex items-center gap-1 text-primary text-sm font-medium">
                            Ver servicio <ChevronRight className="w-4 h-4" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold px-6 py-3 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Ver portafolio completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Sobre la marca */}
      <AboutBrandSection />

      {/* Reseñas */}
      <ReviewsSection />

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
              FAQ
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-card border border-border rounded-lg group h-fit">
                <summary className="px-4 py-3 cursor-pointer font-heading font-semibold text-foreground text-sm flex items-center justify-between list-none gap-3">
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-4 pb-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-6 sm:p-10 md:p-16 text-center shadow-brand overflow-hidden">
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-primary-foreground mb-4">
              ¿Hablamos de tu tecnología?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Agenda un diagnóstico inicial sin costo. Te respondemos personalmente.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6 mb-8">
              <a
                href="https://www.instagram.com/_marcos.oyarzo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium">_marcos.oyarzo</span>
              </a>
              <a
                href="https://www.facebook.com/IndependenciaDigital.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-medium">IndependenciaDigital.cl</span>
              </a>
              <a
                href="mailto:contacto@independenciadigital.cl"
                className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm sm:text-base break-all sm:break-normal"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">contacto@independenciadigital.cl</span>
              </a>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waText("Hola, quiero agendar un diagnóstico con Independencia Digital.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-card text-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              Agendar diagnóstico por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
      <WelcomeModal />
    </div>
  );
};

export default HomePage;
