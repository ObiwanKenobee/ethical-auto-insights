
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  Server, 
  RotateCcw, 
  ShieldCheck, 
  HardDrive, 
  Link, 
  AlertTriangle, 
  CheckCircle, 
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlatformSecurity = () => {
  const { toast } = useToast();
  
  const handleSecurityScan = () => {
    toast({
      title: "Security Scan Initiated",
      description: "Platform-wide security scan has been started",
    });
  };
  
  const handleBackupNow = () => {
    toast({
      title: "Backup Initiated",
      description: "Blockchain data backup process has started",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Platform Security Status</CardTitle>
            <CardDescription>Overall system security health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="2" />
                  <circle 
                    cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="100" 
                    strokeDashoffset="2" transform="rotate(-90 18 18)"
                  />
                  <text x="18" y="20" textAnchor="middle" fill="#111827" fontSize="8" fontWeight="bold">98%</text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-green-600" />
                </div>
              </div>
              
              <h3 className="font-semibold text-xl mb-1">Excellent</h3>
              <p className="text-sm text-gray-500 text-center mb-4">All security systems operational</p>
              
              <Button className="w-full" onClick={handleSecurityScan}>
                <Lock className="mr-2 h-4 w-4" />
                Run Security Scan
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Authentication Status</CardTitle>
            <CardDescription>User access & security</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                <div className="bg-green-100 p-2 rounded-full">
                  <UserCheck className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-green-800">Multi-Factor Authentication</h4>
                  <p className="text-sm text-green-700">Enabled for 100% of admin users</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Admin Access', status: 'Secured', timestamp: '2 mins ago' },
                  { label: 'API Access', status: 'Secured', timestamp: '15 mins ago' },
                  { label: 'Database Access', status: 'Secured', timestamp: '35 mins ago' },
                  { label: 'Login Policy', status: 'Enforced', timestamp: '1 hour ago' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                    <span className="text-sm">{item.label}</span>
                    <div className="text-right">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <span className="text-xs text-gray-500">{item.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Disaster Recovery</CardTitle>
            <CardDescription>Backup status & recovery readiness</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-blue-800">Latest Backup</h4>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Automated</span>
                </div>
                <p className="text-sm text-blue-700 mb-1">Full platform blockchain backup</p>
                <div className="flex items-center text-xs text-blue-600">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Today at 06:00 AM</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Backup Schedule</span>
                  <span className="text-sm">Every 6 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Recovery Point</span>
                  <span className="text-sm">Max 6 hour data loss</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Recovery Time</span>
                  <span className="text-sm">&lt; 15 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Last Recovery Test</span>
                  <span className="text-sm">July 10, 2023</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={handleBackupNow}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Backup Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure Security</CardTitle>
            <CardDescription>Platform servers & network security</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 mb-6">
              <h3 className="font-medium text-sm">System Health</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Primary Servers', status: 'Online', icon: <Server className="h-5 w-5 text-green-500" /> },
                  { label: 'Backup Servers', status: 'Standby', icon: <HardDrive className="h-5 w-5 text-blue-500" /> },
                  { label: 'Blockchain Network', status: 'Secured', icon: <Link className="h-5 w-5 text-purple-500" /> },
                  { label: 'Firewall', status: 'Active', icon: <ShieldCheck className="h-5 w-5 text-orange-500" /> },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-lg border">
                    <div className="flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <p className="text-center text-sm font-medium">{item.label}</p>
                    <p className="text-center text-xs text-gray-500">{item.status}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-medium text-sm mb-2">Security Monitoring</h3>
              <div className="space-y-2">
                {[
                  { label: 'DDoS Protection', status: 'Active', details: 'Last attack: None' },
                  { label: 'Intrusion Detection', status: 'Active', details: 'No suspicious activity' },
                  { label: 'Vulnerability Scanning', status: 'Active', details: 'Last scan: 2 hours ago' },
                  { label: 'Data Encryption', status: 'Active', details: 'AES-256 + Blockchain' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.details}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Security Alerts</CardTitle>
            <CardDescription>Recent security events & notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  title: 'Unusual Login Attempt', 
                  description: 'Multiple failed login attempts from IP 203.45.78.192',
                  severity: 'Medium',
                  time: '37 mins ago',
                  status: 'Blocked'
                },
                { 
                  title: 'New Admin Added', 
                  description: 'New administrator account created for Mark Johnson',
                  severity: 'Info',
                  time: '2 hours ago',
                  status: 'Verified'
                },
                { 
                  title: 'API Rate Limit Exceeded', 
                  description: 'API key XR734-2 exceeded rate limits multiple times',
                  severity: 'Low',
                  time: '4 hours ago',
                  status: 'Resolved'
                },
                { 
                  title: 'System Update Applied', 
                  description: 'Security patches applied to all production servers',
                  severity: 'Info',
                  time: '12 hours ago',
                  status: 'Completed'
                },
                { 
                  title: 'Database Security Scan', 
                  description: 'Scheduled security scan of all database systems',
                  severity: 'Info',
                  time: '1 day ago',
                  status: 'Passed'
                },
              ].map((alert, idx) => (
                <div key={idx} className="flex items-start">
                  <div className={`p-1 rounded-full mt-0.5 ${
                    alert.severity === 'High' ? 'bg-red-100' : 
                    alert.severity === 'Medium' ? 'bg-amber-100' : 
                    alert.severity === 'Low' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.severity === 'High' ? 'text-red-500' : 
                      alert.severity === 'Medium' ? 'text-amber-500' : 
                      alert.severity === 'Low' ? 'text-blue-500' : 'text-gray-500'
                    }`} />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm">{alert.title}</p>
                      <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                        alert.status === 'Blocked' ? 'bg-red-100 text-red-700' : 
                        alert.status === 'Verified' ? 'bg-green-100 text-green-700' : 
                        alert.status === 'Resolved' ? 'bg-blue-100 text-blue-700' : 
                        alert.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{alert.description}</p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-400 ml-1">{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Shield className="mr-2 h-4 w-4" />
                View All Security Events
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlatformSecurity;
