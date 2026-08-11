import { Target } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { SoftBlob, AccentBlob, GlowOrb, SparkleDots } from "@/views/shared/BackgroundBlobs";
import LaunchingRocket from "@/views/shared/LaunchingRocket";
import TechNetworkBlob from "@/views/shared/TechNetworkBlob";

interface RightClientSectionProps {
  text: string;
}

const RightClientSection = ({ text }: RightClientSectionProps) => (
  <section className="relative py-20 md:py-28 bg-muted overflow-hidden">
    <SoftBlob shape={3} color="secondary" className="w-64 h-64 -top-16 -left-16" />
    <SoftBlob shape={5} color="primary" className="w-56 h-72 -bottom-20 -right-16" />
    <AccentBlob shape={2} className="hidden md:block w-8 h-11 top-10 right-[16%] opacity-80 animate-float" />
    <AccentBlob shape={4} color="secondary" className="hidden lg:block w-7 h-9 bottom-16 left-[18%] opacity-70 animate-float-slow" />
    <GlowOrb color="primary" className="absolute w-8 h-8 md:w-10 md:h-10 top-[10%] right-[8%]" />
    <SparkleDots color="secondary" className="absolute w-48 h-48 bottom-[6%] left-[10%] text-secondary" />
    <LaunchingRocket className="absolute w-44 h-44 md:w-56 md:h-56 top-6 md:top-8 -left-14 md:-left-8" />
    <TechNetworkBlob className="absolute w-44 h-44 md:w-56 md:h-56 bottom-6 md:bottom-8 -right-14 md:-right-8" />
    <div className="relative container mx-auto px-4 max-w-4xl">
      <ScrollReveal variant="scale">
        <div className="grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center sm:text-left order-2 sm:order-1">
            <span className="inline-flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center mb-5">
              <Target className="w-5 h-5 text-primary" />
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
              ¿Es esto para ti?
            </h2>
            <p className="text-foreground/90 leading-relaxed">{text}</p>
          </div>
          <img
            src={robotImg}
            alt="Autonomía Digital, la mascota de Independencia Digital"
            className="w-48 md:w-64 h-auto rounded-2xl mx-auto shrink-0 order-1 sm:order-2"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RightClientSection;
