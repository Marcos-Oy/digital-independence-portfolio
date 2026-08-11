import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

/** Efecto de tipeo estilo consola. El texto completo queda en el DOM para
 * lectores de pantalla; la animación es solo visual. */
const TypewriterText = ({ text, className = "", speed = 45, startDelay = 0 }: TypewriterTextProps) => {
  const [shown, setShown] = useState("");

  useEffect(() => {
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
  }, [text, speed, startDelay]);

  return (
    <span className={`font-mono ${className}`} role="text" aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
};

export default TypewriterText;
