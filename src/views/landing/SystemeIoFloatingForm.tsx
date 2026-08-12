import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { SYSTEME_TRIGGER_CLASS } from "@/lib/systemeIo";

const SCRIPT_SRC =
  "https://independencia-digital.systeme.io/public/remote/page/4347016767cedb12dd37b978ba43cf41ee404671.js";

const rebindTriggers = () => {
  if (typeof window.onload === "function") {
    window.onload(new Event("load"));
  }
};

const loadScript = (onReady?: () => void) => {
  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  script.onload = () => {
    rebindTriggers();
    onReady?.();
  };
  document.body.appendChild(script);
  return script;
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
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const popupClosedRef = useRef(false);
  const reloadingRef = useRef(false);

  useEffect(() => {
    popupClosedRef.current = false;
    scriptRef.current = loadScript();

    return () => {
      scriptRef.current?.remove();
    };
  }, [pathname]);

  useEffect(() => {
    let bindTimeoutId: number | undefined;

    const observer = new MutationObserver((mutations) => {
      let hasNewTrigger = false;
      let popupClosed = false;

      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.classList.contains(SYSTEME_TRIGGER_CLASS) || node.querySelector(`.${SYSTEME_TRIGGER_CLASS}`)) {
            hasNewTrigger = true;
          }
        }
        // El popup de Systeme.io queda inutilizable para siempre en cuanto se
        // cierra una vez: su script marca internamente "ya se cerró" y esa
        // bandera nunca se resetea, así que ningún click posterior vuelve a
        // mostrarlo (bug del script de Systeme.io, no nuestro). Detectamos
        // el cierre (se elimina el iframe del popup del DOM) para saber que
        // el próximo click necesita una instancia nueva del script.
        for (const node of Array.from(mutation.removedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.id?.startsWith("systemeio-iframe-") || node.querySelector('[id^="systemeio-iframe-"]')) {
            popupClosed = true;
          }
        }
      }

      if (popupClosed) popupClosedRef.current = true;

      if (hasNewTrigger) {
        window.clearTimeout(bindTimeoutId);
        bindTimeoutId = window.setTimeout(rebindTriggers, 50);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Si el popup ya se cerró una vez, la única forma de que vuelva a abrir
    // es una instancia completamente nueva del script (ver comentario
    // arriba). Interceptamos el click en fase de captura, reinyectamos el
    // script y, una vez cargado, volvemos a disparar el click para que su
    // nuevo listener (ya funcional) lo abra.
    const onClickCapture = (event: MouseEvent) => {
      if (!popupClosedRef.current || reloadingRef.current) return;
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>(`.${SYSTEME_TRIGGER_CLASS}`);
      if (!trigger) return;

      reloadingRef.current = true;
      popupClosedRef.current = false;
      scriptRef.current?.remove();
      scriptRef.current = loadScript(() => {
        reloadingRef.current = false;
        trigger.click();
      });
    };

    document.addEventListener("click", onClickCapture, true);

    return () => {
      observer.disconnect();
      window.clearTimeout(bindTimeoutId);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return null;
};

export default SystemeIoFloatingForm;
