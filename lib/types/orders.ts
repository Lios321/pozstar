// Tipos para Ordens de Serviço - Pozstar
// Definições de tipos TypeScript para o sistema de OS

export interface Order {
  id: string;
  title: string;
  client: string;
  phone: string;
  brand: string;
  model: string;
  status: string;
  statusColor: string;
  description: string;
  value: string;
  date: string;
  priority: string;
}

export type OrderStatus =
  | "Todas"
  | "Sem ver"
  | "Em andamento"
  | "Orçamentado"
  | "Aguardando peças"
  | "Terminado"
  | "Pago";

export type OrderPriority = "baixa" | "media" | "alta";

export interface FilterOption {
  name: OrderStatus;
  icon: string;
}
