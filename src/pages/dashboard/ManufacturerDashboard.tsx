
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, ShieldCheck, AlertTriangle, BadgeCheck, CircleDashed } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ManufacturerDashboard = () => {
  return (
    <DashboardLayout 
      title="Manufacturer Dashboard" 
      description="Monitor and manage your ethical supply chain"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">ESG Score</CardTitle>
            <ShieldCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87/100</div>
            <Progress className="h-2 mt-2" value={87} />
            <p className="text-xs text-muted-foreground mt-1">
              +3 points from last quarter
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 12 countries
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Materials Verified</CardTitle>
            <BadgeCheck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <Progress className="h-2 mt-2" value={94} />
            <p className="text-xs text-muted-foreground mt-1">
              Target: 100%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Supply Chain Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires verification
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 mt-6 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Supply Chain Overview</CardTitle>
            <CardDescription>Material sourcing and ethical verification status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Supply chain map</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Material Compliance</CardTitle>
            <CardDescription>Ethical sourcing verification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Lithium</span>
                  </div>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <Progress className="h-2" value={100} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Cobalt</span>
                  </div>
                  <span className="text-sm font-medium">98%</span>
                </div>
                <Progress className="h-2" value={98} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CircleDashed className="h-4 w-4 text-amber-500" />
                    <span className="text-sm">Rare Earths</span>
                  </div>
                  <span className="text-sm font-medium">76%</span>
                </div>
                <Progress className="h-2" value={76} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Steel</span>
                  </div>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <Progress className="h-2" value={95} />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="text-sm">Copper</span>
                  </div>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <Progress className="h-2" value={68} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Supplier Updates</CardTitle>
          <CardDescription>Latest verification and compliance changes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">EcoMine Ltd</TableCell>
                <TableCell>Lithium</TableCell>
                <TableCell>Australia</TableCell>
                <TableCell className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  <span>Verified</span>
                </TableCell>
                <TableCell>2 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">SustainCo</TableCell>
                <TableCell>Cobalt</TableCell>
                <TableCell>Canada</TableCell>
                <TableCell className="flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-green-500" />
                  <span>Verified</span>
                </TableCell>
                <TableCell>5 days ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Global Metals</TableCell>
                <TableCell>Copper</TableCell>
                <TableCell>Chile</TableCell>
                <TableCell className="flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  <span>Pending Review</span>
                </TableCell>
                <TableCell>1 week ago</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Green Earth Mining</TableCell>
                <TableCell>Rare Earths</TableCell>
                <TableCell>Malaysia</TableCell>
                <TableCell className="flex items-center gap-1">
                  <CircleDashed className="h-4 w-4 text-blue-500" />
                  <span>In Progress</span>
                </TableCell>
                <TableCell>2 weeks ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ManufacturerDashboard;
