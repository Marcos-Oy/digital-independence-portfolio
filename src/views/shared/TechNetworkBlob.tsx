import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Database, Code2 } from "lucide-react";
import { GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";

interface TechNetworkBlobProps {
  className?: string;
}

const NODES = [
  { icon: Brain, x: 50, y: 20, delay: 0.3 },
  { icon: Database, x: 24, y: 72, delay: 0.5 },
  { icon: Code2, x: 76, y: 72, delay: 0.7 },
];

const LINES = [
  { from: NODES[0], to: NODES[1] },
  { from: NODES[0], to: NODES[2] },
  { from: NODES[1], to: NODES[2] },
];

/**
 * Mancha de marca con una mini red de nodos (IA, base de datos, código)
 * conectados por líneas que se dibujan al entrar en pantalla, con pulsos de
 * "datos" viajando por las conexiones. Misma composición visual que
 * LaunchingRocket (mancha diagonal + esfera + estrellitas) pero con un
 * contenido distinto, para no repetir el mismo ícono dos veces en la misma
 * página.
 */
const TechNetworkBlob = ({ className = "" }: TechNetworkBlobProps) => {
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
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-90 dark:opacity-80"
        style={{
          borderRadius: "42% 58% 66% 34% / 56% 38% 62% 44%",
          background: "linear-gradient(140deg, hsl(var(--primary)), hsl(var(--secondary)))",
          transform: "rotate(-14deg)",
        }}
      />

      <GlowOrb color="secondary" className="absolute w-8 h-8 md:w-10 md:h-10 right-[6%] bottom-[6%]" />
      <SparkleDots color="secondary" className="absolute inset-0 w-full h-full text-white" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {LINES.map((l, i) => (
          <motion.line
            key={`line-${i}`}
            x1={l.from.x}
            y1={l.from.y}
            x2={l.to.x}
            y2={l.to.y}
            stroke="white"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={active ? { pathLength: 1, opacity: 0.6 } : {}}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: "easeOut" }}
          />
        ))}
        {LINES.map((l, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="1.4"
            fill="white"
            initial={{ opacity: 0 }}
            animate={
              active
                ? { cx: [l.from.x, l.to.x], cy: [l.from.y, l.to.y], opacity: [0, 1, 0] }
                : {}
            }
            transition={{
              duration: 1.4,
              delay: 1 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {NODES.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            className="absolute w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
            animate={active ? { x: "-50%", y: "-50%", scale: 1, opacity: 1 } : { x: "-50%", y: "-50%" }}
            transition={{ delay: node.delay, type: "spring", stiffness: 260, damping: 18 }}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechNetworkBlob;
