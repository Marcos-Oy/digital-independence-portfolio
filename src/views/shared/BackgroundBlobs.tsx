import { useId } from "react";

type BlobShape = 1 | 2 | 3 | 4 | 5 | 6;
type BlobColor = "mixed" | "primary" | "secondary";

interface BlobProps {
  className?: string;
  shape?: BlobShape;
  /** "mixed" combina azul y verdoso (default); "primary"/"secondary" cargan
   * el peso hacia un solo color de marca, para que no todas las manchas se
   * vean iguales. */
  color?: BlobColor;
}

/** Mancha grande y difusa, en tonos de marca muy suaves. Solo decorativa. */
export const SoftBlob = ({ className = "", shape = 1, color = "mixed" }: BlobProps) => (
  <div
    className={`blob-soft ${color !== "mixed" ? `blob-soft-${color}` : ""} blob-shape-${shape} ${className}`}
    aria-hidden="true"
  />
);

/** Gota pequeña con el degradado sólido de marca, como acento puntual. */
export const AccentBlob = ({ className = "", shape = 1, color = "mixed" }: BlobProps) => (
  <div
    className={`blob-accent ${color !== "mixed" ? `blob-accent-${color}` : ""} blob-shape-${shape} ${className}`}
    aria-hidden="true"
  />
);

interface GlowOrbProps {
  className?: string;
  color?: "primary" | "secondary";
}

/** Esfera con brillo neón (radial-gradient + box-shadow difuminado), tipo
 * "planeta" de acento. Anima un pulso suave y continuo. */
export const GlowOrb = ({ className = "", color = "secondary" }: GlowOrbProps) => (
  <div
    className={`rounded-full pointer-events-none animate-glow-pulse ${className}`}
    style={{
      background: `radial-gradient(circle at 32% 28%, hsl(var(--${color}) / 0.95), hsl(var(--${color}) / 0.6) 55%, hsl(var(--${color}) / 0.2) 100%)`,
      boxShadow: `0 0 40px 8px hsl(var(--${color}) / 0.45), 0 0 80px 26px hsl(var(--${color}) / 0.2)`,
    }}
    aria-hidden="true"
  />
);

interface SparkleDotsProps {
  className?: string;
  color?: "primary" | "secondary";
}

/** Puntitos/estrellas dispersas, como acento suelto cerca de otras manchas. */
export const SparkleDots = ({ className = "", color = "secondary" }: SparkleDotsProps) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <circle cx="20" cy="34" r="4" fill={`hsl(var(--${color}))`} opacity="0.85" />
    <circle cx="168" cy="52" r="3" fill={`hsl(var(--${color}))`} opacity="0.6" />
    <circle cx="92" cy="150" r="5" fill={`hsl(var(--${color}))`} opacity="0.7" />
    <circle cx="150" cy="176" r="2.5" fill={`hsl(var(--${color}))`} opacity="0.9" />
    <circle cx="42" cy="118" r="3" fill={`hsl(var(--${color}))`} opacity="0.5" />
    <circle cx="120" cy="24" r="2" fill={`hsl(var(--${color}))`} opacity="0.8" />
  </svg>
);

interface BlobImageProps {
  src: string;
  alt: string;
  shape?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/** Recorta una imagen en la silueta orgánica de mancha, en vez de un rectángulo. */
export const BlobImage = ({ src, alt, shape = 1, className = "" }: BlobImageProps) => (
  <div className={`blob-shape-${shape} overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

interface RingLoopProps {
  className?: string;
  color?: "primary" | "secondary";
}

/** Anillo decorativo incompleto (como un lazo abierto) alrededor de una imagen. */
export const RingLoop = ({ className = "", color = "primary" }: RingLoopProps) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="100"
      cy="100"
      r="86"
      stroke={`hsl(var(--${color}))`}
      strokeWidth="13"
      strokeLinecap="round"
      strokeDasharray="230 90"
      transform="rotate(-38 100 100)"
    />
    <circle cx="176" cy="150" r="11" fill={`hsl(var(--${color}))`} />
  </svg>
);

interface StripeAccentProps {
  className?: string;
}

/** Bloque de rayas diagonales, como acento gráfico detrás de una foto o título. */
export const StripeAccent = ({ className = "" }: StripeAccentProps) => (
  <div className={`stripe-accent ${className}`} aria-hidden="true" />
);

interface CircuitLinesProps {
  className?: string;
}

/** Patrón de nodos conectados por líneas finas, tipo circuito/red. */
export const CircuitLines = ({ className = "" }: CircuitLinesProps) => (
  <svg
    viewBox="0 0 400 300"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M40,60 L165,38 L288,92 M165,38 L108,224 M288,92 L358,204 M108,224 L358,204" />
    <circle cx="40" cy="60" r="4" fill="currentColor" stroke="none" />
    <circle cx="165" cy="38" r="4" fill="currentColor" stroke="none" />
    <circle cx="288" cy="92" r="4" fill="currentColor" stroke="none" />
    <circle cx="358" cy="204" r="4" fill="currentColor" stroke="none" />
    <circle cx="108" cy="224" r="4" fill="currentColor" stroke="none" />
  </svg>
);

/* Cuatro siluetas de ola distintas para que las separaciones no se vean
   todas cortadas con el mismo molde. */
const WAVE_PATHS = {
  1: "M0,64 C240,120 480,8 720,24 C960,40 1200,96 1440,56 L1440,120 L0,120 Z",
  2: "M0,100 C360,10 720,4 1080,66 C1260,98 1350,112 1440,92 L1440,120 L0,120 Z",
  3: "M0,36 C180,92 360,0 540,48 C720,98 900,6 1080,58 C1260,110 1350,66 1440,36 L1440,120 L0,120 Z",
  4: "M0,16 C300,102 500,112 720,58 C940,6 1140,92 1440,26 L1440,120 L0,120 Z",
} as const;

interface WaveDividerProps {
  className?: string;
  /** Clase de color Tailwind para el relleno de la ola, ej. "text-muted". */
  fillClassName?: string;
  flip?: boolean;
  /** En vez del color de fondo, rellena la ola con el degradado azul→verdoso
   * de marca, para que las separaciones no sean siempre blancas/neutras. */
  gradient?: boolean;
  /** Silueta de la ola (1 a 4), para que las distintas separaciones del
   * sitio no repitan siempre la misma curva. */
  variant?: 1 | 2 | 3 | 4;
}

/** Divisor de sección en forma de ola. Se ubica al final de una sección con
 * position: relative, y se rellena con el color de fondo de la sección
 * siguiente (o con el degradado de marca) para simular la transición. */
export const WaveDivider = ({ className = "", fillClassName = "text-background", flip = false, gradient = false, variant = 1 }: WaveDividerProps) => {
  const gradId = useId();
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full ${gradient ? "" : fillClassName} ${flip ? "-scale-y-100" : ""} ${className}`}
      aria-hidden="true"
    >
      {gradient && (
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      )}
      <path fill={gradient ? `url(#${gradId})` : "currentColor"} d={WAVE_PATHS[variant]} />
    </svg>
  );
};

/* Tres combinaciones de curvas/orden para que los distintos separadores en
   capas del sitio no se vean todos idénticos entre sí. */
const LAYERED_WAVE_SEEDS = {
  1: { back: 4, mid: 2, light: 1, front: 3 },
  2: { back: 1, mid: 3, light: 4, front: 2 },
  3: { back: 2, mid: 4, light: 3, front: 1 },
} as const;

interface LayeredWaveDividerProps {
  className?: string;
  seed?: 1 | 2 | 3;
}

/** Divisor de sección con varias olas superpuestas de distinto tamaño y
 * color (azulada, verdosa, blanquecina y una degradada al frente), para
 * que la transición entre secciones tenga profundidad en vez de una sola
 * curva plana. */
export const LayeredWaveDivider = ({ className = "", seed = 1 }: LayeredWaveDividerProps) => {
  const gradId = useId();
  const { back, mid, light, front } = LAYERED_WAVE_SEEDS[seed];
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full opacity-30">
        <path fill="hsl(var(--primary))" d={WAVE_PATHS[back]} />
      </svg>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[76%] opacity-45">
        <path fill="hsl(var(--secondary))" d={WAVE_PATHS[mid]} />
      </svg>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[52%] opacity-70">
        <path fill="hsl(var(--background))" d={WAVE_PATHS[light]} />
      </svg>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-[30%]">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        <path fill={`url(#${gradId})`} d={WAVE_PATHS[front]} />
      </svg>
    </div>
  );
};
