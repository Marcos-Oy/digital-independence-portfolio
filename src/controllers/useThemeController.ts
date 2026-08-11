import { useEffect, useRef, useState } from "react";

const OVERRIDE_KEY = "theme-manual-override";

const isNightHour = () => {
  const h = new Date().getHours();
  return h >= 19 || h < 6;
};

const readManualOverride = (): boolean | null => {
  try {
    const raw = sessionStorage.getItem(OVERRIDE_KEY);
    return raw === null ? null : raw === "dark";
  } catch {
    return null;
  }
};

export const useThemeController = () => {
  // Un override manual durante la pestaña actual gana sobre la hora; se
  // guarda en sessionStorage para que sobreviva a la navegación entre
  // páginas/landings pero se olvide al cerrar la pestaña.
  const manualOverrideRef = useRef<boolean | null>(null);

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const override = readManualOverride();
      manualOverrideRef.current = override;
      return override !== null ? override : isNightHour();
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

  // Re-evalúa cada minuto para que el tema cambie solo con la hora (19:00 /
  // 06:00) mientras no haya un override manual activo en esta sesión.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (manualOverrideRef.current !== null) return;
      setDark((prev) => {
        const auto = isNightHour();
        return auto !== prev ? auto : prev;
      });
    }, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      manualOverrideRef.current = next;
      try { sessionStorage.setItem(OVERRIDE_KEY, next ? "dark" : "light"); } catch {}
      return next;
    });
  };

  return { dark, toggle };
};
