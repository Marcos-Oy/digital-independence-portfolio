import { useLocalTheme } from "@/hooks/useLocalTheme";
import LandingNavbar from "@/components/LandingNavbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SafeTechLogosCarousel from "@/components/SafeTechLogosCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import PlanSection from "@/components/PlanSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const LandingPage = () => {
  const { dark, toggle } = useLocalTheme();

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <LandingNavbar dark={dark} onToggleTheme={toggle} />
        <HeroSection />
        <ServicesSection />
        <SafeTechLogosCarousel />
        <BenefitsSection />

        <section className="py-8 md:py-10 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <a
              href="https://independencia-digital.systeme.io/registro"
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
        <ChatBot />
      </div>
    </div>
  );
};

export default LandingPage;
