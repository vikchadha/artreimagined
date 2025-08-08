// Custom 404 Page - Art Lost in Translation
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Art Lost in Translation | ArtReimagined',
  description: 'This page seems to have transformed into thin air. Let us help you find what you\'re looking for.',
}

const lostArtworks = [
  { emoji: '🎨', title: 'Explore AI Tools', href: '/tools', description: 'Transform your art with 15+ AI tools' },
  { emoji: '🖼️', title: 'Browse Gallery', href: '/gallery', description: 'See amazing transformations by artists' },
  { emoji: '💰', title: 'View Pricing', href: '/pricing', description: 'Start free with 10 transformations' },
  { emoji: '✨', title: 'How It Works', href: '/how-it-works', description: 'Learn our 3-step process' }
]

const funMessages = [
  "This page transformed so well, it became invisible!",
  "Looks like this art piece wandered off to another dimension.",
  "404: Art not found. But we found something better for you!",
  "This page is having an artistic moment... somewhere else.",
  "Oops! This masterpiece is still rendering in another universe."
]

export default function NotFound() {
  // Pick a random fun message (Note: In production, you'd want this server-side or use a seed)
  const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)]
  
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%' }}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Animated 404 */}
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ 
                fontSize: 'clamp(6rem, 15vw, 10rem)', 
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'Space Grotesk, sans-serif',
                lineHeight: '1',
                marginBottom: '0'
              }}>
                404
              </h1>
              <div style={{ 
                fontSize: '4rem', 
                marginTop: '-2rem',
                animation: 'float 3s ease-in-out infinite'
              }}>
                🎨
              </div>
            </div>

            {/* Fun Message */}
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#1A1A2E',
              fontFamily: 'Playfair Display, Georgia, serif'
            }}>
              {randomMessage}
            </h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4A5568', 
              marginBottom: '3rem',
              maxWidth: '500px',
              margin: '0 auto 3rem'
            }}>
              Don't worry! While this page took an unexpected artistic detour, we have plenty of amazing transformations waiting for you.
            </p>

            {/* Quick Actions */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem',
              maxWidth: '700px',
              margin: '0 auto 3rem'
            }}>
              {lostArtworks.map((item, idx) => (
                <Link key={idx} href={item.href} style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(255, 107, 107, 0.08)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  display: 'block'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold', 
                    color: '#1A1A2E',
                    marginBottom: '0.3rem',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Primary CTA */}
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/" style={{
                background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                marginRight: '1rem'
              }}>
                Back to Homepage
              </Link>
              <Link href="/signup" style={{
                background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)'
              }}>
                Start Free Trial
              </Link>
            </div>

            {/* Search Hint */}
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '1rem',
              maxWidth: '400px',
              margin: '3rem auto 0',
              boxShadow: '0 2px 10px rgba(255, 107, 107, 0.05)'
            }}>
              <p style={{ color: '#4A5568', marginBottom: '0.5rem' }}>
                <strong style={{ color: '#1A1A2E' }}>Pro tip:</strong> Were you looking for something specific?
              </p>
              <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                Try our <Link href="/tools" style={{ color: '#FF6B6B', textDecoration: 'none', fontWeight: 'bold' }}>AI Tools</Link> to transform your art, 
                or <Link href="/contact" style={{ color: '#FF6B6B', textDecoration: 'none', fontWeight: 'bold' }}> contact us</Link> if you need help!
              </p>
            </div>

            {/* Fun Stats */}
            <div style={{ 
              marginTop: '4rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(78, 205, 196, 0.05))',
              borderRadius: '1rem'
            }}>
              <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBottom: '1rem' }}>
                While you're here, did you know?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>5,400+</div>
                  <div style={{ fontSize: '0.9rem', color: '#718096' }}>Artists transforming</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>74%</div>
                  <div style={{ fontSize: '0.9rem', color: '#718096' }}>Profit margins</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>< 5 sec</div>
                  <div style={{ fontSize: '0.9rem', color: '#718096' }}>To transform</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CSS Animation (in a real app, this would be in a CSS file) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </main>
  )
}