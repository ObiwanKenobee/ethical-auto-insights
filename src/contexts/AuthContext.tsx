
import React, { createContext, useContext, useEffect, useState } from 'react';

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

// Context interface
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (user: Omit<User, 'id' | 'authenticated'>) => Promise<void>;
  checkPermission: (permission: string) => boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
  checkPermission: () => false
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

  // Login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would be an API call to authenticate
      // For demo, we'll just simulate a successful login
      const user: User = {
        email,
        name: email.split('@')[0],
        role: 'manufacturer', // Default role for demo
        authenticated: true
      };
      
      localStorage.setItem('guardian-io-demo-user', JSON.stringify(user));
      setUser(user);
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
    checkPermission
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
