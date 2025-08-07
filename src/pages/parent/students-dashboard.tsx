// pages/parent/students-dashboard.tsx

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import ParentDashboard from "./Parent-dasboard"; // renamed version of StDashboard
import ChildProfile from "./ChildProfile"; // adjust path as needed

export default function StudentsDashboard() {
  const [activeSection, setActiveSection] = useState("children");

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex">
      <Navigation
        role="parent"
        activeSection={activeSection}
        onNavigate={setActiveSection}
        onLogout={handleLogout}
      />

      <main className="flex-1 p-6 lg:ml-64">
        {activeSection === "children" && <ChildProfile />}
        {activeSection === "dashboard" && <ParentDashboard />}
        {/* Add more sections if needed */}
      </main>
    </div>
  );
}
