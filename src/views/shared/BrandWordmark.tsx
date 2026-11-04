/**
 * Marca verbal oficial: - MOT[IA]RZO - LABS
 * MOT y RZO en azul de marca; [IA] y los guiones en verde de marca.
 */
const BrandWordmark = ({ className = "" }: { className?: string }) => (
  <span className={`font-heading font-bold leading-none tracking-tight ${className}`}>
    <span className="text-[hsl(var(--brand-teal))]">- </span>
    <span className="text-[hsl(var(--brand-blue))]">MOT</span>
    <span className="text-[hsl(var(--brand-teal))]">[IA]</span>
    <span className="text-[hsl(var(--brand-blue))]">RZO</span>
    <span className="text-[hsl(var(--brand-teal))]"> - </span>
    <span className="text-[hsl(var(--brand-blue))]">LABS</span>
  </span>
);

export default BrandWordmark;
