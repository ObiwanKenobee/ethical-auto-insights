
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lock, Mail, Shield, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, let's implement basic validation
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }
      
      // Successful login
      localStorage.setItem('guardian-io-demo-user', JSON.stringify({
        email,
        role: 'manufacturer',
        name: email.split('@')[0],
        authenticated: true
      }));
      
      toast({
        title: "Successfully logged in",
        description: "Welcome to Guardian-IO platform",
      });
      
      onSuccess();
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="your-email@example.com"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Button variant="link" size="sm" className="px-0 h-auto text-xs">
            Forgot password?
          </Button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked) => setRememberMe(checked === true)}
          disabled={isLoading}
        />
        <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
          Remember me
        </Label>
      </div>
      
      <Button type="submit" className="w-full bg-guardian-blue hover:bg-guardian-blue/90" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in
          </>
        ) : (
          <>
            <User className="mr-2 h-4 w-4" />
            Log In
          </>
        )}
      </Button>
      
      <div className="flex items-center gap-4 my-6">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">OR</span>
        <Separator className="flex-1" />
      </div>
      
      <div className="flex flex-col gap-3">
        <Button type="button" variant="outline" className="w-full" disabled={isLoading}>
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Continue with Google
        </Button>
        
        <Button type="button" variant="outline" className="w-full" disabled={isLoading}>
          <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-4.5 6.25h-2.25V10a.75.75 0 01-1.5 0V9.25H8.5a.75.75 0 010-1.5h2.25V6.5a.75.75 0 011.5 0v1.25H14.5a.75.75 0 010 1.5z" fill="#0077B5"/>
          </svg>
          Continue with LinkedIn
        </Button>

        <Button type="button" variant="outline" className="w-full" disabled={isLoading}>
          <Shield className="mr-2 h-4 w-4" />
          <span>Enterprise SSO</span>
        </Button>
      </div>
      
      <div className="text-xs text-center text-muted-foreground mt-4">
        By logging in, you agree to our
        <Button variant="link" size="sm" className="px-1 h-auto text-xs">
          Terms of Service
        </Button>
        and
        <Button variant="link" size="sm" className="px-1 h-auto text-xs">
          Privacy Policy
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
