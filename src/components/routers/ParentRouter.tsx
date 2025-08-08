// src/components/routers/ParentRouter.tsx
import ParentDashboard from "@/pages/parent/Parent-dasboard";
import ChildProfile from "@/pages/parent/ChildProfile";
import AcademicPerformance from "@/pages/parent/AcademicPerformance";
import FeeStatus from "@/pages/parent/FeeStatus";
import SchoolMessages from "@/pages/parent/SchoolMessages";
import { UnderDevelopment } from "../UnderDevelopment";

interface ParentRouterProps {
  activeSection: string;
}

export function ParentRouter({ activeSection }: ParentRouterProps) {
  const routes = {
    dashboard: <ParentDashboard />,
    children: <ChildProfile />,
    performance: <AcademicPerformance />,
    fees: <FeeStatus />,
    communication: <SchoolMessages />,
  };

  return routes[activeSection as keyof typeof routes] || (
    <UnderDevelopment sectionName={activeSection} />
  );
}