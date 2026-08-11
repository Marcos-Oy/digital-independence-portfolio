import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface DrawIconProps {
  icon: LucideIcon;
  className?: string;
  strokeWidth?: number;
  duration?: number;
  active?: boolean;
}

/**
 * Envuelve cualquier ícono Lucide y lo hace "dibujarse" con un trazo
 * animado (stroke-dasharray/offset) la primera vez que entra al viewport,
 * en vez de aparecer instantáneo. Funciona con cualquier ícono porque mide
 * la longitud real de cada sub-trazo en tiempo de ejecución.
 */
const DrawIcon = ({ icon: Icon, className = "", strokeWidth = 1.75, duration = 900, active = true }: DrawIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const shapes = Array.from(
      svg.querySelectorAll<SVGGeometryElement>("path, circle, line, polyline, polygon, rect, ellipse")
    );
    if (shapes.length === 0) return;

    shapes.forEach((el, i) => {
      let length = 60;
      try {
        length = el.getTotalLength();
      } catch {
        /* shape without measurable length keeps the fallback value */
      }
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.65,0,0.35,1) ${i * 110}ms`;
    });

    // Sin "active" (p.ej. mientras el modal de bienvenida sigue abierto), el
    // ícono queda listo pero sin trazar; no se observa hasta que se active.
    if (!active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        requestAnimationFrame(() => {
          shapes.forEach((el) => {
            el.style.strokeDashoffset = "0";
          });
        });
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, [duration, active]);

  return <Icon ref={svgRef} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
};

export default DrawIcon;
