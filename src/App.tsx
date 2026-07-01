import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeView from "@/views/HomeView";
import LandingHubView from "@/views/landing/LandingHubView";
import GeneralLandingView from "@/views/landing/GeneralLandingView";
import FundadorView from "@/views/FundadorView";
import ServiciosView from "@/views/ServiciosView";
import ServicioRouteView from "@/views/ServicioRouteView";
import SegmentoRouteView from "@/views/SegmentoRouteView";
import DiagnosticoView from "@/views/DiagnosticoView";
import NotFoundView from "@/views/NotFoundView";
import WhatsAppButtonView from "@/views/WhatsAppButtonView";
import ChatBotView from "@/views/ChatBotView";
import WelcomeModalView from "@/views/WelcomeModalView";

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
        <Route path="/" element={<HomeView />} />
        <Route path="/fundador" element={<FundadorView />} />
        <Route path="/servicios" element={<ServiciosView />} />
        <Route path="/servicios/:slug" element={<ServicioRouteView />} />
        <Route path="/segmentos/:slug" element={<SegmentoRouteView />} />
        <Route path="/arquitecturati" element={<Navigate to="/servicios/arquitectura-ti" replace />} />
        <Route path="/presenciadigital" element={<Navigate to="/servicios/presencia-digital" replace />} />
        <Route path="/ciberseguridad" element={<Navigate to="/servicios/ciberseguridad" replace />} />
        <Route path="/analiticaaplicada" element={<Navigate to="/servicios/ia-corporativa" replace />} />
        <Route path="/inteligenciaartificial" element={<Navigate to="/servicios/ia-corporativa" replace />} />
        <Route path="/landing" element={<LandingHubView />} />
        <Route path="/landing/general" element={<GeneralLandingView />} />
        <Route path="/diagnostico" element={<DiagnosticoView />} />
        <Route path="/diagnóstico" element={<DiagnosticoView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isDiagnostico = location.pathname === "/diagnostico" || location.pathname === "/diagnóstico";
  const isLandingFunnel = /^\/landing\/.+/.test(location.pathname);
  const hideChrome = isDiagnostico || isLandingFunnel;
  return (
    <>
      <ScrollToTop />
      <AnimatedRoutes />
      {!hideChrome && <WhatsAppButtonView />}
      {!hideChrome && <ChatBotView />}
      {!hideChrome && <WelcomeModalView />}
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
