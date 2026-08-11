import { useEffect, useState } from "react";

const REVEAL_DELAY_MS = 2000;

/**
 * Se muestra siempre, en cada carga de página, sin persistir el cierre:
 * 2 segundos después de que el usuario cierra el modal de bienvenida
 * (evento "welcome-modal-closed"), o tras un breve retraso fijo en
 * páginas donde ese modal no existe (landing, hub).
 */
export const useCookieNoticeController = (waitForWelcomeModal: boolean) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let revealTimer: number | undefined;

    const showAfterDelay = () => {
      window.clearTimeout(revealTimer);
      revealTimer = window.setTimeout(() => setVisible(true), REVEAL_DELAY_MS);
    };

    if (waitForWelcomeModal) {
      window.addEventListener("welcome-modal-closed", showAfterDelay);
      return () => {
        window.removeEventListener("welcome-modal-closed", showAfterDelay);
        window.clearTimeout(revealTimer);
      };
    }

    const t = window.setTimeout(() => setVisible(true), 1500);
    return () => window.clearTimeout(t);
  }, [waitForWelcomeModal]);

  const dismiss = () => setVisible(false);

  return { visible, dismiss };
};
