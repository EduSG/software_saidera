import { Link } from 'react-router-dom'
import { AirplaneTilt, ShieldCheck } from 'phosphor-react'

export function Home() {
  return (
    <div className="flex flex-col p-8">
      <h1 className="text-slate-700 font-light text-3xl">Olá, Eduardo Gomes</h1>

      <div className="flex items-center gap-2">
        <h3 className="flex items-center text-4xl mt-2 font-bold text-slate-900">
          Bem vindo ao Sistema de Análises SQL
        </h3>
        <span className="rounded flex items-center">
          <AirplaneTilt className="text-orange-300 text-4xl" size={40} />
        </span>
      </div>

      <div className='flex h-32 bg-slate-800 rounded-2xl text-white mt-12'>
        <div className='flex rounded-2xl items-center px-4 gap-4'>
          <span>
            <ShieldCheck className='text-[#2ef2a7]' size={40} />
          </span>
          <h5 className='text-slate-50 font-bold text-xl'>Você está online e autenticado</h5>
        </div>
      </div>

    </div>
  )
}
