import { Link } from "react-router-dom";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";
import AboutSection from "@/components/AboutSection";
import { ArrowLeft } from "lucide-react";

const Fundador = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </div>
        <AboutSection />
      </div>
      <SiteFooter />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Fundador;
