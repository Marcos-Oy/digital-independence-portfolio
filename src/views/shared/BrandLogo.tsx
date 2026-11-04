import brandLogo from "@/assets/brand-logo-lateral.png.asset.json";

/**
 * Logotipo lateral oficial (emblema + nombre en dos líneas).
 * Se usa en navbar y footer junto a la bandera de Chile.
 */
const BrandLogo = ({ className = "" }: { className?: string }) => (
  <img
    src={brandLogo.url}
    alt="- MOT[IA]RZO - LABS"
    className={`w-auto object-contain ${className}`}
  />
);

export default BrandLogo;
