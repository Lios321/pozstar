import React from "react";
import { Clock } from "lucide-react";

interface RecentActivityItemProps {
  title: string;
  description: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  title,
  description,
  time,
  icon: Icon,
  color,
  bgColor,
}) => {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-pointer">
      <div className={`p-2 rounded-lg ${bgColor}`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
          {description}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <Clock className="w-3 h-3 text-gray-400" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityItem;
