import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";

// ─── Edita esto para actualizar el contenido del modal ────────────────────────
// Cambia MODAL_ID cada vez que quieras que vuelva a aparecer (ej. para un evento)
const MODAL_ID = "welcome-v1";

const CONTENT = {
  eyebrow: "Bienvenido",
  title: "Independencia Digital",
  body: "Consultora tecnológica chilena. Diseñamos, construimos y dirigimos la infraestructura tecnológica de tu negocio.",
  cta: {
    label: "Explorar el sitio",
    to: "/servicios",
  },
  dismiss: "Ahora no",
};
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = `modal_seen_${MODAL_ID}`;

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => {
          setOpen(true);
          requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
        }, 900);
        return () => clearTimeout(t);
      }
    } catch {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* noop */ }
    }, 350);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-5 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={close}
        aria-hidden="true"
      />

      {/* Card */}
      <div
        className={`relative bg-card border border-border rounded-2xl shadow-card-hover w-full max-w-sm transition-all duration-350 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Inner double-bezel */}
        <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-primary/25 via-border to-secondary/20">
          <div className="bg-card rounded-[calc(1rem-1.5px)] px-7 py-8 flex flex-col items-center text-center">
            <img
              src={logo}
              alt="Independencia Digital"
              className="w-14 h-14 rounded-xl mb-5 shadow-card"
            />

            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-secondary mb-2">
              {CONTENT.eyebrow}
            </p>

            <h2
              id="welcome-title"
              className="font-heading font-extrabold text-xl text-foreground leading-tight mb-3"
            >
              {CONTENT.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-7 max-w-[260px]">
              {CONTENT.body}
            </p>

            <div className="flex flex-col gap-2.5 w-full">
              <Link
                to={CONTENT.cta.to}
                onClick={close}
                className="btn-shimmer inline-flex items-center justify-center gap-3 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                {CONTENT.cta.label}
                <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
              </Link>
              <button
                onClick={close}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 py-1.5"
              >
                {CONTENT.dismiss}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
