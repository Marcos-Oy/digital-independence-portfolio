import logo from "@/assets/logo.png";
import chileFlag from "@/assets/chile-flag.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Independencia Digital" className="h-8 w-8" />
          <span className="font-heading font-bold text-sm flex items-center gap-1.5">
            <span className="text-gradient-brand">Independencia Digital</span>
            <img src={chileFlag} alt="Chile" className="h-4 w-auto inline-block" />
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Independencia Digital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
