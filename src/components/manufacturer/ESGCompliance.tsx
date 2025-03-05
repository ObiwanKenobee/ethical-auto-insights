
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, BarChart3, LineChart, Droplets, Wind, Thermometer, BadgeAlert, Check } from 'lucide-react';
import AnimatedNumber from '@/components/ui-extensions/AnimatedNumber';

const ESGCompliance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>ESG Performance Overview</CardTitle>
            <CardDescription>Environmental, Social and Governance metrics across your supply chain</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    title: 'Environmental', 
                    score: 89, 
                    change: '+3', 
                    icon: <Leaf className="h-5 w-5 text-green-500" />,
                    color: 'green'
                  },
                  { 
                    title: 'Social', 
                    score: 92, 
                    change: '+5', 
                    icon: <BadgeAlert className="h-5 w-5 text-blue-500" />,
                    color: 'blue'
                  },
                  { 
                    title: 'Governance', 
                    score: 95, 
                    change: '+2', 
                    icon: <BarChart3 className="h-5 w-5 text-purple-500" />,
                    color: 'purple'
                  },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-lg p-4 border border-${item.color}-200 bg-${item.color}-50`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <h4 className="font-medium">{item.title}</h4>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-white text-gray-700 border">
                        {item.change}%
                      </div>
                    </div>
                    <div className="mt-3">
                      <AnimatedNumber 
                        value={item.score} 
                        suffix="%" 
                        className="text-3xl font-bold" 
                      />
                      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                        <div 
                          className={`h-2 rounded-full bg-${item.color}-500`}
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 h-[200px] flex items-center justify-center bg-gray-100 rounded-md">
                <LineChart size={36} className="text-gray-400" />
                <p className="ml-3 text-gray-500">ESG Score Trend (12-month)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Reports</CardTitle>
            <CardDescription>Latest ESG documentation and audits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  title: 'Q2 2023 ESG Report', 
                  date: 'July 15, 2023',
                  status: 'Verified',
                  type: 'report'
                },
                { 
                  title: 'Carbon Offset Certification', 
                  date: 'June 30, 2023',
                  status: 'Verified',
                  type: 'certification'
                },
                { 
                  title: 'Supplier Ethics Audit', 
                  date: 'June 12, 2023',
                  status: 'Verified',
                  type: 'audit'
                },
                { 
                  title: 'Factory Conditions Report', 
                  date: 'May 28, 2023',
                  status: 'Verified',
                  type: 'report'
                },
                { 
                  title: 'Q1 2023 ESG Report', 
                  date: 'April 10, 2023',
                  status: 'Verified',
                  type: 'report'
                },
              ].map((report, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-sm">{report.title}</p>
                    <p className="text-xs text-gray-500">{report.date}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 flex items-center">
                      <Check className="w-3 h-3 mr-1" /> {report.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Footprint</CardTitle>
            <CardDescription>Year-over-year emissions analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="relative w-32 h-32 mb-4">
                <div className="w-full h-full rounded-full border-8 border-gray-200"></div>
                <div 
                  className="absolute top-0 left-0 w-full h-full rounded-full border-8 border-green-500"
                  style={{ 
                    clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%, 45% 0%)',
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <Leaf className="h-6 w-6 text-green-500 mb-1" />
                  <span className="text-xl font-bold">-12%</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500">
                Carbon emissions reduced by 12% compared to last year through sustainable sourcing and optimized logistics
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Water Usage</CardTitle>
            <CardDescription>Manufacturing process efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="flex items-center justify-center mb-3">
                <Droplets className="h-10 w-10 text-blue-500" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">-22%</p>
                <p className="text-sm text-gray-500">Water usage reduction through closed-loop manufacturing processes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Renewable Energy</CardTitle>
            <CardDescription>Energy source analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-[200px]">
              <div className="flex items-center justify-center mb-3">
                <Wind className="h-10 w-10 text-teal-500" />
                <Thermometer className="h-10 w-10 text-orange-500 ml-2" />
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <p className="text-2xl font-bold text-teal-500">64%</p>
                  <p className="text-xs text-gray-500">Renewable</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-500">36%</p>
                  <p className="text-xs text-gray-500">Traditional</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">
                On track to reach 75% renewable energy goal by 2025
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ESGCompliance;
