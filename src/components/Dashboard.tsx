import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Users, DollarSign, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Properties",
      value: "12",
      icon: Home,
      change: "+2 this month",
      changeType: "positive"
    },
    {
      title: "Active Tenants", 
      value: "28",
      icon: Users,
      change: "+4 this month",
      changeType: "positive"
    },
    {
      title: "Monthly Revenue",
      value: "$24,500",
      icon: DollarSign,
      change: "+12% from last month",
      changeType: "positive"
    },
    {
      title: "Pending Issues",
      value: "3",
      icon: AlertTriangle,
      change: "-2 from last week",
      changeType: "positive"
    }
  ];

  const recentActivity = [
    {
      tenant: "Sarah Johnson",
      property: "Oak Street Apartment 2B",
      action: "Rent paid",
      amount: "$1,200",
      status: "paid",
      date: "Today"
    },
    {
      tenant: "Mike Chen",
      property: "Pine Avenue House",
      action: "Maintenance request",
      amount: null,
      status: "pending",
      date: "Yesterday"
    },
    {
      tenant: "Emma Wilson",
      property: "Maple Drive Condo 3A",
      action: "Lease renewal",
      amount: "$1,450",
      status: "pending",
      date: "2 days ago"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your properties.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-success mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{activity.tenant}</p>
                  <p className="text-sm text-muted-foreground">{activity.property}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <div className="text-right space-y-1">
                  {activity.amount && (
                    <p className="font-medium text-foreground">{activity.amount}</p>
                  )}
                  <Badge 
                    variant={activity.status === "paid" ? "default" : "secondary"}
                    className={activity.status === "paid" ? "bg-success text-success-foreground" : ""}
                  >
                    {activity.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;