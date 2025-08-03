// Dados das Ordens de Serviço - Pozstar
// Arquivo de dados estáticos para evitar problemas de hidratação

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
  "Juliana Souza",
  "Diego Pereira",
  "Amanda Barbosa",
  "Gustavo Nascimento",
  "Camila Rocha",
  "Thiago Mendes",
  "Empresa ABC Ltda",
  "Tech Solutions",
  "Inovação Digital",
  "Startup XYZ",
  "Consultoria Alpha",
];

const services = [
  "Reparo de tela",
  "Troca de bateria",
  "Formatação",
  "Instalação de software",
  "Manutenção preventiva",
  "Limpeza interna",
  "Atualização de sistema",
  "Backup de dados",
  "Configuração de rede",
  "Instalação de antivírus",
  "Reparo de placa-mãe",
  "Troca de HD/SSD",
  "Calibração de tela",
  "Substituição de teclado",
  "Reparo de fonte",
  "Otimização de performance",
];

const statuses = [
  "Sem ver",
  "Em andamento",
  "Orçamentado",
  "Aguardando peças",
  "Terminado",
  "Pago",
];
const priorities = ["Alta", "Normal", "Baixa"];
const statusColors = [
  "bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400", // Sem ver
  "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", // Em andamento
  "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400", // Orçamentado
  "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400", // Aguardando peças
  "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", // Terminado
  "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400", // Pago
];

// Gerar dados determinísticos
export const orders: Order[] = Array.from({ length: 60 }, (_, index) => {
  const id = (1234 + index).toString();

  const selectedBrand = brands[index % brands.length];
  const selectedModel =
    models[selectedBrand as keyof typeof models][
      index % models[selectedBrand as keyof typeof models].length
    ];
  const selectedService = services[index % services.length];

  // Dados determinísticos baseados no índice
  const phoneBase = 8000 + ((index * 37) % 2000);
  const phoneSuffix = 1000 + ((index * 73) % 9000);

  // Gerar valores determinísticos
  const valueBase = 80 + ((index * 47) % 1920);
  const valueDecimal = (index * 13) % 100;

  // Gerar datas determinísticas (últimos 6 meses)
  const dayOffset = (index * 11) % 180; // 6 meses = ~180 dias
  const baseDate = new Date(2025, 2, 1); // Março 2025
  const orderDate = new Date(baseDate);
  orderDate.setDate(baseDate.getDate() + dayOffset);

  return {
    id,
    title: `${selectedService} - ${selectedBrand} ${selectedModel}`,
    client: clients[index % clients.length],
    phone: `(11) 9${phoneBase.toString()}-${phoneSuffix.toString()}`,
    brand: selectedBrand,
    model: selectedModel,
    status: statuses[index % statuses.length],
    statusColor: statusColors[index % statusColors.length],
    description: `${selectedService} em ${selectedBrand} ${selectedModel}`,
    value: `R$ ${valueBase},${valueDecimal.toString().padStart(2, "0")}`,
    date: orderDate.toLocaleDateString("pt-BR"),
    priority: priorities[index % priorities.length],
  };
});
