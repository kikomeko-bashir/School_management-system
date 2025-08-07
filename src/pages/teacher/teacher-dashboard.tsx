import { DashboardStats } from "../../components/DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Users, FileText, CheckCircle2, ArrowRight, Bell, Wifi, WifiOff } from "lucide-react";

export default function TeacherDashboard() {
  const isOnline = navigator.onLine;

  const quickActions = [
    { label: 'Mark Attendance', icon: CheckCircle2, variant: 'educational' as const },
    { label: 'Enter Marks', icon: FileText, variant: 'default' as const },
    { label: 'View Classes', icon: Users, variant: 'outline' as const }
  ];

  const recentActivity = [
    { text: "Physics marks entered for S.4A", time: "1 hour ago", type: "success" },
    { text: "Attendance marked for today", time: "3 hours ago", type: "success" },
    { text: "Parent message sent regarding John's progress", time: "1 day ago", type: "info" },
    { text: "Exam schedule updated", time: "2 days ago", type: "warning" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">hello teacher</h1>
          <p className="text-muted-foreground">Here's what's happening at your school today.</p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={isOnline ? "default" : "destructive"} className="flex items-center gap-1">
            {isOnline ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
            {isOnline ? "Online" : "Offline"}
          </Badge>

          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Today: {new Date().toLocaleDateString()}
          </Button>
        </div>
      </div>

      <DashboardStats role="admin" />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                className="w-full justify-between"
                size="sm"
              >
                <span className="flex items-center gap-2">
                  <action.icon className="h-4 w-4" />
                  {action.label}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'success' ? 'bg-success' :
                  activity.type === 'warning' ? 'bg-warning' : 'bg-primary'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.text}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Schedule */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 rounded-md bg-muted/50 border border-border">
              <p className="font-medium text-sm">8:00 - 9:00 AM</p>
              <p className="text-muted-foreground text-xs">Mathematics - S.2A</p>
            </div>
            <div className="p-4 rounded-md bg-muted/50 border border-border">
              <p className="font-medium text-sm">9:00 - 10:00 AM</p>
              <p className="text-muted-foreground text-xs">Physics - S.4B</p>
            </div>
            <div className="p-4 rounded-md bg-muted/50 border border-border">
              <p className="font-medium text-sm">11:00 - 12:00 PM</p>
              <p className="text-muted-foreground text-xs">Chemistry - S.3A</p>
            </div>
            <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
              <p className="font-medium text-sm text-primary">2:00 - 3:00 PM</p>
              <p className="text-primary/80 text-xs">Staff Meeting</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
