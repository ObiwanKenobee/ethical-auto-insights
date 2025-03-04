
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, FileText, AlertTriangle, CheckCircle2, Flag, BarChart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

const RegulatorDashboard = () => {
  return (
    <DashboardLayout 
      title="Regulator Dashboard" 
      description="Monitor compliance and regulatory adherence"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.3%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Industry average: 87%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Audits</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              Scheduled this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Investigations</CardTitle>
            <Scale className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Down from 5 last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Risk Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">
              Requires assessment
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Compliance Violations</CardTitle>
          <CardDescription>Recent and ongoing compliance issues</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Violation Type</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">MineralTech Corp.</TableCell>
                <TableCell>Labor Standards</TableCell>
                <TableCell>Southeast Asia</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-amber-50 text-amber-800 hover:bg-amber-50">In Investigation</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Global Resources Ltd.</TableCell>
                <TableCell>Environmental Discharge</TableCell>
                <TableCell>South America</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-50 text-blue-800 hover:bg-blue-50">Remediation Plan</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">FastAuto Manufacturing</TableCell>
                <TableCell>Supply Chain Documentation</TableCell>
                <TableCell>North America</TableCell>
                <TableCell>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-50 text-green-800 hover:bg-green-50">Resolved</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">EcoMining Operations</TableCell>
                <TableCell>Transparency Reporting</TableCell>
                <TableCell>Africa</TableCell>
                <TableCell>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-amber-50 text-amber-800 hover:bg-amber-50">In Investigation</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 mt-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Regional Compliance Analytics</CardTitle>
            <CardDescription>Compliance rates by geographic region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <Flag className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Regional compliance map</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Violation Trends</CardTitle>
            <CardDescription>Historical compliance violation data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
              <div className="text-center">
                <BarChart className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-muted-foreground">Violation trend analysis</p>
                <p className="text-xs text-muted-foreground mt-1">(Demo data visualization)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RegulatorDashboard;
