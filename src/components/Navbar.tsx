import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Plan 360", href: "#plan360" },
    { label: "Sobre Mí", href: "#sobremi" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Independencia Digital" className="h-10 w-10" />
          <span className="font-heading font-bold text-lg text-foreground">
            Independencia <span className="text-gradient-brand">Digital</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://independencia-digital.systeme.io/registro"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
        >
          Quiero Mi Independencia
        </a>

        {/* Mobile toggle */}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
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

export default Navbar;
