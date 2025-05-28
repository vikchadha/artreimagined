// src/components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Browse Prompts', href: '/prompts' },
  { name: 'Challenges', href: '/challenges' },
  { name: 'Submit', href: '/submit-prompt' },
  { name: 'Inspiration', href: '/blog' },
  { name: 'How It Works', href: '/how-it-works' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const headerStyle = {
    backgroundColor: 'var(--primary)',
    color: 'white',
    position: 'sticky' as const,
    top: 0,
    zIndex: 50,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }

  const navStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1.25rem'
  }

  const navContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0'
  }

  const logoStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Montserrat, sans-serif'
  }

  const desktopNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  }

  const navLinkStyle = {
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem'
  }

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: 'var(--secondary)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }

  const ctaButtonStyle = {
    backgroundColor: 'var(--accent)',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '25px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer'
  }

  const mobileMenuButtonStyle = {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s'
  }

  const mobileNavStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  }

  const mobileNavLinkStyle = {
    display: 'block',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
    padding: '0.75rem 0',
    transition: 'color 0.3s'
  }

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={navContainerStyle}>
          {/* Logo */}
          <Link href="/" style={logoStyle}>
            ArtReimagined
          </Link>

          {/* Desktop Navigation */}
          <div style={desktopNavStyle} className="hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={pathname === item.href ? activeNavLinkStyle : navLinkStyle}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = 'var(--secondary)'
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/join"
              style={ctaButtonStyle}
              className="btn-primary"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C2185B'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Join Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              style={mobileMenuButtonStyle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--secondary)'
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                Open main menu
              </span>
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={mobileNavStyle} className="md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    ...mobileNavLinkStyle,
                    color: pathname === item.href ? 'var(--secondary)' : 'white'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--secondary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = pathname === item.href ? 'var(--secondary)' : 'white'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/join"
                className="btn-primary"
                style={{
                  ...ctaButtonStyle,
                  marginTop: '1rem',
                  display: 'inline-block',
                  textAlign: 'center' as const
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}