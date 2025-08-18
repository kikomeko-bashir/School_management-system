// src/components/RoleRouter.tsx
import { UnderDevelopment } from "./UnderDevelopment";
import AdminDashboard from "@/pages/admin/admin-dashboard";
import TeacherDashboard from "@/pages/teacher/teacher-dashboard";
import BursarDashboard from "@/pages/admin/BursarDashboard";
import ParentDashboard from "@/pages/parent/Parent-dasboard";
import ChildProfile from "@/pages/parent/ChildProfile";
import AcademicPerformance from "@/pages/parent/AcademicPerformance";
import FeeStatus from "@/pages/parent/FeeStatus";
import SchoolMessages from "@/pages/parent/SchoolMessages";

interface RoleRouterProps {
  userRole: string;
  activeSection: string;
}

export function RoleRouter({ userRole, activeSection }: RoleRouterProps) {
  // Admin routes
  if (userRole === 'admin') {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'students':
      case 'staff':
      case 'academics':
      case 'fees':
      case 'communication':
      case 'reports':
      case 'settings':
        return <UnderDevelopment sectionName={activeSection} />;
      default:
        return <AdminDashboard />;
    }
  }

  // Teacher routes
  if (userRole === 'teacher') {
    switch (activeSection) {
      case 'dashboard':
        return <TeacherDashboard />;
      case 'classes':
      case 'marks':
      case 'attendance':
      case 'reports':
      case 'communication':
        return <UnderDevelopment sectionName={activeSection} />;
      default:
        return <TeacherDashboard />;
    }
  }

  // Bursar routes
  if (userRole === 'bursar') {
    switch (activeSection) {
      case 'dashboard':
        return <BursarDashboard />;
      case 'fees':
      case 'payments':
      case 'invoices':
      case 'reports':
      case 'defaulters':
        return <UnderDevelopment sectionName={activeSection} />;
      default:
        return <BursarDashboard />;
    }
  }

  // Parent routes
  if (userRole === 'parent') {
    switch (activeSection) {
      case 'dashboard':
        return <ParentDashboard />;
      case 'children':
        return <ChildProfile />;
      case 'performance':
        return <AcademicPerformance />;
      case 'fees':
        return <FeeStatus />;
      case 'communication':
        return <SchoolMessages />;
      default:
        return <ParentDashboard />;
    }
  }

  // ICT Officer routes
  if (userRole === 'ict') {
    switch (activeSection) {
      case 'dashboard':
      case 'system':
      case 'users':
      case 'backup':
      case 'reports':
      case 'settings':
        return <UnderDevelopment sectionName={activeSection} />;
      default:
        return <UnderDevelopment sectionName="dashboard" />;
    }
  }

  // Default fallback
  return <UnderDevelopment sectionName={activeSection} />;
}