import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  DollarSign, 
  CreditCard, 
  Calendar, 
  Receipt, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Smartphone,
  Banknote,
  Building,
  History,
  Calculator
} from "lucide-react";

export default function FeeStatus() {
  const feeData = {
    currentTerm: "Term 2, 2024",
    totalTermFees: 850000,
    paidAmount: 600000,
    pendingAmount: 250000,
    dueDate: "2024-03-15",
    status: "Partial",
    paymentPlan: true,
    nextInstallment: 125000,
    nextDueDate: "2024-02-28"
  };

  const feeBreakdown = [
    { item: "Tuition Fees", amount: 500000, paid: 500000, status: "paid" },
    { item: "Lunch Program", amount: 150000, paid: 100000, status: "partial" },
    { item: "Transport", amount: 100000, paid: 0, status: "pending" },
    { item: "Books & Materials", amount: 75000, paid: 0, status: "pending" },
    { item: "Sports & Activities", amount: 25000, paid: 0, status: "pending" }
  ];

  const paymentHistory = [
    {
      date: "2024-01-05",
      amount: 300000,
      method: "Bank Transfer",
      reference: "BT2024001",
      status: "completed",
      description: "Term 2 Partial Payment"
    },
    {
      date: "2024-02-01",
      amount: 300000,
      method: "Mobile Money",
      reference: "MM2024015",
      status: "completed",
      description: "Term 2 Installment"
    },
    {
      date: "2023-12-15",
      amount: 800000,
      method: "Cash",
      reference: "CSH2023089",
      status: "completed",
      description: "Term 1 Full Payment"
    },
    {
      date: "2023-09-10",
      amount: 750000,
      method: "Bank Transfer",
      reference: "BT2023045",
      status: "completed",
      description: "Term 3 Full Payment"
    }
  ];

  const paymentMethods = [
    {
      name: "Mobile Money",
      icon: Smartphone,
      available: true,
      description: "MTN Mobile Money, Airtel Money",
      processingTime: "Instant"
    },
    {
      name: "Bank Transfer",
      icon: Building,
      available: true,
      description: "Direct bank deposit",
      processingTime: "1-2 business days"
    },
    {
      name: "Cash Payment",
      icon: Banknote,
      available: true,
      description: "Pay at school office",
      processingTime: "Instant"
    },
    {
      name: "Credit Card",
      icon: CreditCard,
      available: false,
      description: "Coming soon",
      processingTime: "Instant"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "text-success";
      case "partial": return "text-warning";
      case "pending": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid": return <Badge variant="default" className="bg-success">Paid</Badge>;
      case "partial": return <Badge variant="secondary" className="bg-warning text-warning-foreground">Partial</Badge>;
      case "pending": return <Badge variant="destructive">Pending</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const paymentPercentage = (feeData.paidAmount / feeData.totalTermFees) * 100;
  const daysUntilDue = Math.ceil((new Date(feeData.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fee Status</h1>
          <p className="text-muted-foreground">Manage your child's school fees and payments</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Statement
          </Button>
          <Button variant="educational" size="sm">
            <DollarSign className="h-4 w-4 mr-2" />
            Make Payment
          </Button>
        </div>
      </div>

      {/* Fee Status Alert */}
      {daysUntilDue <= 7 && feeData.pendingAmount > 0 && (
        <Alert className="border-warning bg-warning/10">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertDescription className="text-warning-foreground">
            <strong>Payment Due Soon:</strong> UGX {feeData.pendingAmount.toLocaleString()} is due in {daysUntilDue} days ({feeData.dueDate}).
          </AlertDescription>
        </Alert>
      )}

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">UGX {feeData.totalTermFees.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">{feeData.currentTerm}</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Amount Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">UGX {feeData.paidAmount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">{paymentPercentage.toFixed(1)}% completed</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Balance Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">UGX {feeData.pendingAmount.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Due: {feeData.dueDate}</p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Installment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">UGX {feeData.nextInstallment.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Due: {feeData.nextDueDate}</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment Progress */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Payment Progress - {feeData.currentTerm}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Overall Progress</span>
              <span className="text-sm font-medium">{paymentPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={paymentPercentage} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>UGX {feeData.paidAmount.toLocaleString()} paid</span>
              <span>UGX {feeData.pendingAmount.toLocaleString()} remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="breakdown" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="breakdown">Fee Breakdown</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="payment">Make Payment</TabsTrigger>
        </TabsList>

        {/* Fee Breakdown */}
        <TabsContent value="breakdown" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5 text-primary" />
                Detailed Fee Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeBreakdown.map((item, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{item.item}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">
                          UGX {item.amount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Paid: UGX {item.paid.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <Progress value={(item.paid / item.amount) * 100} className="h-2 mb-2" />
                    
                    <div className="flex justify-between text-sm">
                      <span className={getStatusColor(item.status)}>
                        {item.status === "paid" ? "Fully Paid" : 
                         item.status === "partial" ? `UGX ${(item.amount - item.paid).toLocaleString()} remaining` :
                         "Payment Pending"}
                      </span>
                      <span className="text-muted-foreground">
                        {((item.paid / item.amount) * 100).toFixed(1)}% complete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment History */}
        <TabsContent value="history" className="space-y-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Payment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-success" />
                        </div>
                        <div>
                          <h3 className="font-semibold">UGX {payment.amount.toLocaleString()}</h3>
                          <p className="text-sm text-muted-foreground">{payment.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{payment.reference}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">{payment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Payment Method: {payment.method}</span>
                      <span>•</span>
                      <span className="text-success">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Make Payment */}
        <TabsContent value="payment" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className={`border border-border rounded-lg p-4 ${method.available ? 'cursor-pointer hover:bg-muted/50' : 'opacity-50'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <method.icon className="h-6 w-6 text-primary" />
                        <div className="flex-1">
                          <h3 className="font-semibold">{method.name}</h3>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                        {method.available ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : (
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Processing Time: {method.processingTime}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Quick Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="educational" className="w-full justify-between text-left h-auto p-4">
                    <div>
                      <div className="font-semibold">Pay Full Balance</div>
                      <div className="text-sm opacity-90">UGX {feeData.pendingAmount.toLocaleString()}</div>
                    </div>
                    <DollarSign className="h-5 w-5" />
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-between text-left h-auto p-4">
                    <div>
                      <div className="font-semibold">Pay Next Installment</div>
                      <div className="text-sm text-muted-foreground">UGX {feeData.nextInstallment.toLocaleString()}</div>
                    </div>
                    <Calendar className="h-5 w-5" />
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-between text-left h-auto p-4">
                    <div>
                      <div className="font-semibold">Custom Amount</div>
                      <div className="text-sm text-muted-foreground">Enter your preferred amount</div>
                    </div>
                    <Receipt className="h-5 w-5" />
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">Payment Information</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• All payments are processed securely</p>
                      <p>• Mobile money payments are instant</p>
                      <p>• Bank transfers may take 1-2 business days</p>
                      <p>• Keep your receipt for records</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Plan Information */}
          {feeData.paymentPlan && (
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Payment Plan Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border border-success/20 bg-success/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="font-semibold text-success">Installment 1</span>
                    </div>
                    <div className="text-lg font-bold">UGX 300,000</div>
                    <div className="text-sm text-muted-foreground">Paid on Jan 5, 2024</div>
                  </div>
                  
                  <div className="p-4 border border-success/20 bg-success/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="font-semibold text-success">Installment 2</span>
                    </div>
                    <div className="text-lg font-bold">UGX 300,000</div>
                    <div className="text-sm text-muted-foreground">Paid on Feb 1, 2024</div>
                  </div>
                  
                  <div className="p-4 border border-warning/20 bg-warning/5 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-warning" />
                      <span className="font-semibold text-warning">Installment 3</span>
                    </div>
                    <div className="text-lg font-bold">UGX 250,000</div>
                    <div className="text-sm text-muted-foreground">Due: {feeData.dueDate}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}