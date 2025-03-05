
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, FileCheck, Clock, AlertCircle, Truck, BarChart3 } from 'lucide-react';

const SupplierDashboard = () => {
  return (
    <DashboardLayout 
      pageTitle="Supplier Dashboard" 
      roleLabel="Supplier"
      roleIcon={<Truck size={22} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Material Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">32</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+5 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Verified Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <FileCheck className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">89%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+2% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">4</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-2 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">1</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Same as last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Material Tracking</CardTitle>
            <CardDescription>Blockchain-verified material origins and compliance status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Material Tracking Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Verification Requests</CardTitle>
            <CardDescription>Pending material verifications from manufacturers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { manufacturer: 'EcoVehicles Inc.', material: 'Recycled Aluminum', priority: 'High' },
                { manufacturer: 'GreenDrive Motors', material: 'Sustainable Leather', priority: 'Medium' },
                { manufacturer: 'FutureCar Technologies', material: 'Bio-based Plastics', priority: 'Low' },
                { manufacturer: 'EcoVehicles Inc.', material: 'Ethically Sourced Rubber', priority: 'Medium' },
              ].map((request, index) => (
                <div key={index} className="p-3 border rounded-md bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">{request.manufacturer}</p>
                      <p className="text-xs text-gray-500">{request.material}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      request.priority === 'High' ? 'bg-red-100 text-red-800' :
                      request.priority === 'Medium' ? 'bg-amber-100 text-amber-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {request.priority}
                    </span>
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <button className="px-2 py-1 text-xs bg-white border rounded hover:bg-gray-50">
                      Reject
                    </button>
                    <button className="px-2 py-1 text-xs bg-guardian-blue text-white rounded hover:bg-guardian-blue/90">
                      Verify
                    </button>
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

export default SupplierDashboard;
