import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";

const SCRIPT_SRC =
  "https://independencia-digital.systeme.io/public/remote/page/4347016767cedb12dd37b978ba43cf41ee404671.js";

const rebindTriggers = () => {
  if (typeof window.onload === "function") {
    window.onload(new Event("load"));
  }
};

// Widget de formulario flotante de Systeme.io. El script original espera
// ejecutarse en una página estática y se engancha a window.onload para
// mostrar el popup y para enlazar los botones con la clase
// "systeme-show-popup-25041048" (ver LandingCtaButton.tsx). Como aquí se
// inyecta después de que React ya montó la página, ese evento nunca se
// vuelve a disparar solo, así que lo llamamos manualmente una vez cargado
// el script. Se reinyecta cada vez que cambia la landing para enlazar los
// botones de la página nueva.
const SystemeIoFloatingForm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = rebindTriggers;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);

  // El script solo escanea el DOM una vez (al cargar o reinyectarse), así
  // que un botón con esa clase que aparezca después (menú móvil, un mensaje
  // del chat, un modal) nunca queda enlazado y el clic no hace nada. Se
  // observa el documento y, si aparece un nuevo botón con la clase, se
  // vuelve a llamar al enganche para que también quede enlazado.
  useEffect(() => {
    let timeoutId: number | undefined;

    const observer = new MutationObserver((mutations) => {
      const hasNewTrigger = mutations.some((mutation) =>
        Array.from(mutation.addedNodes).some((node) => {
          if (!(node instanceof HTMLElement)) return false;
          return (
            node.classList.contains(SYSTEME_TRIGGER_CLASS) ||
            !!node.querySelector(`.${SYSTEME_TRIGGER_CLASS}`)
          );
        })
      );
      if (!hasNewTrigger) return;
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(rebindTriggers, 50);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default SystemeIoFloatingForm;
