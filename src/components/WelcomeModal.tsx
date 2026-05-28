import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

// ─── Edita esto para actualizar el contenido del modal ────────────────────────
const CONTENT = {
  eyebrow: "Bienvenido",
  title: "Independencia Digital",
  body: "Consultora tecnológica chilena. Diseñamos, construimos y dirigimos la infraestructura tecnológica de tu negocio.",
  cta: "Explorar el sitio",
};
// ─────────────────────────────────────────────────────────────────────────────

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 350);
    try { sessionStorage.setItem("welcome_modal_seen", "1"); } catch { }
    window.dispatchEvent(new Event("welcome-modal-closed"));
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-5 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop — no cierra al hacer clic */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
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
              src={logoFull}
              alt="Independencia Digital"
              className="h-16 w-auto mb-5"
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

            <button
              onClick={close}
              className="btn-shimmer inline-flex items-center justify-center gap-3 gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3.5 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 w-full"
            >
              {CONTENT.cta}
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
