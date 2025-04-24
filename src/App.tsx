import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChallengeProvider } from "./contexts/ChallengeContext";
import Index from "./pages/Index";
import ChallengePage from "./pages/ChallengePage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFound from "./pages/NotFound";
import ConceptsGuide from "./components/ConceptsGuide";
import ChallengeList from "./components/ChallengeList";
import JavascriptTypescript from "./pages/JavascriptTypescript";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ChallengeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/challenge/:id" element={<ChallengePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/challenges" element={<ChallengeList />} />
            <Route path="/concepts" element={<ConceptsGuide />} />
            <Route
              path="/javascript-typescript"
              element={<JavascriptTypescript />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChallengeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
