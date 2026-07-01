import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const LandingFooter = () => (
  <footer className="py-10 bg-background border-t border-border">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <img src={logo} alt="Independencia Digital" className="h-8 w-8 mx-auto mb-3" />
      <p className="text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed mb-3">
        Los resultados pueden variar según el estado actual de tu negocio, tus herramientas y tu nivel
        de participación. Independencia Digital SpA entrega servicios de consultoría, asesoría y
        mentoría tecnológica según el alcance contratado.
      </p>
      <p className="text-xs text-muted-foreground mb-2">
        © {new Date().getFullYear()} Independencia Digital
      </p>
      <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
        Volver al sitio principal
      </Link>
    </div>
  </footer>
);

export default LandingFooter;
