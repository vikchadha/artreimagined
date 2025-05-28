import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
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