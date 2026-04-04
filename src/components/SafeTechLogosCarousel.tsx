import { useEffect, useState, type ComponentType } from "react";

const SafeTechLogosCarousel = () => {
  const [Carousel, setCarousel] = useState<ComponentType | null>(null);
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let retryTimer: number | undefined;

    const loadCarousel = async (attempt = 0) => {
      try {
        const module = await import("./TechLogosCarousel");

        if (!isMounted) return;

        setCarousel(() => module.default);
        setIsUnavailable(false);
      } catch (error) {
        if (!isMounted) return;

        if (attempt < 2) {
          retryTimer = window.setTimeout(() => {
            void loadCarousel(attempt + 1);
          }, 900);
          return;
        }

        console.error("TechLogosCarousel failed to load", error);
        setIsUnavailable(true);
      }
    };

    void loadCarousel();

    return () => {
      isMounted = false;
      if (retryTimer) window.clearTimeout(retryTimer);
    };
  }, []);

  if (Carousel) {
    return <Carousel />;
  }

  return (
    <section className="py-12 bg-muted/40" aria-live="polite">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
          Tecnologías que implementamos
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          {isUnavailable ? "El carrusel se está recuperando." : "Cargando ecosistema tecnológico…"}
        </p>
      </div>
    </section>
  );
};

export default SafeTechLogosCarousel;
