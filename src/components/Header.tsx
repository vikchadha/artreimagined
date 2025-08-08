// src/components/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Tools', href: '/tools' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header style={{ 
      background: 'rgba(255,255,255,0.98)', 
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(102,126,234,0.08)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50 
    }}>
      <nav className="container" style={{ padding: '0.5rem 0', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          {/* Logo & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Link href="/" style={{ 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <span style={{ fontSize: '1.6rem' }}>🎨</span>
              <span style={{
                fontSize: '1.8rem', 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em', 
                fontFamily: 'Space Grotesk, Montserrat, sans-serif',
              }}>
                ArtReimagined
              </span>
            </Link>
            <span style={{ 
              color: '#718096', 
              fontSize: '0.85rem', 
              fontWeight: 500, 
              marginTop: '0.1rem', 
              letterSpacing: '0.01em',
              marginLeft: '2.8rem'
            }}>
              Transform Art into Living Experiences
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontWeight: 600,
                  color: pathname === item.href ? '#667eea' : '#333',
                  background: pathname === item.href ? 'rgba(102,126,234,0.1)' : 'transparent',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  letterSpacing: '0.01em',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                fontWeight: 600,
                color: '#333',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              Contact
            </Link>
            <Link
              href="/signup"
              style={{
                marginLeft: '1rem',
                padding: '0.7rem 1.5rem',
                background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                color: 'white',
                borderRadius: '0.75rem',
                fontWeight: 'bold',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                boxShadow: '0 2px 8px rgba(255, 107, 107, 0.25)'
              }}
            >
              Start Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              style={{ 
                padding: '0.5rem', 
                borderRadius: '0.5rem', 
                color: '#333', 
                backgroundColor: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                transition: 'all 0.3s' 
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span style={{ 
                position: 'absolute', 
                width: '1px', 
                height: '1px', 
                padding: 0, 
                margin: '-1px', 
                overflow: 'hidden', 
                clip: 'rect(0, 0, 0, 0)', 
                whiteSpace: 'nowrap', 
                border: 0 
              }}>
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
          <div style={{ 
            borderTop: '1px solid rgba(102,126,234,0.1)', 
            paddingTop: '1rem', 
            paddingBottom: '1rem',
            paddingLeft: '2rem',
            paddingRight: '2rem'
          }} className="md:hidden">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontWeight: 600,
                    color: pathname === item.href ? '#667eea' : '#333',
                    background: pathname === item.href ? 'rgba(102,126,234,0.1)' : 'transparent',
                    padding: '0.7rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
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
                href="/contact"
                style={{
                  fontWeight: 600,
                  color: '#333',
                  padding: '0.7rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/signup"
                style={{
                  marginTop: '0.5rem',
                  padding: '0.7rem 1.5rem',
                  background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                  color: 'white',
                  borderRadius: '0.75rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(255, 107, 107, 0.25)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}