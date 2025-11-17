import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-[#E6DED0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide text-[#5E4B2C]">casagrand</Link>
        <nav className="hidden md:flex gap-6 text-sm text-[#5E4B2C]">
          <NavLink to="/" className={({isActive}) => isActive ? 'font-semibold' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'font-semibold' : ''}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'font-semibold' : ''}>Projects</NavLink>
          <NavLink to="/form" className={({isActive}) => isActive ? 'font-semibold' : ''}>Enquire</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'font-semibold' : ''}>Contact</NavLink>
        </nav>
        <button className="md:hidden p-2 rounded border border-[#E6DED0] text-[#5E4B2C]">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
