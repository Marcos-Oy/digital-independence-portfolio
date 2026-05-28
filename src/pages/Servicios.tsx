import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SERVICES, AREAS } from "@/data/services";
import { useEffect } from "react";

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios | Independencia Digital";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />

      <section className="gradient-hero pt-28 pb-12 md:pt-36 md:pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground mb-4 leading-tight tracking-tight">
            Portafolio de <span className="text-primary">servicios</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Diseñamos, construimos y dirigimos la infraestructura tecnológica de emprendedores, PyMEs,
            grandes empresas y organismos públicos. Estos son los servicios que ofrecemos, agrupados en
            cinco áreas.
          </p>
        </div>
      </section>

      {AREAS.map((area, i) => {
        const list = SERVICES.filter((s) => s.area === area.id);
        return (
          <section key={area.id} className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
                  Área {i + 1}
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
                  {area.label}
                </h2>
                <p className="text-muted-foreground">{area.desc}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      to={`/servicios/${s.slug}`}
                      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 flex flex-col"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-200">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {s.summary}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold">
                        Ver servicio
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <SiteFooter />
    </div>
  );
};

export default Servicios;
