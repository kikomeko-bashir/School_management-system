import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  FileText, 
  MessageSquare, 
  Settings, 
  Bell,
  LogOut,
  Menu,
  X,
  Home,
  BookOpen,
  CheckCircle,
  BarChart3,
  Monitor
} from "lucide-react";
import smsLogo from "@/assets/sms-logo.png";

interface NavigationProps {
  role: string;
  onNavigate: (section: string) => void;
  activeSection: string;
  onLogout: () => void;
}

export function Navigation({ role, onNavigate, activeSection, onLogout }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavigationItems = () => {
    const commonItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home }
    ];

    switch (role) {
      case 'admin':
        return [
          ...commonItems,
          { id: 'students', label: 'Student Management', icon: Users },
          { id: 'staff', label: 'Staff Management', icon: GraduationCap },
          { id: 'academics', label: 'Academic Setup', icon: BookOpen },
          { id: 'fees', label: 'Fee Management', icon: DollarSign },
          { id: 'communication', label: 'Communication', icon: MessageSquare },
          { id: 'reports', label: 'Reports', icon: BarChart3 },
          { id: 'settings', label: 'System Settings', icon: Settings }
        ];
      
      case 'teacher':
        return [
          ...commonItems,
          { id: 'classes', label: 'My Classes', icon: Users },
          { id: 'marks', label: 'Mark Entry', icon: FileText },
          { id: 'attendance', label: 'Attendance', icon: CheckCircle },
          { id: 'reports', label: 'Class Reports', icon: BarChart3 },
          { id: 'communication', label: 'Parent Messages', icon: MessageSquare }
        ];
      
      case 'bursar':
        return [
          ...commonItems,
          { id: 'fees', label: 'Fee Management', icon: DollarSign },
          { id: 'payments', label: 'Payment Recording', icon: CheckCircle },
          { id: 'invoices', label: 'Generate Invoices', icon: FileText },
          { id: 'reports', label: 'Financial Reports', icon: BarChart3 },
          { id: 'defaulters', label: 'Fee Defaulters', icon: Users }
        ];
      
      case 'parent':
        return [
          ...commonItems,
          { id: 'children', label: 'Child Profile', icon: Users },
          { id: 'performance', label: 'Academic Performance', icon: BarChart3 },
          { id: 'fees', label: 'Fee Status', icon: DollarSign },
          { id: 'communication', label: 'School Messages', icon: MessageSquare }
        ];
      
      case 'ict':
        return [
          ...commonItems,
          { id: 'system', label: 'System Status', icon: Monitor },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'backup', label: 'Data Backup', icon: FileText },
          { id: 'reports', label: 'System Reports', icon: BarChart3 },
          { id: 'settings', label: 'Technical Settings', icon: Settings }
        ];
      
      default:
        return commonItems;
    }
  };

  const navigationItems = getNavigationItems();

  const NavItem = ({ item }: { item: typeof navigationItems[0] }) => {
    const isActive = activeSection === item.id;
    const Icon = item.icon;
    
    return (
      <Button
        variant={isActive ? "educational" : "ghost"}
        className={`w-full justify-start gap-3 ${isActive ? 'shadow-medium' : 'hover:bg-primary/10'}`}
        onClick={() => {
          onNavigate(item.id);
          setIsMobileMenuOpen(false);
        }}
      >
        <Icon className="h-4 w-4" />
        {item.label}
      </Button>
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-card border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={smsLogo} alt="SMS" className="h-8 w-8" />
          <h1 className="font-bold text-foreground">SMS</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground p-0 text-xs">
              3
            </Badge>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-card border-r border-border">
        {/* Logo and Header */}
        <div className="flex items-center gap-3 p-6 border-b border-border">
          <img src={smsLogo} alt="SMS Logo" className="h-10 w-10" />
          <div>
            <h1 className="font-bold text-lg text-foreground">SMS</h1>
            <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>

        {/* User Info and Logout */}
        <div className="p-4 border-t border-border space-y-2">
          <div className="flex items-center gap-2 p-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">John Doe</p>
              <p className="text-xs text-muted-foreground capitalize">{role}</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={onLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-72 bg-card border-r border-border p-4 space-y-4">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <img src={smsLogo} alt="SMS Logo" className="h-8 w-8" />
              <div>
                <h1 className="font-bold text-foreground">SMS</h1>
                <p className="text-xs text-muted-foreground capitalize">{role} Portal</p>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </nav>

            {/* Mobile Logout */}
            <div className="pt-4 border-t border-border">
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={onLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}