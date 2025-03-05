
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  AlertTriangle, 
  Bot, 
  TrendingDown, 
  BarChart3, 
  Map, 
  Users, 
  ShieldAlert, 
  Eye, 
  CheckCircle, 
  XCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const getRiskSeverityColor = (severity: string) => {
  switch(severity) {
    case 'Critical': return 'bg-red-100 text-red-700 border-red-300';
    case 'High': return 'bg-orange-100 text-orange-700 border-orange-300';
    case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-300';
    case 'Low': return 'bg-green-100 text-green-700 border-green-300';
    default: return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

const RiskIntelligence = () => {
  const { toast } = useToast();
  
  const handleInvestigate = (riskId: number) => {
    toast({
      title: "Investigation Initiated",
      description: `Risk #${riskId} investigation has been started`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Risk Detection</CardTitle>
            <CardDescription>Real-time anomaly detection and fraud prevention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-guardian-blue/10 flex items-center justify-center">
                <Bot className="h-16 w-16 text-guardian-blue" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'AI Scans Today', value: '24,328' },
                { label: 'Anomalies Detected', value: '47' },
                { label: 'Fraud Prevented', value: '$142K' },
                { label: 'Risk Score', value: '2.3%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-sm text-center text-gray-500">
              AI system continuously monitors for unethical sourcing, labor violations and fraud
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Global Risk Heatmap</CardTitle>
            <CardDescription>Geographic distribution of supply chain risks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-gray-100 rounded-md flex items-center justify-center relative overflow-hidden">
              <Map className="h-8 w-8 text-gray-400" />
              <p className="text-gray-500 ml-2">Interactive Risk Heatmap</p>
              
              <div className="absolute bottom-3 right-3 bg-white p-2 rounded shadow-sm flex items-center space-x-4 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <span>High Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
                  <span>Medium Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                  <span>Low Risk</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Active Risk Alerts</CardTitle>
          <CardDescription>AI-detected anomalies requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: 'Forced Labor Risk Detected',
                description: 'Unusual work patterns detected at Supplier #AX-2045 facilities in Southeast Asia',
                severity: 'Critical',
                type: 'Labor',
                impact: 'High',
                time: '1 hour ago',
                status: 'Unresolved'
              },
              {
                id: 2,
                title: 'Fraudulent Documentation',
                description: 'AI detected potentially falsified ESG compliance certificates from EcoMat Suppliers',
                severity: 'High',
                type: 'Fraud',
                impact: 'Medium',
                time: '3 hours ago',
                status: 'Investigating'
              },
              {
                id: 3,
                title: 'Conflict Materials Risk',
                description: 'Material batch TX-9083 may contain minerals from non-verified sources',
                severity: 'High',
                type: 'Sourcing',
                impact: 'High',
                time: '5 hours ago',
                status: 'Unresolved'
              },
              {
                id: 4,
                title: 'Environmental Compliance Breach',
                description: 'Manufacturing plant exceeding carbon emissions by 23% above permitted levels',
                severity: 'Medium',
                type: 'Environmental',
                impact: 'Medium',
                time: '12 hours ago',
                status: 'Resolved'
              },
              {
                id: 5,
                title: 'Supply Chain Disruption',
                description: 'Political unrest affecting logistics routes in 3 key regions',
                severity: 'Medium',
                type: 'Logistics',
                impact: 'Medium',
                time: '1 day ago',
                status: 'Monitoring'
              }
            ].map((alert, idx) => (
              <div 
                key={idx} 
                className={`border rounded-lg p-4 ${alert.status === 'Resolved' ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2 mb-3 md:mb-0">
                    <div className="flex items-center">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.severity === 'Critical' ? 'text-red-500' :
                        alert.severity === 'High' ? 'text-orange-500' : 'text-amber-500'
                      } mr-2`} />
                      <h3 className="font-semibold">{alert.title}</h3>
                      <span className={`ml-3 text-xs px-2 py-0.5 rounded-full ${getRiskSeverityColor(alert.severity)} border`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{alert.description}</p>
                    
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-gray-100 px-2 py-1 rounded">Type: {alert.type}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">Impact: {alert.impact}</span>
                      <span className="flex items-center bg-gray-100 px-2 py-1 rounded">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                      </span>
                      <span className={`flex items-center px-2 py-1 rounded ${
                        alert.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                        alert.status === 'Investigating' ? 'bg-blue-100 text-blue-700' :
                        alert.status === 'Monitoring' ? 'bg-purple-100 text-purple-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {alert.status === 'Resolved' ? <CheckCircle className="h-3 w-3 mr-1" /> :
                         alert.status === 'Unresolved' ? <XCircle className="h-3 w-3 mr-1" /> :
                         <Eye className="h-3 w-3 mr-1" />}
                        {alert.status}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    {alert.status !== 'Resolved' && (
                      <Button 
                        size="sm" 
                        className="w-full md:w-auto"
                        onClick={() => handleInvestigate(alert.id)}
                      >
                        Investigate <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Risk Trends</CardTitle>
            <CardDescription>30-day risk analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center">
              <TrendingDown size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Risk Trend Chart</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Violations</CardTitle>
            <CardDescription>By category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60 flex items-center justify-center">
              <BarChart3 size={48} className="text-gray-400" />
              <p className="ml-3 text-gray-500">Violations Chart</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security Incidents</CardTitle>
            <CardDescription>Platform access analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {[
                { label: 'Failed Login Attempts', value: 37, change: '+5' },
                { label: 'Suspicious Activities', value: 12, change: '-2' },
                { label: 'Data Access Alerts', value: 8, change: '+1' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">{item.label}</span>
                    <div className="flex items-center">
                      <span className="font-semibold">{item.value}</span>
                      <span className={`text-xs ml-2 ${
                        item.change.startsWith('+') ? 'text-red-500' : 'text-green-500'
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`${
                        idx === 0 ? 'bg-red-500' : 
                        idx === 1 ? 'bg-amber-500' : 
                        'bg-blue-500'
                      } h-1.5 rounded-full`}
                      style={{ width: idx === 0 ? '70%' : idx === 1 ? '40%' : '25%' }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-3 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span>Latest Security Scan</span>
                  <span className="text-green-600 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" /> Complete
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Today at 06:42 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RiskIntelligence;
