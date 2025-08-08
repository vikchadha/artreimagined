// Contact Page
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Get Support & Partnership Info | ArtReimagined',
  description: 'Get help with ArtReimagined platform, explore partnership opportunities, or contact our sales team. We respond within 24 hours.',
}

const contactOptions = [
  {
    icon: '💬',
    title: 'General Support',
    description: 'Questions about features, billing, or your account',
    action: 'support@artreimagined.com',
    response: 'Response within 24 hours',
    type: 'email'
  },
  {
    icon: '🚀',
    title: 'Sales & Enterprise',
    description: 'Custom plans, volume pricing, or enterprise features',
    action: 'sales@artreimagined.com',
    response: 'Response within 4 hours',
    type: 'email'
  },
  {
    icon: '🤝',
    title: 'Partnerships',
    description: 'Integration partners, POD providers, or collaborations',
    action: 'partnerships@artreimagined.com',
    response: 'Response within 2 business days',
    type: 'email'
  },
  {
    icon: '🐛',
    title: 'Report Issues',
    description: 'Technical problems or bug reports',
    action: 'tech@artreimagined.com',
    response: 'Priority handling',
    type: 'email'
  }
]

const socialLinks = [
  { name: 'Twitter', handle: '@artreimagined', url: 'https://twitter.com/artreimagined', icon: '🐦' },
  { name: 'Instagram', handle: '@artreimagined', url: 'https://instagram.com/artreimagined', icon: '📷' },
  { name: 'LinkedIn', handle: 'ArtReimagined', url: 'https://linkedin.com/company/artreimagined', icon: '💼' },
  { name: 'YouTube', handle: 'ArtReimagined', url: 'https://youtube.com/@artreimagined', icon: '📺' }
]

const offices = [
  {
    location: 'San Francisco (HQ)',
    address: 'Coming Soon',
    timezone: 'PST (UTC-8)'
  },
  {
    location: 'Support Hours',
    address: 'Monday - Friday',
    timezone: '9 AM - 6 PM PST'
  }
]

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            We&apos;re Here to Help
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto' }}>
            Questions about transforming art? Need technical support? Looking to partner? Let&apos;s talk.
          </p>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section style={{ padding: '3rem 2rem', background: 'white', borderBottom: '1px solid #FFE6E6' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>24hr</span>
              <p style={{ color: '#718096', marginTop: '0.5rem' }}>Average response time</p>
            </div>
            <div>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>98%</span>
              <p style={{ color: '#718096', marginTop: '0.5rem' }}>Satisfaction rate</p>
            </div>
            <div>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}>5,400+</span>
              <p style={{ color: '#718096', marginTop: '0.5rem' }}>Artists supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            How Can We Help?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {contactOptions.map((option, idx) => (
              <div key={idx} style={{
                background: '#FFF8F3',
                padding: '2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(255, 107, 107, 0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{option.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {option.title}
                </h3>
                <p style={{ color: '#4A5568', marginBottom: '1rem', minHeight: '3rem' }}>
                  {option.description}
                </p>
                <a href={`mailto:${option.action}`} style={{
                  color: '#FF6B6B',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  {option.action}
                </a>
                <p style={{ fontSize: '0.9rem', color: '#718096' }}>
                  {option.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '4rem 2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Send Us a Message
          </h2>
          
          <form style={{ background: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(255, 107, 107, 0.08)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#1A1A2E' }}>
                Your Name *
              </label>
              <input type="text" required style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #FFE6E6',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }} />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#1A1A2E' }}>
                Email Address *
              </label>
              <input type="email" required style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #FFE6E6',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }} />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#1A1A2E' }}>
                Subject *
              </label>
              <select required style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #FFE6E6',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                background: 'white'
              }}>
                <option value="">Select a topic...</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feature">Feature Request</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="enterprise">Enterprise Sales</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#1A1A2E' }}>
                Message *
              </label>
              <textarea required rows={6} style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #FFE6E6',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                resize: 'vertical'
              }} />
            </div>
            
            <button type="submit" style={{
              width: '100%',
              padding: '1rem',
              background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
              color: 'white',
              border: 'none',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.2)'
            }}>
              Send Message
            </button>
            
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#4A5568', textAlign: 'center' }}>
              We&apos;ll respond within 24 hours during business days
            </p>
          </form>
        </div>
      </section>

      {/* Social & Office Info */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* Social Links */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                Follow Us
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {socialLinks.map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.8rem',
                    background: '#FFF8F3',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    color: '#1A1A2E',
                    transition: 'background 0.3s ease'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{social.icon}</span>
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{social.name}</div>
                      <div style={{ fontSize: '0.9rem', color: '#718096' }}>{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Office Info */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1A1A2E', fontFamily: 'Space Grotesk, sans-serif' }}>
                Office Hours
              </h3>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {offices.map((office, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    background: '#FFF8F3',
                    borderRadius: '0.5rem'
                  }}>
                    <div style={{ fontWeight: 'bold', color: '#1A1A2E', marginBottom: '0.5rem' }}>
                      {office.location}
                    </div>
                    <div style={{ color: '#4A5568', marginBottom: '0.25rem' }}>{office.address}</div>
                    <div style={{ fontSize: '0.9rem', color: '#718096' }}>{office.timezone}</div>
                  </div>
                ))}
                <p style={{ color: '#4A5568', fontSize: '0.95rem' }}>
                  For urgent technical issues outside business hours, Pro and Studio members can use priority support.
                </p>
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
            Ready to Transform Your Art?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join thousands of artists creating living experiences from static art.
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
        </div>
      </section>
    </main>
  );
}