import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechLogosCarousel from "@/components/TechLogosCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import PlanSection from "@/components/PlanSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechLogosCarousel />
      <BenefitsSection />
      
      {/* CTA intermedio antes de Plan 360 */}
      <section className="py-8 md:py-10 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://independencia-digital.systeme.io/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gradient-brand text-primary-foreground font-heading font-semibold text-base md:text-lg px-8 py-4 rounded-xl shadow-brand hover:opacity-90 transition-opacity"
          >
            Quiero Mi Independencia Digital
          </a>
        </div>
      </section>

      <PlanSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
