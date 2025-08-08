// Pricing Page - SaaS Tiers
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Plans | ArtReimagined',
  description: 'Choose the perfect plan for transforming your art. Start free with 10 transformations. Pro plans from $15/month. No hidden fees.',
}

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out our platform',
    features: [
      { text: '10 transformations per month', included: true },
      { text: 'Basic animation effects', included: true },
      { text: 'Standard export quality (1080p)', included: true },
      { text: 'Community gallery access', included: true },
      { text: 'Email support', included: true },
      { text: 'Watermark on exports', included: true },
      { text: 'Advanced AI animations', included: false },
      { text: 'AR experience creator', included: false },
      { text: 'POD integrations', included: false },
      { text: 'Commercial license', included: false }
    ],
    cta: 'Start Free',
    ctaLink: '/signup',
    popular: false
  },
  {
    name: 'Pro',
    price: '$15',
    period: 'per month',
    description: 'For professional artists and creators',
    features: [
      { text: '500 transformations per month', included: true },
      { text: 'All animation styles & effects', included: true },
      { text: 'HD/4K export quality', included: true },
      { text: 'No watermarks', included: true },
      { text: 'Priority support', included: true },
      { text: 'Commercial license', included: true },
      { text: 'AR experience creator', included: true },
      { text: 'Custom branding options', included: true },
      { text: 'Batch processing', included: true },
      { text: 'API access', included: false }
    ],
    cta: 'Start 7-Day Trial',
    ctaLink: '/signup?plan=pro',
    popular: true,
    savings: 'Save 20% with annual billing'
  },
  {
    name: 'Studio',
    price: '$35',
    period: 'per month',
    description: 'For agencies, teams, and power users',
    features: [
      { text: 'Unlimited transformations', included: true },
      { text: 'Everything in Pro', included: true },
      { text: 'POD marketplace integration', included: true },
      { text: 'API access (10K calls/month)', included: true },
      { text: 'Team collaboration (5 seats)', included: true },
      { text: 'White-label options', included: true },
      { text: 'Custom AI model training', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Priority render queue', included: true },
      { text: 'Advanced analytics', included: true }
    ],
    cta: 'Start 14-Day Trial',
    ctaLink: '/signup?plan=studio',
    popular: false,
    savings: 'Save 25% with annual billing'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'For large organizations with custom needs',
    features: [
      { text: 'Everything in Studio', included: true },
      { text: 'Unlimited API calls', included: true },
      { text: 'Unlimited team seats', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'On-premise deployment option', included: true },
      { text: 'Custom AI model development', included: true },
      { text: 'Dedicated support team', included: true },
      { text: 'Custom billing & invoicing', included: true },
      { text: 'Security & compliance review', included: true }
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?type=enterprise',
    popular: false
  }
]

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the change takes effect at your next billing cycle.'
  },
  {
    question: 'What counts as a transformation?',
    answer: 'Each time you process an artwork through any of our AI tools (animation, AR, pattern generation, etc.), it counts as one transformation. Re-downloading previous transformations doesn\'t count.'
  },
  {
    question: 'Do unused transformations roll over?',
    answer: 'Monthly transformation credits don\'t roll over to the next month. However, you can purchase additional transformation packs that never expire.'
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: 'Yes! Pro plans include a 7-day free trial, and Studio plans include a 14-day free trial. No credit card required to start.'
  },
  {
    question: 'Can I use transformed art commercially?',
    answer: 'Commercial use is included with Pro, Studio, and Enterprise plans. The Free plan is for personal use only.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Stripe.'
  }
]

const comparisonFeatures = [
  { feature: 'Transformations per month', free: '10', pro: '500', studio: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Export quality', free: '1080p', pro: '4K', studio: '8K', enterprise: '8K+' },
  { feature: 'Processing speed', free: 'Standard', pro: 'Fast', studio: 'Priority', enterprise: 'Dedicated' },
  { feature: 'Support response time', free: '48 hours', pro: '24 hours', studio: '4 hours', enterprise: '1 hour' },
  { feature: 'Team members', free: '1', pro: '1', studio: '5', enterprise: 'Unlimited' },
  { feature: 'API access', free: '❌', pro: '❌', studio: '✓', enterprise: '✓' },
  { feature: 'White-label options', free: '❌', pro: '❌', studio: '✓', enterprise: '✓' },
  { feature: 'POD integration', free: '❌', pro: 'Limited', studio: 'Full', enterprise: 'Custom' }
]

export default function PricingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F3' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 2rem' }}>
            Start free. Scale as you grow. Cancel anytime.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '2rem' }}>💰</span>
              <p style={{ marginTop: '0.5rem' }}>No hidden fees</p>
            </div>
            <div>
              <span style={{ fontSize: '2rem' }}>🎯</span>
              <p style={{ marginTop: '0.5rem' }}>No setup costs</p>
            </div>
            <div>
              <span style={{ fontSize: '2rem' }}>🔄</span>
              <p style={{ marginTop: '0.5rem' }}>Switch plans anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '5rem 2rem', background: 'white', marginTop: '-2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {pricingPlans.map((plan, idx) => (
              <div key={idx} style={{
                background: plan.popular ? 'linear-gradient(135deg, #FF6B6B, #4ECDC4)' : 'white',
                color: plan.popular ? 'white' : '#1A1A2E',
                borderRadius: '1rem',
                padding: '2.5rem',
                boxShadow: plan.popular ? '0 8px 30px rgba(255, 107, 107, 0.3)' : '0 4px 20px rgba(255, 107, 107, 0.08)',
                border: plan.popular ? 'none' : '2px solid #FFE6E6',
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFE66D',
                    color: '#1A1A2E',
                    padding: '0.3rem 1rem',
                    borderRadius: '1rem',
                    fontSize: '0.85rem',
                    fontWeight: 'bold'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span style={{ fontSize: '1rem', opacity: 0.8 }}> {plan.period}</span>
                  )}
                </div>
                {plan.savings && (
                  <div style={{
                    background: plan.popular ? 'rgba(255,255,255,0.2)' : 'rgba(255, 230, 109, 0.2)',
                    color: plan.popular ? 'white' : '#FF6B6B',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    display: 'inline-block'
                  }}>
                    {plan.savings}
                  </div>
                )}
                <p style={{ marginBottom: '2rem', opacity: plan.popular ? 0.95 : 0.8 }}>
                  {plan.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} style={{
                      marginBottom: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      opacity: feature.included ? 1 : 0.5
                    }}>
                      <span style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span style={{ textDecoration: feature.included ? 'none' : 'line-through' }}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link href={plan.ctaLink} style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  background: plan.popular ? 'linear-gradient(135deg, #FFE66D, #FF6B6B)' : 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1rem',
                  boxShadow: '0 2px 10px rgba(255, 107, 107, 0.2)',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '4rem 2rem', background: '#FFF8F3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1A1A2E', fontFamily: 'Playfair Display, Georgia, serif' }}>
            Compare Plans
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', background: 'white', borderRadius: '1rem', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', fontWeight: 'bold' }}>Feature</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Free</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Pro</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Studio</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #FFE6E6' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: '#1A1A2E' }}>{row.feature}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#4A5568' }}>{row.free}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#4A5568' }}>{row.pro}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#4A5568' }}>{row.studio}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#4A5568' }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Start Transforming Art Today
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.95 }}>
            Join 5,400+ artists already using ArtReimagined to bring their art to life.
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
            10 free transformations • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  )
}