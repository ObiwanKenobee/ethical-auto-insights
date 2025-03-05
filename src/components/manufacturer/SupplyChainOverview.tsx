
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, AlarmClock, AlertCircle, Truck, Factory, Check } from 'lucide-react';
import AnimatedIcon from '@/components/ui-extensions/AnimatedIcon';

const SupplyChainOverview = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Global Supply Chain Map</CardTitle>
            <CardDescription>Real-time visualization of material flow and supplier locations</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-[400px] rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
              {/* This would be replaced with an actual map visualization */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/free-vector/abstract-world-map-background_1393-238.jpg')] bg-cover bg-center"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Globe size={48} className="text-guardian-blue mb-3" />
                <p className="text-gray-500 text-center px-4">Interactive supply chain map showing 24 suppliers across 14 countries</p>
              </div>
              
              {/* Simulated map pins */}
              <AnimatedIcon 
                icon={<div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>} 
                className="absolute top-[30%] left-[20%]"
                animation="pulse"
              />
              <AnimatedIcon 
                icon={<div className="h-3 w-3 bg-amber-500 rounded-full"></div>} 
                className="absolute top-[40%] left-[30%]"
                animation="pulse"
                delay={200}
              />
              <AnimatedIcon 
                icon={<div className="h-3 w-3 bg-green-500 rounded-full"></div>} 
                className="absolute top-[60%] left-[40%]"
                animation="pulse"
                delay={400}
              />
              <AnimatedIcon 
                icon={<div className="h-3 w-3 bg-green-500 rounded-full"></div>} 
                className="absolute top-[25%] left-[60%]"
                animation="pulse"
                delay={600}
              />
              <AnimatedIcon 
                icon={<div className="h-3 w-3 bg-green-500 rounded-full"></div>} 
                className="absolute top-[45%] left-[75%]"
                animation="pulse"
                delay={800}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Live Alerts</CardTitle>
            <CardDescription>Real-time supply chain notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
              {[
                { 
                  title: 'Material Shortage Risk', 
                  desc: 'Silicon suppliers reporting reduced capacity', 
                  time: '12 mins ago',
                  icon: <AlertCircle size={16} className="text-amber-500" />,
                  severity: 'medium'
                },
                { 
                  title: 'Shipment Delayed', 
                  desc: 'EcoTex components delayed by 3 days', 
                  time: '1 hour ago',
                  icon: <AlarmClock size={16} className="text-amber-500" />,
                  severity: 'medium'
                },
                { 
                  title: 'Compliance Alert', 
                  desc: 'New regulatory standards published', 
                  time: '3 hours ago',
                  icon: <AlertCircle size={16} className="text-blue-500" />,
                  severity: 'low'
                },
                { 
                  title: 'Factory Inspection Passed', 
                  desc: 'Shanghai facility passed ethics audit', 
                  time: '5 hours ago',
                  icon: <Factory size={16} className="text-green-500" />,
                  severity: 'success'
                },
                { 
                  title: 'New Supplier Verification', 
                  desc: 'GreenMetal Inc. completed onboarding', 
                  time: '1 day ago',
                  icon: <Truck size={16} className="text-green-500" />,
                  severity: 'success'
                },
              ].map((alert, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start p-3 rounded-lg border-l-4 ${
                    alert.severity === 'high' ? 'border-red-500 bg-red-50' :
                    alert.severity === 'medium' ? 'border-amber-500 bg-amber-50' :
                    alert.severity === 'low' ? 'border-blue-500 bg-blue-50' :
                    'border-green-500 bg-green-50'
                  }`}
                >
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    {alert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                    <p className="text-xs text-gray-500">{alert.desc}</p>
                  </div>
                  <div className="text-xs text-gray-400">{alert.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Material Flow Timeline</CardTitle>
          <CardDescription>Track materials from raw sourcing to final production</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6 ml-12 relative">
              {[
                { 
                  stage: 'Raw Material Sourcing', 
                  status: 'Complete', 
                  date: 'June 2, 2023',
                  details: 'All materials ethically sourced with blockchain verification'
                },
                { 
                  stage: 'Supplier Processing', 
                  status: 'Complete', 
                  date: 'June 15, 2023',
                  details: 'Materials processed according to ESG compliance standards'
                },
                { 
                  stage: 'Component Manufacturing', 
                  status: 'In Progress', 
                  date: 'July 3, 2023',
                  details: '86% complete - 3 suppliers pending final delivery'
                },
                { 
                  stage: 'Quality & Ethics Inspection', 
                  status: 'Scheduled', 
                  date: 'July 18, 2023',
                  details: 'Third-party audit scheduled for components'
                },
                { 
                  stage: 'Final Assembly', 
                  status: 'Pending', 
                  date: 'August 1, 2023',
                  details: 'Awaiting component completion and inspection results'
                },
              ].map((stage, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-12 mt-1.5 flex items-center justify-center">
                    <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                      stage.status === 'Complete' ? 'border-green-500 bg-green-100' :
                      stage.status === 'In Progress' ? 'border-blue-500 bg-blue-100' :
                      'border-gray-300 bg-white'
                    }`}>
                      {stage.status === 'Complete' && <Check size={14} className="text-green-500" />}
                      {stage.status === 'In Progress' && <div className="h-2 w-2 bg-blue-500 rounded-full"></div>}
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg border ${
                    stage.status === 'Complete' ? 'border-green-200 bg-green-50' :
                    stage.status === 'In Progress' ? 'border-blue-200 bg-blue-50' :
                    'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{stage.stage}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        stage.status === 'Complete' ? 'bg-green-100 text-green-800' :
                        stage.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        stage.status === 'Scheduled' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {stage.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{stage.details}</p>
                    <p className="text-xs text-gray-400 mt-1">{stage.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplyChainOverview;
