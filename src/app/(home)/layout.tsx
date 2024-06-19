'use client'

import NavLink from "@/components/NavLink";
import { usePathname } from 'next/navigation'

export default function CardsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <div>
      <header className="flex w-full justify-between items-center p-8">
        <h1 className="text-lg">Magic: The Gathering</h1>

        <nav>
          <ul className="flex gap-6">
            <li>
            <NavLink name="Home" path="/" isActive={pathname === '/'} />
            </li>
            <li>
            <NavLink name="Cards" path="/cards" isActive={pathname === '/cards'} />
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  )
}