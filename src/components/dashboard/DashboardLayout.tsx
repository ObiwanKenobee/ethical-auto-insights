
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Bell, 
  Search, 
  ChevronDown,
  Menu as MenuIcon,
  User,
  Globe,
  Clock,
  Server,
  AlertTriangle,
  Shield,
  Users,
  FileText,
  BarChart3,
  Link,
  Lock,
  Key,
  Bot,
  CheckCircle,
  XCircle,
  UserCheck,
  UserX,
  Eye,
  List,
  Settings,
  Activity,
  Database,
  Layers,
  HardDrive,
  Cloud,
  Upload,
  Download,
  Calendar,
  RefreshCw
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  roleLabel: string;
  roleIcon: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  pageTitle, 
  roleLabel,
  roleIcon
}) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [systemHealth, setSystemHealth] = useState(96);
  const [nextRefresh, setNextRefresh] = useState(60);
  const [apiStatus, setApiStatus] = useState("Connected");
  const [searchQuery, setSearchQuery] = useState("");
  const [alerts, setAlerts] = useState([
    { id: 1, type: "warning", title: "Compliance Alert", message: "Supplier XYZ has missed certification deadline", read: false },
    { id: 2, type: "risk", title: "Risk Flag", message: "Potential labor violation detected at Factory ABC", read: false },
    { id: 3, type: "success", title: "Audit Completed", message: "Annual audit for Supplier DEF completed successfully", read: true },
    { id: 4, type: "info", title: "System Update", message: "Platform maintenance scheduled for Sunday, 2AM UTC", read: true },
  ]);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Simulate real-time data refreshing
  useEffect(() => {
    const timer = setInterval(() => {
      setNextRefresh((prev) => {
        if (prev <= 1) {
          // Simulate data refresh
          const newHealth = Math.floor(Math.random() * 10) + 90; // Random between 90-99
          setSystemHealth(newHealth);
          toast({
            title: "Data Refreshed",
            description: "All dashboard data has been updated with the latest information.",
            duration: 3000
          });
          return 60;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [toast]);

  // Calculate health status color
  const getHealthColor = () => {
    if (systemHealth >= 95) return "text-green-500";
    if (systemHealth >= 80) return "text-amber-500";
    return "text-red-500";
  };

  // Get unread alerts count
  const unreadAlertsCount = alerts.filter(alert => !alert.read).length;

  // Mark all alerts as read
  const markAllAsRead = () => {
    setAlerts(alerts.map(alert => ({ ...alert, read: true })));
    toast({
      title: "Notifications",
      description: "All notifications marked as read",
      duration: 3000
    });
  };

  // Handle alert click
  const handleAlertClick = (id: number) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, read: true } : alert
    ));
  };

  // Get icon for alert type
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning": return <AlertTriangle className="h-4 w-4 text-amber-500" />;
      case "risk": return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "success": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "info": return <Bell className="h-4 w-4 text-blue-500" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-guardian-blue transition-all duration-300 text-white flex flex-col overflow-y-auto`}>
        <div className="p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
            <span className="font-display text-white text-lg font-bold">G</span>
          </div>
          {sidebarOpen && (
            <span className="font-display text-xl font-semibold text-white">
              Guardian<span className="text-guardian-teal">-IO</span>
            </span>
          )}
          <button 
            className="ml-auto text-white/80 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon size={20} />
          </button>
        </div>
        
        <div className="mt-4 flex flex-col gap-1 px-3">
          {/* Role indicator */}
          <div className={`flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg`}>
            <div className="text-white">
              {roleIcon}
            </div>
            {sidebarOpen && (
              <div>
                <p className="text-sm font-medium text-white">{roleLabel}</p>
                <p className="text-xs text-white/70">Dashboard</p>
              </div>
            )}
          </div>
          
          {/* Dashboard Navigation Panel */}
          <div className="mt-4">
            <div className={`my-2 py-2 ${sidebarOpen ? 'px-4' : 'px-0 flex justify-center'}`}>
              {sidebarOpen ? <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Dashboards</p> 
                : <Separator className="w-10 bg-white/20" />}
            </div>
            
            <TooltipProvider>
              <div className="space-y-1">
                {/* Admin Dashboard */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className={`w-full justify-start rounded-md text-white ${
                        roleLabel === "Administrator" ? "bg-white/20" : "hover:bg-white/10"
                      }`}
                      onClick={() => roleLabel !== "Administrator" && navigate('/admin')}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Admin Dashboard"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Admin Dashboard</TooltipContent>}
                </Tooltip>
                
                {/* Manufacturer Dashboard */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className={`w-full justify-start rounded-md text-white hover:bg-white/10`}
                      onClick={() => navigate('/manufacturer')}
                    >
                      <BarChart3 className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Manufacturer Dashboard"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Manufacturer Dashboard</TooltipContent>}
                </Tooltip>
                
                {/* Supplier Dashboard */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className={`w-full justify-start rounded-md text-white hover:bg-white/10`}
                      onClick={() => navigate('/supplier')}
                    >
                      <Layers className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Supplier Dashboard"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Supplier Dashboard</TooltipContent>}
                </Tooltip>
                
                {/* Regulator Dashboard */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className={`w-full justify-start rounded-md text-white hover:bg-white/10`}
                      onClick={() => navigate('/regulator')}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Regulator Dashboard"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Regulator Dashboard</TooltipContent>}
                </Tooltip>
                
                {/* Fleet Manager Dashboard */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className={`w-full justify-start rounded-md text-white hover:bg-white/10`}
                      onClick={() => navigate('/fleet-manager')}
                    >
                      <Activity className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Fleet Manager Dashboard"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Fleet Manager Dashboard</TooltipContent>}
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          
          {/* Supply Chain & Compliance Tools */}
          <div className="mt-4">
            <div className={`my-2 py-2 ${sidebarOpen ? 'px-4' : 'px-0 flex justify-center'}`}>
              {sidebarOpen ? <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Supply Chain</p> 
                : <Separator className="w-10 bg-white/20" />}
            </div>
            
            <TooltipProvider>
              <div className="space-y-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Link className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Material Verification"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Material Verification</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Compliance Reports"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Compliance Reports</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Supplier Integrity"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Supplier Integrity</TooltipContent>}
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          
          {/* Smart Audit & Fraud Detection */}
          <div className="mt-4">
            <div className={`my-2 py-2 ${sidebarOpen ? 'px-4' : 'px-0 flex justify-center'}`}>
              {sidebarOpen ? <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">Risk Management</p> 
                : <Separator className="w-10 bg-white/20" />}
            </div>
            
            <TooltipProvider>
              <div className="space-y-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Risk Flagging"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Risk Flagging</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Audit Schedule"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Audit Schedule</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      {sidebarOpen && "Global Risk Map"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">Global Risk Map</TooltipContent>}
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          
          {/* Security & System Settings */}
          <div className="mt-4">
            <div className={`my-2 py-2 ${sidebarOpen ? 'px-4' : 'px-0 flex justify-center'}`}>
              {sidebarOpen ? <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">System</p> 
                : <Separator className="w-10 bg-white/20" />}
            </div>
            
            <TooltipProvider>
              <div className="space-y-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      {sidebarOpen && "User Management"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">User Management</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Database className="mr-2 h-4 w-4" />
                      {sidebarOpen && "API & Integrations"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">API & Integrations</TooltipContent>}
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size={sidebarOpen ? "default" : "icon"}
                      className="w-full justify-start rounded-md text-white hover:bg-white/10"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      {sidebarOpen && "System Logs"}
                    </Button>
                  </TooltipTrigger>
                  {!sidebarOpen && <TooltipContent side="right">System Logs</TooltipContent>}
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
        
        <div className="mt-auto p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-white/90 hover:text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {sidebarOpen && "Log Out"}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b z-10">
          <div className="flex flex-col">
            {/* System Status Bar */}
            <div className="bg-gray-50 border-b px-6 py-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Globe className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                    <span className="text-gray-600 mr-1">Supply Chain Health:</span>
                    <span className={`font-medium ${getHealthColor()}`}>{systemHealth}%</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                    <span className="text-gray-600 mr-1">Data Refresh:</span>
                    <span className="font-medium text-gray-800">{nextRefresh}s</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Server className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
                    <span className="text-gray-600 mr-1">API Status:</span>
                    <span className="font-medium text-green-500">{apiStatus}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs text-gray-600 hover:text-guardian-blue"
                    onClick={() => {
                      toast({
                        title: "Data Refreshed",
                        description: "Manual refresh completed successfully",
                        duration: 3000
                      });
                      setNextRefresh(60);
                    }}
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Refresh
                  </Button>
                  
                  <Separator orientation="vertical" className="h-4" />
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-gray-600 hover:text-guardian-blue">
                        <Bot className="h-3 w-3 mr-1" />
                        AI Assistant
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-60">
                      <DropdownMenuLabel>AI Insights</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <div className="p-2 text-xs text-gray-600">
                        <p className="mb-2">Top 3 AI Recommendations:</p>
                        <ul className="space-y-1.5">
                          <li className="flex items-start">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-500 mr-1.5 mt-0.5 flex-shrink-0" />
                            <span>Review supplier XYZ's latest certification documents</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-3.5 w-3.5 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" />
                            <span>Compliance score improved 2% since last month</span>
                          </li>
                          <li className="flex items-start">
                            <Clock className="h-3.5 w-3.5 text-blue-500 mr-1.5 mt-0.5 flex-shrink-0" />
                            <span>Schedule quarterly audit for Factory ABC</span>
                          </li>
                        </ul>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            
            {/* Main Header */}
            <div className="flex justify-between items-center px-6 py-4">
              <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>
              
              <div className="flex items-center gap-4">
                {/* Universal Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search suppliers, materials, reports..."
                    className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-guardian-blue/30 w-72"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-md shadow-lg border p-2 z-50">
                      <div className="text-xs font-medium text-gray-500 mb-1.5">
                        Quick Suggestions
                      </div>
                      <div className="space-y-1">
                        <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-8 px-2">
                          <FileText className="h-3.5 w-3.5 mr-2" />
                          <span>Compliance Report for {searchQuery}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-8 px-2">
                          <Users className="h-3.5 w-3.5 mr-2" />
                          <span>Suppliers matching "{searchQuery}"</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-sm h-8 px-2">
                          <AlertTriangle className="h-3.5 w-3.5 mr-2" />
                          <span>Risk alerts for "{searchQuery}"</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Alerts & Notifications Center */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell size={20} />
                      {unreadAlertsCount > 0 && (
                        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-medium">
                          {unreadAlertsCount}
                        </span>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="flex justify-between items-center p-2">
                      <DropdownMenuLabel className="text-sm m-0">Notifications</DropdownMenuLabel>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 text-xs text-gray-600"
                        onClick={markAllAsRead}
                      >
                        Mark all as read
                      </Button>
                    </div>
                    <DropdownMenuSeparator />
                    
                    <div className="max-h-[300px] overflow-y-auto p-1">
                      {alerts.length > 0 ? (
                        alerts.map(alert => (
                          <DropdownMenuItem 
                            key={alert.id} 
                            className={`flex items-start p-2 ${!alert.read ? 'bg-gray-50' : ''}`}
                            onClick={() => handleAlertClick(alert.id)}
                          >
                            <div className="mr-2 mt-0.5">
                              {getAlertIcon(alert.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="text-sm font-medium">{alert.title}</p>
                                {!alert.read && (
                                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                )}
                              </div>
                              <p className="text-xs text-gray-600 mt-0.5">{alert.message}</p>
                            </div>
                          </DropdownMenuItem>
                        ))
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No notifications
                        </div>
                      )}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* User Profile & Access Control */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={16} className="text-gray-600" />
                      </div>
                      <div className="text-left hidden md:block">
                        <p className="text-sm font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.role}</p>
                      </div>
                      <ChevronDown size={16} className="text-gray-500" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-60">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Key className="mr-2 h-4 w-4" />
                        <span>Access Control</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuGroup>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <UserCheck className="mr-2 h-4 w-4" />
                          <span>Switch Role</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => navigate('/admin')}>
                              <Shield className="mr-2 h-4 w-4" />
                              <span>Administrator</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate('/manufacturer')}>
                              <BarChart3 className="mr-2 h-4 w-4" />
                              <span>Manufacturer</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate('/supplier')}>
                              <Layers className="mr-2 h-4 w-4" />
                              <span>Supplier</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate('/regulator')}>
                              <FileText className="mr-2 h-4 w-4" />
                              <span>Regulator</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate('/fleet-manager')}>
                              <Activity className="mr-2 h-4 w-4" />
                              <span>Fleet Manager</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    </DropdownMenuGroup>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
