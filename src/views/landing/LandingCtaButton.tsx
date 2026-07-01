interface LandingCtaButtonProps {
  onClick: () => void;
  className?: string;
  size?: "default" | "compact";
}

const LandingCtaButton = ({ onClick, className = "", size = "default" }: LandingCtaButtonProps) => {
  const sizeClasses = size === "compact" ? "text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5" : "text-sm px-8 py-4";

  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap inline-flex items-center gap-2 gradient-brand text-primary-foreground font-heading font-bold rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200 ${sizeClasses} ${className}`}
    >
      Quiero mi diagnóstico
      {size === "default" && (
        <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">→</span>
      )}
    </button>
  );
};

export default LandingCtaButton;
