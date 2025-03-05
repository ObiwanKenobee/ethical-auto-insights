
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  AlertTriangle, 
  Building, 
  FileText, 
  BarChart3,
  Globe,
  Lock,
  Key,
  Bot,
  Link,
  Server,
  List,
  Eye,
  Search,
  UserCheck,
  UserX,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

import SystemOverview from '@/components/admin/SystemOverview';
import UserManagement from '@/components/admin/UserManagement';
import RiskIntelligence from '@/components/admin/RiskIntelligence';
import ComplianceTracker from '@/components/admin/ComplianceTracker';
import PlatformSecurity from '@/components/admin/PlatformSecurity';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout 
      pageTitle="Admin Dashboard" 
      roleLabel="Administrator"
      roleIcon={<Shield size={22} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">284</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">96%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Risk Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">7</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-3 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Partner Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Building className="h-5 w-5 text-guardian-teal mr-2" />
              <span className="text-2xl font-bold">43</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+5 this quarter</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-5 gap-4 h-auto bg-transparent">
          <TabsTrigger value="overview" className="data-[state=active]:bg-guardian-blue data-[state=active]:text-white">
            <Globe className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">System Overview</span>
            <span className="md:hidden">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-guardian-blue data-[state=active]:text-white">
            <Users className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">User Management</span>
            <span className="md:hidden">Users</span>
          </TabsTrigger>
          <TabsTrigger value="risk" className="data-[state=active]:bg-guardian-blue data-[state=active]:text-white">
            <AlertTriangle className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Risk Intelligence</span>
            <span className="md:hidden">Risk</span>
          </TabsTrigger>
          <TabsTrigger value="compliance" className="data-[state=active]:bg-guardian-blue data-[state=active]:text-white">
            <FileText className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Compliance Tracker</span>
            <span className="md:hidden">Compliance</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-guardian-blue data-[state=active]:text-white">
            <Lock className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Platform Security</span>
            <span className="md:hidden">Security</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <SystemOverview />
        </TabsContent>
        
        <TabsContent value="users" className="space-y-4">
          <UserManagement />
        </TabsContent>
        
        <TabsContent value="risk" className="space-y-4">
          <RiskIntelligence />
        </TabsContent>
        
        <TabsContent value="compliance" className="space-y-4">
          <ComplianceTracker />
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <PlatformSecurity />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AdminDashboard;
