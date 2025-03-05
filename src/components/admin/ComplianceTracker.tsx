
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  FileText, 
  Link, 
  CheckSquare, 
  Search, 
  Download, 
  Globe, 
  Building, 
  Clock,
  CheckCircle, 
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComplianceTracker = () => {
  const { toast } = useToast();
  
  const handleGenerateReport = () => {
    toast({
      title: "Report Generation Started",
      description: "Your compliance report is being prepared",
    });
  };
  
  const handleViewDetails = (id: number) => {
    toast({
      title: "Opening Record",
      description: `Viewing complete details for record #${id}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Blockchain-Verified Compliance</CardTitle>
            <CardDescription>Tamper-proof records of all audits and certifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 border rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center mb-4">
                <Link className="h-10 w-10 text-guardian-blue" />
              </div>
              
              <h3 className="text-center font-semibold mb-2">Immutable Blockchain Records</h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                All supply chain transactions and certifications are permanently stored on the blockchain
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 border">
                  <p className="text-xs text-gray-500 mb-1">Total Records</p>
                  <p className="text-xl font-bold">143,298</p>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <p className="text-xs text-gray-500 mb-1">Verified Documents</p>
                  <p className="text-xl font-bold">24,567</p>
                </div>
                <div className="bg-white rounded-lg p-4 border">
                  <p className="text-xs text-gray-500 mb-1">Blockchain Size</p>
                  <p className="text-xl font-bold">32.7 GB</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-lg font-semibold mb-2 md:mb-0">Recent Compliance Records</h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Search className="mr-1 h-4 w-4" /> Filter
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerateReport}>
                  <Download className="mr-1 h-4 w-4" /> Export
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Record ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { id: 'BLK-7291', type: 'ESG Audit', entity: 'EcoMat Suppliers', status: 'Verified', timestamp: '2023-07-12 14:22:45' },
                    { id: 'BLK-7290', type: 'Labor Compliance', entity: 'Apex Manufacturing', status: 'Verified', timestamp: '2023-07-12 10:45:31' },
                    { id: 'BLK-7289', type: 'Carbon Offset', entity: 'Global Transport Inc', status: 'Pending', timestamp: '2023-07-11 18:33:22' },
                    { id: 'BLK-7288', type: 'Factory Audit', entity: 'Pinnacle Industries', status: 'Verified', timestamp: '2023-07-11 11:05:16' },
                    { id: 'BLK-7287', type: 'Material Origin', entity: 'RawSource Partners', status: 'Disputed', timestamp: '2023-07-10 09:17:03' },
                  ].map((record, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-guardian-blue">{record.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.entity}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          record.status === 'Verified' ? 'bg-green-100 text-green-800' : 
                          record.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {record.status === 'Verified' ? <CheckCircle className="mr-1 h-3 w-3" /> : 
                           record.status === 'Disputed' ? <AlertCircle className="mr-1 h-3 w-3" /> : 
                           <Clock className="mr-1 h-3 w-3" />}
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewDetails(parseInt(record.id.split('-')[1]))}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
            <CardDescription>ESG and regulatory status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Global Compliance Score</h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-100 text-green-700 text-xl font-bold mr-4">
                    96%
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Above Industry Average</div>
                    <div className="text-xs text-green-600">+3.2% from last quarter</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Compliance by Region</h3>
                <div className="space-y-2">
                  {[
                    { region: 'North America', score: 98, status: 'Compliant' },
                    { region: 'Europe', score: 99, status: 'Compliant' },
                    { region: 'Asia Pacific', score: 92, status: 'Compliant' },
                    { region: 'South America', score: 94, status: 'Compliant' },
                    { region: 'Africa', score: 89, status: 'At Risk' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b last:border-0">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm">{item.region}</span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          item.score >= 95 ? 'text-green-600' : 
                          item.score >= 90 ? 'text-green-600' : 'text-amber-600'
                        }`}>
                          {item.score}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Recent Regulatory Updates</h3>
                <div className="space-y-3">
                  {[
                    { title: 'EU Supply Chain Due Diligence Act', date: 'Jul 10, 2023', impact: 'Medium' },
                    { title: 'US Forced Labor Prevention', date: 'Jul 5, 2023', impact: 'High' },
                    { title: 'Global Minimum Tax Agreement', date: 'Jun 28, 2023', impact: 'Low' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded-lg border">
                      <p className="text-sm font-medium">{item.title}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500">{item.date}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          item.impact === 'High' ? 'bg-red-100 text-red-700' : 
                          item.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 
                          'bg-green-100 text-green-700'
                        }`}>
                          {item.impact} Impact
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleGenerateReport}
              >
                <FileText className="mr-2 h-4 w-4" />
                Generate Compliance Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>ESG Compliance by Category</CardTitle>
            <CardDescription>Environmental, Social and Governance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  category: 'Environmental', 
                  score: 92, 
                  details: [
                    { label: 'Carbon Emissions', value: 94 },
                    { label: 'Water Management', value: 91 },
                    { label: 'Waste Reduction', value: 89 },
                  ]
                },
                { 
                  category: 'Social', 
                  score: 95, 
                  details: [
                    { label: 'Labor Practices', value: 97 },
                    { label: 'Human Rights', value: 96 },
                    { label: 'Community Impact', value: 93 },
                  ] 
                },
                { 
                  category: 'Governance', 
                  score: 98, 
                  details: [
                    { label: 'Board Diversity', value: 100 },
                    { label: 'Ethics Policies', value: 98 },
                    { label: 'Transparency', value: 96 },
                  ] 
                },
              ].map((category, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">{category.category}</h3>
                    <div className="flex items-center">
                      <span className={`text-lg font-bold ${
                        category.score >= 95 ? 'text-green-600' : 
                        category.score >= 90 ? 'text-green-600' : 'text-amber-600'
                      }`}>
                        {category.score}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{detail.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full ${
                                detail.value >= 95 ? 'bg-green-500' : 
                                detail.value >= 90 ? 'bg-green-500' : 
                                detail.value >= 80 ? 'bg-amber-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${detail.value}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium">{detail.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Audit Schedule</CardTitle>
            <CardDescription>Upcoming compliance verifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { 
                  entity: 'EcoMat Suppliers',
                  type: 'Environmental Compliance',
                  date: 'July 24, 2023',
                  status: 'Scheduled',
                  icon: <Building className="h-5 w-5 text-blue-500" />
                },
                { 
                  entity: 'Apex Manufacturing',
                  type: 'Factory Labor Audit',
                  date: 'July 29, 2023',
                  status: 'Scheduled',
                  icon: <Building className="h-5 w-5 text-green-500" />
                },
                { 
                  entity: 'RawSource Partners',
                  type: 'Material Traceability',
                  date: 'August 03, 2023',
                  status: 'Pending Confirmation',
                  icon: <Building className="h-5 w-5 text-amber-500" />
                },
                { 
                  entity: 'Global Transport Inc',
                  type: 'Carbon Footprint Verification',
                  date: 'August 10, 2023',
                  status: 'Scheduled',
                  icon: <Building className="h-5 w-5 text-purple-500" />
                },
                { 
                  entity: 'TechParts Manufacturing',
                  type: 'Supplier Ethics Assessment',
                  date: 'August 15, 2023',
                  status: 'Scheduled',
                  icon: <Building className="h-5 w-5 text-blue-500" />
                },
              ].map((audit, idx) => (
                <div key={idx} className="flex items-start p-3 border rounded-lg">
                  <div className="mt-1">{audit.icon}</div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{audit.entity}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        audit.status === 'Scheduled' ? 'bg-green-100 text-green-700' : 
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {audit.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{audit.type}</p>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {audit.date}
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <CheckSquare className="mr-2 h-4 w-4" />
                View Full Audit Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceTracker;
