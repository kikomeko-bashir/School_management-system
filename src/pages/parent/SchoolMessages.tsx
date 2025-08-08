import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Search, 
  Filter, 
  Bell,
  Calendar,
  User,
  School,
  AlertCircle,
  CheckCircle,
  Clock,
  Pin,
  Archive,
  Trash2,
  Reply,
  Forward,
  Download,
  Phone,
  Video
} from "lucide-react";

export default function SchoolMessages() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const messages = [
    {
      id: 1,
      type: "announcement",
      sender: "School Administration",
      senderAvatar: "/school-admin.jpg",
      subject: "Parent-Teacher Conference Scheduled",
      content: "Dear Parents, We are pleased to announce that Parent-Teacher Conferences will be held on March 15-17, 2024. Please book your preferred time slot through the school portal. This is an excellent opportunity to discuss your child's progress with their teachers.",
      timestamp: "2024-02-20T10:30:00",
      isRead: false,
      priority: "high",
      category: "event",
      attachments: ["conference_schedule.pdf"]
    },
    {
      id: 2,
      type: "individual",
      sender: "Mrs. Nakato (English Teacher)",
      senderAvatar: "/teacher-nakato.jpg",
      subject: "Emma's Excellent Essay Performance",
      content: "Hello Mr. and Mrs. Johnson, I wanted to personally commend Emma for her outstanding performance in our recent essay assignment. Her creativity and attention to detail were exceptional. She scored 95% and has shown remarkable improvement in her writing skills.",
      timestamp: "2024-02-19T14:15:00",
      isRead: true,
      priority: "normal",
      category: "academic",
      attachments: []
    },
    {
      id: 3,
      type: "announcement",
      sender: "Finance Department",
      senderAvatar: "/finance-dept.jpg",
      subject: "Term 2 Fee Payment Reminder",
      content: "This is a friendly reminder that Term 2 school fees are due by March 15, 2024. Please ensure all outstanding balances are cleared to avoid any inconvenience. Multiple payment options are available including mobile money and bank transfer.",
      timestamp: "2024-02-18T09:00:00",
      isRead: true,
      priority: "high",
      category: "finance",
      attachments: ["payment_methods.pdf"]
    },
    {
      id: 4,
      type: "individual",
      sender: "Mr. Kamau (Mathematics Teacher)",
      senderAvatar: "/teacher-kamau.jpg",
      subject: "Math Competition Invitation",
      content: "Dear Parents, Emma has been selected to represent our school in the Inter-School Mathematics Competition. This is a testament to her excellent performance in mathematics. The competition will be held on March 22, 2024. Please confirm her participation.",
      timestamp: "2024-02-17T16:45:00",
      isRead: false,
      priority: "normal",
      category: "academic",
      attachments: ["competition_details.pdf"]
    },
    {
      id: 5,
      type: "announcement",
      sender: "Health Department",
      senderAvatar: "/health-dept.jpg",
      subject: "Health and Safety Guidelines Update",
      content: "Dear Parents and Students, We have updated our health and safety guidelines following the latest recommendations from the Ministry of Health. Please review the attached document and ensure your child follows all safety protocols.",
      timestamp: "2024-02-16T11:20:00",
      isRead: true,
      priority: "normal",
      category: "health",
      attachments: ["health_guidelines.pdf"]
    },
    {
      id: 6,
      type: "individual",
      sender: "School Nurse",
      senderAvatar: "/school-nurse.jpg",
      subject: "Medical Check-up Results",
      content: "Hello, Emma's routine medical check-up has been completed. All results are normal and she is in excellent health. The detailed report is attached for your records. Please ensure she continues with her vitamin supplements.",
      timestamp: "2024-02-15T13:30:00",
      isRead: true,
      priority: "normal",
      category: "health",
      attachments: ["medical_report.pdf"]
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "School Closed - Public Holiday",
      content: "The school will be closed on February 26, 2024, in observance of Liberation Day.",
      date: "2024-02-24",
      type: "closure",
      urgent: false
    },
    {
      id: 2,
      title: "Sports Day Registration Open",
      content: "Registration for the annual Sports Day is now open. Please register your child by March 1, 2024.",
      date: "2024-02-23",
      type: "event",
      urgent: false
    },
    {
      id: 3,
      title: "Emergency Contact Update Required",
      content: "Please update your emergency contact information through the parent portal by February 29, 2024.",
      date: "2024-02-22",
      type: "urgent",
      urgent: true
    }
  ];

  const quickActions = [
    { label: "Message Class Teacher", icon: User, recipient: "Class Teacher" },
    { label: "Contact School Office", icon: School, recipient: "Administration" },
    { label: "Emergency Contact", icon: Phone, recipient: "Emergency Line" },
    { label: "Book Virtual Meeting", icon: Video, recipient: "Schedule Meeting" }
  ];

  const getMessageIcon = (category: string) => {
    switch (category) {
      case "academic": return <User className="h-4 w-4 text-primary" />;
      case "finance": return <AlertCircle className="h-4 w-4 text-warning" />;
      case "health": return <CheckCircle className="h-4 w-4 text-success" />;
      case "event": return <Calendar className="h-4 w-4 text-primary" />;
      default: return <MessageSquare className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high": return <Badge variant="destructive">High Priority</Badge>;
      case "normal": return <Badge variant="outline">Normal</Badge>;
      default: return null;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString();
  };

  const filteredMessages = messages.filter(message =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Messages</h1>
          <p className="text-muted-foreground">Communication center for school updates and messages</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="educational" size="sm">
            <Send className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{messages.length}</div>
                <p className="text-sm text-muted-foreground">Total Messages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-warning" />
              <div>
                <div className="text-2xl font-bold text-warning">{messages.filter(m => !m.isRead).length}</div>
                <p className="text-sm text-muted-foreground">Unread Messages</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <div>
                <div className="text-2xl font-bold text-destructive">{messages.filter(m => m.priority === 'high').length}</div>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-success" />
              <div>
                <div className="text-2xl font-bold text-success">{announcements.length}</div>
                <p className="text-sm text-muted-foreground">Announcements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="messages" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
        </TabsList>

        {/* Messages Tab */}
        <TabsContent value="messages" className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Message List */}
            <div className="lg:col-span-1 space-y-3">
              {filteredMessages.map((message) => (
                <Card 
                  key={message.id} 
                  className={`cursor-pointer transition-all duration-200 shadow-soft hover:shadow-medium ${
                    selectedMessage === message.id ? 'ring-2 ring-primary' : ''
                  } ${!message.isRead ? 'border-primary/50' : ''}`}
                  onClick={() => setSelectedMessage(message.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={message.senderAvatar} alt={message.sender} />
                        <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-sm font-medium truncate ${!message.isRead ? 'font-bold' : ''}`}>
                            {message.sender}
                          </h3>
                          {!message.isRead && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                        </div>
                        <p className={`text-sm mb-2 truncate ${!message.isRead ? 'font-semibold' : 'text-muted-foreground'}`}>
                          {message.subject}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {getMessageIcon(message.category)}
                            {message.priority === 'high' && <AlertCircle className="h-3 w-3 text-destructive" />}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {formatTimestamp(message.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:col-span-2">
              {selectedMessage ? (
                <Card className="shadow-soft">
                  {(() => {
                    const message = messages.find(m => m.id === selectedMessage);
                    if (!message) return null;

                    return (
                      <>
                        <CardHeader className="border-b border-border">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={message.senderAvatar} alt={message.sender} />
                                <AvatarFallback>{message.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <CardTitle className="text-lg">{message.subject}</CardTitle>
                                <p className="text-sm text-muted-foreground">From: {message.sender}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {new Date(message.timestamp).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {getPriorityBadge(message.priority)}
                              <Button variant="ghost" size="sm">
                                <Pin className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Archive className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="prose max-w-none">
                            <p className="text-foreground leading-relaxed">{message.content}</p>
                          </div>
                          
                          {message.attachments.length > 0 && (
                            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Download className="h-4 w-4" />
                                Attachments
                              </h4>
                              <div className="space-y-2">
                                {message.attachments.map((attachment, index) => (
                                  <div key={index} className="flex items-center justify-between p-2 bg-background rounded border">
                                    <span className="text-sm">{attachment}</span>
                                    <Button variant="ghost" size="sm">
                                      <Download className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
                            <Button variant="educational" size="sm">
                              <Reply className="h-4 w-4 mr-2" />
                              Reply
                            </Button>
                            <Button variant="outline" size="sm">
                              <Forward className="h-4 w-4 mr-2" />
                              Forward
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </div>
                        </CardContent>
                      </>
                    );
                  })()}
                </Card>
              ) : (
                <Card className="shadow-soft">
                  <CardContent className="p-12 text-center">
                    <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-muted-foreground">Select a message to view</h3>
                    <p className="text-sm text-muted-foreground">Choose a message from the list to read its contents</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Announcements Tab */}
        <TabsContent value="announcements" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Announcements</h3>
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="shadow-soft">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {announcement.urgent ? (
                        <AlertCircle className="h-6 w-6 text-destructive mt-1" />
                      ) : (
                        <Bell className="h-6 w-6 text-primary mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{announcement.title}</h4>
                          {announcement.urgent && <Badge variant="destructive">Urgent</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{announcement.content}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(announcement.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              {quickActions.map((action, index) => (
                <Card key={index} className="shadow-soft cursor-pointer hover:shadow-medium transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <action.icon className="h-6 w-6 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{action.label}</h4>
                        <p className="text-sm text-muted-foreground">{action.recipient}</p>
                      </div>
                      <Send className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Compose Tab */}
        <TabsContent value="compose" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Compose New Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">To:</label>
                  <Input placeholder="Select recipient..." className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Priority:</label>
                  <Input placeholder="Normal" className="mt-1" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Subject:</label>
                <Input placeholder="Enter message subject..." className="mt-1" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Message:</label>
                <Textarea 
                  placeholder="Type your message here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="mt-1 min-h-[200px]"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Attach File
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost">Cancel</Button>
                  <Button variant="educational">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
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