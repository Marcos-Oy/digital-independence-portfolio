import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { CheckCircle2, ArrowLeft, Clock, Target, Users } from "lucide-react";
import { type Service } from "@/data/services";
import { SEGMENTS } from "@/data/segments";

const segmentLabel: Record<string, string> = {
  emprendedores: "Emprendedores",
  pymes: "PyMEs",
  empresas: "Grandes Empresas",
  publico: "Sector Público",
};

const WHATSAPP = "56928362758";

interface Props {
  service: Service;
}

const ServicePageLayout = ({ service }: Props) => {
  const Icon = service.icon;
  const waMsg = encodeURIComponent(
    `Hola, quiero cotizar el servicio de ${service.title} de Independencia Digital.`
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                {service.areaLabel}
              </p>
              <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
                {service.tagline}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-7 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Cotizar este servicio
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            ¿En qué consiste?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Promesa y cliente correcto */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">Cliente correcto</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.rightClient}</p>
            </div>
            <div className="bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">Factor tiempo</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.timeFactor}</p>
            </div>
            <div className="bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">Promesa de valor</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.valuePromise}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
            ¿Qué incluye?
          </h2>
          <ul className="space-y-4">
            {service.includes.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-foreground text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Herramientas */}
      {service.tools && service.tools.length > 0 && (
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">
              Herramientas que utilizamos
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Segmentos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
            ¿Para quién es?
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {service.segments.map((s) => {
              const seg = SEGMENTS.find((x) => x.id === s);
              return (
                <Link
                  key={s}
                  to={seg ? `/segmentos/${seg.slug}` : "/"}
                  className="bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  {segmentLabel[s]}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/30 via-border to-secondary/20">
            <div className="bg-card rounded-[calc(1rem-1.5px)] px-8 py-12 md:px-14 md:py-16 text-center">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
                ¿Hablamos de tu caso?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">
                Agenda un diagnóstico sin costo y evalúa cómo aplicar {service.shortTitle} a tu negocio.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 gradient-brand text-primary-foreground font-heading font-bold text-sm px-8 py-4 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Agendar diagnóstico por WhatsApp
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default ServicePageLayout;
