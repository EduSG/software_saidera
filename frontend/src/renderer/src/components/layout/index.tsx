import { Outlet } from 'react-router-dom'
import { Header } from '../header/header'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Sidebar } from '../sidebar/sidebar'
import { useState } from 'react'

export function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  return (
    <Collapsible.Root
      defaultOpen
      className='h-screen w-screen bg-gray-950 text-slate-100 flex'
      onOpenChange={setIsSideBarOpen}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSideBarOpen} />

        <Outlet />
      </div>
    </Collapsible.Root>
  )
}
