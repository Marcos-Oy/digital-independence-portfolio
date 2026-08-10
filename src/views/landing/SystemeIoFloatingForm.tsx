import { useEffect } from "react";

const SCRIPT_ID = "form-script-tag-25041048";
const SCRIPT_SRC =
  "https://independencia-digital.systeme.io/public/remote/page/4347016767cedb12dd37b978ba43cf41ee404671.js";

// Widget de formulario flotante de Systeme.io. Se inyecta una sola vez
// mientras el usuario permanece en el funnel de landings y se retira al salir.
const SystemeIoFloatingForm = () => {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, []);

  return null;
};

export default SystemeIoFloatingForm;
