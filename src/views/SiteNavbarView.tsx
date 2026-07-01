import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";
import ThemeToggleView from "@/views/ThemeToggleView";
import { ChevronDown, X, Search } from "lucide-react";
import { SERVICES } from "@/models/services";
import { SEGMENTS } from "@/models/segments";
import { TYPE_LABEL } from "@/models/search";
import { useSiteNavbarController } from "@/controllers/useSiteNavbarController";

const SiteNavbarView = () => {
  const {
    open,
    setOpen,
    openMenu,
    setOpenMenu,
    searchOpen,
    searchQuery,
    setSearchQuery,
    searchInputRef,
    goSection,
    openSearch,
    closeSearch,
    handleResultClick,
    results,
    hasQuery,
  } = useSiteNavbarController();

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
              <button
                onClick={openSearch}
                aria-label="Buscar en el sitio"
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200 text-muted-foreground hover:text-foreground"
              >
                <Search className="w-4 h-4" />
              </button>
              <ThemeToggleView />
              <a
                href="https://independencia-digital.systeme.io/registro"
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

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center pt-24 px-4 pb-8">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeSearch}
          />
          {/* Panel */}
          <div className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-card-hover overflow-hidden animate-fade-in-up">
            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3.5 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar servicios, segmentos, páginas…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={closeSearch}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {!hasQuery && (
                <p className="text-xs text-muted-foreground px-4 py-5 text-center">
                  Escribe al menos 2 caracteres para buscar
                </p>
              )}
              {hasQuery && results.length === 0 && (
                <p className="text-xs text-muted-foreground px-4 py-5 text-center">
                  Sin resultados para <strong>"{searchQuery}"</strong>
                </p>
              )}
              {hasQuery && results.length > 0 && (
                <ul className="py-2">
                  {results.map((r, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleResultClick(r.href)}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground leading-tight">{r.label}</p>
                          <p className="text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1">{r.sublabel}</p>
                        </div>
                        <span className="shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground mt-0.5">
                          {TYPE_LABEL[r.type]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

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
                  href="https://independencia-digital.systeme.io/registro"
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

export default SiteNavbarView;
