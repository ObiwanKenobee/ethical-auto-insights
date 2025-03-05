
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Truck, Building, Factory, AlertTriangle, BarChart3, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SystemOverview = () => {
  const { toast } = useToast();
  
  const handleViewDetails = () => {
    toast({
      title: "Supply Chain Map",
      description: "Opening detailed global supply chain map view",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Global Supply Chain Dashboard</CardTitle>
          <CardDescription>Real-time visibility across all manufacturers and suppliers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 p-6">
              <div className="w-full h-full rounded-md bg-slate-200 relative">
                {/* World map visualization (simplified for demo) */}
                <div className="absolute top-[20%] left-[25%] w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-[35%] left-[70%] w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-[60%] left-[30%] w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-[25%] left-[80%] w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                <div className="absolute top-[40%] left-[20%] w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line x1="25%" y1="20%" x2="40%" y2="30%" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="40%" y1="30%" x2="70%" y2="35%" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="70%" y1="35%" x2="80%" y2="25%" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="30%" y1="60%" x2="40%" y2="30%" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="20%" y1="40%" x2="30%" y2="60%" stroke="#CBD5E1" strokeWidth="1" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                <span className="text-xs">Compliant</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-1"></div>
                <span className="text-xs">At Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                <span className="text-xs">Non-Compliant</span>
              </div>
            </div>
            
            <button 
              className="absolute bottom-4 left-4 bg-guardian-blue text-white px-3 py-1.5 rounded-md text-sm flex items-center"
              onClick={handleViewDetails}
            >
              <Globe className="w-4 h-4 mr-1" /> View Details
            </button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Supply Chain Health</CardTitle>
            <CardDescription>Overall system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  label: 'Manufacturers', 
                  value: '24/25', 
                  icon: <Factory className="h-4 w-4 text-green-500" />, 
                  status: 'Operational'
                },
                { 
                  label: 'Suppliers', 
                  value: '67/72', 
                  icon: <Building className="h-4 w-4 text-green-500" />, 
                  status: 'Operational'
                },
                { 
                  label: 'Logistics', 
                  value: '35/38', 
                  icon: <Truck className="h-4 w-4 text-amber-500" />, 
                  status: 'Minor Delays'
                },
                { 
                  label: 'Compliance', 
                  value: '94%', 
                  icon: <BarChart3 className="h-4 w-4 text-green-500" />, 
                  status: 'Good'
                },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2 text-sm font-medium">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold">{item.value}</span>
                    <p className="text-xs text-muted-foreground">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Critical events requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  title: 'Supplier Compliance Issue', 
                  description: 'EcoMat Suppliers failed ESG verification',
                  severity: 'high',
                  time: '18 mins ago'
                },
                { 
                  title: 'Suspected Fraud Alert', 
                  description: 'Unusual transaction pattern detected',
                  severity: 'critical',
                  time: '1 hour ago'
                },
                { 
                  title: 'Labor Conditions Warning', 
                  description: 'Factory #12 reported overtime violations',
                  severity: 'medium',
                  time: '3 hours ago'
                },
                { 
                  title: 'Supply Chain Disruption', 
                  description: 'Weather event affecting 3 logistics routes',
                  severity: 'medium',
                  time: '6 hours ago'
                },
              ].map((alert, idx) => (
                <div key={idx} className="flex items-start pb-3 last:pb-0">
                  <div className={`mt-0.5 p-1 rounded-full ${
                    alert.severity === 'critical' ? 'bg-red-100' : 
                    alert.severity === 'high' ? 'bg-amber-100' : 'bg-orange-100'
                  }`}>
                    <AlertTriangle className={`h-3 w-3 ${
                      alert.severity === 'critical' ? 'text-red-500' : 
                      alert.severity === 'high' ? 'text-amber-500' : 'text-orange-500'
                    }`} />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground ml-1">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Platform health metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  label: 'Blockchain Network', 
                  value: '99.99%', 
                  description: 'Uptime last 30 days'
                },
                { 
                  label: 'API Response Time', 
                  value: '124ms', 
                  description: 'Average response'
                },
                { 
                  label: 'Data Processing', 
                  value: '45TB', 
                  description: 'Monthly volume'
                },
                { 
                  label: 'Security Status', 
                  value: 'Secure', 
                  description: 'All systems nominal'
                },
              ].map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold">{metric.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-guardian-blue h-1.5 rounded-full" style={{ width: `${idx === 0 ? 99.99 : idx === 1 ? 90 : idx === 2 ? 75 : 100}%` }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemOverview;
