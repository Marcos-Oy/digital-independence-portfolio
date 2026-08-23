import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface RadialOrbitNode {
  icon: LucideIcon;
  label: string;
  desc?: string;
}

interface RadialOrbitDiagramProps {
  nodes: RadialOrbitNode[];
  centerTitle: string;
  centerIcon?: LucideIcon;
  className?: string;
}

/**
 * Diagrama radial orbital (misma técnica que AnimatedProcessCircle de
 * "Cómo trabajamos"): los anillos se dibujan en SVG con viewBox 0-100 y los
 * nodos se posicionan con trigonometría en porcentajes, por lo que siempre
 * quedan perfectamente alineados sobre la órbita en cualquier tamaño.
 *
 * Efectos: anillo que se dibuja al entrar en viewport, franja punteada que
 * rota en permanencia, núcleo con pulso luminoso y nodos que aparecen con
 * resorte escalonado + escala al hover.
 */
const RadialOrbitDiagram = ({
  nodes,
  centerTitle,
  centerIcon: CenterIcon,
  className = "",
}: RadialOrbitDiagramProps) => {
  const n = nodes.length;
  const R = 34; // radio de la órbita en % del viewBox

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      {/* Anillos orbitales */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="0.35"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.55"
          strokeLinecap="round"
          strokeDasharray="0.5 17.5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </motion.circle>
        {/* Anillo interior tenue para dar profundidad */}
        <motion.circle
          cx="50"
          cy="50"
          r={R * 0.62}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="0.2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
      </svg>

      {/* Pulso luminoso detrás del núcleo */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full bg-primary/30 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.2, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Núcleo */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square rounded-full gradient-brand shadow-brand flex flex-col items-center justify-center text-center p-[4%]"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
      >
        {CenterIcon && (
          <CenterIcon
            className="w-5 h-5 md:w-7 md:h-7 text-brand-foreground mb-1.5"
            strokeWidth={1.7}
          />
        )}
        <p className="font-heading font-extrabold text-brand-foreground uppercase tracking-[0.14em] leading-snug text-[clamp(0.5rem,1.7vw,0.78rem)]">
          {centerTitle}
        </p>
      </motion.div>

      {/* Nodos sobre la órbita */}
      {nodes.map((node, i) => {
        const angle = -90 + i * (360 / n);
        const rad = (angle * Math.PI) / 180;
        const x = 50 + R * Math.cos(rad);
        const y = 50 + R * Math.sin(rad);
        const Icon = node.icon;
        // El nodo superior lleva la etiqueta arriba del ícono (fuera del
        // anillo); el resto la lleva debajo, como en la referencia visual.
        const labelAbove = Math.sin(rad) < -0.5;
        return (
          <motion.div
            key={node.label}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
            whileInView={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
            whileHover={{ x: "-50%", y: "-50%", scale: 1.12 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.4 + i * 0.15,
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
          >
            <span className="relative inline-flex w-11 h-11 md:w-14 md:h-14 rounded-full bg-card border border-border items-center justify-center shadow-card">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.7} />
              <span
                className={`absolute left-1/2 -translate-x-1/2 w-24 md:w-28 text-center ${
                  labelAbove ? "bottom-full mb-2" : "top-full mt-2"
                }`}
              >
                <span className="block font-heading font-bold text-[10px] md:text-xs uppercase tracking-[0.14em] text-foreground leading-tight">
                  {node.label}
                </span>
                {node.desc && (
                  <span className="block text-[9px] md:text-[10px] text-muted-foreground leading-tight mt-0.5">
                    {node.desc}
                  </span>
                )}
              </span>
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default RadialOrbitDiagram;
