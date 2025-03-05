
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, Users, Clock, ShieldAlert, Thermometer, AlertTriangle, CheckCircle2, Eye } from 'lucide-react';

const FactoryMonitoring = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Factory Conditions Overview</CardTitle>
            <CardDescription>Real-time monitoring of facilities and production environments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { 
                  label: 'Safety Score', 
                  value: '96%', 
                  icon: <ShieldAlert className="h-5 w-5 text-green-500" />,
                  status: 'positive'
                },
                { 
                  label: 'Labor Compliance', 
                  value: '100%', 
                  icon: <Users className="h-5 w-5 text-green-500" />,
                  status: 'positive'
                },
                { 
                  label: 'Work Hours', 
                  value: '40.2h', 
                  icon: <Clock className="h-5 w-5 text-green-500" />,
                  status: 'positive'
                },
                { 
                  label: 'Environment', 
                  value: '92%', 
                  icon: <Thermometer className="h-5 w-5 text-green-500" />,
                  status: 'positive'
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
                </div>
              ))}
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="font-medium">Factory Location Overview</h3>
              </div>
              <div className="divide-y">
                {[
                  { 
                    name: 'Shanghai Facility', 
                    country: 'China',
                    workers: 320,
                    status: 'Operational',
                    health: 'Good'
                  },
                  { 
                    name: 'Detroit Assembly', 
                    country: 'United States',
                    workers: 215,
                    status: 'Operational',
                    health: 'Good'
                  },
                  { 
                    name: 'Mumbai Production', 
                    country: 'India',
                    workers: 178,
                    status: 'Operational',
                    health: 'Attention'
                  },
                  { 
                    name: 'Stuttgart Precision', 
                    country: 'Germany',
                    workers: 92,
                    status: 'Operational',
                    health: 'Good'
                  },
                  { 
                    name: 'Tokyo Electronics', 
                    country: 'Japan',
                    workers: 45,
                    status: 'Operational',
                    health: 'Good'
                  },
                ].map((factory, idx) => (
                  <div key={idx} className="flex items-center p-4 hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Factory className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="font-medium">{factory.name}</span>
                      </div>
                      <p className="text-sm text-gray-500">{factory.country}</p>
                    </div>
                    <div className="flex-1 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{factory.workers} workers</span>
                      </div>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                        {factory.status}
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <span className={`flex items-center ${
                        factory.health === 'Good' ? 'text-green-500' : 
                        factory.health === 'Attention' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                        {factory.health === 'Good' ? <CheckCircle2 className="h-4 w-4 mr-1" /> : 
                         factory.health === 'Attention' ? <AlertTriangle className="h-4 w-4 mr-1" /> : 
                         <AlertTriangle className="h-4 w-4 mr-1" />}
                        {factory.health}
                      </span>
                    </div>
                    <div>
                      <button className="text-sm text-guardian-blue hover:underline flex items-center">
                        <Eye className="h-4 w-4 mr-1" /> View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Labor Standards</CardTitle>
            <CardDescription>Worker conditions and compliance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Wage Compliance</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    100%
                  </span>
                </div>
                <p className="text-sm text-gray-500">All facilities paying above regional living wage</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Working Hours</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    96%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Average 40.2 hours/week across all facilities</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Child Labor Prevention</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    100%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Strict verification protocols in place</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Worker Safety</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                    98%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Injury rate below industry average</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Training & Development</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800">
                    87%
                  </span>
                </div>
                <p className="text-sm text-gray-500">Regular skills development programs</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Factory Compliance Trends</CardTitle>
          <CardDescription>12-month analysis of ethical manufacturing standards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
            <Factory size={36} className="text-gray-400" />
            <p className="ml-3 text-gray-500">Factory Compliance Trend Visualization</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FactoryMonitoring;
