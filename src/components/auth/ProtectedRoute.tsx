
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    // If no user is authenticated, redirect to home
    if (!user || !user.authenticated) {
      navigate('/', { replace: true });
      return;
    }

    // If required role doesn't match user role, redirect to their dashboard
    if (requiredRole && user.role !== requiredRole) {
      // Get the correct dashboard path for the user's role
      const roleDashboardPath = user.role ? `/${user.role.replace('_', '-')}` : '/';
      navigate(roleDashboardPath, { replace: true });
      return;
    }

    // Check permission if required
    if (requiredPermission && !checkPermission(requiredPermission)) {
      // If permission check fails, redirect to their dashboard
      const roleDashboardPath = user.role ? `/${user.role.replace('_', '-')}` : '/';
      navigate(roleDashboardPath, { replace: true });
      return;
    }
    
  }, [user, requiredRole, requiredPermission, checkPermission, navigate]);

  // If no authenticated user, redirect to home
  if (!user || !user.authenticated) {
    return <Navigate to="/" replace />;
  }

  // If user doesn't have required role, don't render children
  if (requiredRole && user.role !== requiredRole) {
    return null; // Return null as we're handling redirect in useEffect
  }

  // If user doesn't have required permission, don't render children
  if (requiredPermission && !checkPermission(requiredPermission)) {
    return null; // Return null as we're handling redirect in useEffect
  }

  return <>{children}</>;
};

export default ProtectedRoute;
