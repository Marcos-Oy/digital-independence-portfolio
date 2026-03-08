import logoFull from "@/assets/logo-full.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <img
          src={logoFull}
          alt="Independencia Digital"
          className="h-20 md:h-28 mb-8 animate-fade-in"
        />
        <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mb-6 animate-fade-in-up text-foreground">
          Recupera el Control de tu{" "}
          <span className="text-gradient-brand">Ecosistema Digital</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Una mentoría práctica paso a paso para profesionales y PyMEs que quieren
          crear, proteger y optimizar su negocio digital, sin estrés y con autonomía total.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://independencia-digital.systeme.io/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-brand text-primary-foreground font-heading font-bold text-base px-8 py-4 rounded-lg shadow-brand hover:opacity-90 transition-opacity"
          >
            Quiero Mi Independencia Digital
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
