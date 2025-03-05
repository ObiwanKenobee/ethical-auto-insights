
import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, TrendingUp, AlertTriangle, Check, Truck, BarChart3, Globe, Leaf, Shield, AlertCircle } from 'lucide-react';

// Import our dashboard component modules
import SupplyChainOverview from '@/components/manufacturer/SupplyChainOverview';
import ESGCompliance from '@/components/manufacturer/ESGCompliance';
import FactoryMonitoring from '@/components/manufacturer/FactoryMonitoring';
import SupplierRiskAnalysis from '@/components/manufacturer/SupplierRiskAnalysis';
import SupplyChainOptimization from '@/components/manufacturer/SupplyChainOptimization';

const ManufacturerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout 
      pageTitle="Manufacturer Dashboard" 
      roleLabel="Manufacturer"
      roleIcon={<Factory size={22} />}
    >
      {/* Top metrics overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">ESG Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">92%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+4% from last quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">-12%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Year-over-year reduction</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Supply Chain Alerts</CardTitle>
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
            <p className="text-xs text-muted-foreground mt-1">Across 14 countries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Supplier Risk Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">Low</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">2 suppliers need review</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabbed dashboard content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full lg:w-auto">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Supply Chain</span>
          </TabsTrigger>
          <TabsTrigger value="esg" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span className="hidden sm:inline">ESG Analysis</span>
          </TabsTrigger>
          <TabsTrigger value="factory" className="flex items-center gap-2">
            <Factory className="h-4 w-4" />
            <span className="hidden sm:inline">Factory Insights</span>
          </TabsTrigger>
          <TabsTrigger value="suppliers" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Supplier Risk</span>
          </TabsTrigger>
          <TabsTrigger value="optimization" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Optimization</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <SupplyChainOverview />
        </TabsContent>
        
        <TabsContent value="esg" className="space-y-4">
          <ESGCompliance />
        </TabsContent>
        
        <TabsContent value="factory" className="space-y-4">
          <FactoryMonitoring />
        </TabsContent>
        
        <TabsContent value="suppliers" className="space-y-4">
          <SupplierRiskAnalysis />
        </TabsContent>
        
        <TabsContent value="optimization" className="space-y-4">
          <SupplyChainOptimization />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default ManufacturerDashboard;
