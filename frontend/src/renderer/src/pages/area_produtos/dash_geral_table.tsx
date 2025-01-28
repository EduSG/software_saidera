import React from 'react'

type LinhaTabela = {
  title: string
  infos: { mes: string; valor: number }[]
  total: number
  atual: boolean
}

const Tabela: React.FC<{ linhas: LinhaTabela[] }> = ({ linhas }) => {
  const preencherMeses = (infos: { mes: string; valor: number }[]) => {
    const mesesCompletos = Array.from({ length: 12 }, (_, i) => ({
      mes: `${i + 1}`,
      valor: 0
    }))

    infos.forEach((info) => {
      const mesSemZero = info.mes.replace(/^0/, '')
      const mesIndex = parseInt(mesSemZero, 10) - 1
      mesesCompletos[mesIndex].valor = info.valor
    })

    return mesesCompletos
  }

  return (
    <div className="overflow-x-auto mt-12">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Title</th>
            {[...Array(12)].map((_, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 bg-gray-100">
                {i + 1}
              </th>
            ))}
            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Total</th>
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, index) => {
            const mesesCompletos = preencherMeses(linha.infos)

            return (
              <tr key={index} className={linha.atual ? 'bg-green-100' : ''}>
                <td className="border border-gray-300 px-4 py-2 font-bold">{linha.title}</td>
                {mesesCompletos.map((mes, i) => (
                  <td key={i} className="border border-gray-300 px-4 py-2 text-center">
                    {mes.valor}
                  </td>
                ))}
                <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                  {linha.total}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Tabela
