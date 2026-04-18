import { Moon, Sun } from "lucide-react";

interface LocalThemeToggleProps {
  dark: boolean;
  onToggle: () => void;
}

const LocalThemeToggle = ({ dark, onToggle }: LocalThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default LocalThemeToggle;
