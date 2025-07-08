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

  return (
    <header className="header-gradient" style={{ boxShadow: '0 2px 10px rgba(124,58,237,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <nav className="container" style={{ padding: '0.5rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 0' }}>
          {/* Logo & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Link href="/" style={{ fontSize: '2rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 12px rgba(224,64,251,0.10)' }}>
              Art<span style={{ color: '#FF6F61' }}>Reimagined</span>
            </Link>
            <span style={{ color: 'white', fontSize: '1rem', fontWeight: 500, opacity: 0.85, marginTop: '0.1rem', letterSpacing: '0.01em' }}>
              Inspiring AI Art Prompts
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontWeight: 600,
                  color: pathname === item.href ? '#FF6F61' : 'white',
                  background: pathname === item.href ? 'rgba(255,255,255,0.13)' : 'transparent',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '0.7rem',
                  fontSize: '1.08rem',
                  letterSpacing: '0.01em',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/join"
              className="btn-primary"
              style={{ marginLeft: '1.5rem', fontSize: '1.08rem' }}
            >
              Join Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              style={{ padding: '0.5rem', borderRadius: '0.5rem', color: 'white', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '1.2rem', paddingBottom: '1.2rem' }} className="md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontWeight: 600,
                    color: pathname === item.href ? '#FF6F61' : 'white',
                    background: pathname === item.href ? 'rgba(255,255,255,0.13)' : 'transparent',
                    padding: '0.7rem 1.2rem',
                    borderRadius: '0.7rem',
                    fontSize: '1.08rem',
                    letterSpacing: '0.01em',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/join"
                className="btn-primary"
                style={{ fontSize: '1.08rem', marginTop: '0.5rem' }}
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