import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {LoginForm} from "./components/LoginForm";

// Role-specific dashboards
import AdminDashboard from "./pages/admin/admin-dashboard";
import TeacherDashboard from "./pages/teacher/teacher-dashboard";
import BursarDashboard from "./pages/admin/BursarDashboard";
import ParentDashboard from "./pages/parent/Parent-dasboard";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Homepage logic handles redirection */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginForm onLogin={(role) => localStorage.setItem("role", role)} />} />


          {/* Role-specific dashboard routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/bursar/dashboard" element={<BursarDashboard />} />
          <Route path="/parent/dashboard" element={<ParentDashboard />} />
          

          {/* Fallback route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
