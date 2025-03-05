import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  UserCheck, 
  UserX, 
  User, 
  Users, 
  Shield, 
  Search, 
  CheckCircle, 
  XCircle, 
  Truck, 
  Building, 
  FileText, 
  Key,
  Clock
} from 'lucide-react';

// Mock user data for the dashboard
const mockUsers = [
  { id: 1, name: 'Jennifer Smith', email: 'j.smith@example.com', role: 'Administrator', status: 'Active', lastActive: '2 mins ago' },
  { id: 2, name: 'Michael Johnson', email: 'm.johnson@example.com', role: 'Manufacturer', status: 'Active', lastActive: '15 mins ago' },
  { id: 3, name: 'Sarah Wilson', email: 's.wilson@ecomat.com', role: 'Supplier', status: 'Active', lastActive: '35 mins ago' },
  { id: 4, name: 'David Brown', email: 'd.brown@regcom.gov', role: 'Regulator', status: 'Active', lastActive: '1 hour ago' },
  { id: 5, name: 'Lisa Davis', email: 'l.davis@fleetcorp.com', role: 'Fleet Manager', status: 'Inactive', lastActive: '3 days ago' },
  { id: 6, name: 'Robert Miller', email: 'r.miller@greensupply.com', role: 'Supplier', status: 'Pending', lastActive: 'Never' },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  const handleInviteUser = () => {
    toast({
      title: "Invitation Sent",
      description: "New user invitation has been sent successfully",
      variant: "default",
    });
  };
  
  const handleUserAction = (action: string, userId: number) => {
    toast({
      title: `User ${action}`,
      description: `User ID ${userId} has been ${action.toLowerCase()}`,
    });
  };
  
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getRoleIcon = (role: string) => {
    switch(role) {
      case 'Administrator': return <Shield className="h-4 w-4 text-guardian-blue" />;
      case 'Manufacturer': return <Building className="h-4 w-4 text-green-600" />;
      case 'Supplier': return <Truck className="h-4 w-4 text-amber-600" />;
      case 'Regulator': return <FileText className="h-4 w-4 text-purple-600" />;
      case 'Fleet Manager': return <Truck className="h-4 w-4 text-blue-600" />;
      default: return <User className="h-4 w-4 text-gray-600" />;
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Inactive': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'Pending': return <Clock className="h-4 w-4 text-amber-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">284</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Across all roles</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">261</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">92% of total users</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Inactive Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserX className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-2xl font-bold">23</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">8% of total users</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-guardian-blue mr-2" />
              <span className="text-2xl font-bold">8</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Full platform access</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-white">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users and permissions</CardDescription>
              </div>
              <Button className="mt-3 md:mt-0" onClick={handleInviteUser}>
                <User className="mr-2 h-4 w-4" /> Invite User
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search users by name, email or role..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="rounded-md border">
              <div className="grid grid-cols-8 gap-2 p-4 font-medium text-sm text-gray-500 border-b bg-gray-50">
                <div className="col-span-2">User</div>
                <div className="col-span-2">Email</div>
                <div className="col-span-1">Role</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Last Active</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>
              
              {filteredUsers.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No users found</div>
              ) : (
                filteredUsers.map((user) => (
                  <div key={user.id} className="grid grid-cols-8 gap-2 p-4 border-b last:border-0 items-center">
                    <div className="col-span-2 flex items-center">
                      <div className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-600">{user.email}</div>
                    <div className="col-span-1 flex items-center">
                      {getRoleIcon(user.role)}
                      <span className="ml-1.5 text-sm">{user.role}</span>
                    </div>
                    <div className="col-span-1 flex items-center">
                      {getStatusIcon(user.status)}
                      <span className="ml-1.5 text-sm">{user.status}</span>
                    </div>
                    <div className="col-span-1 text-sm text-gray-500">{user.lastActive}</div>
                    <div className="col-span-1 flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleUserAction('Edited', user.id)}>
                        <Key className="h-3.5 w-3.5" />
                      </Button>
                      <Button 
                        variant={user.status === 'Active' ? 'destructive' : 'default'} 
                        size="sm"
                        onClick={() => handleUserAction(user.status === 'Active' ? 'Deactivated' : 'Activated', user.id)}
                      >
                        {user.status === 'Active' ? <UserX className="h-3.5 w-3.5" /> : <UserCheck className="h-3.5 w-3.5" />}
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
