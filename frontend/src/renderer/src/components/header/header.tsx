import * as Collapsible from '@radix-ui/react-collapsible'
import clsx from 'clsx'
import { CaretRight } from 'phosphor-react'

interface HeaderProps {
  isSidebarOpen: boolean;
}

export function Header({ isSidebarOpen }: HeaderProps){
  const isMacOS = process.platform === 'darwin';

  return(
    <div
      id='header'
      className={clsx(
        'flex items-center gap-4 leading-tight relative border-b border-gray-300 transition-all duration-200 py-[1.125rem] px-6',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen': !isSidebarOpen,
          'w-[calc(100vw-250px)]': isSidebarOpen
        }
      )}
    >
      <Collapsible.Trigger
        className={clsx('h-7 w-7 text-grey-800 bg-orange-500 p-1 rounded-full relative z-[99]  left-0', {
          hidden: isSidebarOpen,
          block: !isSidebarOpen
        })}
      >
        <CaretRight className='w-5 h-5 bg-orange-500 text-white' />
      </Collapsible.Trigger>

      <>
        <h1 className='text-slate-900 font-bold'>SFS - Sistema Filemaker SQL</h1>
      </>
    </div>
  )
}

