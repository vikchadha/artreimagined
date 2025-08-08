// Gallery Page - Transformed Art Showcase
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery - See Art Transformations in Action | ArtReimagined',
  description: 'Explore stunning examples of static art transformed into animations, AR experiences, and products. See what\'s possible with ArtReimagined.',
}

const showcaseItems = [
  {
    id: 1,
    title: 'Sunset Landscape Animation',
    artist: 'Sarah Chen',
    originalType: 'Oil Painting',
    transformation: 'Depth Animation',
    stats: {
      views: '12.4K',
      sales: '$3,200/month',
      time: '3 seconds'
    },
    description: 'Static landscape transformed into living scene with moving clouds, rippling water, and dynamic lighting',
    tags: ['Animation', 'Landscape', 'Premium']
  },
  {
    id: 2,
    title: 'Interactive Portrait AR',
    artist: 'Marcus Rodriguez',
    originalType: 'Digital Portrait',
    transformation: 'AR Experience',
    stats: {
      views: '8.7K',
      sales: '$2,100/month',
      time: '4 seconds'
    },
    description: 'Portrait that responds to viewer movement with eye tracking and voice synthesis',
    tags: ['AR', 'Portrait', 'Interactive']
  },
  {
    id: 3,
    title: 'Abstract Pattern Collection',
    artist: 'Luna Park',
    originalType: 'Watercolor',
    transformation: 'Pattern Generator',
    stats: {
      views: '15.2K',
      sales: '$4,500/month',
      time: '2 seconds'
    },
    description: 'Single artwork expanded into 12 seamless patterns for textile and wallpaper',
    tags: ['POD', 'Pattern', 'Bestseller']
  },
  {
    id: 4,
    title: 'City Nights Loop',
    artist: 'Alex Turner',
    originalType: 'Photography',
    transformation: 'Motion Loop',
    stats: {
      views: '9.3K',
      sales: '$1,800/month',
      time: '3 seconds'
    },
    description: 'Urban photography enhanced with animated neon signs and traffic flow',
    tags: ['Animation', 'Urban', 'Loop']
  },
  {
    id: 5,
    title: 'Fantasy World Portal',
    artist: 'Maya Patel',
    originalType: 'Digital Illustration',
    transformation: 'AR Portal',
    stats: {
      views: '22.1K',
      sales: '$5,700/month',
      time: '5 seconds'
    },
    description: 'Illustration becomes walkthrough portal to immersive 3D fantasy environment',
    tags: ['AR', 'Fantasy', 'Featured']
  },
  {
    id: 6,
    title: 'Botanical Print Series',
    artist: 'James Wilson',
    originalType: 'Pen & Ink',
    transformation: 'Product Design',
    stats: {
      views: '11.6K',
      sales: '$3,900/month',
      time: '1 second'
    },
    description: 'Botanical drawings optimized for 50+ POD products with automatic sizing',
    tags: ['POD', 'Nature', 'Series']
  }
]

const transformationTypes = [
  { name: 'All', count: 156 },
  { name: 'Animations', count: 48 },
  { name: 'AR Experiences', count: 32 },
  { name: 'POD Products', count: 41 },
  { name: 'Motion Loops', count: 35 }
]

const successMetrics = [
  { metric: '340%', label: 'Average sales increase' },
  { metric: '5x', label: 'Longer viewer engagement' },
  { metric: '74%', label: 'Profit margins achieved' },
  { metric: '2.3M', label: 'Transformations created' }
]

export default function GalleryPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            See Art Come to Life
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
            Real transformations from our community. Every piece started as static art and became a revenue-generating experience.
          </p>
          <Link href="/signup" style={{
            background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)'
          }}>
            Start Creating Your Own
          </Link>
        </div>
      </section>

      {/* Success Metrics */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {successMetrics.map((item, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>{item.metric}</div>
                <div style={{ color: '#718096' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '2rem 2rem 0', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {transformationTypes.map((type, idx) => (
              <button key={idx} style={{
                padding: '0.8rem 1.5rem',
                background: idx === 0 ? 'linear-gradient(135deg, #FF6B6B, #4ECDC4)' : 'white',
                color: idx === 0 ? 'white' : '#4A5568',
                border: 'none',
                borderRadius: '2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)'
              }}>
                {type.name} ({type.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2rem' }}>
            {showcaseItems.map((item) => (
              <div key={item.id} style={{
                background: 'white',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(255, 107, 107, 0.08)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                {/* Placeholder for image/video */}
                <div style={{
                  height: '250px',
                  background: `linear-gradient(135deg, #FF6B6B, #4ECDC4)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <span style={{ fontSize: '3rem', opacity: 0.3 }}>🎨</span>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '1rem',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    color: '#FF6B6B'
                  }}>
                    {item.transformation}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#4A5568', marginBottom: '1rem', fontSize: '0.95rem' }}>
                    {item.description}
                  </p>

                  {/* Artist info */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem' }}>
                    <div>
                      <strong style={{ color: '#1A1A2E' }}>Artist:</strong> {item.artist}
                    </div>
                    <div>
                      <strong style={{ color: '#1A1A2E' }}>Original:</strong> {item.originalType}
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '1rem',
                    background: '#FFF8F3',
                    borderRadius: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold', color: '#FF6B6B' }}>{item.stats.views}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>Views</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold', color: '#FF6B6B' }}>{item.stats.sales}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>Revenue</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: 'bold', color: '#FF6B6B' }}>{item.stats.time}</div>
                      <div style={{ fontSize: '0.8rem', color: '#718096' }}>Transform</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        background: tag === 'Featured' || tag === 'Bestseller' 
                          ? 'linear-gradient(135deg, #FF6B6B, #FFE66D)' 
                          : '#FFF8F3',
                        color: tag === 'Featured' || tag === 'Bestseller' ? 'white' : '#4A5568',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '1rem',
                        fontSize: '0.85rem',
                        fontWeight: tag === 'Featured' || tag === 'Bestseller' ? 'bold' : 'normal'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button style={{
              background: 'white',
              color: '#FF6B6B',
              border: '3px solid #FF6B6B',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              cursor: 'pointer'
            }}>
              Load More Examples
            </button>
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Artist Spotlight
          </h2>
          
          <div style={{ background: '#FFF8F3', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(255, 107, 107, 0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                  margin: '0 auto'
                }}></div>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Sarah Chen
                </h3>
                <p style={{ color: '#FF6B6B', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Top Transformer • $12K/month revenue
                </p>
                <p style={{ color: '#4A5568', lineHeight: '1.6', marginBottom: '1rem' }}>
                  &quot;I was selling my paintings for $200-300 each at local galleries. Now, with animated versions and POD products, 
                  I&apos;m earning $12,000 monthly. The 74% margins on canvas prints alone changed my life. ArtReimagined didn&apos;t just 
                  transform my art—it transformed my career.&quot;
                </p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <strong style={{ color: '#1A1A2E' }}>156</strong> <span style={{ color: '#718096' }}>Transformations</span>
                  </div>
                  <div>
                    <strong style={{ color: '#1A1A2E' }}>340%</strong> <span style={{ color: '#718096' }}>Sales increase</span>
                  </div>
                  <div>
                    <strong style={{ color: '#1A1A2E' }}>28</strong> <span style={{ color: '#718096' }}>Product types</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Your Art Deserves to Be Seen Like This
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join thousands of artists transforming static art into living experiences.
          </p>
          <Link href="/signup" style={{
            background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
            color: 'white',
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '1rem',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)'
          }}>
            Start Your First Transformation
          </Link>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
            10 free transformations • No credit card required
          </p>
        </div>
      </section>
    </main>
  )
}