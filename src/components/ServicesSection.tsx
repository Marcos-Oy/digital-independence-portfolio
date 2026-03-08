import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const tools = [
  { name: "n8n", logo: "/logos/n8n.svg" },
  { name: "Linux", logo: "/logos/linux.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Google Workspace", logo: "/logos/google-workspace.svg" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Office 365", logo: "/logos/office365.svg" },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            ¿Qué hace la Independencia Digital?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Ayudamos a personas, profesionales independientes y dueños de PyMEs a contar con una estructura digital clara, eficiente y alineada a sus objetivos, logrando resultados visibles a partir de los primeros <strong className="text-foreground">90 días</strong>, sin confusión tecnológica ni pérdida de tiempo operativa, con el <strong className="text-foreground">Plan 360 – para la Independencia Digital</strong> de las 5 fases, eliminando el caos digital y dejando sus operaciones funcionando con herramientas seguras y mayor eficiencia, sin depender de nadie externo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
            Herramientas que utilizamos
          </p>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {tools.map((tool) => (
                <CarouselItem
                  key={tool.name}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="flex items-center justify-center h-20 rounded-lg border border-border bg-card p-4 select-none">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-10 max-w-[140px] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
