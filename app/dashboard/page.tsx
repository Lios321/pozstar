// Dashboard Pozstar - Página inicial moderna e responsiva
// Next.js 13+ (App Router), React, Tailwind CSS, shadcn/ui, lucide-react, Typescript
// Mock de dados, layout acessível, comentários explicativos

"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  CheckCircle2,
  DollarSign,
  Users,
  Plus,
  UserPlus,
  FileText,
  BarChart3,
  Activity,
  AlertCircle,
  Calendar,
  Clock,
} from "lucide-react";
import AppLayout from "../../components/layout/AppLayout";

import Link from "next/link";

// Mock do usuário autenticado
const user = { nome: "José" };

// Mock das ações rápidas
const actions = [
  {
    label: "Criar nova OS",
    icon: Plus,
    href: "/os/nova",
    aria: "Criar nova ordem de serviço",
    color: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg",
    iconBg: "bg-blue-500",
  },
  {
    label: "Adicionar Cliente",
    icon: UserPlus,
    href: "/clientes/novo",
    aria: "Adicionar novo cliente",
    color: "bg-green-600 hover:bg-green-700 text-white shadow-lg",
    iconBg: "bg-green-500",
  },
  {
    label: "Ver Relatórios",
    icon: FileText,
    href: "/financeiro/relatorios",
    aria: "Acessar relatórios financeiros",
    color: "bg-purple-600 hover:bg-purple-700 text-white shadow-lg",
    iconBg: "bg-purple-500",
  },
];

// Mock das métricas principais com dados mais realistas
const metrics = [
  {
    title: "Ordens Abertas",
    value: "12",
    description: "pendentes hoje",
    icon: Wrench,
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    darkBgColor:
      "dark:bg-gradient-to-br dark:from-blue-900/30 dark:to-blue-800/30",
    trend: "+2 vs ontem",
    trendDirection: "up",
    percentage: "+16.7%",
    accentColor: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200 dark:border-blue-700",
  },
  {
    title: "Ordens Finalizadas",
    value: "37",
    description: "este mês",
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
    darkBgColor:
      "dark:bg-gradient-to-br dark:from-green-900/30 dark:to-emerald-800/30",
    trend: "+8 vs mês anterior",
    trendDirection: "up",
    percentage: "+27.6%",
    accentColor: "from-green-500 to-emerald-500",
    borderColor: "border-green-200 dark:border-green-700",
  },
  {
    title: "Receita Total",
    value: "R$ 18.750",
    description: "este mês",
    icon: DollarSign,
    color: "text-yellow-600",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
    darkBgColor:
      "dark:bg-gradient-to-br dark:from-yellow-900/30 dark:to-orange-800/30",
    trend: "+R$ 2.100 vs mês anterior",
    trendDirection: "up",
    percentage: "+12.6%",
    accentColor: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-200 dark:border-yellow-700",
  },
  {
    title: "Clientes Ativos",
    value: "238",
    description: "cadastrados",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
    darkBgColor:
      "dark:bg-gradient-to-br dark:from-purple-900/30 dark:to-pink-800/30",
    trend: "+12 novos este mês",
    trendDirection: "up",
    percentage: "+5.3%",
    accentColor: "from-purple-500 to-pink-500",
    borderColor: "border-purple-200 dark:border-purple-700",
  },
];

// Mock das atividades recentes
const recentActivities = [
  {
    id: 1,
    type: "order_completed",
    title: "Ordem #1234 finalizada",
    description: "Reparo de smartphone Samsung Galaxy",
    time: "há 5 minutos",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  {
    id: 2,
    type: "new_client",
    title: "Novo cliente cadastrado",
    description: "Maria Silva - (11) 99999-9999",
    time: "há 15 minutos",
    icon: UserPlus,
    color: "text-blue-600",
  },
  {
    id: 3,
    type: "payment_received",
    title: "Pagamento recebido",
    description: "R$ 450,00 - Ordem #1230",
    time: "há 1 hora",
    icon: DollarSign,
    color: "text-yellow-600",
  },
  {
    id: 4,
    type: "urgent_order",
    title: "Ordem urgente criada",
    description: "Notebook Dell com problema na tela",
    time: "há 2 horas",
    icon: AlertCircle,
    color: "text-red-600",
  },
];

function DashboardPage() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("pt-BR"));
      setCurrentDate(
        new Date().toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })
      );
    };

    updateTime(); // Atualiza imediatamente ao montar
    const interval = setInterval(updateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="px-4 py-8 flex flex-col gap-8">
      {/* Cabeçalho moderno com tema responsivo */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-2xl p-8 shadow-2xl mb-8 border dark:border-gray-700 relative overflow-hidden">
          {/* Background pattern - mais sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-lg">
                <Wrench
                  className="w-10 h-10 text-white drop-shadow-sm"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-sm">
                  Dashboard Pozstar
                </h1>
                <p className="text-blue-100 dark:text-gray-300 text-lg">
                  Olá,{" "}
                  <span className="font-semibold text-white">{user.nome}</span>!
                  Bem-vindo de volta.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 text-white bg-white/15 dark:bg-black/25 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-white/20">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">{currentTime}</span>
              </div>
              <div className="flex items-center gap-3 text-white bg-white/15 dark:bg-black/25 backdrop-blur-sm rounded-lg px-4 py-3 shadow-md border border-white/20">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">{currentDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de cards estatísticos melhorado com tema */}
      <section className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <Card
              key={idx}
              aria-label={metric.title}
              className={`bg-white dark:bg-gray-800 shadow-lg border ${metric.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative`}
              tabIndex={0}
            >
              {/* Accent gradient line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.accentColor}`}
              ></div>

              <CardContent className="p-6 relative">
                <div
                  className={`${metric.bgColor} ${metric.darkBgColor} rounded-lg p-4 mb-4 transition-all duration-300 group-hover:scale-105`}
                >
                  <metric.icon
                    className={`w-8 h-8 ${metric.color} dark:text-white group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {metric.title}
                  </span>
                </div>

                {/* Cabeçalho do card */}

                {/* Valor principal */}

                <span className="text-3xl font-bold text-gray-900 dark:text-white block mb-2">
                  {metric.value}
                </span>

                {/* Descrição */}
                <span className="text-sm text-gray-500 dark:text-gray-400 block mb-4 font-medium">
                  {metric.description}
                </span>

                {/* Trend/Comparação */}
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg">
                  <Activity className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300 font-semibold">
                    {metric.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Seção de Atividade Recente */}
      <section className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ações Rápidas */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {actions.map((action, idx) => (
              <Button
                key={idx}
                asChild
                className={`flex gap-4 items-center justify-start py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 hover:-translate-y-1 ${action.color} border-0 relative overflow-hidden group`}
                aria-label={action.aria}
              >
                <Link
                  href={action.href}
                  tabIndex={0}
                  className="flex items-center w-full h-full px-6 relative z-10"
                >
                  <div
                    className={`p-3 ${action.iconBg} rounded-lg mr-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >
                    <action.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{action.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Atividades Recentes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
            Atividades Recentes
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700 p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activity.type === "order_completed"
                        ? "bg-green-100 dark:bg-green-900/30"
                        : activity.type === "new_client"
                        ? "bg-blue-100 dark:bg-blue-900/30"
                        : activity.type === "payment_received"
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : "bg-red-100 dark:bg-red-900/30"
                    }`}
                  >
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t dark:border-gray-700">
              <Button
                variant="ghost"
                className="w-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Ver todas as atividades
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Área de gráfico com tema escuro/claro */}
      <section className="max-w-6xl mx-auto w-full mt-8">
        <Separator className="mb-8 dark:bg-gray-700" />
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border dark:border-gray-700 p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <BarChart3
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Receitas por Semana
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Visualização dos últimos 30 dias
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm font-medium text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 w-fit"
            >
              Em desenvolvimento
            </Badge>
          </div>
          {/* Placeholder visual para gráfico futuro */}
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-800 rounded-lg flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-600">
            <BarChart3 className="w-16 h-16 mb-4 text-blue-500 dark:text-blue-400" />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Gráfico de receitas
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Integração com Recharts em breve
            </p>
          </div>
        </div>
      </section>

      {/* Footer moderno com tema */}
      <footer className="max-w-6xl mx-auto w-full mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-lg text-gray-800 dark:text-white">
              Pozstar
            </span>
            <Badge
              variant="outline"
              className="text-xs dark:border-gray-600 dark:text-gray-400"
            >
              Dashboard v2.0
            </Badge>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>© 2024 Pozstar Electronics. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Sistema atualizado</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function DashboardPageWrapper() {
  return (
    <AppLayout currentPath="/dashboard">
      <DashboardPage />
    </AppLayout>
  );
}
