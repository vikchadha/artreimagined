import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand and tagline */}
          <div className="footer-section">
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              Art<span style={{ color: '#FF6F61' }}>Reimagined</span>
            </h3>
            <div className="footer-tagline" style={{ color: '#fff', opacity: 0.85, fontSize: '1.05rem', marginBottom: '1.2rem' }}>
              Inspiring AI Art Prompts
            </div>
            <div className="footer-social" style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem' }}>
              <a href="https://twitter.com/artreimagined" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#fff', fontSize: '1.3rem' }}>
                <span aria-hidden="true">🐦</span>
              </a>
              <a href="mailto:hello@artreimagined.com" className="social-link" aria-label="Email" style={{ color: '#fff', fontSize: '1.3rem' }}>
                <span aria-hidden="true">✉️</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Discover</h4>
            <ul>
              <li><Link href="/prompts">Browse All Prompts</Link></li>
              <li><Link href="/prompts/style/cyberpunk">Cyberpunk Prompts</Link></li>
              <li><Link href="/prompts/style/fantasy-art">Fantasy Art</Link></li>
              <li><Link href="/challenges">Community Challenges</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contribute</h4>
            <ul>
              <li><Link href="/submit-prompt">Submit a Prompt</Link></li>
              <li><Link href="/guidelines">Submission Guidelines</Link></li>
              <li><Link href="/community">Community Hub</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/blog">Blog & Inspiration</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ArtReimagined.com. Celebrating creativity through AI art prompts.</p>
        </div>
      </div>
    </footer>
  )
}