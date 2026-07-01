import { Target } from "lucide-react";
import robotImg from "@/assets/autonomia-digital-robot.png";
import ScrollReveal from "@/views/shared/ScrollReveal";

interface RightClientSectionProps {
  text: string;
}

const RightClientSection = ({ text }: RightClientSectionProps) => (
  <section className="py-16 md:py-20 bg-muted">
    <div className="container mx-auto px-4 max-w-4xl">
      <ScrollReveal variant="scale">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center">
          <img
            src={robotImg}
            alt="Autonomía Digital, la mascota de Independencia Digital"
            className="w-32 md:w-44 h-auto mx-auto shrink-0"
          />
          <div className="text-center sm:text-left">
            <span className="inline-flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center mb-5">
              <Target className="w-5 h-5 text-primary" />
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
              ¿Es esto para ti?
            </h2>
            <p className="text-foreground/90 leading-relaxed">{text}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RightClientSection;
