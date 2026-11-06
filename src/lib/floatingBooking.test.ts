import { describe, expect, it } from "vitest";
import { intersectsViewport, shouldShowFloatingBooking } from "./floatingBooking";

describe("mobile floating diagnosis", () => {
  it("appears on mobile without a visible booking CTA", () => {
    expect(shouldShowFloatingBooking(true, false)).toBe(true);
  });
  it("hides when another booking CTA is visible", () => {
    expect(shouldShowFloatingBooking(true, true)).toBe(false);
  });
  it("never appears on desktop", () => {
    expect(shouldShowFloatingBooking(false, false)).toBe(false);
  });
  it("counts partial visibility but not offscreen or hidden CTAs", () => {
    const rect = { top: 620, bottom: 668, left: 20, right: 266, width: 246, height: 48 };
    expect(intersectsViewport(rect, 394, 642)).toBe(true);
    expect(intersectsViewport({ ...rect, top: 642 }, 394, 642)).toBe(false);
    expect(intersectsViewport({ ...rect, width: 0 }, 394, 642)).toBe(false);
  });
});