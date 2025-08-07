import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
  alert?: boolean;
}

function StatCard({ title, value, icon, trend, trendUp, alert }: StatCardProps) {
  return (
    <Card className={`shadow-soft hover:shadow-medium transition-all duration-200 ${alert ? 'border-warning' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-md ${alert ? 'bg-warning/10 text-warning' : 'bg-primary/10 text-primary'}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && (
          <p className={`text-xs flex items-center gap-1 mt-1 ${
            trendUp ? 'text-success' : 'text-destructive'
          }`}>
            <TrendingUp className={`h-3 w-3 ${!trendUp && 'rotate-180'}`} />
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

interface DashboardStatsProps {
  role: string;
}

export function DashboardStats({ role }: DashboardStatsProps) {
  // Different stats based on user role
  const getStatsForRole = () => {
    switch (role) {
      case 'admin':
        return [
          {
            title: "Total Students",
            value: "1,247",
            icon: <Users className="h-4 w-4" />,
            trend: "+12 this month",
            trendUp: true
          },
          {
            title: "Total Staff",
            value: "89",
            icon: <GraduationCap className="h-4 w-4" />,
            trend: "+3 new hires",
            trendUp: true
          },
          {
            title: "Fee Collection",
            value: "85%",
            icon: <DollarSign className="h-4 w-4" />,
            trend: "+5% from last term",
            trendUp: true
          },
          {
            title: "Attendance Rate",
            value: "92%",
            icon: <CheckCircle className="h-4 w-4" />,
            trend: "Steady",
            trendUp: true
          }
        ];
      
      case 'teacher':
        return [
          {
            title: "My Classes",
            value: "6",
            icon: <Users className="h-4 w-4" />
          },
          {
            title: "Students Total",
            value: "234",
            icon: <GraduationCap className="h-4 w-4" />
          },
          {
            title: "Pending Marks",
            value: "12",
            icon: <AlertTriangle className="h-4 w-4" />,
            alert: true
          },
          {
            title: "Avg Attendance",
            value: "89%",
            icon: <CheckCircle className="h-4 w-4" />
          }
        ];
      
      case 'bursar':
        return [
          {
            title: "Outstanding Fees",
            value: "UGX 45M",
            icon: <DollarSign className="h-4 w-4" />,
            alert: true
          },
          {
            title: "Collected This Month",
            value: "UGX 120M",
            icon: <CheckCircle className="h-4 w-4" />,
            trend: "+15% from last month",
            trendUp: true
          },
          {
            title: "Payment Plans",
            value: "156",
            icon: <Users className="h-4 w-4" />
          },
          {
            title: "Mobile Money",
            value: "78%",
            icon: <TrendingUp className="h-4 w-4" />,
            trend: "Primary payment method",
            trendUp: true
          }
        ];
      
      case 'parent':
        return [
          {
            title: "Children Enrolled",
            value: "2",
            icon: <Users className="h-4 w-4" />
          },
          {
            title: "Outstanding Fees",
            value: "UGX 450K",
            icon: <DollarSign className="h-4 w-4" />,
            alert: true
          },
          {
            title: "Attendance This Week",
            value: "95%",
            icon: <CheckCircle className="h-4 w-4" />
          },
          {
            title: "Latest Grade Average",
            value: "B+",
            icon: <GraduationCap className="h-4 w-4" />,
            trend: "Improved from B",
            trendUp: true
          }
        ];
      
      default:
        return [
          {
            title: "System Status",
            value: "Online",
            icon: <CheckCircle className="h-4 w-4" />
          },
          {
            title: "Active Users",
            value: "156",
            icon: <Users className="h-4 w-4" />
          },
          {
            title: "Server Load",
            value: "Normal",
            icon: <TrendingUp className="h-4 w-4" />
          },
          {
            title: "Data Backup",
            value: "Up to date",
            icon: <CheckCircle className="h-4 w-4" />
          }
        ];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}