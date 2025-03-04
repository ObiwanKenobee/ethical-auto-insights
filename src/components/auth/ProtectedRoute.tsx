
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const { user, isLoading } = useAuth();
  
  // Show loading state
  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  // If not authenticated, redirect to home
  if (!user || !user.authenticated) {
    return <Navigate to="/" />;
  }
  
  // If a specific role is required and user doesn't have it
  if (requiredRole && user.role !== requiredRole) {
    // Redirect to their correct dashboard or show an unauthorized message
    return <Navigate to={`/${user.role}-dashboard`} />;
  }
  
  // User is authenticated and has appropriate role
  return <>{children}</>;
};

export default ProtectedRoute;
