// Layout reutilizável para todo o aplicativo Pozstar
// Next.js 13+ (App Router), React, Tailwind CSS, shadcn/ui, lucide-react, Typescript

"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  ClipboardList,
  User,
  Wallet,
  BarChartHorizontal,
  Menu,
  ChevronLeft,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

// Estilos CSS customizados para animações
const customStyles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  
  .theme-button-glow {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  
  .theme-button-glow:hover {
    box-shadow: 0 0 25px rgba(59, 130, 246, 0.5);
  }
  
  .dark .theme-button-glow {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
  }
  
  .dark .theme-button-glow:hover {
    box-shadow: 0 0 25px rgba(147, 51, 234, 0.5);
  }
  
  .theme-button-system {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
  }
  
  .theme-button-system:hover {
    box-shadow: 0 0 25px rgba(34, 197, 94, 0.5);
  }
`;

// Componente para injetar estilos
function CustomStyles() {
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return null;
}

// Contexto para gerenciar o tema
interface ThemeContextType {
  theme: "light" | "dark" | "system";
  actualTheme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Verificar preferência salva ou usar sistema como padrão
    const savedTheme = localStorage.getItem("pozstar-theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    const initialTheme = savedTheme || "system";
    setTheme(initialTheme);

    // Função para detectar preferência do sistema
    const updateSystemTheme = () => {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      return systemPreference;
    };

    // Determinar tema atual baseado na preferência
    let currentTheme: "light" | "dark";
    if (initialTheme === "system") {
      currentTheme = updateSystemTheme();
    } else {
      currentTheme = initialTheme;
    }

    setActualTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");

    // Listener para mudanças na preferência do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (theme === "system") {
        const newSystemTheme = mediaQuery.matches ? "dark" : "light";
        setActualTheme(newSystemTheme);
        document.documentElement.classList.toggle(
          "dark",
          newSystemTheme === "dark"
        );
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("pozstar-theme", theme);

    let currentTheme: "light" | "dark";
    if (theme === "system") {
      currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      currentTheme = theme;
    }

    setActualTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "system";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, actualTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}

// Itens da sidebar
const sidebarItems = [
  {
    label: "Home",
    icon: Home,
    href: "/dashboard",
    aria: "Ir para Home",
  },
  {
    label: "Ordens de Serviço",
    icon: ClipboardList,
    href: "/os",
    aria: "Ordens de Serviço",
  },
  {
    label: "Clientes",
    icon: User,
    href: "/clientes",
    aria: "Clientes",
  },
  {
    label: "Financeiro",
    icon: Wallet,
    href: "/financeiro",
    aria: "Financeiro",
  },
  {
    label: "Relatórios",
    icon: BarChartHorizontal,
    href: "/relatorios",
    aria: "Relatórios",
  },
];

interface AppLayoutProps {
  children: ReactNode;
  currentPath?: string;
}

function LayoutContent({
  children,
  currentPath = "/dashboard",
}: AppLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { theme, actualTheme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors duration-300">
      {/* Sidebar colapsável e responsiva com tema - sem scroll */}
      <aside
        className={`hidden md:flex flex-col bg-blue-700 dark:bg-gray-800 text-white border-r border-blue-100 dark:border-gray-700 h-screen fixed top-0 left-0 z-20 transition-all duration-300 ${
          sidebarCollapsed ? "w-20" : "w-64"
        }`}
        aria-label="Menu lateral de navegação"
      >
        {/* Header do sidebar com botão de toggle - fixo no topo */}
        <div className="flex-shrink-0 p-4 border-b border-blue-600 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-2 ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              {!sidebarCollapsed && (
                <span className="text-xl font-bold tracking-tight">
                  Pozstar
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="text-white hover:bg-blue-800 dark:hover:bg-gray-700 p-2 rounded-lg flex-shrink-0"
              aria-label={
                sidebarCollapsed ? "Expandir sidebar" : "Colapsar sidebar"
              }
            >
              {sidebarCollapsed ? (
                <Menu className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Navegação do sidebar - área com scroll se necessário */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sidebarItems.map((item, idx) => {
            const isActive = currentPath === item.href;
            return (
              <a
                key={idx}
                href={item.href}
                aria-label={item.aria}
                title={sidebarCollapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-800 dark:bg-gray-700 text-white shadow-lg"
                    : "hover:bg-blue-800 dark:hover:bg-gray-700 focus:bg-blue-900 dark:focus:bg-gray-600 text-blue-100 dark:text-gray-300 hover:text-white"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  sidebarCollapsed ? "justify-center" : ""
                }`}
                tabIndex={0}
              >
                <item.icon
                  className="w-5 h-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {!sidebarCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Botão de alternância de tema - fixo na parte inferior com estilo melhorado */}
        <div className="flex-shrink-0 p-4 border-t border-blue-600 dark:border-gray-700">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className={`group relative text-white hover:bg-blue-800 dark:hover:bg-gray-700 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              sidebarCollapsed ? "w-12 h-12" : "w-full"
            } border border-transparent hover:border-blue-500 dark:hover:border-gray-600 shadow-lg hover:shadow-xl ${
              theme === "system" ? "theme-button-system" : "theme-button-glow"
            }`}
            aria-label="Alternar tema"
            title={sidebarCollapsed ? "Alternar tema" : undefined}
          >
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                {theme === "light" ? (
                  <Sun className="w-5 h-5 animate-spin-slow transition-transform duration-300 group-hover:rotate-12" />
                ) : theme === "dark" ? (
                  <Moon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
                ) : (
                  <Monitor className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                )}
                {/* Efeito de brilho no ícone */}
                <div
                  className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-30 ${
                    theme === "light"
                      ? "bg-gradient-to-r from-yellow-300 to-orange-300"
                      : theme === "dark"
                      ? "bg-gradient-to-r from-blue-300 to-purple-300"
                      : "bg-gradient-to-r from-green-300 to-teal-300"
                  }`}
                ></div>
              </div>
              {!sidebarCollapsed && (
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold leading-none">
                    {theme === "light"
                      ? "Modo Claro"
                      : theme === "dark"
                      ? "Modo Escuro"
                      : "Modo Sistema"}
                  </span>
                  <span className="text-xs text-blue-200 dark:text-gray-400 opacity-80">
                    {theme === "light"
                      ? "Clique para escurecer"
                      : theme === "dark"
                      ? "Clique para sistema"
                      : "Clique para clarear"}
                  </span>
                </div>
              )}
            </div>

            {/* Gradiente de fundo animado */}
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                theme === "light"
                  ? "from-yellow-400 via-orange-400 to-red-400"
                  : theme === "dark"
                  ? "from-blue-400 via-purple-400 to-indigo-400"
                  : "from-green-400 via-teal-400 to-cyan-400"
              }`}
            ></div>

            {/* Efeito ripple */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 transform scale-0 group-active:scale-100 transition-transform duration-150 rounded-xl"></div>
            </div>
          </Button>
        </div>
      </aside>

      {/* Conteúdo principal com margem para sidebar fixo */}
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-64"
        } overflow-x-hidden`}
      >
        {children}
      </main>
    </div>
  );
}

export default function AppLayout({ children, currentPath }: AppLayoutProps) {
  return (
    <ThemeProvider>
      <CustomStyles />
      <LayoutContent currentPath={currentPath}>{children}</LayoutContent>
    </ThemeProvider>
  );
}
