import { useEffect, useState } from "react";

/**
 * Local-only theme state for landing pages.
 * Does NOT write to localStorage and ensures the global `dark` class on
 * <html> is removed so the local wrapper fully controls the theme.
 * This prevents "stuck dark mode" when the user navigates from the main
 * site (which uses a global html.dark class) into a landing page.
 */
export const useLocalTheme = (initial = false) => {
  const [dark, setDark] = useState(initial);

  useEffect(() => {
    // Strip any inherited global dark class so only our wrapper controls theme.
    document.documentElement.classList.remove("dark");
  }, []);

  return { dark, toggle: () => setDark((d) => !d), setDark };
};
