import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PropertyCard from "./PropertyCard";
import { Plus, Search, Filter } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: "1",
      name: "Oak Street Apartments",
      address: "123 Oak Street, Downtown",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      rent: 1200,
      tenants: 1,
      maxTenants: 1,
      status: "occupied" as const,
      image: "/placeholder.svg"
    },
    {
      id: "2", 
      name: "Pine Avenue House",
      address: "456 Pine Avenue, Suburbs",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      rent: 1800,
      tenants: 1,
      maxTenants: 1,
      status: "occupied" as const,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      name: "Maple Drive Condo",
      address: "789 Maple Drive, Uptown",
      type: "Condo",
      bedrooms: 1,
      bathrooms: 1,
      rent: 950,
      tenants: 0,
      maxTenants: 1,
      status: "vacant" as const,
      image: "/placeholder.svg"
    },
    {
      id: "4",
      name: "Elm Street Duplex",
      address: "321 Elm Street, Midtown",
      type: "Duplex",
      bedrooms: 2,
      bathrooms: 1.5,
      rent: 1400,
      tenants: 0,
      maxTenants: 2,
      status: "maintenance" as const,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Properties</h1>
          <p className="text-muted-foreground">Manage your rental properties</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Properties</SelectItem>
            <SelectItem value="occupied">Occupied</SelectItem>
            <SelectItem value="vacant">Vacant</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="duplex">Duplex</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Properties Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;