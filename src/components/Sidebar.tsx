import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Building2, 
  Users, 
  DollarSign, 
  Wrench, 
  FileText, 
  Settings,
  BarChart3
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "properties", label: "Properties", icon: Building2 },
    { id: "tenants", label: "Tenants", icon: Users },
    { id: "rent", label: "Rent Collection", icon: DollarSign },
    { id: "maintenance", label: "Maintenance", icon: Wrench },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-card border-r border-border h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold text-foreground">PropertyHub</h1>
        </div>
      </div>
      
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              activeTab === item.id && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => onTabChange(item.id)}
          >
            <item.icon className="h-4 w-4 mr-3" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;