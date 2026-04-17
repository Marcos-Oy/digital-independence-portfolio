import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafeTechLogosCarousel from "@/components/SafeTechLogosCarousel";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { CheckCircle2 } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

interface PhaseLandingProps {
  phaseNum: number;
  title: string;
  subtitle: string;
  heroHeadline: string;
  heroDesc: string;
  img: string;
  whatIs: string;
  benefits: string[];
  tools: string[];
}

const PhaseLandingLayout = ({
  phaseNum,
  title,
  subtitle,
  heroHeadline,
  heroDesc,
  img,
  whatIs,
  benefits,
  tools,
}: PhaseLandingProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — estilo landing original */}
      <section id="inicio" className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <img src={logoFull} alt="Independencia Digital" className="h-16 md:h-24 mb-6 animate-fade-in" />
          <span className="inline-flex gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand mb-4">
            Fase {phaseNum} — {subtitle}
          </span>
          <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mb-6 text-foreground">
            {heroHeadline}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            {heroDesc}
          </p>
          <img src={img} alt={title} className="h-32 md:h-40 object-contain mb-8" />
          <a
            href="https://independencia-digital.systeme.io/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-brand text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
          >
            Quiero Mi Independencia Digital
          </a>
        </div>
      </section>

      {/* ¿En qué consiste? */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              ¿En qué consiste {title}?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {whatIs}
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <SafeTechLogosCarousel />

      {/* Beneficios */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Beneficios
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              ¿Qué lograrás con esta fase?
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm md:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA intermedio */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://independencia-digital.systeme.io/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-base md:text-lg px-8 py-4 rounded-xl shadow-brand hover:opacity-90 transition-opacity"
          >
            Quiero Mi Independencia Digital
          </a>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              Herramientas que implementamos en esta fase
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => (
                <span key={t} className="bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default PhaseLandingLayout;
