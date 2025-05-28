// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ArtReimagined: Best AI Art Prompts & Inspiration',
  description: 'Discover, share, and vote on the best AI art prompts for Midjourney, Stable Diffusion, & more. Fuel your creativity with ArtReimagined.',
}

const featuredPrompts = [
  {
    id: 1,
    style: 'Cyberpunk',
    tool: 'Midjourney',
    text: 'Neon-lit cyberpunk cityscape at night, flying cars, holographic advertisements, rain-soaked streets, dramatic lighting, cinematic composition --ar 16:9',
    votes: 847,
    author: 'CyberArtist92'
  },
  {
    id: 2,
    style: 'Fantasy Art',
    tool: 'Stable Diffusion',
    text: 'Mystical forest guardian, ancient tree spirit, glowing ethereal light, magical atmosphere, detailed fantasy art style, by Greg Rutkowski --ar 3:4',
    votes: 624,
    author: 'FantasyCreator'
  },
  {
    id: 3,
    style: 'Abstract',
    tool: 'DALL-E',
    text: 'Fluid abstract composition, vibrant color gradients, organic flowing forms, digital art, smooth transitions, contemporary abstract style --ar 1:1',
    votes: 592,
    author: 'AbstractMind'
  }
]

const stats = [
  { number: '12,000+', label: 'AI Art Prompts', icon: '🎨' },
  { number: '5,400+', label: 'Active Creators', icon: '👥' },
  { number: '50+', label: 'Art Styles', icon: '🎭' },
  { number: '150k+', label: 'Prompts Copied', icon: '📋' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 style={{
            fontFamily: 'Montserrat',
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textAlign: 'center'
          }}>
            Unlock Your Creativity with AI Art Prompts
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto',
            textAlign: 'center'
          }}>
            Never run out of AI art ideas! Discover, share, and vote on the best prompts for Midjourney, Stable Diffusion, and more.
          </p>
          <div className="hero-buttons">
            <Link href="/prompts" className="btn-primary text-lg px-8 py-4">
              Explore Prompts
            </Link>
            <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-container">
            <h2 className="search-title">Find Your Perfect Prompt</h2>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for cyberpunk, fantasy, portraits..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="section-padding bg-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'Montserrat',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              Trending Prompts This Week
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover the hottest AI art prompts voted by our creative community
            </p>
          </div>
          
          <div className="prompts-grid">
            {featuredPrompts.map((prompt) => (
              <div key={prompt.id} className="card-hover">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div className="prompt-tags">
                    <span className="style-tag">{prompt.style}</span>
                    <span className="tool-tag">{prompt.tool}</span>
                  </div>
                  <div className="vote-display">
                    <span>👍</span>
                    <span>{prompt.votes}</span>
                  </div>
                </div>
                
                <div className="prompt-text">
                  "{prompt.text}"
                </div>
                
                <div className="prompt-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                    <span>👤</span>
                    <span>{prompt.author}</span>
                  </div>
                  <button className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Copy Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/prompts" className="btn-primary text-lg px-8 py-4">
              Browse All Prompts
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container features-container">
          <div className="features-header">
            <h2 className="features-title">
              Everything You Need to Create Amazing AI Art
            </h2>
            <p className="features-subtitle">
              Join thousands of creators discovering and sharing the best AI prompts
            </p>
          </div>
          
          <div className="features-grid">
            {[
              { icon: '🔍', title: 'Smart Discovery', desc: 'Find prompts by style, mood, or AI tool. Our filters help you discover exactly what you\'re looking for.' },
              { icon: '⭐', title: 'Community Voting', desc: 'The best prompts rise to the top through community votes. Quality content you can trust.' },
              { icon: '📋', title: 'One-Click Copy', desc: 'Copy any prompt instantly to your clipboard. No more typing out complex prompts by hand.' },
              { icon: '🎨', title: 'Creative Challenges', desc: 'Join themed challenges, showcase your creations, and get inspired by what others are making.' },
              { icon: '🤝', title: 'Share & Contribute', desc: 'Found an amazing prompt? Share it with the community and help others create incredible art.' },
              { icon: '🚀', title: 'Always Fresh', desc: 'New prompts added daily by our creative community. Your inspiration never runs dry.' }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="community-section">
        <div className="container">
          <div className="community-header">
            <h2 className="community-title">Join Our Growing Creative Community</h2>
            <p className="community-subtitle">
              Thousands of artists and creators are already reimagining their art with our prompts. 
              Be part of the largest AI art community online!
            </p>
          </div>
          
          <div className="stats-container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <span className="stat-number">{stat.number}</span>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">
                    {index === 0 && 'High-quality, community-tested prompts'}
                    {index === 1 && 'Artists sharing and discovering daily'}
                    {index === 2 && 'From cyberpunk to watercolor'}
                    {index === 3 && 'Successful art generations'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container">
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Ready to Reimagine Your Art?
            </h2>
            <p style={{ 
              fontSize: '1.4rem', 
              marginBottom: '3rem', 
              opacity: 0.95,
              lineHeight: '1.6'
            }}>
              Join our thriving creative community and unlock endless inspiration. 
              Thousands of artists are already creating amazing work with our prompts!
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginBottom: '4rem'
            }}>
              <Link 
                href="/prompts" 
                style={{
                  background: 'linear-gradient(135deg, #E91E63 0%, #ff1744 100%)',
                  color: 'white',
                  padding: '1.25rem 3rem',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  border: 'none',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)',
                  minWidth: '250px',
                  transition: 'all 0.4s ease'
                }}
                className="hover:transform hover:-translate-y-1 hover:scale-105"
              >
                🚀 Start Exploring Now
              </Link>
              <Link 
                href="/submit-prompt" 
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '1.25rem 3rem',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  minWidth: '250px',
                  transition: 'all 0.4s ease'
                }}
                className="hover:bg-white hover:text-primary hover:transform hover:-translate-y-1"
              >
                ✨ Share Your Prompt
              </Link>
            </div>

            {/* Mini Features */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '3rem', 
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              {[
                { icon: '⚡', text: 'Instant Access' },
                { icon: '🎯', text: 'Quality Tested' },
                { icon: '🌟', text: 'Community Voted' },
                { icon: '🆓', text: '100% Free' }
              ].map((feature, index) => (
                <div key={index} style={{ textAlign: 'center', opacity: 0.9 }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '500' }}>{feature.text}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              flexWrap: 'wrap',
              opacity: 0.8
            }}>
              {[
                '12,000+ Prompts',
                '5,400+ Happy Creators', 
                'No Sign-up Required'
              ].map((indicator, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <span>✅</span>
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}