
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Zap, Clock, DollarSign, BarChart3, LineChart, Route, Truck, Warehouse, BarChart } from 'lucide-react';

const SupplyChainOptimization = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Supply Chain Efficiency Analysis</CardTitle>
            <CardDescription>AI-powered insights to optimize ethical sourcing and production</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { 
                  label: 'Efficiency Score', 
                  value: '87%', 
                  icon: <Zap className="h-5 w-5 text-amber-500" />,
                  change: '+3%'
                },
                { 
                  label: 'Lead Time', 
                  value: '6.2 days', 
                  icon: <Clock className="h-5 w-5 text-guardian-blue" />,
                  change: '-0.8 days'
                },
                { 
                  label: 'Cost Efficiency', 
                  value: '92%', 
                  icon: <DollarSign className="h-5 w-5 text-green-500" />,
                  change: '+2%'
                },
                { 
                  label: 'Ethical Index', 
                  value: '94%', 
                  icon: <TrendingUp className="h-5 w-5 text-guardian-teal" />,
                  change: '+5%'
                },
              ].map((metric, idx) => (
                <div 
                  key={idx} 
                  className="border rounded-lg p-3 flex flex-col"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {metric.icon}
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{metric.change} vs. last quarter</div>
                </div>
              ))}
            </div>
            
            <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
              <LineChart size={36} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Supply Chain Efficiency Trends</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Optimization Opportunities</CardTitle>
            <CardDescription>AI-identified areas for improvement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  title: 'Logistics Route Optimization', 
                  impact: 'High',
                  saving: 'Reduce carbon by 8%',
                  icon: <Route className="h-10 w-10 p-2 bg-blue-100 text-blue-600 rounded-lg" />
                },
                { 
                  title: 'Supplier Consolidation', 
                  impact: 'Medium',
                  saving: 'Save $420K annually',
                  icon: <Truck className="h-10 w-10 p-2 bg-green-100 text-green-600 rounded-lg" />
                },
                { 
                  title: 'Inventory Management', 
                  impact: 'Medium',
                  saving: 'Reduce waste by 12%',
                  icon: <Warehouse className="h-10 w-10 p-2 bg-purple-100 text-purple-600 rounded-lg" />
                },
                { 
                  title: 'Demand Forecasting', 
                  impact: 'High',
                  saving: 'Improve accuracy by 7%',
                  icon: <BarChart className="h-10 w-10 p-2 bg-amber-100 text-amber-600 rounded-lg" />
                },
              ].map((opportunity, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    {opportunity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{opportunity.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{opportunity.saving}</p>
                    <div className="flex items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        opportunity.impact === 'High' ? 'bg-green-100 text-green-800' :
                        opportunity.impact === 'Medium' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {opportunity.impact} Impact
                      </span>
                      <button className="ml-auto text-xs text-guardian-blue hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Demand Forecast</CardTitle>
            <CardDescription>AI-driven production planning to reduce waste</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
              <BarChart3 size={36} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Demand Forecast Visualization</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cost-Efficiency Analysis</CardTitle>
            <CardDescription>Balancing ethical sourcing with cost optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                    Cost per Unit
                  </h4>
                  <div className="flex items-center text-green-600 text-sm">
                    <span>-3.2%</span>
                    <TrendingUp className="h-4 w-4 ml-1" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Current</p>
                    <p className="text-lg font-bold">$12.38</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Target</p>
                    <p className="text-lg font-bold">$11.95</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Industry Avg</p>
                    <p className="text-lg font-bold">$13.42</p>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-4">
                  <div className="h-1.5 rounded-full bg-green-500" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium flex items-center">
                    <Truck className="h-4 w-4 mr-1 text-guardian-blue" />
                    Logistics Optimization
                  </h4>
                  <div className="flex items-center text-green-600 text-sm">
                    <span>-8.5%</span>
                    <TrendingUp className="h-4 w-4 ml-1" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">Carbon-efficient routes save $245K annually</p>
                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 rounded-full bg-guardian-blue" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div className="border p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium flex items-center">
                    <Warehouse className="h-4 w-4 mr-1 text-purple-500" />
                    Inventory Carrying Cost
                  </h4>
                  <div className="flex items-center text-green-600 text-sm">
                    <span>-5.7%</span>
                    <TrendingUp className="h-4 w-4 ml-1" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">Just-in-time approach with ethical suppliers</p>
                <div className="w-full h-1.5 bg-gray-100 rounded-full">
                  <div className="h-1.5 rounded-full bg-purple-500" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupplyChainOptimization;
