// src/app/how-it-works/page.tsx
'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqItems = [
    {
      question: "Do I need an account to copy prompts?",
      answer: "No! You can browse and copy any prompt without creating an account. However, joining our community lets you vote on prompts, submit your own, and participate in challenges!"
    },
    {
      question: "Are these prompts really free to use?",
      answer: "Absolutely! All prompts on ArtReimagined are free to use for personal and commercial projects. Our community believes in sharing creativity openly."
    },
    {
      question: "How do I know which prompts work best?",
      answer: "Our community voting system helps surface the best prompts. Look for prompts with high vote counts and check the 'Trending' section for currently popular ones. We also tag prompts with their ideal AI tools."
    },
    {
      question: "Can I submit my own prompts?",
      answer: "Yes! We encourage community contributions. Simply create a free account and use our submission form. Include example outputs if possible - it helps other creators see what your prompt can do!"
    },
    {
      question: "Do prompts work the same across all AI tools?",
      answer: "While most prompts work across tools, each AI has its own strengths. We tag prompts with their optimal tools and provide tool-specific variations when helpful. Midjourney prompts often include parameters like --ar and --v that other tools don't use."
    },
    {
      question: "How often are new prompts added?",
      answer: "Our community adds dozens of new prompts daily! Check the 'Newest' filter to see the latest additions, or follow our challenges for themed prompts released weekly."
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Your Simple Guide to Using ArtReimagined
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2rem', 
            opacity: 0.9,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Discover amazing AI art prompts, copy them instantly, and create stunning visuals with your favorite AI tools. It&apos;s that easy!
          </p>
          
          <div style={{ 
            maxWidth: '600px', 
            margin: '2rem auto 0',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>🔍</div>
              <div style={{ fontSize: '1.5rem', opacity: 0.7 }}>→</div>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>📋</div>
              <div style={{ fontSize: '1.5rem', opacity: 0.7 }}>→</div>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>🎨</div>
              <div style={{ fontSize: '1.5rem', opacity: 0.7 }}>→</div>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '2.5rem', 
              color: 'var(--primary)', 
              marginBottom: '1rem' 
            }}>
              Create Amazing AI Art in 4 Simple Steps
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              From discovery to creation - here&apos;s how ArtReimagined makes AI art accessible to everyone
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem',
            marginTop: '3rem'
          }}>
            {/* Step 1 */}
            <div className="card-hover" style={{ 
              background: '#F4F6F8',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--primary)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                fontFamily: 'Montserrat'
              }}>1</div>
              <h3 style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '1.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }}>
                🔍 Discover & Browse
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Explore thousands of community-curated AI art prompts. Use our smart filters to find exactly what you&apos;re looking for by style, AI tool, or subject.
              </p>
              
              <div style={{ 
                background: 'white',
                borderRadius: '10px',
                padding: '1rem',
                margin: '1.5rem 0',
                border: '2px solid #e5e5e5'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  background: '#F4F6F8',
                  border: '2px solid var(--primary)',
                  borderRadius: '20px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem'
                }}>
                  <span>🔍 Search: &quot;cyberpunk cityscape&quot;</span>
                </div>
                <div style={{ 
                  display: 'flex',
                  gap: '0.5rem',
                  margin: '0.5rem 0'
                }}>
                  <span className="style-tag">Cyberpunk</span>
                  <span className="tool-tag">Midjourney</span>
                </div>
              </div>
              
              <p><strong>Pro Tip:</strong> Use our &quot;Trending&quot; and &quot;Top Voted&quot; filters to discover the community&apos;s favorite prompts!</p>
            </div>

            {/* Step 2 */}
            <div className="card-hover" style={{ 
              background: '#F4F6F8',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--primary)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                fontFamily: 'Montserrat'
              }}>2</div>
              <h3 style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '1.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }}>
                📋 Copy Instantly
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Found the perfect prompt? Copy it to your clipboard with one click. No more typing out complex prompts character by character!
              </p>
              
              <div style={{ 
                background: 'white',
                borderRadius: '10px',
                padding: '1rem',
                margin: '1.5rem 0',
                border: '2px solid #e5e5e5'
              }}>
                <div className="prompt-text">
                  &quot;Neon-lit cyberpunk cityscape at night, flying cars, holographic ads, rain-soaked streets --ar 16:9&quot;
                </div>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                    Copy Prompt
                  </button>
                </div>
              </div>
              
              <p><strong>Smart Feature:</strong> We automatically format prompts for your preferred AI tool!</p>
            </div>

            {/* Step 3 */}
            <div className="card-hover" style={{ 
              background: '#F4F6F8',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--primary)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                fontFamily: 'Montserrat'
              }}>3</div>
              <h3 style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '1.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }}>
                🎨 Create with AI
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Paste your copied prompt into your favorite AI art generator. Works perfectly with Midjourney, Stable Diffusion, DALL-E, and more!
              </p>
              
              <div style={{ 
                background: 'white',
                borderRadius: '10px',
                padding: '1rem',
                margin: '1.5rem 0',
                border: '2px solid #e5e5e5'
              }}>
                <div style={{ 
                  background: '#2C2F33', 
                  color: 'white', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  fontFamily: 'monospace', 
                  fontSize: '0.8rem'
                }}>
                  <div>/imagine: [Your copied prompt here]</div>
                  <div style={{ marginTop: '0.5rem', color: '#7289DA' }}>✅ Generating your artwork...</div>
                </div>
              </div>
              
              <p><strong>Compatible with:</strong> All major AI art platforms and tools!</p>
            </div>

            {/* Step 4 */}
            <div className="card-hover" style={{ 
              background: '#F4F6F8',
              borderRadius: '20px',
              padding: '2.5rem',
              textAlign: 'center'
            }}>
              <div style={{ 
                background: 'var(--primary)',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1.5rem',
                fontFamily: 'Montserrat'
              }}>4</div>
              <h3 style={{ 
                fontFamily: 'Montserrat', 
                fontSize: '1.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }}>
                ✨ Share & Contribute
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Love what you created? Share your results with the community and vote on prompts to help others discover the best ones!
              </p>
              
              <div style={{ 
                background: 'white',
                borderRadius: '10px',
                padding: '1rem',
                margin: '1.5rem 0',
                border: '2px solid #e5e5e5'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    background: 'white', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '20px', 
                    border: '2px solid #e5e5e5',
                    marginBottom: '0.5rem'
                  }}>
                    <span>👍 847</span>
                    <span>Share</span>
                  </div>
                </div>
              </div>
              
              <p><strong>Community Power:</strong> Your votes help surface the best prompts for everyone!</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Compatibility */}
      <section className="features-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem' 
            }}>
              Works with All Your Favorite AI Tools
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Our prompts are tested and optimized for the most popular AI art generators
            </p>
          </div>
          
          <div className="features-grid">
            {[
              { icon: '🎨', name: 'Midjourney', desc: 'Perfect for detailed, artistic creations' },
              { icon: '🤖', name: 'Stable Diffusion', desc: 'Open-source flexibility and control' },
              { icon: '🎯', name: 'DALL-E', desc: 'Clean, precise image generation' },
              { icon: '⚡', name: 'Leonardo AI', desc: 'Fast, high-quality results' },
              { icon: '🔥', name: 'Adobe Firefly', desc: 'Commercial-safe creations' },
              { icon: '✨', name: 'And More!', desc: 'Compatible with all major tools' }
            ].map((tool, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {tool.icon}
                </div>
                <h4 style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '1.2rem', 
                  marginBottom: '0.5rem' 
                }}>
                  {tool.name}
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container">
          <h2 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '2.5rem', 
            marginBottom: '1rem' 
          }}>
            Ready to Create Amazing AI Art?
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem', 
            opacity: 0.9 
          }}>
            Join thousands of creators who are already making incredible art with our community prompts
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/prompts" className="btn-primary text-lg px-8 py-4">
              Start Browsing Prompts
            </Link>
            <Link href="/submit-prompt" className="btn-outline text-lg px-8 py-4">
              Share Your Prompt
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '2.5rem', 
              color: 'var(--primary)', 
              marginBottom: '1rem' 
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Everything you need to know about using ArtReimagined
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{ 
                background: '#F4F6F8',
                borderRadius: '10px',
                marginBottom: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    background: openFaq === index ? 'var(--primary)' : 'none',
                    color: openFaq === index ? 'white' : '#333',
                    border: 'none',
                    width: '100%',
                    padding: '1.5rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  {item.question}
                  <span>{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}