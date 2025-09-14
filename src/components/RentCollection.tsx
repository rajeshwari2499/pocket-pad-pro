import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, DollarSign, Search, AlertCircle, CheckCircle, Clock } from "lucide-react";

const RentCollection = () => {
  const rentPayments = [
    {
      id: "1",
      tenant: "Sarah Johnson",
      property: "Oak Street Apartment 2B",
      amount: 1200,
      dueDate: "2024-01-01",
      paidDate: "2023-12-28",
      status: "paid",
      avatar: "/placeholder.svg",
      lateFee: 0
    },
    {
      id: "2",
      tenant: "Mike Chen", 
      property: "Pine Avenue House",
      amount: 1800,
      dueDate: "2024-01-01",
      paidDate: null,
      status: "overdue",
      avatar: "/placeholder.svg",
      lateFee: 50
    },
    {
      id: "3",
      tenant: "Emma Wilson",
      property: "Maple Drive Condo 3A", 
      amount: 1450,
      dueDate: "2024-01-15",
      paidDate: null,
      status: "pending",
      avatar: "/placeholder.svg",
      lateFee: 0
    },
    {
      id: "4",
      tenant: "David Brown",
      property: "Cedar Lane Duplex",
      amount: 1600,
      dueDate: "2024-01-01",
      paidDate: "2024-01-01",
      status: "paid",
      avatar: "/placeholder.svg", 
      lateFee: 0
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-success text-success-foreground";
      case "overdue": 
        return "bg-destructive text-destructive-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short', 
      day: 'numeric'
    });
  };

  const totalDue = rentPayments
    .filter(p => p.status !== "paid")
    .reduce((sum, p) => sum + p.amount + p.lateFee, 0);

  const totalCollected = rentPayments
    .filter(p => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const overdueCount = rentPayments.filter(p => p.status === "overdue").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Rent Collection</h1>
        <p className="text-muted-foreground">Track and manage rent payments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Collected
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">${totalCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Outstanding
            </CardTitle>
            <DollarSign className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">${totalDue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Due & overdue</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Overdue Payments
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{overdueCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Require attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search payments..."
          className="pl-10"
        />
      </div>

      {/* Payments List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rentPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={payment.avatar} alt={payment.tenant} />
                    <AvatarFallback>
                      {payment.tenant.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{payment.tenant}</p>
                    <p className="text-sm text-muted-foreground">{payment.property}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Due: {formatDate(payment.dueDate)}
                      </span>
                      {payment.paidDate && (
                        <span className="text-xs text-muted-foreground">
                          • Paid: {formatDate(payment.paidDate)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">
                      ${payment.amount + payment.lateFee}
                    </span>
                    {payment.lateFee > 0 && (
                      <span className="text-xs text-destructive">
                        (+${payment.lateFee} late fee)
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    {getStatusIcon(payment.status)}
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </div>
                  {payment.status !== "paid" && (
                    <Button size="sm" variant="outline" className="mt-2">
                      Record Payment
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentCollection;