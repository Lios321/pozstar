// Componente da tabela de Ordens de Serviço - Pozstar
// Tabela principal com dados das ordens

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Eye,
  Edit,
  Trash2,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Order } from "@/lib/types/orders";
import {
  getPriorityBadgeColor,
  formatDate,
  formatPhone,
} from "@/lib/utils/orders";

interface OrdersTableProps {
  orders: Order[];
  sortOrder: "asc" | "desc";
  onSortChange: () => void;
}

export function OrdersTable({
  orders,
  sortOrder,
  onSortChange,
}: OrdersTableProps) {
  const getSortIcon = () => {
    if (sortOrder === "desc") {
      return <ArrowDown className="w-4 h-4" />;
    } else {
      return <ArrowUp className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-800/50">
            <TableHead className="w-[80px]">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-auto font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                onClick={onSortChange}
              >
                ID
                {getSortIcon()}
              </Button>
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Cliente
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Equipamento
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Prioridade
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Data
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
              Valor
            </TableHead>
            <TableHead className="font-semibold text-gray-700 dark:text-gray-300 text-center">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <TableCell className="font-medium text-blue-600 dark:text-blue-400">
                {order.id}
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {order.client}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatPhone(order.phone)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {order.brand} {order.model}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {order.description}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${
                    order.statusColor === "gray"
                      ? "border-gray-300 text-gray-700 bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800"
                      : order.statusColor === "blue"
                      ? "border-blue-300 text-blue-700 bg-blue-50 dark:border-blue-600 dark:text-blue-300 dark:bg-blue-900/20"
                      : order.statusColor === "yellow"
                      ? "border-yellow-300 text-yellow-700 bg-yellow-50 dark:border-yellow-600 dark:text-yellow-300 dark:bg-yellow-900/20"
                      : order.statusColor === "orange"
                      ? "border-orange-300 text-orange-700 bg-orange-50 dark:border-orange-600 dark:text-orange-300 dark:bg-orange-900/20"
                      : order.statusColor === "green"
                      ? "border-green-300 text-green-700 bg-green-50 dark:border-green-600 dark:text-green-300 dark:bg-green-900/20"
                      : "border-emerald-300 text-emerald-700 bg-emerald-50 dark:border-emerald-600 dark:text-emerald-300 dark:bg-emerald-900/20"
                  } font-medium`}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${getPriorityBadgeColor(
                    order.priority
                  )} font-medium capitalize`}
                >
                  {order.priority}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-600 dark:text-gray-400">
                {formatDate(order.date)}
              </TableCell>
              <TableCell className="font-semibold text-gray-900 dark:text-gray-100">
                {order.value}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
