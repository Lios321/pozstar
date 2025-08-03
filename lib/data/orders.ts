// Dados mock para Ordens de Serviço - Pozstar
// Dados estáticos para demonstração

import { Order } from "../types/orders";

const brands = [
  "Samsung",
  "Dell",
  "HP",
  "Lenovo",
  "Apple",
  "Asus",
  "Acer",
  "Sony",
  "LG",
  "Motorola",
  "Xiaomi",
  "Huawei",
];

const models = {
  Samsung: [
    "Galaxy S23",
    "Galaxy S22",
    "Galaxy A54",
    "Galaxy Note 20",
    "Galaxy Tab S8",
  ],
  Dell: [
    "Inspiron 15 3000",
    "XPS 13",
    "Latitude 7420",
    "Vostro 3500",
    "OptiPlex 7090",
  ],
  HP: [
    "EliteBook 840",
    "Pavilion 15",
    "DeskJet 3776",
    "LaserJet Pro",
    "Omen 15",
  ],
  Lenovo: [
    "IdeaPad 3i",
    "ThinkPad X1",
    "Legion 5",
    "Yoga Slim 7",
    "IdeaCentre",
  ],
  Apple: ["MacBook Pro", "MacBook Air", "iMac", "iPhone 14", "iPad Pro"],
  Asus: ["VivoBook 15", "ROG Strix", "ZenBook 14", "TUF Gaming", "ExpertBook"],
  Acer: [
    "Aspire 5",
    "Swift 3",
    "Nitro 5",
    "Predator Helios",
    "Chromebook Spin",
  ],
  Sony: [
    "Vaio FE14",
    "PlayStation 5",
    "WH-1000XM4",
    "Alpha A7 III",
    "Bravia XR",
  ],
  LG: ["Gram 17", "UltraFine 4K", "Wing 5G", "OLED C1", "Soundbar SN8YG"],
  Motorola: ["Moto G52", "Edge 30", "One Fusion", "Razr 5G", "Defy 2021"],
  Xiaomi: ["Redmi Note 11", "Mi 11T", "Poco X4", "Mi Band 7", "Mi TV Stick"],
  Huawei: [
    "MateBook D15",
    "P50 Pro",
    "Watch GT 3",
    "FreeBuds Pro",
    "MatePad Pro",
  ],
};

const clients = [
  "João Silva",
  "Maria Santos",
  "Carlos Oliveira",
  "Ana Costa",
  "Pedro Ferreira",
  "Lucia Rodrigues",
  "Rafael Almeida",
  "Fernanda Lima",
  "Bruno Martins",
  "Camila Souza",
  "Diego Pereira",
  "Juliana Barbosa",
  "Thiago Nascimento",
  "Patrícia Moreira",
  "André Carvalho",
  "Gabriela Ramos",
  "Leonardo Torres",
  "Beatriz Gomes",
  "Rodrigo Cardoso",
  "Larissa Fernandes",
];

const statuses = [
  "Sem ver",
  "Em andamento",
  "Orçamentado",
  "Aguardando peças",
  "Terminado",
  "Pago",
];

const priorities = ["baixa", "media", "alta"];

const problems = [
  "Tela quebrada",
  "Não liga",
  "Lentidão no sistema",
  "Bateria viciada",
  "Problemas no carregamento",
  "Teclado com defeito",
  "Alto falantes não funcionam",
  "Câmera não funciona",
  "Wi-Fi não conecta",
  "Bluetooth com problemas",
  "Travando constantemente",
  "Aquecimento excessivo",
  "Erro no sistema operacional",
  "Vírus detectado",
  "Problemas na impressão",
  "Scanner não responde",
  "HD com problemas",
  "Memória RAM insuficiente",
  "Placa mãe queimada",
  "Fonte com defeito",
];

// Função para gerar dados determinísticos
const generateDeterministicData = (index: number): Order => {
  const brandIndex = index % brands.length;
  const brand = brands[brandIndex];
  const modelIndex = index % models[brand as keyof typeof models].length;
  const model = models[brand as keyof typeof models][modelIndex];
  const clientIndex = index % clients.length;
  const client = clients[clientIndex];
  const statusIndex = index % statuses.length;
  const status = statuses[statusIndex];
  const priorityIndex = index % priorities.length;
  const priority = priorities[priorityIndex];
  const problemIndex = index % problems.length;
  const problem = problems[problemIndex];

  // Geração determinística de valores
  const baseValue = 150 + ((index * 37) % 800); // Valores entre R$150-950
  const value = `R$ ${baseValue},00`;

  // Geração determinística de datas (últimos 30 dias)
  const daysAgo = index % 30;
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);

  // Geração determinística de telefones
  const phoneBase = 11900000000 + ((index * 123) % 99999999);
  const phone = phoneBase
    .toString()
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return {
    id: (1001 + index).toString(),
    title: `Reparo de ${brand} ${model}`,
    client,
    phone,
    brand,
    model,
    status,
    statusColor: getStatusColor(status),
    description: problem,
    value,
    date: date.toISOString().split("T")[0],
    priority,
  };
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "Sem ver":
      return "gray";
    case "Em andamento":
      return "blue";
    case "Orçamentado":
      return "yellow";
    case "Aguardando peças":
      return "orange";
    case "Terminado":
      return "green";
    case "Pago":
      return "emerald";
    default:
      return "gray";
  }
};

// Gerar 60 ordens de serviço determinísticas
export const orders: Order[] = Array.from({ length: 60 }, (_, index) =>
  generateDeterministicData(index)
);
