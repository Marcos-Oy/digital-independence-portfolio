import { describe, expect, it } from "vitest";
import {
  FLOATING_BOOKING_HIDE_ATTR,
  intersectsViewport,
  shouldShowFloatingBooking,
} from "./floatingBooking";

describe("mobile floating diagnosis", () => {
  it("appears on mobile without a visible booking CTA and without a hide zone", () => {
    expect(shouldShowFloatingBooking(true, false, false)).toBe(true);
  });
  it("hides when another booking CTA is visible", () => {
    expect(shouldShowFloatingBooking(true, true, false)).toBe(false);
  });
  it("hides when the footer (hide zone) is on screen", () => {
    expect(shouldShowFloatingBooking(true, false, true)).toBe(false);
  });
  it("never appears on desktop", () => {
    expect(shouldShowFloatingBooking(false, false, false)).toBe(false);
  });
  it("counts partial visibility but not offscreen or hidden CTAs", () => {
    const rect = { top: 620, bottom: 668, left: 20, right: 266, width: 246, height: 48 };
    expect(intersectsViewport(rect, 394, 642)).toBe(true);
    expect(intersectsViewport({ ...rect, top: 642 }, 394, 642)).toBe(false);
    expect(intersectsViewport({ ...rect, width: 0 }, 394, 642)).toBe(false);
  });
  it("marks the footer with the hide-zone attribute", () => {
    expect(FLOATING_BOOKING_HIDE_ATTR).toBe("data-floating-booking-hide");
  });
});
