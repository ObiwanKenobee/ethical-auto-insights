
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, RotateCcw, ShieldCheck, AlertTriangle, Map, BarChart3 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

const FleetDashboard = () => {
  return (
    <DashboardLayout 
      title="Fleet Manager Dashboard" 
      description="Track, manage, and verify your vehicle fleet"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
            <Car className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">423</div>
            <p className="text-xs text-muted-foreground mt-1">
              +12 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ethical Compliance</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Above industry standard
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recycling Rate</CardTitle>
            <RotateCcw className="h-4 w-4 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Target: 95% by 2025
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verification Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Fleet Tracking & Verification</CardTitle>
          <CardDescription>Real-time vehicle lifecycle monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle ID</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ethical Rating</TableHead>
                <TableHead>Last Verified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">EV-87234</TableCell>
                <TableCell>EcoModel X</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span>A+ (98%)</span>
                </TableCell>
                <TableCell>2 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EV-12589</TableCell>
                <TableCell>GreenDrive Pro</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span>A (95%)</span>
                </TableCell>
                <TableCell>1 week ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EV-45632</TableCell>
                <TableCell>EcoModel S</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Maintenance</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>B (82%)</span>
                </TableCell>
                <TableCell>3 weeks ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EV-79823</TableCell>
                <TableCell>ZeroEmission SUV</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4 text-green-500" />
                  <span>A+ (99%)</span>
                </TableCell>
                <TableCell>1 day ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fleet Location</CardTitle>
            <CardDescription>Real-time tracking & deployment status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <Map className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Fleet location map</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ethical Materials Analysis</CardTitle>
            <CardDescription>Component sourcing & lifecycle metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Materials sourcing analytics</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default FleetDashboard;
