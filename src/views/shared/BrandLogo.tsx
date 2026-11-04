import brandLogo from "@/assets/brand-logo-lateral.png";
import brandLogoDark from "@/assets/brand-logo-lateral-dark.png";

/**
 * Logotipo lateral oficial (emblema + nombre en dos líneas).
 * Se usa en navbar y footer junto a la bandera de Chile.
 *
 * Dos versiones: la original (azul #0055FF) para modo claro y una variante
 * con el azul aclarado (#539DFB) para modo oscuro, donde el azul original
 * no tiene contraste suficiente sobre el fondo navy.
 */
const BrandLogo = ({ className = "" }: { className?: string }) => (
  <>
    <img
      src={brandLogo}
      alt="- MOT[IA]RZO - LABS"
      className={`w-auto object-contain dark:hidden ${className}`}
    />
    <img
      src={brandLogoDark}
      alt="- MOT[IA]RZO - LABS"
      className={`hidden w-auto object-contain dark:block ${className}`}
    />
  </>
);

export default BrandLogo;
