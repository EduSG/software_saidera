import { useState } from "react";
import { DashboardFornecedor } from "./area_produtos/dashboard_fornecedor";
import { DashboardGeral } from "./area_produtos/dashboard_geral";

export function Produtos(){
  const [activeDashboard, setActiveDashboard] = useState<'geral' | 'fornecedor' | 'outro'>('geral');


  return (
    <div className="h-screen flex flex-col">
      {/* Barra de Controle */}
      <div className="bg-white shadow-md p-4 flex gap-4 border-b">
        <button
          onClick={() => setActiveDashboard('geral')}
          className={`px-4 py-2 rounded-lg ${
            activeDashboard === 'geral'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Dashboard Geral
        </button>

        <button
          onClick={() => setActiveDashboard('fornecedor')}
          className={`px-4 py-2 rounded-lg ${
            activeDashboard === 'fornecedor'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Dashboard Fornecedor
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {activeDashboard === 'geral' && <DashboardGeral />}
        {activeDashboard === 'fornecedor' && <DashboardFornecedor />}
      </div>
    </div>
  );
}
