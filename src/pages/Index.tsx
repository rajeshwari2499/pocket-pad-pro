import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Properties from "@/components/Properties";
import Tenants from "@/components/Tenants";
import RentCollection from "@/components/RentCollection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "properties":
        return <Properties />;
      case "tenants":
        return <Tenants />;
      case "rent":
        return <RentCollection />;
      case "maintenance":
        return <div className="p-6"><h1 className="text-2xl font-bold">Maintenance - Coming Soon</h1></div>;
      case "reports":
        return <div className="p-6"><h1 className="text-2xl font-bold">Reports - Coming Soon</h1></div>;
      case "documents":
        return <div className="p-6"><h1 className="text-2xl font-bold">Documents - Coming Soon</h1></div>;
      case "settings":
        return <div className="p-6"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
