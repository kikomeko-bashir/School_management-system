import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  GraduationCap, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Award, 
  AlertCircle,
  CheckCircle,
  DollarSign,
  FileText,
  Phone,
  Mail,
  MapPin,
  Book,
  Target,
  Star
} from "lucide-react";

export default function ChildProfile() {
  const childData = {
    name: "Emma Johnson",
    class: "Primary 6A",
    admissionNumber: "SMS/2019/001",
    dateOfBirth: "2012-05-15",
    age: 11,
    gender: "Female",
    address: "123 Kampala Road, Kampala",
    parentContact: "+256 700 123 456",
    parentEmail: "parent@example.com",
    profileImage: "/placeholder.svg"
  };

  const academicData = {
    currentTerm: "Term 2, 2024",
    overallAverage: 85,
    position: 3,
    totalStudents: 45,
    subjects: [
      { name: "Mathematics", score: 92, grade: "A", teacher: "Mr. Kamau" },
      { name: "English", score: 88, grade: "A", teacher: "Mrs. Nakato" },
      { name: "Science", score: 85, grade: "A", teacher: "Dr. Okello" },
      { name: "Social Studies", score: 80, grade: "B+", teacher: "Ms. Achieng" },
      { name: "Art", score: 78, grade: "B+", teacher: "Mr. Ssemakula" },
      { name: "Physical Education", score: 95, grade: "A", teacher: "Coach Musa" }
    ]
  };

  const attendanceData = {
    totalDays: 65,
    present: 62,
    absent: 3,
    percentage: 95.4,
    recentAbsences: [
      { date: "2024-01-15", reason: "Sick" },
      { date: "2024-01-22", reason: "Family emergency" },
      { date: "2024-02-03", reason: "Medical appointment" }
    ]
  };

  const disciplineData = {
    totalIncidents: 1,
    status: "Good",
    incidents: [
      {
        date: "2024-01-10",
        type: "Minor",
        description: "Late to class",
        action: "Verbal warning",
        teacher: "Mrs. Nakato"
      }
    ],
    achievements: [
      { date: "2024-02-01", title: "Student of the Month", description: "Outstanding academic performance" },
      { date: "2024-01-20", title: "Math Competition Winner", description: "1st place in inter-class competition" }
    ]
  };

  const feesData = {
    totalFees: 850000,
    paidAmount: 600000,
    balance: 250000,
    dueDate: "2024-03-15",
    status: "Partial",
    payments: [
      { date: "2024-01-05", amount: 300000, method: "Bank Transfer", reference: "TXN001" },
      { date: "2024-02-01", amount: 300000, method: "Cash", reference: "RCP002" }
    ]
  };

  return (
        <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-3xl font-bold text-foreground">Child Profile</h1>
            <p className="text-muted-foreground">Complete overview of your child's school progress</p>
            </div>
            <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Download Report
            </Button>
        </div>

        {/* Child Info Card */}
        <Card className="shadow-soft">
            <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Student Information
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-32 w-32">
                    <AvatarImage src={childData.profileImage} alt={childData.name} />
                    <AvatarFallback className="text-2xl">{childData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <Badge variant="secondary" className="text-sm">
                    {childData.class}
                </Badge>
                </div>
                
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{childData.name}</p>
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Admission Number</p>
                    <p className="font-medium">{childData.admissionNumber}</p>
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">{childData.dateOfBirth} ({childData.age} years)</p>
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Gender</p>
                    <p className="font-medium">{childData.gender}</p>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {childData.address}
                    </p>
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Parent Contact</p>
                    <p className="font-medium flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {childData.parentContact}
                    </p>
                    </div>
                    <div>
                    <p className="text-sm text-muted-foreground">Parent Email</p>
                    <p className="font-medium flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {childData.parentEmail}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Tabs for different sections */}
        <Tabs defaultValue="academic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="discipline">Discipline</TabsTrigger>
            <TabsTrigger value="fees">Fees</TabsTrigger>
            </TabsList>

            {/* Academic Performance */}
            <TabsContent value="academic" className="space-y-6">
            <Card className="shadow-soft">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Performance - {academicData.currentTerm}
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{academicData.overallAverage}%</div>
                    <p className="text-sm text-muted-foreground">Overall Average</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{academicData.position}</div>
                    <p className="text-sm text-muted-foreground">Class Position</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-muted-foreground">{academicData.totalStudents}</div>
                    <p className="text-sm text-muted-foreground">Total Students</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                    <Book className="h-4 w-4" />
                    Subject Performance
                    </h4>
                    {academicData.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium">{subject.name}</h5>
                            <div className="flex items-center gap-2">
                            <Badge variant={subject.grade.startsWith('A') ? 'default' : subject.grade.startsWith('B') ? 'secondary' : 'outline'}>
                                {subject.grade}
                            </Badge>
                            <span className="font-bold text-primary">{subject.score}%</span>
                            </div>
                        </div>
                        <Progress value={subject.score} className="h-2 mb-2" />
                        <p className="text-xs text-muted-foreground">Teacher: {subject.teacher}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
            </TabsContent>

            {/* Attendance */}
            <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-soft">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Attendance Record
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">{attendanceData.present}</div>
                    <p className="text-sm text-muted-foreground">Days Present</p>
                    </div>
                    <div className="text-center p-4 bg-destructive/10 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">{attendanceData.absent}</div>
                    <p className="text-sm text-muted-foreground">Days Absent</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{attendanceData.totalDays}</div>
                    <p className="text-sm text-muted-foreground">Total Days</p>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{attendanceData.percentage}%</div>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold">Recent Absences</h4>
                    {attendanceData.recentAbsences.map((absence, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        <div>
                            <p className="font-medium">{absence.date}</p>
                            <p className="text-sm text-muted-foreground">{absence.reason}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </CardContent>
            </Card>
            </TabsContent>

            {/* Discipline */}
            <TabsContent value="discipline" className="space-y-6">
            <Card className="shadow-soft">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Discipline & Achievements
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">{disciplineData.status}</div>
                    <p className="text-sm text-muted-foreground">Behavior Status</p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{disciplineData.totalIncidents}</div>
                    <p className="text-sm text-muted-foreground">Total Incidents</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 text-warning" />
                        Achievements & Awards
                    </h4>
                    {disciplineData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-success/5 border border-success/20 rounded-lg mb-3">
                        <Award className="h-5 w-5 text-success mt-0.5" />
                        <div className="flex-1">
                            <h5 className="font-medium text-success">{achievement.title}</h5>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                        </div>
                        </div>
                    ))}
                    </div>

                    <div>
                    <h4 className="font-semibold flex items-center gap-2 mb-4">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        Disciplinary Incidents
                    </h4>
                    {disciplineData.incidents.map((incident, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-medium">{incident.description}</h5>
                            <Badge variant="destructive" className="text-xs">{incident.type}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Action: {incident.action}</p>
                            <p className="text-xs text-muted-foreground">Reported by: {incident.teacher} on {incident.date}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </CardContent>
            </Card>
            </TabsContent>

            {/* Fees */}
            <TabsContent value="fees" className="space-y-6">
            <Card className="shadow-soft">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Fee Status & Payment History
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-xl font-bold text-foreground">UGX {feesData.totalFees.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Total Fees</p>
                    </div>
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-xl font-bold text-success">UGX {feesData.paidAmount.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Amount Paid</p>
                    </div>
                    <div className="text-center p-4 bg-warning/10 rounded-lg">
                    <div className="text-xl font-bold text-warning">UGX {feesData.balance.toLocaleString()}</div>
                    <p className="text-sm text-muted-foreground">Balance</p>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-sm font-bold text-primary">{feesData.dueDate}</div>
                    <p className="text-sm text-muted-foreground">Due Date</p>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Payment Progress</span>
                    <span className="text-sm font-medium">{Math.round((feesData.paidAmount / feesData.totalFees) * 100)}%</span>
                    </div>
                    <Progress value={(feesData.paidAmount / feesData.totalFees) * 100} className="h-3" />
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold">Payment History</h4>
                    {feesData.payments.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <div>
                            <p className="font-medium">UGX {payment.amount.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground">{payment.date} • {payment.method}</p>
                        </div>
                        </div>
                        <Badge variant="outline">{payment.reference}</Badge>
                    </div>
                    ))}
                    
                    <div className="pt-4">
                    <Button variant="educational" className="w-full">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Make Payment
                    </Button>
                    </div>
                </div>
                </CardContent>
            </Card>
            </TabsContent>
        </Tabs>
        </div>
  );
}