// src/components/LoginForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { GraduationCap, User, Lock, Globe, Wifi, WifiOff } from "lucide-react";
import SmsLogo from "@/assets/sms-logo";
import { useToast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: (role: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "",
    workOffline: false,
    language: "english"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline] = useState(navigator.onLine);
  const { toast } = useToast();

  const getCredentialLabel = () => {
    switch (credentials.role) {
      case 'parent':
        return {
          label: 'Student Registration Number',
          placeholder: 'Enter student registration number (e.g., BASS/25/O/004)',
          icon: User
        };
      case 'teacher':
      case 'admin':
      case 'ict':
        return {
          label: 'Staff ID',
          placeholder: 'Enter your staff ID number',
          icon: User
        };
      case 'bursar':
        return {
          label: 'Employee ID',
          placeholder: 'Enter your employee ID',
          icon: User
        };
      default:
        return {
          label: 'Username',
          placeholder: 'Enter your username',
          icon: User
        };
    }
  };

  const credentialInfo = getCredentialLabel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.username || !credentials.password || !credentials.role) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome back, ${credentials.role}!`,
      });
      onLogin(credentials.role);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      {/* Offline Indicator */}
      {!isOnline && (
        <div className="fixed top-4 left-4 right-4 bg-warning text-warning-foreground px-4 py-2 rounded-md shadow-medium z-50 flex items-center justify-center gap-2">
          <WifiOff className="h-4 w-4" />
          <span className="text-sm font-medium">OFFLINE MODE - Some features may be limited</span>
        </div>
      )}

      <Card className="w-full max-w-md shadow-strong bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <SmsLogo className="h-16 w-16" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              School Management System
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Secure access to your educational portal
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Dynamic Credential Field */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">
                {credentialInfo.label}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  placeholder={credentialInfo.placeholder}
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                Select Role
              </Label>
              <Select value={credentials.role} onValueChange={(value) => setCredentials({ ...credentials, role: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="bursar">Bursar</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="ict">ICT Officer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language Selection 
            <div className="space-y-2">
              <Label htmlFor="language" className="text-sm font-medium">
                Language
              </Label>
              <Select value={credentials.language} onValueChange={(value) => setCredentials({ ...credentials, language: value })}>
                <SelectTrigger>
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="luganda">Luganda</SelectItem>
                  <SelectItem value="swahili">Kiswahili</SelectItem>
                </SelectContent>
              </Select>
            </div>*/}

            {/* Work Offline Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="offline"
                checked={credentials.workOffline}
                onCheckedChange={(checked) => setCredentials({ ...credentials, workOffline: checked as boolean })}
              />
              <Label htmlFor="offline" className="text-sm text-muted-foreground flex items-center gap-2">
                <Wifi className="h-4 w-4" />
                Enable offline mode for limited connectivity
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              variant="educational"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <Button variant="link" className="text-sm text-primary hover:underline">
                Forgot your password?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}