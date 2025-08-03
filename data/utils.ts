// Utilitários para a página de Ordens de Serviço - Pozstar

export const getStatusIcon = (status: string): string => {
  switch (status) {
    case "Sem ver":
      return "👁️";
    case "Em andamento":
      return "🔄";
    case "Orçamentado":
      return "�";
    case "Aguardando peças":
      return "📦";
    case "Terminado":
      return "✅";
    case "Pago":
      return "�";
    default:
      return "📋";
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "Alta":
      return "text-red-600 dark:text-red-400";
    case "Normal":
      return "text-blue-600 dark:text-blue-400";
    case "Baixa":
      return "text-green-600 dark:text-green-400";
    default:
      return "text-gray-600 dark:text-gray-400";
  }
};
