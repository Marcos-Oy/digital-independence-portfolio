import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";
import { Instagram, Facebook, Mail } from "lucide-react";

const SiteFooter = () => {
  const serviceLinks = [
    { label: "Arquitectura TI", href: "/arquitecturati" },
    { label: "Presencia Digital", href: "/presenciadigital" },
    { label: "Ciberseguridad", href: "/ciberseguridad" },
    { label: "Analítica Aplicada", href: "/analiticaaplicada" },
    { label: "Inteligencia Artificial", href: "/inteligenciaartificial" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Independencia Digital" className="h-8 w-8" />
              <span className="font-heading font-bold text-sm flex items-center gap-1.5">
                <span className="text-gradient-brand">Independencia Digital</span>
                <img src={chileFlag} alt="Chile" className="h-4 w-auto inline-block" />
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mentorías tecnológicas profesionales para personas, profesionales independientes y PyMEs en Chile.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/#metodologia" className="text-xs text-muted-foreground hover:text-primary transition-colors">Metodología</Link></li>
              <li><Link to="/#sobrenosotros" className="text-xs text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/fundador" className="text-xs text-muted-foreground hover:text-primary transition-colors">Fundador</Link></li>
              <li><Link to="/#faq" className="text-xs text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.instagram.com/_marcos.oyarzo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" /> @_marcos.oyarzo
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/IndependenciaDigital.cl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-4 h-4" /> IndependenciaDigital.cl
                </a>
              </li>
              <li>
                <a href="mailto:contacto@independenciadigital.cl" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> contacto@independenciadigital.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Independencia Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
