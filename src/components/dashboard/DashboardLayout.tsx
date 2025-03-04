
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Bell, 
  ChevronDown, 
  ChevronRight, 
  LogOut, 
  Menu, 
  UserCircle,
  Home,
  Layers,
  BarChart3,
  ShieldAlert,
  Truck,
  Settings,
  Users,
  Search,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  title,
  description 
}) => {
  const { user, logout, isDemoAccount } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleLogout = () => {
    logout();
  };
  
  const getNavItemsForRole = () => {
    const baseItems = [
      { label: 'Dashboard', icon: Home, path: `/${user?.role}-dashboard` },
      { label: 'Settings', icon: Settings, path: '#' }
    ];
    
    const roleSpecificItems = {
      admin: [
        { label: 'User Management', icon: Users, path: '#' },
        { label: 'System Config', icon: Settings, path: '#' },
        { label: 'Audit Logs', icon: ShieldAlert, path: '#' }
      ],
      manufacturer: [
        { label: 'Supply Chain', icon: Layers, path: '#' },
        { label: 'ESG Compliance', icon: ShieldAlert, path: '#' },
        { label: 'Analytics', icon: BarChart3, path: '#' }
      ],
      supplier: [
        { label: 'Materials', icon: Layers, path: '#' },
        { label: 'Compliance', icon: ShieldAlert, path: '#' }
      ],
      regulator: [
        { label: 'Compliance Reports', icon: ShieldAlert, path: '#' },
        { label: 'Risk Alerts', icon: Bell, path: '#' }
      ],
      fleet_manager: [
        { label: 'Vehicle Tracking', icon: Truck, path: '#' },
        { label: 'Lifecycle Management', icon: Layers, path: '#' }
      ]
    };
    
    return [...(user?.role ? roleSpecificItems[user.role] || [] : []), ...baseItems];
  };
  
  const navItems = getNavItemsForRole();
  
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 mr-4 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <Menu size={20} />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-guardian-blue to-guardian-teal flex items-center justify-center">
              <span className="font-display text-white text-sm font-bold">G</span>
            </div>
            <span className="font-display text-lg font-semibold text-guardian-gray hidden sm:inline-block">
              Guardian<span className="text-guardian-blue">-IO</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {isDemoAccount && (
            <div className="hidden md:flex items-center px-3 py-1 bg-amber-50 text-amber-800 text-xs font-medium rounded border border-amber-200">
              <Info size={14} className="mr-1" />
              Demo Account
            </div>
          )}
          
          <div className="relative">
            <button className="p-2 rounded-md hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-2 flex items-center gap-2">
                <UserCircle size={16} />
                <span className="max-w-[100px] truncate hidden sm:inline-block">{user?.name}</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span>{user?.name}</span>
                <span className="text-xs text-muted-foreground">{user?.email}</span>
                {isDemoAccount && (
                  <span className="text-xs mt-1 px-2 py-0.5 bg-amber-50 text-amber-800 rounded-sm self-start">
                    Demo Account
                  </span>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={cn(
            "bg-white border-r border-gray-200 w-64 flex-shrink-0 flex flex-col transition-all duration-300 ease-in-out",
            sidebarOpen ? "translate-x-0" : "-translate-x-full",
            "fixed inset-y-16 left-0 z-30 lg:relative lg:inset-y-0"
          )}
        >
          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => item.path !== '#' && navigate(item.path)}
                  className="flex items-center gap-3 w-full rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <item.icon size={18} className="text-gray-500" />
                  <span>{item.label}</span>
                  {item.path !== '#' && <ChevronRight size={16} className="ml-auto text-gray-400" />}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sidebar footer */}
          {isDemoAccount && (
            <div className="border-t border-gray-200 p-4">
              <div className="bg-amber-50 text-amber-800 p-3 rounded-md text-sm">
                <p className="font-medium mb-1">Demo Environment</p>
                <p className="text-xs">You're viewing simulated data for the {user?.role?.replace('_', ' ')} role.</p>
              </div>
            </div>
          )}
        </aside>
        
        {/* Main content */}
        <main className={cn(
          "flex-1 overflow-y-auto bg-gray-50 transition-all duration-300",
          sidebarOpen ? "lg:ml-0" : "lg:ml-0"
        )}>
          {/* Page header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
              </div>
              <div className="flex items-center gap-3">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-guardian-blue focus:border-transparent"
                  />
                </div>
                <Button size="sm" className="bg-guardian-blue hover:bg-guardian-blue/90">
                  New Report
                </Button>
              </div>
            </div>
          </div>
          
          {/* Page content */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
