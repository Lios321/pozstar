// Constantes para filtros - Pozstar
// Opções de filtro e configurações

import { FilterOption } from "../types/orders";

export const FILTER_OPTIONS: FilterOption[] = [
  { name: "Todas", icon: "📋" },
  { name: "Sem ver", icon: "👁️" },
  { name: "Em andamento", icon: "🔄" },
  { name: "Orçamentado", icon: "💰" },
  { name: "Aguardando peças", icon: "📦" },
  { name: "Terminado", icon: "✅" },
  { name: "Pago", icon: "💳" },
];

export const ITEMS_PER_PAGE = 10;

export const SORT_OPTIONS = {
  ID_ASC: "id_asc",
  ID_DESC: "id_desc",
  DATE_ASC: "date_asc",
  DATE_DESC: "date_desc",
  CLIENT_ASC: "client_asc",
  CLIENT_DESC: "client_desc",
} as const;
