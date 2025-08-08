// src/app/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ArtReimagined: Transform Static Art into Living Experiences | AI-Powered Art Animation',
  description: 'Transform any artwork into dynamic animations, AR experiences, and personalized products. Professional AI tools with 74% margins on wall art. Start free.',
  alternates: {
    canonical: 'https://artreimagined.com',
  },
  openGraph: {
    title: 'Transform Art into Living Experiences - ArtReimagined',
    description: 'Professional AI-powered art transformation platform. Animate paintings, create AR experiences, design merchandise - all in under 5 seconds.',
    images: ['/og-image.jpg'],
  },
  keywords: 'AI art animation, art transformation, animated paintings, AR art, print on demand art, dynamic wall art, AI art tools',
}

const transformationTypes = [
  {
    id: 1,
    title: 'Instant Animation',
    description: 'Bring static art to life with cinematic-quality animations in under 5 seconds',
    icon: '🎬',
    features: ['Depth mapping', 'Motion paths', 'Particle effects'],
    example: 'Transform a landscape painting into a living scene with moving clouds and water'
  },
  {
    id: 2,
    title: 'AR Experiences',
    description: 'Create augmented reality art that jumps off walls and canvases',
    icon: '🔮',
    features: ['3D depth layers', 'Interactive elements', 'Mobile viewing'],
    example: 'Turn portraits into talking characters that respond to viewers'
  },
  {
    id: 3,
    title: 'Living Wall Art',
    description: 'Design dynamic displays for digital frames and smart screens',
    icon: '🖼️',
    features: ['Seamless loops', 'Day/night cycles', 'Weather sync'],
    example: 'Create art that changes with time of day or season'
  },
  {
    id: 4,
    title: 'Print-on-Demand',
    description: 'Transform art into products with 74% profit margins',
    icon: '🎨',
    features: ['Canvas prints', 'Home decor', 'Apparel'],
    example: 'Sell animated art on physical products with QR-activated experiences'
  }
]

const stats = [
  { number: '$15.9B', label: 'AI Animation Market by 2030', icon: '📈' },
  { number: '74%', label: 'Profit Margins on Wall Art', icon: '💰' },
  { number: '<5 sec', label: 'Transformation Speed', icon: '⚡' },
  { number: '80%', label: 'Higher Sales with Personalization', icon: '🎯' }
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Start transforming art today',
    features: [
      '10 transformations/month',
      'Basic animation effects',
      'Community gallery access',
      'Standard export quality',
      'Email support'
    ],
    cta: 'Start Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$15',
    description: 'For creative professionals',
    features: [
      '500 transformations/month',
      'Advanced AI animations',
      'AR experience creator',
      'HD/4K export quality',
      'Priority support',
      'Commercial license',
      'Custom branding'
    ],
    cta: 'Start Pro Trial',
    popular: true
  },
  {
    name: 'Studio',
    price: '$35',
    description: 'For agencies and teams',
    features: [
      'Unlimited transformations',
      'All animation styles',
      'POD integration',
      'API access',
      'Team collaboration',
      'White-label options',
      'Dedicated support'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)', color: 'white', padding: '6rem 2rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}>
              🚀 Launching Phase 1: Professional AI Art Transformation Tools
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Transform Static Art into <span style={{ background: 'linear-gradient(90deg, #FFE66D, #FF6F61)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>Living Experiences</span>
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 2.5rem auto'
          }}>
            Professional AI tools that transform any artwork into dynamic animations, AR experiences, and high-margin products. Results in under 5 seconds.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup" style={{
              background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)',
              transition: 'all 0.3s ease'
            }}>
              Start Free - No Credit Card
            </Link>
            <Link href="#demo" style={{
              border: '3px solid white',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              Watch Demo (47 sec)
            </Link>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '1rem', opacity: 0.9 }}>
            Join 5,400+ artists already transforming their work
          </p>
        </div>
      </section>

      {/* --- TRANSFORMATION SHOWCASE --- */}
      <section className="section-padding" style={{ background: '#FFF8F3', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            One Platform, Endless Possibilities
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Transform static art into revenue-generating experiences with professional AI tools
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {transformationTypes.map((type) => (
              <div key={type.id} style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{type.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                  {type.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>{type.description}</p>
                <div style={{ marginBottom: '1rem' }}>
                  {type.features.map((feature, idx) => (
                    <span key={idx} style={{
                      display: 'inline-block',
                      background: 'rgba(255, 230, 109, 0.15)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '1rem',
                      fontSize: '0.85rem',
                      margin: '0.2rem',
                      color: '#4A5568'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                  Example: {type.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIVE DEMO SECTION --- */}
      <section id="demo" className="section-padding" style={{ background: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#333' }}>
            See the Magic in Action
          </h2>
          <div style={{ background: '#FFF8F3', borderRadius: '1rem', padding: '3rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '4rem' }}>🎥</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
              Transform Your First Artwork in 47 Seconds
            </h3>
            <p style={{ marginBottom: '2rem', color: '#4A5568' }}>
              Watch how a static painting becomes an immersive experience
            </p>
            <button style={{
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ▶ Play Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="section-padding" style={{ background: '#FFF8F3', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
            Start free, scale as you grow. Cancel anytime.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {pricingTiers.map((tier, idx) => (
              <div key={idx} style={{
                background: tier.popular ? 'linear-gradient(135deg, #FF6B6B, #4ECDC4)' : 'white',
                color: tier.popular ? 'white' : '#333',
                borderRadius: '1rem',
                padding: '2.5rem',
                boxShadow: tier.popular ? '0 8px 30px rgba(255, 107, 107, 0.3)' : '0 4px 20px rgba(0,0,0,0.08)',
                position: 'relative',
                transform: tier.popular ? 'scale(1.05)' : 'scale(1)'
              }}>
                {tier.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFE66D',
                    color: '#333',
                    padding: '0.3rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {tier.price}<span style={{ fontSize: '1rem', opacity: 0.8 }}>/month</span>
                </div>
                <p style={{ marginBottom: '2rem', opacity: tier.popular ? 0.95 : 0.8 }}>{tier.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {tier.features.map((feature, fidx) => (
                    <li key={fidx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ marginRight: '0.5rem' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  background: tier.popular ? 'white' : 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
                  color: tier.popular ? '#FF6B6B' : 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MARKET OPPORTUNITY --- */}
      <section className="section-padding" style={{ background: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#333' }}>
            Why Artists Choose ArtReimagined
          </h2>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, #FFF8F3, #FFF0E6)',
                borderRadius: '1rem'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FF6B6B', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#666' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="section-padding" style={{ background: '#FFF8F3', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Trusted by 5,400+ Creative Professionals
          </h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic', color: '#555' }}>
                &quot;Transformed my entire portfolio in a weekend. My canvas print sales increased 340% after adding AR experiences. The 74% margins are real.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)' }}></div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>Sarah Chen</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Digital Artist, $12K/month on POD</div>
                </div>
              </div>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic', color: '#555' }}>
                &quot;Gallery visitors spend 5x longer with my AR-enabled pieces. ArtReimagined made it possible without any technical knowledge.&quot;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #4ECDC4, #FFE66D)' }}></div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>Marcus Rodriguez</div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Gallery Owner, 200+ Artists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
        color: 'white',
        padding: '5rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Transform Your Art?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join thousands of artists creating living experiences from static art. Start free today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup" style={{
              background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Start Free Trial
            </Link>
            <Link href="/how-it-works" style={{
              border: '2px solid white',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Learn More
            </Link>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
            No credit card required • 10 free transformations • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}