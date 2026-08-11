import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";

interface LaunchingRocketProps {
  className?: string;
}

/**
 * Mancha diagonal de marca con un cohete que despega al entrar en pantalla:
 * sube en diagonal dejando una estela de partículas y, al llegar arriba,
 * queda flotando suavemente con un brillo neón. Incluye una esfera de
 * acento y estrellitas dispersas, como la mancha de la plataforma de
 * lanzamiento. Pensado para rellenar zonas vacías con un efecto más
 * vistoso que un blob estático.
 */
const LaunchingRocket = ({ className = "" }: LaunchingRocketProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [launched, setLaunched] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setLaunched(true);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
      {/* Mancha diagonal, plataforma de lanzamiento */}
      <div
        className="absolute inset-0 opacity-90 dark:opacity-80"
        style={{
          borderRadius: "42% 58% 66% 34% / 56% 38% 62% 44%",
          background: "linear-gradient(140deg, hsl(var(--primary)), hsl(var(--secondary)))",
          transform: "rotate(-14deg)",
        }}
      />

      {/* Esfera de acento y estrellitas, como la referencia */}
      <GlowOrb color="secondary" className="absolute w-10 h-10 md:w-14 md:h-14 left-[8%] bottom-[10%]" />
      <SparkleDots color="secondary" className="absolute inset-0 w-full h-full text-white" />

      {/* Estela de partículas */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/70 blur-[2px]"
          style={{ width: 16 - i * 3, height: 16 - i * 3, left: "36%", bottom: "26%" }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={
            launched
              ? { opacity: [0, 0.7, 0], x: -30 - i * 14, y: 40 + i * 18 }
              : { opacity: 0 }
          }
          transition={{
            duration: 1.1,
            delay: 0.5 + i * 0.12,
            repeat: launched ? Infinity : 0,
            repeatDelay: 1.6,
          }}
        />
      ))}

      {/* Cohete */}
      <motion.div
        className="absolute"
        style={{ left: "28%", bottom: "16%" }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={launched ? { x: [0, 65, 72], y: [0, -76, -84], opacity: [0, 1, 1] } : { opacity: 0 }}
        transition={{ duration: 1.3, delay: 0.3, ease: [0.34, 1.15, 0.64, 1], times: [0, 0.85, 1] }}
      >
        <motion.div
          animate={launched ? { y: [0, -6, 0] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          style={{
            transform: "rotate(45deg)",
            filter: "drop-shadow(0 0 14px hsl(var(--secondary) / 0.85)) drop-shadow(0 0 28px hsl(var(--primary) / 0.5))",
          }}
        >
          <Rocket
            className="w-16 h-16 md:w-24 md:h-24 text-white"
            fill="currentColor"
            fillOpacity={0.18}
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LaunchingRocket;
