import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Navigation } from "@/components/Navigation";

// Import role-specific dashboards
import AdminDashboard from "@/pages/admin/admin-dashboard";
import TeacherDashboard from "@/pages/teacher/teacher-dashboard";
import BursarDashboard from "@/pages/admin/BursarDashboard";
import ParentDashboard from "@/pages/parent/students-dasboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string>("");
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogin = (role: string) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setActiveSection("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
    setActiveSection("dashboard");
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderDashboard = () => {
    switch (userRole) {
      case "admin":
        return <AdminDashboard />;
      case "teacher":
        return <TeacherDashboard />;
      case "bursar":
        return <BursarDashboard />;
      case "parent":
        return <ParentDashboard />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Unknown Role</h2>
            <p className="text-muted-foreground">No dashboard available.</p>
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        role={userRole}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8">
        {activeSection === "dashboard" ? (
          renderDashboard()
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section
            </h2>
            <p className="text-muted-foreground">
              This section is under development. Full functionality coming soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
