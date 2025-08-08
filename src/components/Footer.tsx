import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #FFF8F3, #FFE6E6)', 
      borderTop: '1px solid rgba(255, 107, 107, 0.1)',
      padding: '3rem 2rem 2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 900,
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              ArtReimagined
            </h3>
            <p style={{ color: '#4A5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Transform static art into living experiences. Animate, create AR, design products.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://twitter.com/artreimagined" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)',
                  transition: 'transform 0.2s'
                }}>
                <span style={{ fontSize: '1.2rem' }}>🐦</span>
              </a>
              <a href="https://instagram.com/artreimagined" target="_blank" rel="noopener noreferrer"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)',
                  transition: 'transform 0.2s'
                }}>
                <span style={{ fontSize: '1.2rem' }}>📷</span>
              </a>
              <a href="mailto:hello@artreimagined.com"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(255, 107, 107, 0.1)',
                  transition: 'transform 0.2s'
                }}>
                <span style={{ fontSize: '1.2rem' }}>✉️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
              Platform
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/tools" style={{ color: '#4A5568', textDecoration: 'none' }}>AI Tools</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/gallery" style={{ color: '#4A5568', textDecoration: 'none' }}>Gallery</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/pricing" style={{ color: '#4A5568', textDecoration: 'none' }}>Pricing</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/how-it-works" style={{ color: '#4A5568', textDecoration: 'none' }}>How It Works</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about" style={{ color: '#4A5568', textDecoration: 'none' }}>About</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/contact" style={{ color: '#4A5568', textDecoration: 'none' }}>Contact</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/privacy-policy" style={{ color: '#4A5568', textDecoration: 'none' }}>Privacy</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/terms-of-service" style={{ color: '#4A5568', textDecoration: 'none' }}>Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 107, 107, 0.1)', 
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#718096', margin: 0, fontSize: '0.9rem' }}>
            © 2025 ArtReimagined. Transforming art into living experiences.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ color: '#718096', fontSize: '0.9rem' }}>🌍 Worldwide</span>
            <span style={{ color: '#718096', fontSize: '0.9rem' }}>🔒 Secured</span>
            <span style={{ color: '#718096', fontSize: '0.9rem' }}>⚡ Fast</span>
          </div>
        </div>
      </div>
    </footer>
  )
}