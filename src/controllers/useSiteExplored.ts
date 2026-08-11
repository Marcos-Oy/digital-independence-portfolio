import { useEffect, useState } from "react";

/**
 * Indica si el usuario ya cerró el modal de bienvenida (clic en "Explorar
 * el sitio" o en la X). Se usa para posponer los efectos animados
 * (partículas, dibujo de íconos, diagrama circular, entrada del hero) hasta
 * ese momento, en vez de reproducirlos detrás del modal sin que se vean.
 */
export const useSiteExplored = () => {
  const [explored, setExplored] = useState(() => {
    try {
      return sessionStorage.getItem("welcome_modal_seen") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (explored) return;
    const onClosed = () => setExplored(true);
    window.addEventListener("welcome-modal-closed", onClosed);
    return () => window.removeEventListener("welcome-modal-closed", onClosed);
  }, [explored]);

  return explored;
};
