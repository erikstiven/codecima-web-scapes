import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Rutas
import Index from "./pages/Index";
import Productos from "./pages/Productos";
import Portafolio from "./pages/Portafolio";
import Precios from "./pages/Precios";
import PlanDetails from "./pages/PlanDetails";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Cotizar from "./pages/Cotizar";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/precios" element={<Precios />} />
            <Route
              path="/precios/:categoryId/:planId"
              element={<PlanDetails />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
