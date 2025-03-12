import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { IconType } from "@/lib/types";

interface FeatureCardProps {
  icon: IconType;
  iconBgColor: string;
  title: string;
  description: string;
}

const FeatureCard = ({ 
  icon,
  iconBgColor,
  title,
  description 
}: FeatureCardProps) => {
  // Dynamically get the icon component from Lucide icons
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Star;
  
  return (
    <Card className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className={`flex items-center justify-center h-12 w-12 rounded-md ${iconBgColor} text-white mb-4`}>
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
