// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ArtReimagined: Best AI Art Prompts & Inspiration',
  description: 'Discover, share, and vote on the best AI art prompts for Midjourney, Stable Diffusion, & more. Fuel your creativity with ArtReimagined.',
  alternates: {
    canonical: 'https://artreimagined.com',
  },
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
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Montserrat',
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textShadow: '0 2px 12px rgba(124,58,237,0.10)'
          }}>
            Unlock Your Creativity with <span style={{ color: '#FF6F61' }}>AI Art Prompts</span>
          </h1>
          <p style={{
            fontSize: '1.4rem',
            marginBottom: '2.5rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto',
            textAlign: 'center'
          }}>
            Never run out of AI art ideas! Discover, share, and vote on the best prompts for Midjourney, Stable Diffusion, and more.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/prompts" className="btn-primary text-lg px-8 py-4">
              Explore Prompts
            </Link>
            <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="section-padding" style={{ background: 'linear-gradient(90deg, #F8F6FF 60%, #F3E8FF 100%)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.3rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--primary)' }}>
            How ArtReimagined Works
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(124,58,237,0.07)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Discover</h3>
              <p style={{ opacity: 0.85 }}>Browse a curated library of creative AI art prompts by style, mood, or tool.</p>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(124,58,237,0.07)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📝</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Share</h3>
              <p style={{ opacity: 0.85 }}>Submit your own prompts and inspire others in the community.</p>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: 220, maxWidth: 300, background: '#fff', borderRadius: '1.2rem', boxShadow: '0 2px 12px rgba(124,58,237,0.07)', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👍</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vote</h3>
              <p style={{ opacity: 0.85 }}>Upvote your favorite prompts and help surface the best ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROMPTS --- */}
      <section className="section-padding" style={{ background: '#fff' }}>
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
              <div key={prompt.id} className="card-hover" style={{ minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                <div className="prompt-text" style={{ fontSize: '1.05rem', margin: '1rem 0', background: '#F8F6FF' }}>
                  &quot;{prompt.text}&quot;
                </div>
                <div className="prompt-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#666', fontSize: '0.95rem' }}>
                    <span>👤</span>
                    <span>{prompt.author}</span>
                  </div>
                  <button className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.5rem 1.2rem' }}>
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

      {/* --- COMMUNITY STATS --- */}
      <section className="section-padding" style={{ background: 'linear-gradient(90deg, #F8F6FF 60%, #F3E8FF 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'Montserrat', fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)' }}>
              Our Creative Community
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Join thousands of creators discovering and sharing the best AI prompts.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-icon" style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{stat.icon}</div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN THE COMMUNITY CALLOUT --- */}
      <section className="section-padding" style={{ background: 'linear-gradient(90deg, rgba(224,64,251,0.15) 0%, rgba(124,58,237,0.15) 100%)', color: '#333', textAlign: 'center', borderRadius: '2.5rem', margin: '4rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.3rem', fontWeight: 900, marginBottom: '1.2rem', letterSpacing: '-0.01em' }}>
            Ready to Get Inspired?
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '2.2rem' }}>
            Join ArtReimagined and start exploring, sharing, and creating with the world’s best AI art prompts.
          </p>
          <Link href="/join" className="btn-primary text-lg px-8 py-4" style={{ fontSize: '1.15rem' }}>
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  )
}