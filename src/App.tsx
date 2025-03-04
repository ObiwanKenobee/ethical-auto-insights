
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Dashboard Pages
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import ManufacturerDashboard from "@/pages/dashboard/ManufacturerDashboard";
import SupplierDashboard from "@/pages/dashboard/SupplierDashboard";
import RegulatorDashboard from "@/pages/dashboard/RegulatorDashboard";
import FleetDashboard from "@/pages/dashboard/FleetDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Protected Dashboard Routes */}
            <Route 
              path="/admin-dashboard" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/manufacturer-dashboard" 
              element={
                <ProtectedRoute requiredRole="manufacturer">
                  <ManufacturerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/supplier-dashboard" 
              element={
                <ProtectedRoute requiredRole="supplier">
                  <SupplierDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/regulator-dashboard" 
              element={
                <ProtectedRoute requiredRole="regulator">
                  <RegulatorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/fleet-dashboard" 
              element={
                <ProtectedRoute requiredRole="fleet_manager">
                  <FleetDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
