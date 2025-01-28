import { useState } from 'react'
import Tabela from './dash_geral_table'


type LinhaTabela = {
  title: string;
  infos: { mes: string; valor: number }[];
  total: number;
  atual: boolean;
};

const linhas: LinhaTabela[] = [
  {
    title: 'Quantidade Proposta',
    infos: [
      { mes: '01', valor: 234 },
      { mes: '02', valor: 2309 },
    ],
    total: 2643,
    atual: true,
  },
  {
    title: 'Quantidade Pedidos',
    infos: [
      { mes: '01', valor: 100 },
      { mes: '03', valor: 500 },
    ],
    total: 600,
    atual: false,
  },
];

export function DashboardGeral() {
  const [filtros, setFiltros] = useState({
    ano: '',
    fornecedor: '',
    tier: "",
    gestor: ''
  })

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros((prev) => ({
      ...prev,
      [campo]: valor
    }))
  }

  // Dados mockados (substituir pela API depois)
  const mockFiltros = {
    anos: ['2024', '2023', '2022', '2021'],
    fornecedores: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C'],
    tiers: ["Todos", "Inicial", "Desenvolvimento", "Estabelecido"],
    gestores: ['João Silva', 'Maria Souza', 'Carlos Oliveira']
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard Geral</h2>

      <div className="flex gap-8">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Ano</label>
          <select
            className="px-3 py-2 border rounded-lg bg-white"
            value={filtros.ano}
            onChange={(e) => handleFiltroChange('ano', e.target.value)}
          >
            <option value="">Todos</option>
            {mockFiltros.anos.map((ano) => (
              <option key={ano} value={ano}>
                {ano}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Fornecedor</label>
          <select
            className="px-3 py-2 border rounded-lg bg-white"
            value={filtros.fornecedor}
            onChange={(e) => handleFiltroChange('fornecedor', e.target.value)}
          >
            <option value="">Todos</option>
            {mockFiltros.fornecedores.map((fornecedor) => (
              <option key={fornecedor} value={fornecedor}>
                {fornecedor}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Tier</label>
          <select
            className="px-3 py-2 border rounded-lg bg-white"
            value={filtros.tier}
            onChange={(e) => handleFiltroChange('tier', e.target.value)}
          >
            <option value="">Todos</option>
            {mockFiltros.tiers.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Gestor Produto</label>
          <select
            className="px-3 py-2 border rounded-lg bg-white"
            value={filtros.gestor}
            onChange={(e) => handleFiltroChange('gestor', e.target.value)}
          >
            <option value="">Todos</option>
            {mockFiltros.gestores.map((gestor) => (
              <option key={gestor} value={gestor}>
                {gestor}
              </option>
            ))}
          </select>
        </div>

        <div className='flex items-end'>
          <span></span>

          <div className='flex items-center justify-center transition-all focus:bg-cyan-700 font-bold cursor-pointer bg-cyan-500 text-white px-5 py-[6px] rounded'>Gerar</div>
          </div>
      </div>

      <Tabela linhas={linhas}/>
    </div>
  )
}
