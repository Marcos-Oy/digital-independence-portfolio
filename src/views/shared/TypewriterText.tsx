import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  /** Si es true (default), espera a que el texto entre en pantalla para
   * empezar a tipear, en vez de hacerlo apenas se monta. Útil para
   * secciones bajo el pliegue, donde tipear al montar terminaría antes de
   * que el usuario llegue a verlo. */
  triggerOnView?: boolean;
}

/** Efecto de tipeo estilo consola. El texto completo queda en el DOM para
 * lectores de pantalla; la animación es solo visual. */
const TypewriterText = ({ text, className = "", speed = 45, startDelay = 0, triggerOnView = true }: TypewriterTextProps) => {
  const [shown, setShown] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const [armed, setArmed] = useState(!triggerOnView);

  useEffect(() => {
    if (!triggerOnView) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setArmed(true);
        observer.disconnect();
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!armed) return;
    setShown("");
    let i = 0;
    let intervalId: number | undefined;

    const start = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length && intervalId) window.clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [armed, text, speed, startDelay]);

  return (
    <span ref={ref} className={`font-mono ${className}`} role="text" aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
};

export default TypewriterText;
