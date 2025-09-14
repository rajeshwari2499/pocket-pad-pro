import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Users, DollarSign } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    address: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    rent: number;
    tenants: number;
    maxTenants: number;
    status: "occupied" | "vacant" | "maintenance";
    image?: string;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "occupied":
        return "bg-success text-success-foreground";
      case "vacant":
        return "bg-warning text-warning-foreground";
      case "maintenance":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {property.image && (
        <div className="h-48 bg-muted bg-cover bg-center" 
             style={{ backgroundImage: `url(${property.image})` }} />
      )}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{property.name}</CardTitle>
          <Badge className={getStatusColor(property.status)}>
            {property.status}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {property.address}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-2 text-primary" />
            {property.bedrooms} bedrooms
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-2 text-primary" />
            {property.bathrooms} bathrooms
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-primary" />
            {property.tenants}/{property.maxTenants} tenants
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            ${property.rent}/month
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Manage
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;