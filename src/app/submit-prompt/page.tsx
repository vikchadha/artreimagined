// src/app/submit-prompt/page.tsx
'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function SubmitPromptPage() {
  const [formData, setFormData] = useState({
    promptText: '',
    promptTitle: '',
    artStyle: '',
    aiTool: '',
    subjects: [] as string[],
    description: '',
    exampleImages: [] as File[]
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject) 
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      // Reset form
      setFormData({
        promptText: '',
        promptTitle: '',
        artStyle: '',
        aiTool: '',
        subjects: [],
        description: '',
        exampleImages: []
      })
    }, 2000)
  }

  const canSubmit = formData.promptText.length > 20 && 
                   formData.promptTitle.length > 5 && 
                   formData.artStyle && 
                   formData.aiTool && 
                   formData.subjects.length > 0

  if (showSuccess) {
    return (
      <div className="min-h-screen">
        <Header />
        <section style={{ 
          background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
          color: 'white',
          padding: '4rem 0',
          textAlign: 'center',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🎉</div>
            <h2 style={{ 
              fontFamily: 'Montserrat', 
              fontSize: '2.5rem', 
              marginBottom: '1rem' 
            }}>
              Prompt Submitted Successfully!
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem', 
              opacity: 0.9 
            }}>
              Thank you for contributing to our community! Your prompt will be reviewed and made available to fellow creators soon.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                href="/prompts" 
                className="btn-primary"
                style={{ 
                  background: 'white', 
                  color: '#4CAF50',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem'
                }}
              >
                Browse Prompts
              </Link>
              <button 
                onClick={() => setShowSuccess(false)}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '1rem 2rem',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1.1rem'
                }}
              >
                Submit Another
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

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
            Share Your Creative AI Prompts
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '2rem', 
            opacity: 0.9,
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Help our community create amazing art! Share your best prompts, get feedback, and inspire creators around the world.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '3rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            {[
              { number: '12,000+', label: 'Community Prompts' },
              { number: '5,400+', label: 'Active Contributors' },
              { number: '150k+', label: 'Prompts Copied' }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <span style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '2.5rem', 
                  fontWeight: 'bold',
                  display: 'block'
                }}>
                  {stat.number}
                </span>
                <span style={{ fontSize: '1rem', opacity: 0.9 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Guidelines Sidebar */}
            <div style={{ 
              background: '#F4F6F8',
              borderRadius: '15px',
              padding: '2rem',
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ 
                fontFamily: 'Montserrat', 
                color: 'var(--primary)', 
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>
                📋 Submission Guidelines
              </h3>
              
              {[
                { icon: '✓', text: 'Original prompts only', desc: 'Share your own creations or properly credit sources' },
                { icon: '✓', text: 'Test before sharing', desc: 'Make sure your prompt works well with the specified AI tool' },
                { icon: '✓', text: 'Be descriptive', desc: 'Include specific style, mood, and technical details' },
                { icon: '✓', text: 'Add context', desc: 'Brief description helps others understand your prompt&apos;s purpose' },
                { icon: '✓', text: 'Include examples', desc: 'Upload result images if possible to show your prompt in action' }
              ].map((guideline, index) => (
                <div key={index} style={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ 
                    background: 'var(--primary)',
                    color: 'white',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    {guideline.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                      {guideline.text}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
                      {guideline.desc}
                    </div>
                  </div>
                </div>
              ))}
              
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>💡 Good Prompt Example:</h4>
                <div style={{ 
                  background: 'white',
                  border: '2px solid var(--primary)',
                  borderRadius: '8px',
                  padding: '1rem',
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '0.85rem',
                  lineHeight: '1.4'
                }}>
                  <div style={{ 
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    display: 'inline-block'
                  }}>
                    GOOD ✓
                  </div>
                  &quot;Mystical forest guardian, ancient tree spirit with glowing ethereal eyes, magical aurora borealis dancing through twisted branches, detailed fantasy art style, luminous particles floating in air, by Greg Rutkowski and Alan Lee --ar 3:4&quot;
                </div>
                
                <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', marginTop: '1rem' }}>❌ Avoid This:</h4>
                <div style={{ 
                  background: 'white',
                  border: '2px solid var(--accent)',
                  borderRadius: '8px',
                  padding: '1rem',
                  fontFamily: 'Roboto Mono, monospace',
                  fontSize: '0.85rem',
                  lineHeight: '1.4'
                }}>
                  <div style={{ 
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    display: 'inline-block'
                  }}>
                    AVOID ❌
                  </div>
                  &quot;cool fantasy thing&quot;
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ 
                  fontFamily: 'Montserrat', 
                  fontSize: '2.5rem', 
                  color: 'var(--primary)', 
                  marginBottom: '1rem' 
                }}>
                  Submit Your Prompt
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666' }}>
                  Share your creative vision with our community
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ 
                background: '#F4F6F8',
                borderRadius: '20px',
                padding: '3rem'
              }}>
                {/* Prompt Text */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    Your AI Art Prompt <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <div style={{ 
                    fontWeight: '400',
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    The exact text you use in your AI art generator
                  </div>
                  <textarea 
                    value={formData.promptText}
                    onChange={(e) => handleInputChange('promptText', e.target.value)}
                    placeholder="e.g., Cyberpunk cityscape at night, neon lights reflecting on wet streets, flying cars, detailed digital art style, dramatic lighting --ar 16:9 --v 6"
                    required
                    maxLength={1000}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e5e5',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      fontFamily: 'Roboto Mono, monospace',
                      resize: 'vertical',
                      minHeight: '150px',
                      lineHeight: '1.4'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e5e5'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                  <div style={{ 
                    textAlign: 'right',
                    fontSize: '0.85rem',
                    color: formData.promptText.length > 900 ? 'var(--accent)' : '#666',
                    marginTop: '0.5rem'
                  }}>
                    {formData.promptText.length} / 1000 characters
                  </div>
                </div>

                {/* Title */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    Prompt Title <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <div style={{ 
                    fontWeight: '400',
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    A catchy name that describes your prompt
                  </div>
                  <input 
                    type="text"
                    value={formData.promptTitle}
                    onChange={(e) => handleInputChange('promptTitle', e.target.value)}
                    placeholder="e.g., Neon Cyberpunk Cityscape"
                    required
                    maxLength={100}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e5e5',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e5e5'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                  <div style={{ 
                    textAlign: 'right',
                    fontSize: '0.85rem',
                    color: formData.promptTitle.length > 90 ? 'var(--accent)' : '#666',
                    marginTop: '0.5rem'
                  }}>
                    {formData.promptTitle.length} / 100 characters
                  </div>
                </div>

                {/* Categories Row */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  <div>
                    <label style={{ 
                      display: 'block',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.5rem',
                      fontSize: '1.1rem'
                    }}>
                      Art Style <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <select 
                      value={formData.artStyle}
                      onChange={(e) => handleInputChange('artStyle', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e5e5',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        background: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e5e5'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <option value="">Select art style...</option>
                      <option value="cyberpunk">Cyberpunk</option>
                      <option value="fantasy-art">Fantasy Art</option>
                      <option value="photorealistic">Photorealistic</option>
                      <option value="anime">Anime</option>
                      <option value="abstract">Abstract</option>
                      <option value="watercolor">Watercolor</option>
                      <option value="oil-painting">Oil Painting</option>
                      <option value="pixel-art">Pixel Art</option>
                      <option value="minimalist">Minimalist</option>
                      <option value="steampunk">Steampunk</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '0.5rem',
                      fontSize: '1.1rem'
                    }}>
                      Best AI Tool <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <select 
                      value={formData.aiTool}
                      onChange={(e) => handleInputChange('aiTool', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e5e5',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        background: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e5e5'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <option value="">Select AI tool...</option>
                      <option value="midjourney">Midjourney</option>
                      <option value="stable-diffusion">Stable Diffusion</option>
                      <option value="dalle">DALL-E</option>
                      <option value="leonardo-ai">Leonardo AI</option>
                      <option value="firefly">Adobe Firefly</option>
                      <option value="multiple">Works with Multiple</option>
                    </select>
                  </div>
                </div>

                {/* Subject Tags */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    Subject Tags <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <div style={{ 
                    fontWeight: '400',
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    Select all that apply to your prompt
                  </div>
                  <div style={{ 
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    {['Portraits', 'Landscapes', 'Characters', 'Cityscapes', 'Animals', 'Architecture', 'Vehicles', 'Objects'].map((subject) => (
                      <div
                        key={subject}
                        onClick={() => handleSubjectToggle(subject.toLowerCase())}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: formData.subjects.includes(subject.toLowerCase()) ? 'var(--primary)' : 'white',
                          color: formData.subjects.includes(subject.toLowerCase()) ? 'white' : '#333',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '2px solid #e5e5e5',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          borderColor: formData.subjects.includes(subject.toLowerCase()) ? 'var(--primary)' : '#e5e5e5'
                        }}
                        onMouseEnter={(e) => {
                          if (!formData.subjects.includes(subject.toLowerCase())) {
                            e.currentTarget.style.borderColor = 'var(--primary)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!formData.subjects.includes(subject.toLowerCase())) {
                            e.currentTarget.style.borderColor = '#e5e5e5'
                          }
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.subjects.includes(subject.toLowerCase())}
                          onChange={() => {}}
                          style={{ display: 'none' }}
                        />
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ 
                    display: 'block',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    Description & Tips
                  </label>
                  <div style={{ 
                    fontWeight: '400',
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    Help others understand how to use your prompt effectively
                  </div>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="e.g., This prompt works great for creating moody cyberpunk scenes. Try adjusting the --chaos parameter for more variation. Works best with aspect ratio 16:9 for wide cityscapes."
                    maxLength={500}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e5e5',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      resize: 'vertical',
                      minHeight: '120px',
                      lineHeight: '1.4'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e5e5'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                  <div style={{ 
                    textAlign: 'right',
                    fontSize: '0.85rem',
                    color: formData.description.length > 450 ? 'var(--accent)' : '#666',
                    marginTop: '0.5rem'
                  }}>
                    {formData.description.length} / 500 characters
                  </div>
                </div>

                {/* Preview */}
                {(formData.promptText || formData.promptTitle) && (
                  <div style={{ 
                    background: 'white',
                    border: '2px solid var(--primary)',
                    borderRadius: '15px',
                    padding: '2rem',
                    margin: '2rem 0'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ 
                        fontFamily: 'Montserrat',
                        color: 'var(--primary)',
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        📋 Preview
                      </div>
                    </div>
                    
                    {formData.promptTitle && (
                      <h3 style={{ 
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: '#333'
                      }}>
                        {formData.promptTitle}
                      </h3>
                    )}
                    
                    {formData.promptText && (
                      <div style={{ 
                        fontFamily: 'Roboto Mono, monospace',
                        background: '#F4F6F8',
                        padding: '1rem',
                        borderRadius: '8px',
                        lineHeight: '1.4',
                        margin: '1rem 0'
                      }}>
                        &quot;{formData.promptText}&quot;
                      </div>
                    )}
                    
                    <div style={{ 
                      display: 'flex',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      margin: '1rem 0'
                    }}>
                      {formData.artStyle && (
                        <span className="style-tag">{formData.artStyle.replace('-', ' ')}</span>
                      )}
                      {formData.aiTool && (
                        <span className="tool-tag">{formData.aiTool.replace('-', ' ')}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Submit Section */}
                <div style={{ 
                  textAlign: 'center',
                  marginTop: '3rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid #e5e5e5'
                }}>
                  <button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    style={{
                      background: canSubmit ? 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' : '#ccc',
                      color: 'white',
                      border: 'none',
                      padding: '1.2rem 3rem',
                      borderRadius: '30px',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      cursor: canSubmit ? 'pointer' : 'not-allowed',
                      transition: 'all 0.3s',
                      marginRight: '1rem',
                      opacity: canSubmit ? 1 : 0.6
                    }}
                    onMouseEnter={(e) => {
                      if (canSubmit) {
                        e.currentTarget.style.transform = 'translateY(-3px)'
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(74, 144, 226, 0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (canSubmit) {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span style={{ marginRight: '0.5rem' }}>⏳</span>
                        Submitting...
                      </>
                    ) : (
                      '🚀 Submit Prompt'
                    )}
                  </button>
                  
                  <button
                    type="button"
                    style={{
                      background: '#F4F6F8',
                      color: '#666',
                      border: '2px solid #e5e5e5',
                      padding: '1.2rem 2rem',
                      borderRadius: '30px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--primary)'
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.borderColor = 'var(--primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#F4F6F8'
                      e.currentTarget.style.color = '#666'
                      e.currentTarget.style.borderColor = '#e5e5e5'
                    }}
                  >
                    💾 Save Draft
                  </button>
                </div>
                
                <div style={{ 
                  textAlign: 'center',
                  marginTop: '2rem',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  By submitting, you agree to our{' '}
                  <Link href="/terms" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/community-guidelines" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                    Community Guidelines
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}