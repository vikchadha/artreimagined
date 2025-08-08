// About ArtReimagined
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About ArtReimagined - Transforming Static Art into Living Experiences',
  description: 'Learn how ArtReimagined is democratizing art transformation with AI tools that turn static artwork into animations, AR experiences, and high-margin products.',
}

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Democratizing Art Transformation
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto' }}>
            We believe every artist should have access to professional-grade transformation tools that turn static art into living experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1A1A2E', textAlign: 'center', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Our Mission: Bridge Art and Technology
          </h2>
          
          <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ background: '#FFF8F3', padding: '2rem', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>
                The Problem We Solve
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4A5568' }}>
                Artists create incredible static works but lack the technical expertise to transform them into the dynamic experiences modern audiences crave. Meanwhile, the POD market offers 74% margins on wall art, but most artists never capture this value. Traditional galleries take 50-60% commissions while providing limited reach.
              </p>
            </div>

            <div style={{ background: '#FFF8F3', padding: '2rem', borderRadius: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>
                Our Solution
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4A5568' }}>
                ArtReimagined provides professional AI transformation tools that work in under 5 seconds. No technical knowledge required. Artists upload their work, choose transformation styles, and instantly create animations, AR experiences, and merchandise-ready designs. We handle the complexity so artists can focus on creativity.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>$15.9B</div>
              <div style={{ color: '#718096' }}>AI Animation Market by 2030</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>74%</div>
              <div style={{ color: '#718096' }}>Profit Margins on Wall Art</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>5,400+</div>
              <div style={{ color: '#718096' }}>Artists Already Transforming</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>&lt;5 sec</div>
              <div style={{ color: '#718096' }}>Average Transformation Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section style={{ padding: '4rem 2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1A1A2E', textAlign: 'center', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Our Approach: Professional Tools, Simple Interface
          </h2>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)' }}>
              <span style={{ fontSize: '2.5rem' }}>🎨</span>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Artist-First Design
                </h3>
                <p style={{ color: '#4A5568' }}>
                  Built by artists, for artists. Every feature designed to enhance creativity, not complicate it. Professional results without the learning curve.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)' }}>
              <span style={{ fontSize: '2.5rem' }}>⚡</span>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Speed Matters
                </h3>
                <p style={{ color: '#4A5568' }}>
                  Results in under 5 seconds. No waiting, no queues. Transform hundreds of artworks in the time it takes others to process one.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)' }}>
              <span style={{ fontSize: '2.5rem' }}>💰</span>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Revenue-Focused
                </h3>
                <p style={{ color: '#4A5568' }}>
                  Every feature designed to help artists monetize. From 74% margin POD products to AR experiences that command premium prices.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(255, 107, 107, 0.1)' }}>
              <span style={{ fontSize: '2.5rem' }}>🤝</span>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  Fair Economics
                </h3>
                <p style={{ color: '#4A5568' }}>
                  70/30 revenue share favoring artists. Compare that to traditional galleries taking 50-60% or other platforms keeping 80-90%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1A1A2E', textAlign: 'center', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Founded by a Technology Democratizer
          </h2>
          
          <div style={{ background: '#FFF8F3', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(255, 107, 107, 0.1)' }}>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4A5568', marginBottom: '1.5rem' }}>
              <a href="https://vikchadha.com" target="_blank" rel="noopener noreferrer" style={{ color: '#FF6B6B', fontWeight: 'bold' }}>Vik Chadha</a> launched ArtReimagined after recognizing a massive market inefficiency: the convergence of a $15.9B AI animation market with a $57-103B POD opportunity, yet artists lacked accessible tools to capture this value.
            </p>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4A5568', marginBottom: '1.5rem' }}>
              &quot;I watched artists struggle with complex AI tools while missing out on 74% profit margins in POD. Meanwhile, companies like Canva reached $40B valuations by democratizing design. The opportunity was obvious: professional art transformation tools with Canva-like simplicity.&quot;
            </p>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4A5568', marginBottom: '1.5rem' }}>
              Having pioneered natural language processing at GE in the 1990s and built user-friendly interfaces for complex systems at GlowTouch and Backupify, Vik understood how to bridge the gap between powerful technology and everyday users.
            </p>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4A5568', marginBottom: '1.5rem' }}>
              &quot;WOMBO Dream proved the demand with 150 million downloads. But they focused on creation, not transformation. Artists already have incredible work—they need tools to bring it to life and monetize it. That&apos;s our focus.&quot;
            </p>
            
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#4A5568' }}>
              ArtReimagined&apos;s Phase 1 launches with professional transformation tools. Phase 2 adds marketplace integration. Phase 3 creates the complete ecosystem where artists transform, monetize, and thrive—all while keeping 70% of revenues instead of the 10-20% others offer.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Our Vision: Every Artist Empowered
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', opacity: 0.95 }}>
            We envision a world where every artist can transform their static creations into living experiences that generate sustainable income. Where a painting becomes an animated masterpiece, a sketch transforms into an AR experience, and every artwork finds its audience through high-margin products.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem', opacity: 0.95 }}>
            Join us in democratizing art transformation. The tools are ready. The market is massive. Your art deserves to live.
          </p>
          <Link href="/signup" style={{
            background: 'linear-gradient(135deg, #FFE66D, #FF6B6B)',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            borderRadius: '1rem',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(255, 230, 109, 0.3)'
          }}>
            Start Transforming Art Today
          </Link>
        </div>
      </section>
    </main>
  );
}