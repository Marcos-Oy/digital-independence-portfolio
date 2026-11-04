import { useEffect } from "react";
import { montarCtaEstrella } from "@/lib/ctaEstrella";

/**
 * Monta la luz que recorre el borde de todos los botones de llamada a la
 * acción (ver src/lib/ctaEstrella.ts y docs/BOTONES.md).
 *
 * Va una sola vez en AppLayout: se encarga de encontrar los botones que ya
 * existen y los que aparezcan después (modales, cambio de página, etc.).
 */
const CtaEstrellaEffect = () => {
  useEffect(() => montarCtaEstrella(), []);
  return null;
};

export default CtaEstrellaEffect;
