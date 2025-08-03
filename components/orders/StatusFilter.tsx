// Componente de filtro dropdown para Ordens de Serviço - Pozstar
// Dropdown para filtrar ordens por status

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter } from "lucide-react";
import { FILTER_OPTIONS } from "@/lib/data/constants";
import { OrderStatus } from "@/lib/types/orders";
import { getStatusIcon } from "@/lib/utils/orders";

interface StatusFilterProps {
  selectedStatus: OrderStatus;
  onStatusChange: (status: OrderStatus) => void;
}

export function StatusFilter({
  selectedStatus,
  onStatusChange,
}: StatusFilterProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg">
          <Filter className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Filtrar por Status
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Visualize ordens por categoria
          </p>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between gap-3 min-w-[280px] h-14 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium group"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {getStatusIcon(selectedStatus)}
              </span>
              <span className="text-gray-900 dark:text-gray-100">
                {selectedStatus}
              </span>
            </span>
            <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-emerald-600 transition-colors duration-200" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-80 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-2"
        >
          {FILTER_OPTIONS.map(({ name, icon }) => (
            <DropdownMenuItem
              key={name}
              onClick={() => onStatusChange(name)}
              className="flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                {icon}
              </span>
              <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                {name}
              </span>
              {selectedStatus === name && (
                <span className="ml-auto text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                  ✓
                </span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
