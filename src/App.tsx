import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Fundador from "./pages/Fundador";
import Servicios from "./pages/Servicios";
import Servicio from "./pages/Servicio";
import Segmento from "./pages/Segmento";
import Diagnostico from "./pages/Diagnostico";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";
import WelcomeModal from "./components/WelcomeModal";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.key} className="animate-page-in">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fundador" element={<Fundador />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/:slug" element={<Servicio />} />
        <Route path="/segmentos/:slug" element={<Segmento />} />
        <Route path="/arquitecturati" element={<Navigate to="/servicios/arquitectura-ti" replace />} />
        <Route path="/presenciadigital" element={<Navigate to="/servicios/presencia-digital" replace />} />
        <Route path="/ciberseguridad" element={<Navigate to="/servicios/ciberseguridad" replace />} />
        <Route path="/analiticaaplicada" element={<Navigate to="/servicios/ia-corporativa" replace />} />
        <Route path="/inteligenciaartificial" element={<Navigate to="/servicios/ia-corporativa" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/diagnóstico" element={<Diagnostico />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isDiagnostico = location.pathname === "/diagnostico" || location.pathname === "/diagnóstico";
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
      {!isDiagnostico && <WhatsAppButton />}
      {!isDiagnostico && <ChatBot />}
      {!isDiagnostico && <WelcomeModal />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
