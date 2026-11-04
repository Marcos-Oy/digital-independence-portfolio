import { Link } from "react-router-dom";
import BrandLogo from "@/views/shared/BrandLogo";
import chileFlag from "@/assets/chile-flag.png";
import ThemeToggleView from "@/views/ThemeToggleView";
import LandingCtaButton from "@/views/landing/LandingCtaButton";

const LandingHeader = () => (
  <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl gap-2">
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <BrandLogo className="h-9" />
        <img src={chileFlag} alt="Chile" title="Servicios en Chile" className="h-4 w-auto shrink-0" />
      </Link>
      <div className="flex items-center gap-2 shrink-0">
        <ThemeToggleView />
        <LandingCtaButton size="compact" />
      </div>
    </div>
  </header>
);

export default LandingHeader;
