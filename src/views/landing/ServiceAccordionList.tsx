import { XCircle, Check } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Service } from "@/models/services";

interface ServiceAccordionListProps {
  services: Service[];
}

const ServiceAccordionList = ({ services }: ServiceAccordionListProps) => (
  <Accordion type="multiple" className="bg-card border border-border rounded-xl px-5">
    {services.map((s) => (
      <AccordionItem key={s.slug} value={s.slug} className="border-border">
        <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
          <span className="flex items-center gap-3">
            <img src={s.image} alt="" loading="lazy" className="w-12 h-12 rounded-lg object-cover shrink-0" />
            {s.title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-5 pt-1">
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="w-full aspect-[16/7] object-cover rounded-lg"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-destructive/80 mb-2">
                El problema
              </p>
              <ul className="space-y-1.5">
                {s.painPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-destructive/70 mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                Qué hacemos
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">{s.description}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                Qué incluye
              </p>
              <ul className="space-y-1.5">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/90 leading-relaxed">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/60 rounded-lg p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                El resultado
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed">{s.valuePromise}</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default ServiceAccordionList;
