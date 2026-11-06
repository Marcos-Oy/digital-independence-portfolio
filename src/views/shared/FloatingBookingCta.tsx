import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";
import { intersectsViewport, shouldShowFloatingBooking } from "@/lib/floatingBooking";

const selector = `.${BOOKING_TRIGGER_CLASS}:not([data-floating-booking])`;

export default function FloatingBookingCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const hasVisibleCta = Array.from(document.querySelectorAll<HTMLElement>(selector)).some((element) => {
        if (!intersectsViewport(element.getBoundingClientRect(), window.innerWidth, window.innerHeight)) return false;
        for (let node: HTMLElement | null = element; node; node = node.parentElement) {
          const style = getComputedStyle(node);
          if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
        }
        return true;
      });
      setVisible(shouldShowFloatingBooking(mobile.matches, hasVisibleCta));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const intersection = new IntersectionObserver(schedule, { threshold: [0, 0.01, 1] });
    const observe = () => {
      intersection.disconnect();
      document.querySelectorAll(selector).forEach((element) => intersection.observe(element));
      schedule();
    };
    const mutations = new MutationObserver(observe);
    mutations.observe(document.body, { childList: true, subtree: true });
    observe();
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    document.addEventListener("animationend", schedule);
    document.addEventListener("transitionend", schedule);
    mobile.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      intersection.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("animationend", schedule);
      document.removeEventListener("transitionend", schedule);
      mobile.removeEventListener("change", schedule);
    };
  }, []);

  if (!visible) return null;
  return (
    <Button data-floating-booking className={`${BOOKING_TRIGGER_CLASS} cta-estrella fixed bottom-6 right-24 z-50 h-14 max-w-[calc(100%-7rem)] gap-2 whitespace-normal rounded-full gradient-brand px-4 text-[13px] font-heading font-semibold text-primary-foreground shadow-brand md:hidden`}>
      <CalendarDays aria-hidden="true" />
      <span>Agendar diagnóstico gratis</span>
    </Button>
  );
}