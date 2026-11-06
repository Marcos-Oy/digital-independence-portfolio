export type ViewportRect = { top: number; bottom: number; left: number; right: number; width: number; height: number };

/**
 * Marcador que llevan las zonas (pies de página) donde el botón flotante de
 * "Agendar diagnóstico gratis" NO debe mostrarse, porque taparía enlaces
 * importantes como "Política de Privacidad".
 */
export const FLOATING_BOOKING_HIDE_ATTR = "data-floating-booking-hide";

export function intersectsViewport(rect: ViewportRect, width: number, height: number): boolean {
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < height && rect.left < width;
}

export function shouldShowFloatingBooking(
  mobile: boolean,
  visibleBookingCta: boolean,
  hideZoneVisible: boolean,
): boolean {
  return mobile && !visibleBookingCta && !hideZoneVisible;
}
