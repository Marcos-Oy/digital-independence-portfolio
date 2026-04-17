import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface PhasePageProps {
  phaseNum: number;
  title: string;
  subtitle: string;
  heroDescription: string;
  img: string;
  whatIs: string;
  benefits: string[];
  tools: string[];
  prevPhase?: { label: string; href: string };
  nextPhase?: { label: string; href: string };
}

const PhasePageLayout = ({
  phaseNum,
  title,
  subtitle,
  heroDescription,
  img,
  whatIs,
  benefits,
  tools,
  prevPhase,
  nextPhase,
}: PhasePageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex-1 w-full text-center md:text-left">
              <span className="inline-flex gradient-brand text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-heading shadow-brand mb-4">
                Fase {phaseNum} — {subtitle}
              </span>
              <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-5xl leading-tight text-foreground mb-6 break-words">
                {title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                {heroDescription}
              </p>
              <a
                href="https://independencia-digital.systeme.io/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gradient-brand text-primary-foreground font-heading font-bold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
              >
                Comenzar con esta Fase →
              </a>
            </div>
            <div className="shrink-0 w-full md:w-auto flex justify-center">
              <img src={img} alt={title} className="h-32 sm:h-40 md:h-56 object-contain max-w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              ¿En qué consiste?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {whatIs}
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              ¿Qué lograrás?
            </h2>
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

      {/* Herramientas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              Herramientas que implementamos
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="bg-muted text-foreground text-sm font-medium px-4 py-2 rounded-lg border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-6 sm:p-10 md:p-14 text-center shadow-brand">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              ¿Quieres comenzar con {title}?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Regístrate y comienza tu camino hacia la Independencia Digital.
            </p>
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

      {/* Navegación entre fases */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {prevPhase ? (
            <Link to={prevPhase.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> {prevPhase.label}
            </Link>
          ) : <div />}
          {nextPhase ? (
            <Link to={nextPhase.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              {nextPhase.label} <ChevronRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default PhasePageLayout;
