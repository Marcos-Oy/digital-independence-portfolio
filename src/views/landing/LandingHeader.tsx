import { Link } from "react-router-dom";
import BrandLogo from "@/views/shared/BrandLogo";

import ThemeToggleView from "@/views/ThemeToggleView";
import LandingCtaButton from "@/views/landing/LandingCtaButton";
import LanguageSelector from "@/views/shared/LanguageSelector";

const LandingHeader = () => (
  <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
    <div className="container mx-auto px-4 min-h-16 py-2 flex flex-wrap items-center justify-between max-w-5xl gap-2">
      <Link to="/" className="flex items-center gap-2 shrink-0">
        <BrandLogo className="h-9" />

      </Link>
      <div className="flex items-center gap-1 sm:gap-2 ml-auto shrink-0">
        <ThemeToggleView />
        <LanguageSelector />
        <LandingCtaButton size="compact" />
      </div>
    </div>
  </header>
);

export default LandingHeader;
