
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import ManufacturerDashboard from "./pages/dashboards/ManufacturerDashboard";
import SupplierDashboard from "./pages/dashboards/SupplierDashboard";
import RegulatorDashboard from "./pages/dashboards/RegulatorDashboard";
import FleetManagerDashboard from "./pages/dashboards/FleetManagerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Dashboard Routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/manufacturer" 
              element={
                <ProtectedRoute requiredRole="manufacturer">
                  <ManufacturerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/supplier" 
              element={
                <ProtectedRoute requiredRole="supplier">
                  <SupplierDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/regulator" 
              element={
                <ProtectedRoute requiredRole="regulator">
                  <RegulatorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/fleet-manager" 
              element={
                <ProtectedRoute requiredRole="fleet_manager">
                  <FleetManagerDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
