import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";
import {
  FLOATING_BOOKING_HIDE_ATTR,
  intersectsViewport,
  shouldShowFloatingBooking,
} from "@/lib/floatingBooking";

const bookingSelector = `.${BOOKING_TRIGGER_CLASS}:not([data-floating-booking])`;
const hideZoneSelector = `[${FLOATING_BOOKING_HIDE_ATTR}]`;

function isVisibleInViewport(element: HTMLElement): boolean {
  if (!intersectsViewport(element.getBoundingClientRect(), window.innerWidth, window.innerHeight)) return false;
  for (let node: HTMLElement | null = element; node; node = node.parentElement) {
    const style = getComputedStyle(node);
    if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) return false;
  }
  return true;
}

function anyVisible(selector: string): boolean {
  return Array.from(document.querySelectorAll<HTMLElement>(selector)).some(isVisibleInViewport);
}

export default function FloatingBookingCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const hasVisibleCta = anyVisible(bookingSelector);
      const hideZone = anyVisible(hideZoneSelector);
      setVisible(shouldShowFloatingBooking(mobile.matches, hasVisibleCta, hideZone));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const intersection = new IntersectionObserver(schedule, { threshold: [0, 0.01, 1] });
    const observe = () => {
      intersection.disconnect();
      document.querySelectorAll(`${bookingSelector}, ${hideZoneSelector}`).forEach((element) => intersection.observe(element));
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

  return (
    <Button
      data-floating-booking
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`${BOOKING_TRIGGER_CLASS} cta-estrella fixed bottom-6 right-24 z-50 h-14 max-w-[calc(100%-7rem)] gap-2 whitespace-normal rounded-full gradient-brand px-4 text-[13px] font-heading font-semibold text-primary-foreground shadow-brand md:hidden transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <CalendarDays aria-hidden="true" />
      <span>Agendar diagnóstico gratis</span>
    </Button>
  );
}
