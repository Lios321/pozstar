// Componente de busca para Ordens de Serviço - Pozstar
// Campo de pesquisa com ícone

"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Buscar
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Encontre rapidamente uma ordem
          </p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 w-5 h-5 transition-colors duration-200 z-10" />
        <input
          type="text"
          placeholder="Pesquisar por cliente, marca, modelo ou ID..."
          value={searchTerm}
          onChange={onSearchChange}
          spellCheck={false}
          autoComplete="off"
          data-ms-editor="false"
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-medium relative z-10"
        />
      </div>
    </div>
  );
}
