
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileCheck, Truck, BarChart, RefreshCcw, Package, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SupplierDashboard = () => {
  return (
    <DashboardLayout 
      title="Supplier Dashboard" 
      description="Manage and verify your material sourcing"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verified Materials</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              Fully certified
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              In transit globally
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rating</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A+</div>
            <p className="text-xs text-muted-foreground mt-1">
              Top tier supplier
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verifications Needed</CardTitle>
            <RefreshCcw className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires attention
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Shipment Tracking</CardTitle>
            <CardDescription>Real-time material tracking with blockchain verification</CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
            12 Verifications Today
          </Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracking ID</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Verification</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">SHP-39824</TableCell>
                <TableCell>Lithium Carbonate</TableCell>
                <TableCell>ElectroCar Motors, USA</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Transit</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Verified</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SHP-23571</TableCell>
                <TableCell>Cobalt Hydroxide</TableCell>
                <TableCell>BatteryTech Inc, Germany</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Customs Clearance</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Verified</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SHP-45692</TableCell>
                <TableCell>Nickel Sulfate</TableCell>
                <TableCell>GreenBattery Co, Japan</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Processing</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <RefreshCcw className="h-4 w-4 text-amber-500" />
                  <span>Pending</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SHP-67512</TableCell>
                <TableCell>Rare Earth Oxides</TableCell>
                <TableCell>MagTech Industries, Korea</TableCell>
                <TableCell>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Preparing</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <RefreshCcw className="h-4 w-4 text-amber-500" />
                  <span>Pending</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Material Origin Verification</CardTitle>
            <CardDescription>Blockchain-verified source tracing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <Package className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Material origin map</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Metrics</CardTitle>
            <CardDescription>ESG and ethical sourcing performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <BarChart className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Compliance metrics chart</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SupplierDashboard;
