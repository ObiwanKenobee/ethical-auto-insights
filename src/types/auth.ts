
// Define User types based on RBAC
export type UserRole = 'admin' | 'manufacturer' | 'supplier' | 'regulator' | 'fleet_manager' | null;

export interface User {
  id?: string;
  email: string;
  name: string;
  role: UserRole;
  authenticated: boolean;
}
