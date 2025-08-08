// src/pages/Index.tsx
import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { DashboardLayout } from "../components/DashboardLayout";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string>("");

  const handleLogin = (role: string) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <DashboardLayout 
      userRole={userRole} 
      onLogout={handleLogout}
    />
  );
};

export default Index;