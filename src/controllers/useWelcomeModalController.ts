import { useEffect, useState } from "react";

export const useWelcomeModalController = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 350);
    try { sessionStorage.setItem("welcome_modal_seen", "1"); } catch { }
    window.dispatchEvent(new Event("welcome-modal-closed"));
  };

  return { open, visible, close };
};
