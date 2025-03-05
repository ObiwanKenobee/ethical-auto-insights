
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, TrendingUp, AlertTriangle, Check, Truck, BarChart3 } from 'lucide-react';

const ManufacturerDashboard = () => {
  return (
    <DashboardLayout 
      pageTitle="Manufacturer Dashboard" 
      roleLabel="Manufacturer"
      roleIcon={<Factory size={22} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">ESG Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">92%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+4% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Production Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">842</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-3% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Material Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">3</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+1 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Suppliers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-guardian-teal mr-2" />
              <span className="text-2xl font-bold">24</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Same as last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Supply Chain Insights</CardTitle>
            <CardDescription>Real-time view of material sourcing and compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Supply Chain Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Supplier Updates</CardTitle>
            <CardDescription>Latest changes from your material suppliers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { supplier: 'EcoTex Materials', update: 'New certification added', time: '2h ago' },
                { supplier: 'GreenMetal Inc.', update: 'Shipment in transit', time: '5h ago' },
                { supplier: 'Sustainable Plastics', update: 'Compliance report updated', time: '1d ago' },
                { supplier: 'EthiChem Corp', update: 'Price update notification', time: '1d ago' },
                { supplier: 'Clean Tech Solutions', update: 'New material available', time: '2d ago' },
              ].map((update, index) => (
                <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <Truck size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{update.supplier}</p>
                    <p className="text-xs text-gray-500">{update.update}</p>
                    <p className="text-xs text-gray-400 mt-1">{update.time}</p>
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

export default ManufacturerDashboard;
