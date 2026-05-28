import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { type Segment } from "@/data/segments";
import { SERVICES, getServiceBySlug } from "@/data/services";

const WHATSAPP = "56928362758";

interface Props {
  segment: Segment;
}

const SegmentPageLayout = ({ segment }: Props) => {
  const Icon = segment.icon;
  const services = segment.recommendedServices
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
  const waMsg = encodeURIComponent(
    `Hola, soy del segmento ${segment.shortTitle} y quiero más información de Independencia Digital.`
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
                Segmento
              </p>
              <h1 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                {segment.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                {segment.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Tipo de cliente", value: segment.audience },
              { label: "Tamaño en Chile", value: segment.size },
              { label: "Ticket promedio", value: segment.ticket },
              { label: "Canal de venta", value: segment.channel },
              { label: "Puerta de entrada", value: segment.entryPoint },
              { label: "Lenguaje", value: segment.tone === "cercano" ? "Cercano y directo" : "Corporativo, con métricas y ROI" },
            ].map((f) => (
              <div key={f.label} className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-heading mb-1">
                  {f.label}
                </p>
                <p className="text-sm md:text-base text-foreground font-medium">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios recomendados */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
              Servicios recomendados
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Qué hacemos por {segment.shortTitle.toLowerCase()}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => {
              if (!s) return null;
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/servicios/${s.slug}`}
                  className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                    <SIcon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
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
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto gradient-brand rounded-2xl p-8 md:p-14 text-center shadow-brand">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              ¿Listo para conversar?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Te respondemos personalmente para entender tu caso y proponerte una hoja de ruta.
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

export default SegmentPageLayout;
