import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SEGMENTS = [
  { value: 45, color: "hsl(var(--primary))" },
  { value: 30, color: "hsl(var(--secondary))" },
  { value: 25, color: "hsl(var(--muted-foreground) / 0.3)" },
];

const BARS = [0.4, 0.75, 0.5, 0.9, 0.6];

/**
 * Ilustración decorativa (gráfico de torta + mini barras animadas) para
 * rellenar el hueco que deja la grilla de servicios cuando el último
 * renglón no completa las 3 columnas. Deliberadamente sin apariencia de
 * tarjeta (sin borde, fondo ni título/descripción) para que no se confunda
 * con un servicio clickeable — es puro fondo decorativo.
 */
const AnimatedDashboardCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const r = 30;
  const circumference = 2 * Math.PI * r;
  let cumulative = 0;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="hidden lg:flex items-center justify-center gap-8 h-full pointer-events-none"
    >
      <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90 opacity-60">
        <circle cx="40" cy="40" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="9" />
        {SEGMENTS.map((seg, i) => {
          const len = (seg.value / 100) * circumference;
          const dashoffset = -cumulative;
          cumulative += len;
          return (
            <motion.circle
              key={i}
              cx="40"
              cy="40"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="9"
              strokeLinecap="round"
              strokeDasharray={`${len} ${circumference - len}`}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: active ? dashoffset : circumference }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      <div className="flex items-end gap-1.5 h-16 opacity-60">
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            className="w-2.5 rounded-full"
            style={{ background: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--secondary))" }}
            initial={{ height: 0 }}
            animate={{ height: active ? `${h * 100}%` : 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedDashboardCard;
