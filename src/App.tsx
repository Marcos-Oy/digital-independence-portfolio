import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Fundador from "./pages/Fundador";
import ArquitecturaTI from "./pages/ArquitecturaTI";
import PresenciaDigital from "./pages/PresenciaDigital";
import Ciberseguridad from "./pages/Ciberseguridad";
import AnaliticaAplicada from "./pages/AnaliticaAplicada";
import InteligenciaArtificial from "./pages/InteligenciaArtificial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundador" element={<Fundador />} />

          {/* Sitio web — páginas informativas */}
          <Route path="/arquitecturati" element={<ArquitecturaTI />} />
          <Route path="/presenciadigital" element={<PresenciaDigital />} />
          <Route path="/ciberseguridad" element={<Ciberseguridad />} />
          <Route path="/analiticaaplicada" element={<AnaliticaAplicada />} />
          <Route path="/inteligenciaartificial" element={<InteligenciaArtificial />} />

          {/* Landing de respaldo */}
          <Route path="/landing" element={<LandingPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
