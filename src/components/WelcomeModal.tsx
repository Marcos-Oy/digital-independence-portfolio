import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import logo from "@/assets/logo.png";

const STORAGE_KEY = "welcome_modal_seen";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => {
          setOpen(true);
          setTimeout(() => setVisible(true), 10);
        }, 1400);
        return () => clearTimeout(t);
      }
    } catch {
      setOpen(true);
      setTimeout(() => setVisible(true), 10);
    }
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* noop */ }
    }, 300);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[90] max-w-[300px] w-[calc(100vw-3rem)] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      role="status"
      aria-live="polite"
    >
      <div className="bg-card border border-border rounded-2xl shadow-card-hover p-4 flex items-start gap-3.5">
        <img src={logo} alt="Independencia Digital" className="w-9 h-9 shrink-0 rounded-lg mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-sm text-foreground leading-snug mb-0.5">
            Independencia Digital
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Consultora tecnológica chilena. Diseñamos, construimos y dirigimos tu infraestructura TI.
          </p>
          <div className="flex items-center gap-2">
            <Link
              to="/servicios"
              onClick={close}
              className="text-xs font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-full transition-colors duration-150"
            >
              Ver servicios
            </Link>
            <button
              onClick={close}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              Cerrar
            </button>
          </div>
        </div>
        <button
          onClick={close}
          className="shrink-0 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
          aria-label="Cerrar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
