
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
  requiredRole?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredPermission,
  requiredRole
}) => {
  const { user, checkPermission } = useAuth();

  if (!user || !user.authenticated) {
    return <Navigate to="/" replace />;
  }

  // Check if user has the required permission
  if (requiredPermission && !checkPermission(requiredPermission)) {
    return <Navigate to="/" replace />;
  }

  // Check if user has the required role
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
