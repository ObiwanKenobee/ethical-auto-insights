
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, MapPin, CircleCheck, Clock, TrendingUp, BarChart3 } from 'lucide-react';

const FleetManagerDashboard = () => {
  return (
    <DashboardLayout 
      pageTitle="Fleet Manager Dashboard" 
      roleLabel="Fleet Manager"
      roleIcon={<Car size={22} />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Car className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">127</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+8 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">116</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">91% of fleet</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Compliance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CircleCheck className="h-5 w-5 text-guardian-teal mr-2" />
              <span className="text-2xl font-bold">98%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+1% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-2xl font-bold">12</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">-3 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Vehicle Lifecycle Tracking</CardTitle>
            <CardDescription>Real-time monitoring of fleet activity and compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Vehicle Tracking Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Vehicle Status</CardTitle>
            <CardDescription>Recent updates and location tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { vehicle: 'EV-001', location: 'Central Warehouse', status: 'Charging', lastUpdated: '5m ago' },
                { vehicle: 'FV-045', location: 'Route 27, Chicago', status: 'In Transit', lastUpdated: '12m ago' },
                { vehicle: 'EV-018', location: 'Customer Site B', status: 'Delivery', lastUpdated: '23m ago' },
                { vehicle: 'FV-112', location: 'Maintenance Facility', status: 'Service', lastUpdated: '1h ago' },
                { vehicle: 'EV-076', location: 'Distribution Hub', status: 'Loading', lastUpdated: '2h ago' },
              ].map((vehicle, index) => (
                <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <Car size={14} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{vehicle.vehicle}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        vehicle.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        vehicle.status === 'Service' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {vehicle.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{vehicle.location}</p>
                    <p className="text-xs text-gray-400 mt-1">Updated {vehicle.lastUpdated}</p>
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

export default FleetManagerDashboard;
