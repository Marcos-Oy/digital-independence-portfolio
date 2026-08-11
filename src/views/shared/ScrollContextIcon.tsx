import { Lock, Unlock, type LucideIcon } from "lucide-react";
import { useScrollProgress } from "@/controllers/useScrollProgress";

export type ScrollIconMode = "rotate" | "unlock" | "pulse";

interface ScrollContextIconProps {
  icon: LucideIcon;
  mode?: ScrollIconMode;
  className?: string;
}

/**
 * Ícono grande y semitransparente de fondo que reacciona al scroll:
 * - "rotate": gira progresivamente mientras la sección pasa por el viewport.
 * - "unlock": un candado cerrado se desvanece en uno abierto (ciberseguridad).
 * - "pulse": escala levemente con el progreso, como un pulso.
 * Puramente decorativo (aria-hidden), no debe llevar contenido informativo.
 */
const ScrollContextIcon = ({ icon: Icon, mode = "rotate", className = "" }: ScrollContextIconProps) => {
  const { ref, progress } = useScrollProgress();

  if (mode === "unlock") {
    return (
      <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
        <Lock className="absolute inset-0 w-full h-full" strokeWidth={0.75} style={{ opacity: Math.max(0, 1 - progress * 1.6) }} />
        <Unlock className="absolute inset-0 w-full h-full" strokeWidth={0.75} style={{ opacity: Math.min(1, progress * 1.6) }} />
      </div>
    );
  }

  if (mode === "pulse") {
    const scale = 0.85 + progress * 0.3;
    return (
      <div
        ref={ref}
        className={`pointer-events-none ${className}`}
        aria-hidden="true"
        style={{ transform: `scale(${scale})`, opacity: 0.5 + progress * 0.5 }}
      >
        <Icon className="w-full h-full" strokeWidth={0.75} />
      </div>
    );
  }

  const rotation = -18 + progress * 55;
  return (
    <div
      ref={ref}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Icon className="w-full h-full" strokeWidth={0.75} />
    </div>
  );
};

export default ScrollContextIcon;
