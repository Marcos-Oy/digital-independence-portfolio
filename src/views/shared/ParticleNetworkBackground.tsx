import { useEffect, useRef } from "react";

interface ParticleNetworkBackgroundProps {
  className?: string;
  density?: number;
  maxLinkDistance?: number;
  speed?: number;
  active?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: "primary" | "secondary";
}

/**
 * Fondo de red de partículas conectadas (canvas), estilo hero animado.
 * Usa los tokens de color de marca vigentes (lee --primary/--secondary del
 * DOM) para no introducir colores nuevos. Se congela en un solo frame si el
 * usuario tiene prefers-reduced-motion activado.
 */
const ParticleNetworkBackground = ({
  className = "",
  density = 60,
  maxLinkDistance = 150,
  speed = 0.25,
  active = true,
}: ParticleNetworkBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = getComputedStyle(document.documentElement);
    const colorOf = (name: string) => `hsl(${root.getPropertyValue(name).trim()}`;
    const primary = colorOf("--primary");
    const secondary = colorOf("--secondary");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;

    const seedParticles = () => {
      const area = width * height;
      const count = Math.max(18, Math.min(density, Math.round(area / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        hue: Math.random() > 0.5 ? "primary" : "secondary",
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * 0.6;
            ctx.strokeStyle = `${a.hue === "primary" ? primary : secondary} / ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `${p.hue === "primary" ? primary : secondary} / 0.9)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      draw();
      raf = window.requestAnimationFrame(step);
    };

    resize();
    if (reduceMotion) {
      draw();
    } else {
      raf = window.requestAnimationFrame(step);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, maxLinkDistance, speed, active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
};

export default ParticleNetworkBackground;
