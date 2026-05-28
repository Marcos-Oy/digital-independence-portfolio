import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/logo-full.png";

const STORAGE_KEY = "welcome_modal_seen";

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    try {
      window.dispatchEvent(new CustomEvent("welcome-modal-closed"));
    } catch {
      /* noop */
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 backdrop-blur-sm animate-fade-in p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fade-in-up"
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={logo}
          alt="Independencia Digital"
          className="h-24 md:h-28 mx-auto mb-6"
        />

        <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-3">
          Bienvenid@ a <span className="text-gradient-brand">Independencia Digital</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-2">
          Consultora tecnológica chilena (SpA) que diseña, construye y dirige la infraestructura tecnológica de emprendedores, PyMEs, grandes empresas y organismos del sector público.
        </p>
        <p className="text-xs text-muted-foreground/70 mb-6">
          RUT 78.430.447-7 · Coquimbo, Chile
        </p>

        <button
          onClick={close}
          className="gradient-brand text-primary-foreground font-heading font-semibold text-sm px-6 py-3 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
        >
          Explorar el sitio
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
