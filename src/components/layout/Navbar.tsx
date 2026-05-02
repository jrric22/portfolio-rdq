'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(10,15,30,0.96)] border-b border-[rgba(201,168,76,0.2)] backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      {/* Logo */}
      <span className="font-playfair text-xl font-bold text-gold tracking-wide">
        RDQ Jr.
      </span>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted text-xs font-medium tracking-widest uppercase hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={cn('w-6 h-px bg-gold transition-all', menuOpen && 'rotate-45 translate-y-2')} />
        <span className={cn('w-6 h-px bg-gold transition-all', menuOpen && 'opacity-0')} />
        <span className={cn('w-6 h-px bg-gold transition-all', menuOpen && '-rotate-45 -translate-y-2')} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy-mid border-b border-[rgba(201,168,76,0.2)] py-4 flex flex-col items-center gap-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-muted text-xs font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
