import { Link } from "react-router-dom";
import BrandLogo from "@/views/shared/BrandLogo";

import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { SERVICES } from "@/models/services";

const SiteFooterView = () => {
  return (
    <footer data-floating-booking-hide className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <BrandLogo className="h-9" />

            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Consultora tecnológica chilena. Prestamos servicios desde 2020. Diseñamos y construimos
              con servicios integrales la
              infraestructura tecnológica de emprendedores, PyMEs, grandes empresas y sector público.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#servicios" className="text-xs text-primary font-semibold hover:underline">
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/#quienes-somos" className="text-xs text-muted-foreground hover:text-primary transition-colors">Quiénes somos</Link>
              </li>
              <li>
                <Link to="/fundador" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  Fundador
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/_marcos.oyarzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @_marcos.oyarzo
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/IndependenciaDigital.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" /> IndependenciaDigital.cl
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/independencia-digital-chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> MOT[IA]RZO Labs
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@independenciadigital.cl"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" /> contacto@independenciadigital.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MOT[IA]RZO Labs
          </p>
          <span className="hidden sm:inline text-border">·</span>
          <Link to="/privacidad" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
          <span className="hidden sm:inline text-border">·</span>
          <Link to="/privacidad#derechos" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Ejercicio de derechos
          </Link>
          <span className="hidden sm:inline text-border">·</span>
          <Link
            to="/landing"
            className="text-[10px] text-muted-foreground/40 hover:text-muted-foreground transition-colors lowercase tracking-wide"
          >
            hub landing
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooterView;
