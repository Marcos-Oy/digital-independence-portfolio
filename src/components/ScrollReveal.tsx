import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "scale";
  as?: keyof JSX.IntrinsicElements;
}

const ScrollReveal = ({ children, className = "", delay = 0, variant = "up", as: Tag = "div" }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const variantClass = { up: "sr", left: "sr-left", scale: "sr-scale" }[variant];

  const TagAny = Tag as any;
  return (
    <TagAny ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </TagAny>
  );
};

export default ScrollReveal;
