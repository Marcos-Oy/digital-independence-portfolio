import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import ThemeToggleView from "@/views/ThemeToggleView";
import LandingCtaButton from "@/views/landing/LandingCtaButton";

interface LandingHeaderProps {
  onCtaClick: () => void;
}

const LandingHeader = ({ onCtaClick }: LandingHeaderProps) => (
  <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl gap-2">
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <img src={logo} alt="Independencia Digital" className="h-8 w-8 shrink-0" />
        <span className="font-heading font-bold text-xs leading-[1.15] flex flex-col">
          <span className="text-[#2E6FB5]">Independencia</span>
          <span className="text-[#3CB878]">Digital</span>
        </span>
      </Link>
      <div className="flex items-center gap-2 shrink-0">
        <ThemeToggleView />
        <LandingCtaButton onClick={onCtaClick} size="compact" />
      </div>
    </div>
  </header>
);

export default LandingHeader;
