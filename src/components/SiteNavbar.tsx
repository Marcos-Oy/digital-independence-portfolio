import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";
import ThemeToggle from "./ThemeToggle";

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Metodología", href: "/#metodologia" },
    { label: "Sobre Nosotros", href: "/#sobremi" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacto", href: "/#contacto" },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      // If not on homepage, navigate there first
      window.location.href = href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Independencia Digital" className="h-10 w-10" />
            <span className="font-heading font-bold text-lg text-foreground">
              Independencia <span className="text-gradient-brand">Digital</span>
            </span>
            <img src={chileFlag} alt="Chile" className="h-5 w-auto" title="Servicios en Chile" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                {l.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    to={l.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://independencia-digital.systeme.io/registro"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              Quiero Mi Independencia
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-foreground"
              aria-label="Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                {l.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://independencia-digital.systeme.io/registro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg"
              >
                Quiero Mi Independencia
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
