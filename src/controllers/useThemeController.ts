import { useState, useEffect } from "react";

const isNightHour = () => {
  const h = new Date().getHours();
  return h >= 19 || h < 6;
};

export const useThemeController = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      // Clear any previously persisted preference so the theme follows the clock by default
      try { localStorage.removeItem("theme"); } catch {}
      return isNightHour();
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Re-evaluate every minute so the theme flips automatically at 19:00 / 06:00
  // unless the user has manually toggled during this session.
  useEffect(() => {
    const id = window.setInterval(() => {
      setDark((prev) => {
        const auto = isNightHour();
        return auto !== prev ? auto : prev;
      });
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return { dark, toggle: () => setDark((d) => !d) };
};
