import logo from "@/assets/logo.png";
import LocalThemeToggle from "./LocalThemeToggle";

interface LandingNavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

const LandingNavbar = ({ dark, onToggleTheme }: LandingNavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Independencia Digital" className="h-10 w-10" />
            <span className="font-heading font-bold text-lg text-foreground">
              Independencia Digital
            </span>
          </div>
          <LocalThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
