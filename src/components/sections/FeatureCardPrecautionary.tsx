import { CheckCircle, ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

export const FeatureCardPrecautionary = ({
  icon,
  title,
  text,
  features,
}: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-zinc-200/40 to-zinc-200/20 overflow-hidden h-full">
      <CardContent className="p-8 h-full flex flex-col">
        <div className="flex-1">
          <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <div className="text-white">{icon}</div>
          </div>
          <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
          <div
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: text }}
          />

          {features && features.length > 0 && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-6 pt-4">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col gap-2 text-sm text-gray-700"
                  >
                    <div className="flex items-center text-primary font-bold">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {feature.title}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {features && features.length > 0 && (
          <div className="mt-auto pt-4">
            <button
              onClick={handleToggleExpanded}
              className="w-full flex items-center justify-center gap-2 text-primary transition-colors hover:underline"
            >
              {isExpanded ? "Ver menos" : "Saiba mais"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
