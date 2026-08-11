import { Target } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { SoftBlob, AccentBlob } from "@/views/shared/BackgroundBlobs";

interface RightClientSectionProps {
  text: string;
}

const RightClientSection = ({ text }: RightClientSectionProps) => (
  <section className="relative py-16 md:py-20 bg-muted overflow-hidden">
    <SoftBlob shape={3} color="secondary" className="w-64 h-64 -top-16 -left-16" />
    <AccentBlob shape={5} className="hidden md:block w-9 h-12 bottom-8 right-[8%] opacity-70" />
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
