import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCRIPT_SRC =
  "https://independencia-digital.systeme.io/public/remote/page/4347016767cedb12dd37b978ba43cf41ee404671.js";

// Widget de formulario flotante de Systeme.io. El script original espera
// ejecutarse en una página estática y se engancha a window.onload para
// mostrar el popup y para enlazar los botones con la clase
// "systeme-show-popup-25041048" (ver LandingCtaButton.tsx). Como aquí se
// inyecta después de que React ya montó la página, ese evento nunca se
// vuelve a disparar solo, así que lo llamamos manualmente una vez cargado
// el script. Se reinyecta cada vez que cambia la landing para enlazar los
// botones de la página nueva.
const SystemeIoFloatingForm = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      if (typeof window.onload === "function") {
        window.onload(new Event("load"));
      }
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);

  return null;
};

export default SystemeIoFloatingForm;
