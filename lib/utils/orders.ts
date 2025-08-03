// Utilitários para Ordens de Serviço - Pozstar
// Funções auxiliares para formatação e exibição

import { OrderStatus, OrderPriority } from "../types/orders";

export const getStatusIcon = (status: OrderStatus): string => {
  switch (status) {
    case "Sem ver":
      return "👁️";
    case "Em andamento":
      return "🔄";
    case "Orçamentado":
      return "💰";
    case "Aguardando peças":
      return "📦";
    case "Terminado":
      return "✅";
    case "Pago":
      return "💳";
    default:
      return "📋";
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "alta":
      return "text-red-600 dark:text-red-400";
    case "media":
      return "text-yellow-600 dark:text-yellow-400";
    case "baixa":
      return "text-green-600 dark:text-green-400";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};

export const getPriorityBadgeColor = (priority: string): string => {
  switch (priority) {
    case "alta":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    case "media":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "baixa":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
};

export const formatCurrency = (value: string): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parseFloat(value.replace(/[R$\s.,]/g, "")) / 100);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("pt-BR");
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};
