// src/components/DashboardLayout.tsx
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { RoleRouter } from "./RoleRouter";

interface DashboardLayoutProps {
  userRole: string;
  onLogout: () => void;
}

export function DashboardLayout({ userRole, onLogout }: DashboardLayoutProps) {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        role={userRole}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onLogout={onLogout}
      />

      <main className="lg:ml-64 p-4 lg:p-8">
        <RoleRouter 
          userRole={userRole} 
          activeSection={activeSection} 
        />
      </main>
    </div>
  );
}