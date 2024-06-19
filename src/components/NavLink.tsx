import Link from "next/link";

interface NavLinkProps {
  name: string
  path: string
  isActive: boolean
}

export default function NavLink({ name, path, isActive }: NavLinkProps) {
  return (
    <Link
      href={path}
      className={`rounded-full ${isActive && 'bg-orange-700'} p-4 font-medium hover:opacity-95`}
    >
      {name}
    </Link>
  )
}