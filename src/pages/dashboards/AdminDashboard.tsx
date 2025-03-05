
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, AlertTriangle, Building, FileText, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>System-wide Supply Chain Overview</CardTitle>
            <CardDescription>Real-time visibility across all manufacturers and suppliers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Supply Chain Analytics Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent User Activity</CardTitle>
            <CardDescription>Latest actions from platform users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { user: 'Jennifer Smith', action: 'Added new supplier', time: '23m ago' },
                { user: 'Michael Johnson', action: 'Approved ESG report', time: '1h ago' },
                { user: 'Sarah Wilson', action: 'Updated factory compliance', time: '3h ago' },
                { user: 'David Brown', action: 'Flagged materials issue', time: '5h ago' },
                { user: 'Lisa Davis', action: 'Generated audit report', time: '6h ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
