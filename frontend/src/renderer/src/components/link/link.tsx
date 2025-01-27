import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
interface LinkProps {
  to: string
  children: string
}

export function LinkContent({ to, children }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return clsx('flex items-center text-sm gap-2 py-2 px-3 rounded group', {
          'bg-gray-50 font-semibold': isActive,
          'text-orange-500': isActive,
          'text-white': !isActive
        })
      }}
    >
      <span className="truncate flex-1">{children}</span>
    </NavLink>
  )
}
