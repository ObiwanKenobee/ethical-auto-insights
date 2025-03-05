
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, CheckCircle, XCircle, Flag, BarChart3 } from 'lucide-react';

const RegulatorDashboard = () => {
  return (
    <DashboardLayout 
      pageTitle="Regulator Dashboard" 
      roleLabel="Regulator"
      roleIcon={<FileText size={22} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">186</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12 from last quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">8</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-3 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliant Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">172</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+5 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Non-Compliant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">14</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-2 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
            <CardDescription>Industry-wide compliance metrics and benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Compliance Analytics Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Risk Alerts</CardTitle>
            <CardDescription>Companies requiring regulatory attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { company: 'MetalWorks Industries', issue: 'Labor compliance violation', risk: 'High' },
                { company: 'AutoParts Global', issue: 'Missing material verification', risk: 'Medium' },
                { company: 'FastTrack Motors', issue: 'Emissions reporting delay', risk: 'Low' },
                { company: 'Supply Chain Solutions', issue: 'Incomplete ESG documentation', risk: 'Medium' },
                { company: 'Advanced Materials Co.', issue: 'Potential sourcing issue', risk: 'High' },
              ].map((alert, index) => (
                <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="mt-1 mr-3">
                    <Flag size={16} className={
                      alert.risk === 'High' ? 'text-red-500' :
                      alert.risk === 'Medium' ? 'text-amber-500' :
                      'text-green-500'
                    } />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{alert.company}</p>
                    <p className="text-xs text-gray-500">{alert.issue}</p>
                    <p className="text-xs font-medium mt-1" style={{
                      color: alert.risk === 'High' ? 'rgb(220, 38, 38)' :
                             alert.risk === 'Medium' ? 'rgb(217, 119, 6)' :
                             'rgb(22, 163, 74)'
                    }}>
                      {alert.risk} Risk
                    </p>
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

export default RegulatorDashboard;
