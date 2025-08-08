import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Award, 
  Target,
  BookOpen,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

export default function AcademicPerformance() {
  const performanceData = {
    currentTerm: "Term 2, 2024",
    overallGrade: "B+",
    classPosition: 3,
    totalStudents: 45,
    averageScore: 85.2,
    improvement: "+5.8%"
  };

  const subjectPerformance = [
    { 
      subject: "Mathematics", 
      currentScore: 92, 
      previousScore: 88, 
      grade: "A", 
      trend: "up",
      teacher: "Mr. Kamau",
      lastExam: "Mid-term",
      comments: "Excellent progress in algebra"
    },
    { 
      subject: "English", 
      currentScore: 88, 
      previousScore: 85, 
      grade: "A", 
      trend: "up",
      teacher: "Mrs. Nakato",
      lastExam: "Mid-term",
      comments: "Strong writing skills, improve reading speed"
    },
    { 
      subject: "Science", 
      currentScore: 85, 
      previousScore: 89, 
      grade: "A", 
      trend: "down",
      teacher: "Dr. Okello",
      lastExam: "Mid-term",
      comments: "Good understanding, focus on practical work"
    },
    { 
      subject: "Social Studies", 
      currentScore: 80, 
      previousScore: 78, 
      grade: "B+", 
      trend: "up",
      teacher: "Ms. Achieng",
      lastExam: "Mid-term",
      comments: "Improving research skills"
    },
    { 
      subject: "Art", 
      currentScore: 78, 
      previousScore: 82, 
      grade: "B+", 
      trend: "down",
      teacher: "Mr. Ssemakula",
      lastExam: "Project",
      comments: "Creative but needs more attention to detail"
    },
    { 
      subject: "Physical Education", 
      currentScore: 95, 
      previousScore: 92, 
      grade: "A", 
      trend: "up",
      teacher: "Coach Musa",
      lastExam: "Practical",
      comments: "Outstanding athletic performance"
    }
  ];

  const termHistory = [
    { term: "Term 1, 2024", average: 82.5, position: 4, grade: "B+" },
    { term: "Term 3, 2023", average: 79.8, position: 6, grade: "B+" },
    { term: "Term 2, 2023", average: 77.2, position: 8, grade: "B" },
    { term: "Term 1, 2023", average: 75.1, position: 10, grade: "B" }
  ];

  const upcomingAssessments = [
    { subject: "Mathematics", type: "Final Exam", date: "2024-03-15", syllabus: "Chapters 1-8" },
    { subject: "English", type: "Essay Test", date: "2024-03-18", syllabus: "Literature Analysis" },
    { subject: "Science", type: "Practical", date: "2024-03-20", syllabus: "Lab Experiments 1-5" },
    { subject: "Social Studies", type: "Project", date: "2024-03-25", syllabus: "Uganda History" }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <TrendingUp className="h-4 w-4 text-success" /> : 
      <TrendingDown className="h-4 w-4 text-destructive" />;
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'default';
    if (grade.startsWith('B')) return 'secondary';
    if (grade.startsWith('C')) return 'outline';
    return 'destructive';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Academic Performance</h1>
          <p className="text-muted-foreground">Track your child's academic progress and achievements</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="educational" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{performanceData.averageScore}%</div>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-3 w-3 text-success" />
              <span className="text-success">{performanceData.improvement} from last term</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Class Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{performanceData.classPosition}</div>
            <p className="text-sm text-muted-foreground">out of {performanceData.totalStudents} students</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{performanceData.overallGrade}</div>
            <p className="text-sm text-muted-foreground">{performanceData.currentTerm}</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Subjects Excelling</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">4</div>
            <p className="text-sm text-muted-foreground">with grade A or above</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="current" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Performance</TabsTrigger>
          <TabsTrigger value="history">Performance History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Assessments</TabsTrigger>
        </TabsList>

        {/* Current Performance */}
        <TabsContent value="current" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Subject Performance - {performanceData.currentTerm}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{subject.subject}</h3>
                        <Badge variant={getGradeColor(subject.grade)}>
                          {subject.grade}
                        </Badge>
                        {getTrendIcon(subject.trend)}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{subject.currentScore}%</div>
                        <div className="text-sm text-muted-foreground">
                          Previous: {subject.previousScore}%
                        </div>
                      </div>
                    </div>
                    
                    <Progress value={subject.currentScore} className="h-2 mb-3" />
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Teacher: <span className="text-foreground">{subject.teacher}</span></p>
                        <p className="text-muted-foreground">Last Assessment: <span className="text-foreground">{subject.lastExam}</span></p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Comments:</p>
                        <p className="text-foreground italic">{subject.comments}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance History */}
        <TabsContent value="history" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {termHistory.map((term, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{term.term}</h3>
                        <p className="text-sm text-muted-foreground">Position: {term.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{term.average}%</div>
                      <Badge variant={getGradeColor(term.grade)}>{term.grade}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  Progress Summary
                </h4>
                <p className="text-sm text-muted-foreground">
                  Your child has shown consistent improvement over the past year, 
                  with an average increase of 7.1% and climbing from position 10 to position 3. 
                  Keep up the excellent work!
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Upcoming Assessments */}
        <TabsContent value="upcoming" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Assessments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAssessments.map((assessment, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold">{assessment.subject}</h3>
                          <p className="text-sm text-muted-foreground">{assessment.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {new Date(assessment.date).toLocaleDateString()}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {Math.ceil((new Date(assessment.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm font-medium text-foreground">Syllabus Coverage:</p>
                      <p className="text-sm text-muted-foreground">{assessment.syllabus}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Preparation Tips</h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• Review class notes and textbook chapters</li>
                  <li>• Practice past papers and sample questions</li>
                  <li>• Attend extra classes if available</li>
                  <li>• Get adequate rest before examination days</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}