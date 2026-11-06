export type ViewportRect = { top: number; bottom: number; left: number; right: number; width: number; height: number };

export function intersectsViewport(rect: ViewportRect, width: number, height: number): boolean {
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < height && rect.left < width;
}

export function shouldShowFloatingBooking(mobile: boolean, visibleBookingCta: boolean): boolean {
  return mobile && !visibleBookingCta;
}