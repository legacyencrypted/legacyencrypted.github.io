import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";
import { IconType } from "@/lib/types";

interface HowItWorksStepProps {
  number: number;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: IconType;
  color: string;
  isEven: boolean;
}

const HowItWorksStep = ({
  number,
  title,
  description,
  bulletPoints,
  icon,
  color,
  isEven
}: HowItWorksStepProps) => {
  // Dynamically get the icon component from Lucide icons
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Star;
  
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center mt-12">
      <div className={`${isEven ? "" : "lg:order-2"} mb-6 lg:mb-0`}>
        <div className={`${isEven ? "lg:pr-8" : "lg:pl-8"} relative`}>
          <div className={`hidden lg:block absolute ${isEven ? "-right-4" : "-left-4"} top-1/2 transform -translate-y-1/2 w-8 h-8 ${color} rounded-full border-4 border-white`}></div>
          <h3 className="text-2xl font-bold text-dark mb-4">{number}. {title}</h3>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
          <ul className="text-gray-600 space-y-2">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className={`h-5 w-5 ${color} mr-2 mt-0.5`} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <Card className={`${isEven ? "lg:pl-8" : "lg:pr-8"} p-6 bg-white rounded-lg shadow-md border border-gray-100`}>
          <CardContent className="p-0 flex flex-col items-center">
            <IconComponent className="w-16 h-16 text-primary mx-auto mb-4" />
            <div className="mt-4 flex flex-col items-center justify-center">
              <div className="bg-gray-100 rounded-lg w-full max-w-sm p-4">
                {number === 1 && (
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                    <div className="h-10 bg-primary rounded"></div>
                  </div>
                )}
                
                {number === 2 && (
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-secondary rounded-sm mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-300 rounded-sm mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="h-1 bg-gray-200 rounded my-2"></div>
                    <div className="h-5 bg-gray-200 rounded w-full"></div>
                    <div className="h-10 bg-secondary rounded"></div>
                  </div>
                )}
                
                {number === 3 && (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                    </div>
                    <div className="h-40 bg-white rounded p-2">
                      <div className="flex items-end h-full space-x-2">
                        <div className="w-1/5 bg-primary h-1/3 rounded-t"></div>
                        <div className="w-1/5 bg-primary h-2/3 rounded-t"></div>
                        <div className="w-1/5 bg-primary h-1/2 rounded-t"></div>
                        <div className="w-1/5 bg-primary h-full rounded-t"></div>
                        <div className="w-1/5 bg-primary h-3/4 rounded-t"></div>
                      </div>
                    </div>
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorksStep;
