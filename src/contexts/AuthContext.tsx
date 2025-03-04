
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Define User types based on RBAC
type UserRole = 'admin' | 'manufacturer' | 'supplier' | 'regulator' | 'fleet_manager' | null;

interface User {
  id?: string;
  email: string;
  name: string;
  role: UserRole;
  authenticated: boolean;
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

// Get dashboard URL for role
export const getDashboardForRole = (role: UserRole): string => {
  switch (role) {
    case 'admin': return '/admin-dashboard';
    case 'manufacturer': return '/manufacturer-dashboard';
    case 'supplier': return '/supplier-dashboard';
    case 'regulator': return '/regulator-dashboard';
    case 'fleet_manager': return '/fleet-dashboard';
    default: return '/';
  }
};

// Context interface
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, forcedRole?: UserRole) => Promise<void>;
  logout: () => void;
  signup: (user: Omit<User, 'id' | 'authenticated'>) => Promise<void>;
  checkPermission: (permission: string) => boolean;
  isDemoAccount: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
  checkPermission: () => false,
  isDemoAccount: false
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoAccount, setIsDemoAccount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user in localStorage on initial load
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('guardian-io-demo-user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          
          // Check if this is a demo account
          setIsDemoAccount(parsedUser.email.includes('@guardian-io.demo'));
          
          // Redirect to the appropriate dashboard if user is authenticated
          if (parsedUser.authenticated && parsedUser.role) {
            const dashboardUrl = getDashboardForRole(parsedUser.role);
            // Only redirect if we're on the landing page
            if (window.location.pathname === '/') {
              navigate(dashboardUrl);
            }
          }
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  // Login function
  const login = async (email: string, password: string, forcedRole?: UserRole) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to authenticate
      // For demo, we'll just simulate a successful login
      
      // Check if this is a demo account
      const isDemo = email.includes('@guardian-io.demo') || !!forcedRole;
      
      // Determine role based on email domain or forced role parameter
      let role: UserRole = forcedRole || 'manufacturer';
      
      if (email.includes('admin')) {
        role = 'admin';
      } else if (email.includes('manufacturer')) {
        role = 'manufacturer';
      } else if (email.includes('supplier')) {
        role = 'supplier';
      } else if (email.includes('regulator')) {
        role = 'regulator';
      } else if (email.includes('fleet')) {
        role = 'fleet_manager';
      }
      
      const user: User = {
        email,
        name: isDemo ? email.split('@')[0] : email.split('@')[0],
        role,
        authenticated: true
      };
      
      localStorage.setItem('guardian-io-demo-user', JSON.stringify(user));
      setUser(user);
      setIsDemoAccount(isDemo);
      
      // Redirect to the appropriate dashboard
      const dashboardUrl = getDashboardForRole(role);
      navigate(dashboardUrl);
      
      // Show toast for demo accounts
      if (isDemo) {
        toast(`Logged in with ${role.replace('_', ' ')} demo account`, {
          description: "This is a simulated environment with demo data",
          duration: 5000,
        });
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
    setIsDemoAccount(false);
    navigate('/');
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
      const dashboardUrl = getDashboardForRole(user.role);
      navigate(dashboardUrl);
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
    isDemoAccount
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
