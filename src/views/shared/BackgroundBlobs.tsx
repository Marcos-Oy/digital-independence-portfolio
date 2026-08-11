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

interface BlobImageProps {
  src: string;
  alt: string;
  shape?: 1 | 2 | 3;
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

interface WaveDividerProps {
  className?: string;
  /** Clase de color Tailwind para el relleno de la ola, ej. "text-muted". */
  fillClassName?: string;
  flip?: boolean;
  /** En vez del color de fondo, rellena la ola con el degradado azul→verdoso
   * de marca, para que las separaciones no sean siempre blancas/neutras. */
  gradient?: boolean;
}

/** Divisor de sección en forma de ola. Se ubica al final de una sección con
 * position: relative, y se rellena con el color de fondo de la sección
 * siguiente (o con el degradado de marca) para simular la transición. */
export const WaveDivider = ({ className = "", fillClassName = "text-background", flip = false, gradient = false }: WaveDividerProps) => {
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
      <path
        fill={gradient ? `url(#${gradId})` : "currentColor"}
        d="M0,64 C240,120 480,8 720,24 C960,40 1200,96 1440,56 L1440,120 L0,120 Z"
      />
    </svg>
  );
};
