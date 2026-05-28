import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Fundador from "./pages/Fundador";
import Servicios from "./pages/Servicios";
import Servicio from "./pages/Servicio";
import Segmento from "./pages/Segmento";
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

          {/* Nuevo portafolio */}
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/:slug" element={<Servicio />} />
          <Route path="/segmentos/:slug" element={<Segmento />} />

          {/* Redirecciones de URLs antiguas (Plan 360) */}
          <Route path="/arquitecturati" element={<Navigate to="/servicios/arquitectura-ti" replace />} />
          <Route path="/presenciadigital" element={<Navigate to="/servicios/presencia-digital" replace />} />
          <Route path="/ciberseguridad" element={<Navigate to="/servicios/ciberseguridad" replace />} />
          <Route path="/analiticaaplicada" element={<Navigate to="/servicios/ia-corporativa" replace />} />
          <Route path="/inteligenciaartificial" element={<Navigate to="/servicios/ia-corporativa" replace />} />

          {/* Landing de respaldo */}
          <Route path="/landing" element={<LandingPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
