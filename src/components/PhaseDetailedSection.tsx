import { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

export interface PhaseModule {
  title: string;
  points: string[];
}

interface PhaseDetailedSectionProps {
  intro: string;
  outcome: string;
  modules: PhaseModule[];
  Icon?: LucideIcon;
}

const PhaseDetailedSection = ({ intro, outcome, modules, Icon }: PhaseDetailedSectionProps) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 font-heading">
              Lo que trabajaremos juntos
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
              Módulos de esta fase
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              {intro}
            </p>
          </div>

          <div className="space-y-3">
            {modules.map((m, idx) => {
              const open = openIdx === idx;
              return (
                <div
                  key={m.title}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition-colors"
                    aria-expanded={open}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg gradient-brand text-primary-foreground text-sm font-heading font-bold flex items-center justify-center shadow-brand shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-heading font-semibold text-foreground text-sm md:text-base">
                        {m.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pt-1 border-t border-border">
                      <ul className="space-y-2 mt-3">
                        {m.points.map((p) => (
                          <li
                            key={p}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-muted rounded-xl border border-border">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2 font-heading">
              Resultado concreto
            </p>
            <p className="text-foreground leading-relaxed text-sm md:text-base">{outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseDetailedSection;
