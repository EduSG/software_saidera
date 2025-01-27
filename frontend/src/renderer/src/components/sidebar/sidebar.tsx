import * as Collapsible from '@radix-ui/react-collapsible'
import { ArrowBendDownLeft } from 'phosphor-react'
import clsx from 'clsx'
import { LinkContent } from '../link/link'
LinkContent

export function Sidebar() {
  const isMacOS = process.platform === 'darwin'

  return (
    <Collapsible.Content className="bg-orange-500 flex-shrink-0 border-r border-orange-500 h-screen relative group overflow-hidden data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
      <Collapsible.Trigger
        className={clsx(
          'absolute h-7 w-7 right-4 z-[99] text-white hover:scale-105 duration-200 inline-flex items-center justify-center',
          {
            'top-[1.125rem]': isMacOS,
            'top-6': !isMacOS
          }
        )}
      >
        <ArrowBendDownLeft className="h-7 w-7" />
      </Collapsible.Trigger>

      <div
        className={clsx(
          'flex-1 flex flex-col h-full gap-8 w-[300px] transition-opacity group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-0 duration-200',
          {
            'pt-6': !isMacOS
          }
        )}
      >
        <nav className="flex mx-2 flex-col gap-8 text-white">
          <div className="flex flex-col gap-2">
            <div className="text-white font-semibold uppercase mb-2 ml-2">MENU</div>
          </div>

          <section className="flex flex-col gap-px">
            <LinkContent to="/" children="Home" />

            <LinkContent to="/boxware" children="Dashboard Boxware" />

            <LinkContent to="/comercial" children="Dashboard Comercial" />

            <LinkContent to="/produtos" children="Dashboard Produtos" />

            <LinkContent to="/usuarios" children="Gerenciamento de usuários" />
          </section>
        </nav>
      </div>
    </Collapsible.Content>
  )
}
