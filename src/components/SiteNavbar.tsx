import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SEGMENTS } from "@/data/segments";

const WHATSAPP = "56928362758";

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"servicios" | "segmentos" | null>(null);
  const location = useLocation();

  const goSection = (id: string) => {
    setOpen(false);
    setOpenMenu(null);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo} alt="Independencia Digital" className="h-10 w-10" />
            <span className="font-heading font-bold text-lg">
              <span className="text-[#2E6FB5]">Independencia</span>{" "}
              <span className="text-[#3CB878]">Digital</span>
            </span>
            <img src={chileFlag} alt="Chile" className="h-5 w-auto" title="Servicios en Chile" />
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-7">
            <li>
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("servicios")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                Servicios <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openMenu === "servicios" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-card border border-border rounded-xl shadow-card-hover p-2 min-w-[280px] grid">
                    <Link
                      to="/servicios"
                      className="px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted rounded-md"
                    >
                      Ver todos los servicios →
                    </Link>
                    <div className="border-t border-border my-1" />
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        className="px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("segmentos")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                Segmentos <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openMenu === "segmentos" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="bg-card border border-border rounded-xl shadow-card-hover p-2 min-w-[240px] grid">
                    {SEGMENTS.map((s) => (
                      <Link
                        key={s.id}
                        to={`/segmentos/${s.slug}`}
                        className="px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/fundador" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Fundador
              </Link>
            </li>
            <li>
              <button
                onClick={() => goSection("contacto")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quiero agendar un diagnóstico con Independencia Digital.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Agendar diagnóstico
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-foreground">
                Inicio
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="cursor-pointer py-2 text-sm font-semibold text-foreground flex items-center justify-between list-none">
                  Servicios <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-1 flex flex-col gap-1.5">
                  <Link
                    to="/servicios"
                    onClick={() => setOpen(false)}
                    className="text-sm text-primary font-medium py-1"
                  >
                    Ver todos →
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/servicios/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-sm text-muted-foreground hover:text-primary py-1"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="cursor-pointer py-2 text-sm font-semibold text-foreground flex items-center justify-between list-none">
                  Segmentos <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 py-1 flex flex-col gap-1.5">
                  {SEGMENTS.map((s) => (
                    <Link
                      key={s.id}
                      to={`/segmentos/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-sm text-muted-foreground hover:text-primary py-1"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </details>
            </li>
            <li>
              <Link to="/fundador" onClick={() => setOpen(false)} className="block py-2 text-sm font-semibold text-foreground">
                Fundador
              </Link>
            </li>
            <li>
              <button
                onClick={() => goSection("contacto")}
                className="block py-2 text-sm font-semibold text-foreground text-left w-full"
              >
                Contacto
              </button>
            </li>
            <li className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quiero agendar un diagnóstico con Independencia Digital.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg"
              >
                Agendar diagnóstico
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
