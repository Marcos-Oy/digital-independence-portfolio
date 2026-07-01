import { Linkedin, Globe } from "lucide-react";
import marcosAzul from "@/assets/marcos-terno-azul.jpg";
import marcosNegro from "@/assets/marcos-terno-negro.jpeg";
import ScrollReveal from "@/views/shared/ScrollReveal";
import { FOUNDER_BIO } from "@/models/founderBio";

const FounderAuthoritySection = () => (
  <div className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
    <ScrollReveal variant="scale" className="mx-auto">
      <img
        src={marcosAzul}
        alt={FOUNDER_BIO.name}
        className="w-40 md:w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] block dark:hidden"
      />
      <img
        src={marcosNegro}
        alt={FOUNDER_BIO.name}
        className="w-40 md:w-full rounded-2xl shadow-card-hover object-cover aspect-[3/4] hidden dark:block"
      />
    </ScrollReveal>
    <ScrollReveal variant="left">
      <p className="font-heading font-bold text-lg text-foreground mb-1">{FOUNDER_BIO.name}</p>
      <p className="text-sm text-secondary font-semibold mb-4">{FOUNDER_BIO.role}</p>
      {FOUNDER_BIO.paragraphs.map((p, i) => (
        <p
          key={p}
          className={`text-foreground/90 leading-relaxed ${i === FOUNDER_BIO.paragraphs.length - 1 ? "mb-5" : "mb-4"}`}
        >
          {p}
        </p>
      ))}
      <div className="flex flex-wrap gap-3">
        <a
          href={FOUNDER_BIO.moyarzoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          <Globe className="w-4 h-4" /> moyarzo.cl
        </a>
        <a
          href={FOUNDER_BIO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-card border border-border text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </ScrollReveal>
  </div>
);

export default FounderAuthoritySection;
