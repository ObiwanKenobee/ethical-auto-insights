
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define User types based on RBAC
type UserRole = 'admin' | 'manufacturer' | 'supplier' | 'regulator' | 'fleet_manager' | null;

interface User {
  id?: string;
  email: string;
  name: string;
  role: UserRole;
  authenticated: boolean;
  isDemo?: boolean;
}

// Define permissions for each role
const rolePermissions = {
  admin: [
    'manage_users', 
    'configure_supply_chains', 
    'view_compliance_reports', 
    'view_audit_logs',
    'manage_system'
  ],
  manufacturer: [
    'upload_supply_data', 
    'manage_sourcing', 
    'track_esg_compliance'
  ],
  supplier: [
    'verify_materials', 
    'update_compliance'
  ],
  regulator: [
    'monitor_compliance', 
    'generate_audit_reports'
  ],
  fleet_manager: [
    'track_vehicles', 
    'track_history', 
    'validate_ethical_compliance'
  ]
};

// Role to dashboard path mapping
export const roleDashboardMap: Record<string, string> = {
  'admin': '/admin',
  'manufacturer': '/manufacturer',
  'supplier': '/supplier',
  'regulator': '/regulator',
  'fleet_manager': '/fleet-manager'
};

// Context interface
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, demoRole?: UserRole) => Promise<void>;
  logout: () => void;
  signup: (user: Omit<User, 'id' | 'authenticated'>) => Promise<void>;
  checkPermission: (permission: string) => boolean;
  redirectToDashboard: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
  checkPermission: () => false,
  redirectToDashboard: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for user in localStorage on initial load
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('guardian-io-demo-user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Function to redirect user to their role-specific dashboard
  const redirectToDashboard = () => {
    if (user && user.role && roleDashboardMap[user.role]) {
      window.location.href = roleDashboardMap[user.role];
    }
  };

  // Login function
  const login = async (email: string, password: string, demoRole?: UserRole) => {
    setIsLoading(true);
    try {
      // For demo accounts, use the specified role
      // For regular accounts, we'd normally do API validation here
      const role = demoRole || 'manufacturer'; // Default role if not specified
      const isDemo = !!demoRole; // If demoRole is provided, mark as a demo account
      
      const displayName = email.split('@')[0];
      // Format name for demo accounts (remove "demo-" prefix if present)
      const name = isDemo ? displayName.replace('demo-', '').charAt(0).toUpperCase() + displayName.replace('demo-', '').slice(1) : displayName;

      const user: User = {
        email,
        name: name,
        role: role,
        authenticated: true,
        isDemo: isDemo
      };
      
      localStorage.setItem('guardian-io-demo-user', JSON.stringify(user));
      setUser(user);
      
      // Automatically redirect to the role-specific dashboard
      if (role && roleDashboardMap[role]) {
        window.location.href = roleDashboardMap[role];
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('guardian-io-demo-user');
    setUser(null);
    window.location.href = '/';
  };

  // Signup function
  const signup = async (userData: Omit<User, 'id' | 'authenticated'>) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to register
      const user: User = {
        ...userData,
        authenticated: true
      };
      
      localStorage.setItem('guardian-io-demo-user', JSON.stringify(user));
      setUser(user);
      
      // Redirect to the appropriate dashboard
      if (user.role && roleDashboardMap[user.role]) {
        window.location.href = roleDashboardMap[user.role];
      }
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Permission checker
  const checkPermission = (permission: string) => {
    if (!user || !user.role) return false;
    return rolePermissions[user.role]?.includes(permission) || false;
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    signup,
    checkPermission,
    redirectToDashboard
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
