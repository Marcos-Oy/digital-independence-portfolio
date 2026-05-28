import { useEffect, useState } from "react";
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
        }, 1200);
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
      try { window.dispatchEvent(new CustomEvent("welcome-modal-closed")); } catch { /* noop */ }
    }, 300);
  };

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[90] max-w-[320px] w-[calc(100vw-3rem)] transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      role="status"
      aria-live="polite"
    >
      <div className="bg-card border border-border rounded-2xl shadow-card-hover p-5 flex items-start gap-4">
        <img src={logo} alt="Independencia Digital" className="w-10 h-10 shrink-0 rounded-lg" />
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-sm text-foreground leading-snug mb-1">
            Independencia Digital SpA
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Consultora TI chilena. RUT 78.430.447-7 · Coquimbo, Chile.
          </p>
          <button
            onClick={close}
            className="mt-3 text-xs font-semibold text-primary hover:text-primary/80 transition-colors duration-150"
          >
            Explorar el sitio →
          </button>
        </div>
        <button
          onClick={close}
          className="shrink-0 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-150"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
