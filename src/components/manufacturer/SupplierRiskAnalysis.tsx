
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle2, Link, Map, BarChart3, PieChart, Truck } from 'lucide-react';

const SupplierRiskAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Supplier Risk Overview</CardTitle>
            <CardDescription>Blockchain-verified supplier integrity assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { 
                  label: 'Overall Risk', 
                  value: 'Low', 
                  icon: <Shield className="h-5 w-5 text-green-500" />,
                  color: 'green'
                },
                { 
                  label: 'Compliance', 
                  value: '96%', 
                  icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
                  color: 'green'
                },
                { 
                  label: 'Geopolitical', 
                  value: 'Medium', 
                  icon: <Map className="h-5 w-5 text-amber-500" />,
                  color: 'amber'
                },
                { 
                  label: 'Supply Chain', 
                  value: 'Low', 
                  icon: <Link className="h-5 w-5 text-green-500" />,
                  color: 'green'
                },
              ].map((metric, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-lg p-3 flex flex-col bg-${metric.color}-50 border-${metric.color}-200`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    {metric.icon}
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
            
            <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-md">
              <PieChart size={36} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Supplier Risk Distribution</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>High-Risk Suppliers</CardTitle>
            <CardDescription>Suppliers requiring attention or intervention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  supplier: 'TechMetals Ltd.', 
                  location: 'Myanmar',
                  risk: 'High',
                  issues: ['Labor practice concerns', 'Regulatory changes'],
                  action: 'Audit Scheduled'
                },
                { 
                  supplier: 'Global Polymers Inc.', 
                  location: 'Thailand',
                  risk: 'Medium',
                  issues: ['Environmental compliance gaps'],
                  action: 'Improvement Plan'
                },
              ].map((supplier, idx) => (
                <div key={idx} className="border rounded-lg overflow-hidden">
                  <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{supplier.supplier}</h4>
                      <p className="text-sm text-gray-500">{supplier.location}</p>
                    </div>
                    <div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        supplier.risk === 'High' ? 'bg-red-100 text-red-800' :
                        supplier.risk === 'Medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {supplier.risk} Risk
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="text-sm font-medium mb-2">Risk Factors:</h5>
                    <ul className="list-disc pl-5 mb-3 text-sm space-y-1">
                      {supplier.issues.map((issue, i) => (
                        <li key={i} className="text-gray-700">{issue}</li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm text-gray-500">Action: {supplier.action}</span>
                      <button className="text-xs px-3 py-1.5 bg-guardian-blue text-white rounded-md">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center justify-center py-6 px-4 border rounded-lg border-dashed">
                <p className="text-sm text-gray-500">No other suppliers currently flagged for high risk</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Supplier Integrity Scorecard</CardTitle>
          <CardDescription>Blockchain-verified supplier performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Supplier</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Location</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Blockchain Verification</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Ethical Score</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Environmental</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Labor</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Overall Risk</th>
                  <th className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  { 
                    name: 'EcoTex Materials', 
                    location: 'Germany',
                    verified: true,
                    ethicalScore: 98,
                    environmental: 95,
                    labor: 100,
                    risk: 'Low'
                  },
                  { 
                    name: 'GreenMetal Inc.', 
                    location: 'United States',
                    verified: true,
                    ethicalScore: 94,
                    environmental: 92,
                    labor: 96,
                    risk: 'Low'
                  },
                  { 
                    name: 'Sustainable Plastics', 
                    location: 'Canada',
                    verified: true,
                    ethicalScore: 96,
                    environmental: 97,
                    labor: 95,
                    risk: 'Low'
                  },
                  { 
                    name: 'TechMetals Ltd.', 
                    location: 'Myanmar',
                    verified: true,
                    ethicalScore: 73,
                    environmental: 82,
                    labor: 65,
                    risk: 'High'
                  },
                  { 
                    name: 'Global Polymers Inc.', 
                    location: 'Thailand',
                    verified: true,
                    ethicalScore: 82,
                    environmental: 76,
                    labor: 88,
                    risk: 'Medium'
                  },
                ].map((supplier, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 text-gray-400 mr-2" />
                        {supplier.name}
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">{supplier.location}</td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                      {supplier.verified ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          <CheckCircle2 className="mr-1 h-3 w-3" /> Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          supplier.ethicalScore >= 90 ? 'text-green-700' :
                          supplier.ethicalScore >= 80 ? 'text-amber-700' :
                          'text-red-700'
                        }`}>
                          {supplier.ethicalScore}%
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          supplier.environmental >= 90 ? 'text-green-700' :
                          supplier.environmental >= 80 ? 'text-amber-700' :
                          'text-red-700'
                        }`}>
                          {supplier.environmental}%
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <span className={`font-medium ${
                          supplier.labor >= 90 ? 'text-green-700' :
                          supplier.labor >= 80 ? 'text-amber-700' :
                          'text-red-700'
                        }`}>
                          {supplier.labor}%
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        supplier.risk === 'Low' ? 'bg-green-100 text-green-800' :
                        supplier.risk === 'Medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {supplier.risk}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap border-b border-gray-200 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                      <a href="#" className="text-guardian-blue hover:text-guardian-blue/80">View</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupplierRiskAnalysis;
