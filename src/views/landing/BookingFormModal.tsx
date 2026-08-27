import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";

const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/51925077.js";
const HUBSPOT_REGION = "na1";
const HUBSPOT_PORTAL_ID = "51925077";
const HUBSPOT_FORM_ID = "1e48917a-7f40-4380-993f-435b88fb7df2";

// Alto aproximado del pie de marca gratuita de HubSpot ("Create your own
// free forms"). Ese pie vive dentro del iframe de HubSpot (otro dominio),
// así que no se puede quitar con CSS ni JS desde nuestro lado. En vez de
// eso, recortamos visualmente el contenedor a (alto real del formulario -
// este valor), dejando el pie fuera del área visible. Si HubSpot cambia el
// diseño de ese pie, este número podría necesitar ajuste.
const HUBSPOT_BRANDING_HEIGHT_PX = 90;

// Modal de agendamiento con el formulario embebido de HubSpot. Se monta una
// sola vez a nivel de la app (ver App.tsx) y permanece siempre en el DOM;
// se muestra u oculta con clases CSS en vez de montar/desmontar, así el
// script de HubSpot solo tiene que crear el iframe del formulario una vez.
// Cualquier botón o link con la clase BOOKING_TRIGGER_CLASS lo abre.
const BookingFormModal = () => {
  const [open, setOpen] = useState(false);
  const scriptInjectedRef = useRef(false);
  const formFrameRef = useRef<HTMLDivElement>(null);
  const clipWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scriptInjectedRef.current) return;
    scriptInjectedRef.current = true;
    const script = document.createElement("script");
    script.src = HUBSPOT_SCRIPT_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  // Recorta el pie de marca de HubSpot y mantiene el recorte al día si el
  // formulario cambia de alto (por ejemplo, al mostrar errores de
  // validación, que agrandan el iframe).
  useEffect(() => {
    const frame = formFrameRef.current;
    const wrapper = clipWrapperRef.current;
    if (!frame || !wrapper) return;

    const applyClip = () => {
      const height = frame.offsetHeight;
      if (height > HUBSPOT_BRANDING_HEIGHT_PX) {
        wrapper.style.maxHeight = `${height - HUBSPOT_BRANDING_HEIGHT_PX}px`;
      }
    };

    applyClip();
    const observer = new MutationObserver(applyClip);
    observer.observe(frame, { attributes: true, attributeFilter: ["style"] });
    // HubSpot crea el iframe y fija el alto de forma asíncrona tras cargar
    // su script; reintentamos por un rato hasta que eso ocurra.
    const interval = window.setInterval(applyClip, 400);
    const stopInterval = window.setTimeout(() => window.clearInterval(interval), 8000);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.clearTimeout(stopInterval);
    };
  }, []);

  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>(`.${BOOKING_TRIGGER_CLASS}`);
      if (!trigger) return;
      event.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClickCapture, true);
    return () => document.removeEventListener("click", onClickCapture, true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-200 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      {/* Fondo siempre claro (no theme-aware a propósito): el formulario de
          HubSpot vive en un iframe de otro dominio cuyo color de texto es
          fijo (pensado para fondos claros). Si el modal heredara el tema
          oscuro del sitio, ese texto quedaría ilegible. */}
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-card-hover max-h-[90vh] flex flex-col overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="overflow-y-auto p-6 pt-10">
          <div ref={clipWrapperRef} className="overflow-hidden">
            <div
              ref={formFrameRef}
              className="hs-form-frame"
              data-region={HUBSPOT_REGION}
              data-form-id={HUBSPOT_FORM_ID}
              data-portal-id={HUBSPOT_PORTAL_ID}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;
