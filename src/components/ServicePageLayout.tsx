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
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-brand flex items-center justify-center shrink-0 shadow-brand">
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
                {service.areaLabel}
              </p>
              <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
                {service.tagline}
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gradient-brand text-primary-foreground font-heading font-bold px-6 py-3 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
              >
                Cotizar este servicio →
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
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Cliente correcto</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.rightClient}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Factor tiempo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.timeFactor}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <Target className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold text-foreground mb-2">Promesa de valor</h3>
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
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-8 md:p-14 text-center shadow-brand">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              ¿Hablamos de tu caso?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Agenda un diagnóstico sin costo y evalúa cómo aplicar {service.shortTitle} a tu negocio.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-card text-foreground font-heading font-bold px-8 py-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              Agendar diagnóstico por WhatsApp →
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

export default ServicePageLayout;
