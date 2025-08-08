// How It Works Page - Art Transformation Process
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works - Transform Art in 3 Simple Steps | ArtReimagined',
  description: 'Learn how to transform static art into animations, AR experiences, and POD products. Simple 3-step process with results in under 5 seconds.',
}

const steps = [
  {
    number: '1',
    title: 'Upload Your Art',
    icon: '📤',
    description: 'Drop your artwork or paste a URL. We support all major formats including PNG, JPG, SVG, PSD.',
    features: [
      'Batch upload up to 100 files',
      'Direct import from Instagram/DeviantArt',
      'Cloud storage integration',
      'No quality loss'
    ],
    time: 'Instant'
  },
  {
    number: '2',
    title: 'Choose Transformation',
    icon: '🎨',
    description: 'Select from 15+ AI transformation tools. Preview effects in real-time before processing.',
    features: [
      'Animation styles',
      'AR experiences',
      'Product mockups',
      'Style variations'
    ],
    time: '< 5 seconds'
  },
  {
    number: '3',
    title: 'Export & Monetize',
    icon: '💰',
    description: 'Download in multiple formats or send directly to POD platforms and marketplaces.',
    features: [
      'HD/4K/8K quality',
      'Multiple file formats',
      'Direct POD integration',
      'Instant sharing'
    ],
    time: 'Immediate'
  }
]

const transformationTypes = [
  {
    category: 'Animations',
    icon: '🎬',
    examples: [
      'Depth & parallax effects',
      'Seamless motion loops',
      'Character animation',
      'Environmental effects'
    ]
  },
  {
    category: 'AR Experiences',
    icon: '🔮',
    examples: [
      'Interactive portals',
      '3D scene mapping',
      'Living portraits',
      'Virtual galleries'
    ]
  },
  {
    category: 'POD Products',
    icon: '🛍️',
    examples: [
      'Canvas prints',
      'Apparel designs',
      'Home decor',
      'Digital downloads'
    ]
  },
  {
    category: 'Enhancements',
    icon: '✨',
    examples: [
      'Resolution upscaling',
      'Style transfer',
      'Color grading',
      'Pattern generation'
    ]
  }
]

const faqs = [
  {
    question: 'What file formats are supported?',
    answer: 'We support all major image formats including PNG, JPG, GIF, SVG, PSD, TIFF, and RAW files. Videos can be extracted frame-by-frame for transformation.'
  },
  {
    question: 'How fast is the transformation process?',
    answer: 'Most transformations complete in under 5 seconds. Complex AR experiences may take up to 10 seconds. Batch processing runs multiple transformations simultaneously.'
  },
  {
    question: 'Can I preview before finalizing?',
    answer: 'Yes! All transformations include real-time preview. You can adjust parameters and see changes instantly before committing to the final render.'
  },
  {
    question: 'What quality options are available?',
    answer: 'Free users get 1080p exports. Pro users unlock 4K quality. Studio and Enterprise plans support 8K+ resolution and custom specifications.'
  },
  {
    question: 'How do POD integrations work?',
    answer: 'Connect your Printful, Printify, or other POD accounts. Transformed art automatically syncs with proper sizing and formats for each product type.'
  },
  {
    question: 'Can I transform multiple artworks at once?',
    answer: 'Yes! Pro users can batch process up to 50 files. Studio users get 100 files. Enterprise users have unlimited batch processing.'
  }
]

export default function HowItWorksPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Transform Art in 3 Simple Steps
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
            No technical skills required. Upload, transform, monetize. Professional results in under 5 seconds.
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
            Start Your First Transformation
          </Link>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: `linear-gradient(135deg, ${idx === 0 ? '#FF6B6B, #4ECDC4' : idx === 1 ? '#4ECDC4, #FFE66D' : '#FFE66D, #FF6B6B'})`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '3rem',
                  color: 'white',
                  boxShadow: '0 8px 25px rgba(255, 107, 107, 0.2)'
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Step {step.number}: {step.title}
                </h3>
                <p style={{ color: '#4A5568', marginBottom: '1rem' }}>
                  {step.description}
                </p>
                <div style={{
                  background: '#FFF8F3',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  color: '#FF6B6B',
                  fontWeight: 'bold'
                }}>
                  ⏱ {step.time}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{
                    display: 'none',
                    '@media (min-width: 768px)': { display: 'block' },
                    position: 'absolute',
                    right: '-30px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '2rem',
                    color: '#4ECDC4'
                  }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      {steps.map((step, idx) => (
        <section key={idx} style={{ 
          padding: '4rem 2rem', 
          background: idx % 2 === 0 ? '#FFF8F3' : 'white' 
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  STEP {step.number}
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#4A5568', marginBottom: '2rem', lineHeight: '1.6' }}>
                  {step.description}
                </p>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {step.features.map((feature, fidx) => (
                    <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#FF6B6B', fontSize: '1.2rem' }}>✓</span>
                      <span style={{ color: '#4A5568' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                  height: '300px',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  opacity: 0.3
                }}>
                  {step.icon}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Transformation Types */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            What You Can Create
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {transformationTypes.map((type, idx) => (
              <div key={idx} style={{
                background: '#FFF8F3',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(255, 107, 107, 0.08)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{type.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {type.category}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {type.examples.map((example, eidx) => (
                    <li key={eidx} style={{ color: '#4A5568', marginBottom: '0.5rem' }}>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section style={{ padding: '4rem 2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Why Artists Love Our Process
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF6B6B', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>5 sec</div>
              <div style={{ color: '#718096' }}>Average transformation time</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF6B6B', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>74%</div>
              <div style={{ color: '#718096' }}>Profit margins on POD</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF6B6B', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>340%</div>
              <div style={{ color: '#718096' }}>Average sales increase</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FF6B6B', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>5,400+</div>
              <div style={{ color: '#718096' }}>Artists transforming</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                background: '#FFF8F3',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: '0 2px 10px rgba(255, 107, 107, 0.05)'
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#4A5568', lineHeight: '1.6' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
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
            Ready to Start Transforming?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join thousands of artists already creating living experiences from their static art.
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
            <Link href="/tools" style={{
              border: '3px solid white',
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '1rem',
              textDecoration: 'none'
            }}>
              Explore Tools
            </Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
            10 free transformations • No credit card required
          </p>
        </div>
      </section>
    </main>
  )
}