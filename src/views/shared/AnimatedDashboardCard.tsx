import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SEGMENTS = [
  { value: 45, color: "hsl(var(--primary))" },
  { value: 30, color: "hsl(var(--secondary))" },
  { value: 25, color: "hsl(var(--muted-foreground) / 0.3)" },
];

const BARS = [0.4, 0.75, 0.5, 0.9, 0.6];

/**
 * Tarjeta decorativa con un gráfico de torta y mini barras animadas, tipo
 * dashboard en vivo. Se usa para rellenar el hueco que deja la grilla de
 * servicios cuando el último renglón no completa las 3 columnas, en vez de
 * dejar espacio en blanco. Puramente visual, no enlaza a ningún lado.
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
      className="hidden lg:flex bg-card border border-border rounded-xl overflow-hidden flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center gap-8 px-6">
        <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90">
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

        <div className="flex items-end gap-1.5 h-16">
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
      <div className="p-6 flex flex-col flex-1 justify-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-1.5">Panel en vivo</p>
        <h3 className="font-heading font-bold text-base text-foreground mb-2 leading-snug">
          Tus KPIs, siempre a la vista
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Así se ve un dashboard construido a tu medida.
        </p>
      </div>
    </div>
  );
};

export default AnimatedDashboardCard;
