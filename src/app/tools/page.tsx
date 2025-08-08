// Tools Page - AI Art Transformation Features
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Art Transformation Tools - Animate, AR, POD | ArtReimagined',
  description: 'Professional AI tools to transform static art into animations, AR experiences, and print-on-demand products. Results in under 5 seconds.',
}

const tools = [
  {
    category: 'Animation Tools',
    icon: '🎬',
    description: 'Bring static art to life with cinematic animations',
    tools: [
      {
        name: 'Depth Animation',
        description: 'Create 3D depth and parallax effects from 2D images',
        features: ['Auto depth mapping', 'Customizable motion paths', 'Export to MP4/GIF'],
        speed: '3 seconds',
        bestFor: 'Landscapes, portraits, architectural art'
      },
      {
        name: 'Motion Loops',
        description: 'Generate seamless animated loops for digital displays',
        features: ['Perfect loops', 'Particle effects', 'Weather simulation'],
        speed: '4 seconds',
        bestFor: 'Wall art, digital frames, social media'
      },
      {
        name: 'Character Animation',
        description: 'Animate characters with AI-powered motion',
        features: ['Facial animation', 'Body movement', 'Lip sync'],
        speed: '5 seconds',
        bestFor: 'Portraits, illustrations, character art'
      }
    ]
  },
  {
    category: 'AR Experience Tools',
    icon: '🔮',
    description: 'Create immersive augmented reality experiences',
    tools: [
      {
        name: 'AR Portal Creator',
        description: 'Transform art into walkthrough AR portals',
        features: ['Mobile-ready', 'No app required', 'QR activation'],
        speed: '4 seconds',
        bestFor: 'Gallery exhibitions, interactive installations'
      },
      {
        name: '3D Scene Builder',
        description: 'Convert 2D art into explorable 3D environments',
        features: ['Depth layers', 'Interactive hotspots', 'Sound integration'],
        speed: '5 seconds',
        bestFor: 'Immersive storytelling, virtual galleries'
      },
      {
        name: 'Living Portraits',
        description: 'Make portraits come alive with AR',
        features: ['Eye tracking', 'Voice synthesis', 'Gesture response'],
        speed: '3 seconds',
        bestFor: 'Museums, educational content, marketing'
      }
    ]
  },
  {
    category: 'Product Design Tools',
    icon: '🎨',
    description: 'Transform art for print-on-demand merchandise',
    tools: [
      {
        name: 'Smart Mockup Generator',
        description: 'Instantly visualize art on 100+ products',
        features: ['Realistic rendering', 'Bulk generation', 'Size optimization'],
        speed: '2 seconds',
        bestFor: 'POD listings, marketing materials'
      },
      {
        name: 'Pattern Creator',
        description: 'Convert single artworks into seamless patterns',
        features: ['Tile generation', 'Color variations', 'Scale adjustment'],
        speed: '3 seconds',
        bestFor: 'Textiles, wallpaper, packaging'
      },
      {
        name: 'Product Optimizer',
        description: 'Automatically adapt art for different product specs',
        features: ['Format conversion', 'DPI optimization', 'Color profiles'],
        speed: '1 second',
        bestFor: 'Multi-platform selling, quality consistency'
      }
    ]
  },
  {
    category: 'Enhancement Tools',
    icon: '✨',
    description: 'Improve and stylize artwork with AI',
    tools: [
      {
        name: 'Resolution Upscaler',
        description: 'Enhance image quality up to 8K resolution',
        features: ['AI upscaling', 'Detail enhancement', 'Noise reduction'],
        speed: '2 seconds',
        bestFor: 'Print preparation, old artwork restoration'
      },
      {
        name: 'Style Transfer',
        description: 'Apply artistic styles while preserving content',
        features: ['50+ art styles', 'Custom style upload', 'Intensity control'],
        speed: '3 seconds',
        bestFor: 'Creating variations, artistic exploration'
      },
      {
        name: 'Smart Color Grading',
        description: 'Professional color correction and mood enhancement',
        features: ['Auto correction', 'Mood presets', 'Batch processing'],
        speed: '1 second',
        bestFor: 'Collection consistency, market optimization'
      }
    ]
  }
]

const integrations = [
  { name: 'Printful', description: '1,300+ products', icon: '🏭' },
  { name: 'Shopify', description: 'E-commerce ready', icon: '🛍️' },
  { name: 'Instagram', description: 'Direct sharing', icon: '📱' },
  { name: 'Etsy', description: 'Marketplace sync', icon: '🎪' },
  { name: 'WordPress', description: 'Plugin available', icon: '🌐' },
  { name: 'Canva', description: 'Design integration', icon: '🎨' }
]

export default function ToolsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Professional AI Transformation Tools
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '800px', margin: '0 auto 2rem' }}>
            Transform static art into revenue-generating experiences with our suite of AI-powered tools. 
            Every transformation in under 5 seconds.
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
              boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)'
            }}>
              Start Free Trial
            </Link>
            <Link href="/pricing" style={{
              border: '3px solid white',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              textDecoration: 'none'
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '3rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>15+</div>
              <div style={{ color: '#718096' }}>AI Transformation Tools</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>&lt;5 sec</div>
              <div style={{ color: '#718096' }}>Average Processing Time</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>4K/8K</div>
              <div style={{ color: '#718096' }}>Export Quality</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>100+</div>
              <div style={{ color: '#718096' }}>Product Templates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Categories */}
      {tools.map((category, categoryIdx) => (
        <section key={categoryIdx} style={{ 
          padding: '4rem 2rem', 
          background: categoryIdx % 2 === 0 ? '#ffffff' : '#FFF8F3' 
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '3rem' }}>{category.icon}</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
                {category.category}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#4A5568' }}>{category.description}</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {category.tools.map((tool, toolIdx) => (
                <div key={toolIdx} style={{
                  background: categoryIdx % 2 === 0 ? '#FFF8F3' : 'white',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 20px rgba(255, 107, 107, 0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {tool.name}
                  </h3>
                  <p style={{ color: '#4A5568', marginBottom: '1rem' }}>{tool.description}</p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <strong style={{ color: '#1A1A2E' }}>Features:</strong>
                    <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem', color: '#4A5568' }}>
                      {tool.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                    <div>
                      <strong style={{ color: '#1A1A2E' }}>Speed:</strong>{' '}
                      <span style={{ color: '#FF6B6B' }}>{tool.speed}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <strong style={{ color: '#1A1A2E' }}>Best for:</strong>{' '}
                      <span style={{ color: '#4A5568' }}>{tool.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Integrations Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Seamless Integrations
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#4A5568', textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Connect with your favorite platforms and marketplaces. Export anywhere, sell everywhere.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {integrations.map((integration, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '1.5rem',
                background: '#FFF8F3',
                borderRadius: '1rem',
                transition: 'transform 0.3s ease',
                boxShadow: '0 2px 10px rgba(255, 107, 107, 0.05)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{integration.icon}</div>
                <div style={{ fontWeight: 'bold', color: '#1A1A2E', marginBottom: '0.25rem' }}>{integration.name}</div>
                <div style={{ fontSize: '0.9rem', color: '#718096' }}>{integration.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section style={{ padding: '4rem 2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Simple 3-Step Workflow
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>Upload</h3>
              <p style={{ color: '#4A5568' }}>Drop your artwork or paste a URL. Supports all major formats.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4ECDC4, #FFE66D)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>Transform</h3>
              <p style={{ color: '#4A5568' }}>Choose your transformation style. AI processes in under 5 seconds.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>Export</h3>
              <p style={{ color: '#4A5568' }}>Download, share, or send directly to POD platforms.</p>
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
            Ready to Transform Your Art?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Start with 10 free transformations. No credit card required.
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
            Get Started Free
          </Link>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Join 5,400+ artists transforming their work
          </p>
        </div>
      </section>
    </main>
  )
}