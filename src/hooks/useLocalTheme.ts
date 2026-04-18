import { useState } from "react";

/**
 * Local-only theme state for landing pages.
 * Does NOT write to localStorage and does NOT mutate the global document.
 * Each landing maintains its own isolated dark/light preference.
 */
export const useLocalTheme = (initial = false) => {
  const [dark, setDark] = useState(initial);
  return { dark, toggle: () => setDark((d) => !d), setDark };
};
