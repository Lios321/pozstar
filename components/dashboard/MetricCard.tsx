import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  trend: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  darkBgColor: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
  trend,
  icon: Icon,
  accentColor,
  borderColor,
  bgColor,
  darkBgColor,
  color,
}) => {
  return (
    <Card
      aria-label={title}
      className={`bg-white dark:bg-gray-800 shadow-lg border ${borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative`}
      tabIndex={0}
    >
      {/* Accent gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor}`}
      ></div>

      <CardContent className="p-6 relative">
        <div
          className={`${bgColor} ${darkBgColor} rounded-lg p-4 mb-4 transition-all duration-300 group-hover:scale-105`}
        >
          <Icon
            className={`w-8 h-8 ${color} dark:text-white group-hover:scale-110 transition-transform duration-200`}
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {title}
          </span>
        </div>

        <span className="text-3xl font-bold text-gray-900 dark:text-white block mb-2">
          {value}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4 font-medium">
          {description}
        </span>

        <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
          <Activity className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
            {trend}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
