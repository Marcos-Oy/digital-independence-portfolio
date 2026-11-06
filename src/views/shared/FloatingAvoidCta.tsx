import { useEffect } from "react";

/**
 * Oculta (con fundido) los botones flotantes [data-flotante] mientras se
 * superponen a un botón de acción, para que nunca tapen un CTA en el celular.
 */
const CTA_SELECTOR = ".cta-estrella:not([data-flotante]), .js-agendar-diagnostico";

const FloatingAvoidCta = () => {
  useEffect(() => {
    let raf = 0;
    const check = () => {
      raf = 0;
      const ctas = Array.from(document.querySelectorAll<HTMLElement>(CTA_SELECTOR)).map((el) =>
        el.getBoundingClientRect(),
      );
      document.querySelectorAll<HTMLElement>("[data-flotante]").forEach((f) => {
        const r = f.getBoundingClientRect();
        const pad = 8;
        const hit = ctas.some(
          (c) =>
            c.width > 0 &&
            c.left < r.right + pad &&
            c.right > r.left - pad &&
            c.top < r.bottom + pad &&
            c.bottom > r.top - pad,
        );
        f.style.transition = "opacity 200ms ease, transform 200ms ease";
        f.style.opacity = hit ? "0" : "";
        f.style.pointerEvents = hit ? "none" : "";
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const id = window.setInterval(schedule, 500);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.clearInterval(id);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
};

export default FloatingAvoidCta;
