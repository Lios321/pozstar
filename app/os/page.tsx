// Página de Ordens de Serviço - Pozstar
// Next.js 13+ (App Router), React, Tailwind CSS, shadcn/ui, lucide-react, Typescript

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AppLayout from "../../components/layout/AppLayout";
import {
  StatusFilter,
  SearchBar,
  Pagination,
  OrdersTable,
} from "@/components/orders";
import { orders, ITEMS_PER_PAGE, type Order, type OrderStatus } from "@/lib";

function OrdersPageContent() {
  const [filter, setFilter] = useState<OrderStatus>("Todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);

  // Ordenar por ID por padrão (decrescente)
  const sortedOrders = [...orders].sort((a, b) => {
    const idA = parseInt(a.id);
    const idB = parseInt(b.id);
    return sortOrder === "desc" ? idB - idA : idA - idB;
  });

  const filteredOrders = sortedOrders.filter((order) => {
    const matchesFilter = filter === "Todas" || order.status === filter;
    const matchesSearch =
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  // Paginação
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset da página quando filtros mudam
  const handleFilterChange = (newFilter: OrderStatus) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSortToggle = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 py-8 flex flex-col gap-8">
      {/* Cabeçalho */}
      <header className="max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border dark:border-gray-700 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-sm">
                Ordens de Serviço
              </h1>
              <p className="text-blue-100 dark:text-gray-300 text-lg">
                Gerencie todas as ordens de serviço da assistência técnica
              </p>
            </div>
            <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 px-6 py-3 text-lg font-semibold">
              <Plus className="w-5 h-5 mr-2" />
              Nova OS
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full">
        {/* Barra de controles */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700 p-8 mb-8 relative overflow-hidden">
          {/* Gradiente sutil no fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/30 dark:from-gray-900/20 dark:via-transparent dark:to-gray-800/20"></div>

          <div className="relative z-10">
            {/* Título da seção */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Filtros e Pesquisa
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Use os filtros abaixo para encontrar rapidamente as ordens de
                serviço
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Filtros */}
              <div className="lg:flex-1">
                <StatusFilter
                  selectedStatus={filter}
                  onStatusChange={handleFilterChange}
                />
              </div>

              {/* Pesquisa */}
              <div className="lg:flex-1 lg:max-w-md">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <div className="mb-0">
          <OrdersTable
            orders={paginatedOrders}
            sortOrder={sortOrder}
            onSortChange={handleSortToggle}
          />

          {/* Paginação */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <AppLayout currentPath="/os">
      <OrdersPageContent />
    </AppLayout>
  );
}
