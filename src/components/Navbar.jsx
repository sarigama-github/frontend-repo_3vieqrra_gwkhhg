import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '#features', label: 'Features' },
  { to: '#how', label: 'How it works' },
  { to: '#pricing', label: 'Pricing' },
  { to: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-fuchsia-500 to-blue-500 rounded-lg shadow-lg shadow-fuchsia-500/30" />
          <span className="text-white font-semibold tracking-wide">AI Roast Call</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <Link to="/contact" className="text-sm text-white/80 hover:text-white">Contact</Link>
          <Link to="#get-started" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors">Get Started</Link>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.to} className="text-sm text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">Contact</NavLink>
            <a href="#get-started" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/10">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
