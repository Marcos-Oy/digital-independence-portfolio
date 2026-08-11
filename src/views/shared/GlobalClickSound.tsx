import { useEffect } from "react";
import { playClickSound } from "@/lib/clickSound";

/**
 * Reproduce un "tag" suave cada vez que se hace clic en cualquier botón
 * del sitio, sin tener que instrumentar cada componente: escucha clics en
 * fase de captura sobre todo el documento y filtra por <button> o
 * [role="button"]. Montado una sola vez, cubre botones actuales y futuros.
 */
const GlobalClickSound = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLButtonElement>("button, [role='button']");
      if (!btn || btn.disabled) return;
      playClickSound();
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
};

export default GlobalClickSound;
