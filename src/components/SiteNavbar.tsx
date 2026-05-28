import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown, X } from "lucide-react";
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
    <>
      {/* Floating island nav */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl">
        <div className="bg-card/90 backdrop-blur-md border border-border rounded-2xl shadow-card px-5 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
              <img src={logo} alt="Independencia Digital" className="h-9 w-9" />
              <span className="font-heading font-bold text-base leading-none">
                <span className="text-[#2E6FB5]">Independencia</span>{" "}
                <span className="text-[#3CB878]">Digital</span>
              </span>
              <img src={chileFlag} alt="Chile" className="h-4 w-auto hidden sm:block" title="Servicios en Chile" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-6">
              <li>
                <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("servicios")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1">
                  Servicios
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "servicios" ? "rotate-180" : ""}`} />
                </button>
                {openMenu === "servicios" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-slide-up">
                    <div className="bg-card border border-border rounded-xl shadow-card-hover p-3 w-[580px]">
                      <div className="grid grid-cols-2 gap-0.5 mb-2">
                        {SERVICES.map((s) => {
                          const SIcon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              to={`/servicios/${s.slug}`}
                              className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors duration-150 group"
                            >
                              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                                <SIcon className="w-3.5 h-3.5 text-primary" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-foreground leading-tight">{s.navLabel}</p>
                                <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1">{s.tagline}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-border pt-2">
                        <Link
                          to="/servicios"
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-primary hover:bg-muted rounded-lg transition-colors duration-150"
                        >
                          Ver todos los servicios →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className="relative"
                onMouseEnter={() => setOpenMenu("segmentos")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1">
                  Segmentos
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openMenu === "segmentos" ? "rotate-180" : ""}`} />
                </button>
                {openMenu === "segmentos" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-slide-up">
                    <div className="bg-card border border-border rounded-xl shadow-card-hover p-2 min-w-[220px] grid">
                      {SEGMENTS.map((s) => (
                        <Link
                          key={s.id}
                          to={`/segmentos/${s.slug}`}
                          className="px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-colors duration-150"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to="/fundador" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Fundador
                </Link>
              </li>
              <li>
                <button
                  onClick={() => goSection("contacto")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
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
                className="hidden lg:inline-flex items-center gap-2.5 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Agendar diagnóstico
              </a>
              {/* Hamburger / X toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200 text-foreground"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
              >
                <div className="relative w-5 h-5">
                  <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                    <X className="w-5 h-5" />
                  </span>
                  <span className={`absolute inset-0 flex flex-col justify-center gap-[5px] transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                    <span className="block h-[1.5px] w-5 bg-current rounded-full" />
                    <span className="block h-[1.5px] w-5 bg-current rounded-full" />
                    <span className="block h-[1.5px] w-4 bg-current rounded-full" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 mx-auto max-w-6xl bg-card border border-border rounded-2xl shadow-card-hover overflow-hidden animate-fade-in-up">
            <ul className="flex flex-col p-4 gap-1">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg cursor-pointer list-none transition-colors">
                    Servicios
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="pl-4 pt-1 pb-2 flex flex-col gap-0.5">
                    <Link
                      to="/servicios"
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 text-sm text-primary font-semibold hover:bg-muted rounded-lg transition-colors"
                    >
                      Ver todos →
                    </Link>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/servicios/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg cursor-pointer list-none transition-colors">
                    Segmentos
                    <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="pl-4 pt-1 pb-2 flex flex-col gap-0.5">
                    {SEGMENTS.map((s) => (
                      <Link
                        key={s.id}
                        to={`/segmentos/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
              <li>
                <Link
                  to="/fundador"
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Fundador
                </Link>
              </li>
              <li>
                <button
                  onClick={() => goSection("contacto")}
                  className="flex items-center w-full px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
              <li className="pt-2 border-t border-border mt-1">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, quiero agendar un diagnóstico con Independencia Digital.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-3 rounded-full shadow-brand active:scale-[0.97] transition-all duration-200"
                >
                  Agendar diagnóstico
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteNavbar;
