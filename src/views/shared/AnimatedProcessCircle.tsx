import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MethodStep } from "@/models/method";

interface AnimatedProcessCircleProps {
  steps: MethodStep[];
  className?: string;
  /** Si es false, el anillo y los nodos esperan sin dispararse aunque estén
   * en pantalla (p.ej. mientras el modal de bienvenida sigue abierto). */
  enabled?: boolean;
}

/**
 * Diagrama circular animado (tipo "método en 4 pasos"): un anillo se dibuja
 * al entrar en viewport, con nodos-ícono distribuidos alrededor y una
 * franja punteada que fluye continuamente para dar sensación de movimiento
 * permanente. El texto central cambia según el paso activo (hover/click).
 */
const AnimatedProcessCircle = ({ steps, className = "", enabled = true }: AnimatedProcessCircleProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const n = steps.length;
  const R = 42;

  // Avanza automáticamente por cada paso; se pausa mientras el cursor está
  // sobre el círculo para no pelear con la selección manual por hover/click.
  useEffect(() => {
    if (!enabled || isPaused) return;
    const interval = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % n);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [enabled, isPaused, n]);

  return (
    <div
      className={`relative aspect-square ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={enabled ? { pathLength: 1, opacity: 1 } : undefined}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="0.5 17.5"
          initial={{ opacity: 0 }}
          whileInView={enabled ? { opacity: 0.55 } : undefined}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="14s"
            repeatCount="indefinite"
          />
        </motion.circle>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center text-center px-[22%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-heading font-extrabold text-lg md:text-2xl text-foreground leading-tight mb-1.5">
              {steps[activeStep].title}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-snug">
              {steps[activeStep].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {steps.map((step, i) => {
        const angle = -90 + i * (360 / n);
        const rad = (angle * Math.PI) / 180;
        const x = 50 + R * Math.cos(rad);
        const y = 50 + R * Math.sin(rad);
        const Icon = step.icon;
        const isActive = activeStep === i;
        return (
          <motion.button
            key={step.title}
            type="button"
            onClick={() => setActiveStep(i)}
            onMouseEnter={() => setActiveStep(i)}
            aria-label={step.title}
            className={`absolute w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center gradient-brand text-primary-foreground transition-colors duration-300 ${
              isActive ? "shadow-brand ring-4 ring-primary/20" : "hover:opacity-100"
            }`}
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
            whileInView={enabled ? { x: "-50%", y: "-50%", scale: 1, opacity: isActive ? 1 : 0.75 } : undefined}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
          </motion.button>
        );
      })}
    </div>
  );
};

export default AnimatedProcessCircle;
