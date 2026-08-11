import { useEffect } from "react";
import { playClickSound } from "@/lib/clickSound";

/**
 * Reproduce un "tag" suave en cualquier interacción o navegación del
 * sitio (botones y enlaces), sin tener que instrumentar cada componente:
 * escucha clics en fase de captura sobre todo el documento. Montado una
 * sola vez, cubre elementos actuales y futuros. Los elementos marcados
 * con data-skip-click-sound (p.ej. el botón del chat, que ya tiene su
 * propio sonido) quedan excluidos.
 */
const GlobalClickSound = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("[data-skip-click-sound]")) return;

      const interactive = target.closest<HTMLElement>("button, [role='button'], a[href]");
      if (!interactive) return;
      if (interactive instanceof HTMLButtonElement && interactive.disabled) return;

      playClickSound();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
};

export default GlobalClickSound;
