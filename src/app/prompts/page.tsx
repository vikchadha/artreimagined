// src/app/prompts/page.tsx
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Sample prompt data - replace with real data later
const samplePrompts = [
  {
    id: 1,
    title: 'Neon Cyberpunk Cityscape',
    text: 'Neon-lit cyberpunk cityscape at night, flying cars weaving between towering skyscrapers, holographic advertisements reflecting on rain-soaked streets, dramatic purple and blue lighting, cinematic composition, ultra-detailed, 8k resolution --ar 16:9 --v 6',
    style: 'Cyberpunk',
    tool: 'Midjourney',
    votes: 847,
    author: 'CyberArtist92',
    date: '2 days ago',
    subjects: ['cityscapes', 'architecture'],
    isUpvoted: false,
    isDownvoted: false
  },
  {
    id: 2,
    title: 'Mystical Forest Guardian',
    text: 'Mystical forest guardian, ancient tree spirit with glowing ethereal eyes, magical aurora borealis dancing through twisted branches, detailed fantasy art style, luminous particles floating in air, by Greg Rutkowski and Alan Lee --ar 3:4',
    style: 'Fantasy Art',
    tool: 'Stable Diffusion',
    votes: 624,
    author: 'FantasyCreator',
    date: '4 days ago',
    subjects: ['characters', 'landscapes'],
    isUpvoted: true,
    isDownvoted: false
  },
  {
    id: 3,
    title: 'Professional Business Portrait',
    text: 'Professional headshot of a confident businesswoman in modern office setting, natural lighting from large windows, shallow depth of field, shot with Canon 5D Mark IV, 85mm lens, business attire, warm smile, contemporary corporate environment',
    style: 'Photorealistic',
    tool: 'DALL-E',
    votes: 592,
    author: 'PhotoRealist',
    date: '1 week ago',
    subjects: ['portraits'],
    isUpvoted: false,
    isDownvoted: false
  },
  {
    id: 4,
    title: 'Abstract Color Flow',
    text: 'Flowing abstract composition with vibrant color gradients, organic liquid forms merging and separating, contemporary digital art style, smooth color transitions from deep purple to golden yellow, minimalist aesthetic --ar 1:1 --chaos 30',
    style: 'Abstract',
    tool: 'Midjourney',
    votes: 438,
    author: 'AbstractMind',
    date: '3 days ago',
    subjects: ['abstract'],
    isUpvoted: false,
    isDownvoted: false
  },
  {
    id: 5,
    title: 'Anime Magical Girl',
    text: 'Anime character design, magical girl with flowing silver hair and starlight powers, detailed costume with constellation patterns, Studio Ghibli art style, soft pastel colors, dreamy atmosphere, character sheet, multiple poses --ar 2:3',
    style: 'Anime',
    tool: 'Leonardo AI',
    votes: 756,
    author: 'AnimeArtist',
    date: '5 days ago',
    subjects: ['characters', 'anime'],
    isUpvoted: false,
    isDownvoted: false
  },
  {
    id: 6,
    title: 'Pixel Art RPG Knight',
    text: '16-bit pixel art style RPG character sprite, fantasy knight with enchanted armor, 32x32 pixels, retro video game aesthetic, limited color palette, crisp pixel boundaries, side-scrolling game character design, transparent background',
    style: 'Pixel Art',
    tool: 'Stable Diffusion',
    votes: 329,
    author: 'PixelMaster',
    date: '1 week ago',
    subjects: ['characters', 'gaming'],
    isUpvoted: false,
    isDownvoted: false
  }
]

export default function BrowsePromptsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStyle, setSelectedStyle] = useState<string>('all')
  const [selectedTool, setSelectedTool] = useState<string>('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [showStyleDropdown, setShowStyleDropdown] = useState(false)
  const [showToolDropdown, setShowToolDropdown] = useState(false)
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false)
  const [sortBy, setSortBy] = useState('mostpopular')
  const [prompts, setPrompts] = useState(samplePrompts)

  const handleCopyPrompt = (promptText: string, promptId: number) => {
    navigator.clipboard.writeText(promptText.trim()).then(() => {
      // Show success feedback
      const button = document.querySelector(`[data-copy="${promptId}"]`) as HTMLButtonElement
      if (button) {
        const originalText = button.textContent
        button.textContent = 'Copied!'
        button.style.background = '#4CAF50'
        setTimeout(() => {
          button.textContent = originalText
          button.style.background = 'var(--accent)'
        }, 2000)
      }
    })
  }

  const handleVote = (promptId: number, voteType: 'up' | 'down') => {
    setPrompts(prevPrompts => 
      prevPrompts.map(prompt => {
        if (prompt.id === promptId) {
          let newVotes = prompt.votes
          let newIsUpvoted = prompt.isUpvoted
          let newIsDownvoted = prompt.isDownvoted

          if (voteType === 'up') {
            if (prompt.isUpvoted) {
              // Remove upvote
              newVotes--
              newIsUpvoted = false
            } else {
              // Add upvote
              newVotes++
              newIsUpvoted = true
              // Remove downvote if present
              if (prompt.isDownvoted) {
                newVotes++
                newIsDownvoted = false
              }
            }
          } else {
            if (prompt.isDownvoted) {
              // Remove downvote
              newVotes++
              newIsDownvoted = false
            } else {
              // Add downvote
              newVotes--
              newIsDownvoted = true
              // Remove upvote if present
              if (prompt.isUpvoted) {
                newVotes--
                newIsUpvoted = false
              }
            }
          }

          return {
            ...prompt,
            votes: newVotes,
            isUpvoted: newIsUpvoted,
            isDownvoted: newIsDownvoted
          }
        }
        return prompt
      })
    )
  }

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prompt.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStyle = selectedStyle === 'all' || prompt.style.toLowerCase().replace(' ', '-') === selectedStyle
    const matchesTool = selectedTool === 'all' || prompt.tool.toLowerCase().replace(' ', '-') === selectedTool
    const matchesSubject = selectedSubject === 'all' || prompt.subjects.includes(selectedSubject)
    
    return matchesSearch && matchesStyle && matchesTool && matchesSubject
  })

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        color: 'white',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ 
            fontFamily: 'Montserrat', 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem' 
          }}>
            Explore Our AI Art Prompt Library
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Discover thousands of community-curated prompts for Midjourney, Stable Diffusion, DALL-E, and more. Find your next creative breakthrough!
          </p>
        </div>
      </section>

      {/* Quick Filters */}
      <section style={{ background: 'white', padding: '1.5rem 0' }}>
        <div className="container">
          <h3 style={{ 
            fontFamily: 'Montserrat', 
            color: 'var(--primary)', 
            marginBottom: '1rem',
            fontSize: '1.2rem'
          }}>
            🔥 Popular Categories
          </h3>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['All Prompts', 'Cyberpunk', 'Fantasy', 'Photorealistic', 'Anime', 'Abstract', 'Portraits', 'Landscapes'].map((tag, index) => (
              <button
                key={tag}
                style={{
                  background: index === 0 ? 'var(--primary)' : '#F4F6F8',
                  color: index === 0 ? 'white' : '#666',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  border: '1px solid #e5e5e5',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'var(--primary)'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.borderColor = 'var(--primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = '#F4F6F8'
                    e.currentTarget.style.color = '#666'
                    e.currentTarget.style.borderColor = '#e5e5e5'
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section style={{ 
        background: 'white', 
        padding: '2rem 0', 
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: '72px',
        zIndex: 90
      }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            gap: '2rem', 
            alignItems: 'center', 
            flexWrap: 'wrap' 
          }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ 
                display: 'flex', 
                border: '2px solid var(--primary)', 
                borderRadius: '25px', 
                overflow: 'hidden',
                maxWidth: '500px'
              }}>
                <input
                  type="text"
                  placeholder="Search prompts... (e.g., 'neon cityscape', 'fantasy dragon')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '1rem 1.5rem',
                    border: 'none',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button style={{
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.3s'
                }}>
                  Search
                </button>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {/* Art Style Filter */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowStyleDropdown(!showStyleDropdown)}
                  style={{
                    background: '#F4F6F8',
                    border: '2px solid #e5e5e5',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Art Style <ChevronDown className="w-4 h-4" />
                </button>
                {showStyleDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    minWidth: '200px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    zIndex: 1000,
                    marginTop: '0.25rem'
                  }}>
                    {['All Styles', 'Cyberpunk', 'Fantasy Art', 'Photorealistic', 'Anime', 'Abstract', 'Watercolor', 'Pixel Art'].map((style) => (
                      <div
                        key={style}
                        onClick={() => {
                          setSelectedStyle(style === 'All Styles' ? 'all' : style.toLowerCase().replace(' ', '-'))
                          setShowStyleDropdown(false)
                        }}
                        style={{
                          padding: '0.75rem 1rem',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#F4F6F8'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                      >
                        {style}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* AI Tool Filter */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowToolDropdown(!showToolDropdown)}
                  style={{
                    background: '#F4F6F8',
                    border: '2px solid #e5e5e5',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  AI Tool <ChevronDown className="w-4 h-4" />
                </button>
                {showToolDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    minWidth: '200px',
                    zIndex: 1000,
                    marginTop: '0.25rem'
                  }}>
                    {['All Tools', 'Midjourney', 'Stable Diffusion', 'DALL-E', 'Leonardo AI', 'Adobe Firefly'].map((tool) => (
                      <div
                        key={tool}
                        onClick={() => {
                          setSelectedTool(tool === 'All Tools' ? 'all' : tool.toLowerCase().replace(' ', '-'))
                          setShowToolDropdown(false)
                        }}
                        style={{
                          padding: '0.75rem 1rem',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#F4F6F8'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Subject Filter */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                  style={{
                    background: '#F4F6F8',
                    border: '2px solid #e5e5e5',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '25px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Subject <ChevronDown className="w-4 h-4" />
                </button>
                {showSubjectDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    minWidth: '200px',
                    zIndex: 1000,
                    marginTop: '0.25rem'
                  }}>
                    {['All Subjects', 'Portraits', 'Landscapes', 'Characters', 'Cityscapes', 'Animals', 'Architecture'].map((subject) => (
                      <div
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject === 'All Subjects' ? 'all' : subject.toLowerCase())
                          setShowSubjectDropdown(false)
                        }}
                        style={{
                          padding: '0.75rem 1rem',
                          cursor: 'pointer',
                          borderBottom: '1px solid #f0f0f0',
                          transition: 'background 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#F4F6F8'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section style={{ padding: '2rem 0', minHeight: '70vh' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '1.1rem', color: '#666' }}>
              Showing <strong style={{ color: 'var(--primary)', fontWeight: '600' }}>{filteredPrompts.length}</strong> amazing prompts
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span>Sort by:</span>
              {['Most Popular', 'Newest', 'Trending', 'Top Voted'].map((sort, index) => (
                <button
                  key={sort}
                  onClick={() => setSortBy(sort.toLowerCase().replace(' ', ''))}
                  style={{
                    background: index === 0 ? 'var(--primary)' : '#F4F6F8',
                    color: index === 0 ? 'white' : '#666',
                    border: '1px solid #e5e5e5',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== 0) {
                      e.currentTarget.style.background = 'var(--primary)'
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.borderColor = 'var(--primary)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== 0) {
                      e.currentTarget.style.background = '#F4F6F8'
                      e.currentTarget.style.color = '#666'
                      e.currentTarget.style.borderColor = '#e5e5e5'
                    }
                  }}
                >
                  {sort}
                </button>
              ))}
            </div>
          </div>

          {/* Prompts Grid */}
          <div className="prompts-grid">
            {filteredPrompts.map((prompt) => (
              <div key={prompt.id} className="card-hover">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div className="prompt-tags">
                    <span className="style-tag">{prompt.style}</span>
                    <span className="tool-tag">{prompt.tool}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    <button
                      onClick={() => handleVote(prompt.id, 'up')}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        borderRadius: '50%',
                        transition: 'all 0.3s',
                        color: prompt.isUpvoted ? 'var(--primary)' : '#666'
                      }}
                    >
                      👍
                    </button>
                    <span style={{ fontWeight: '600', fontSize: '0.9rem', color: '#666' }}>
                      {prompt.votes}
                    </span>
                    <button
                      onClick={() => handleVote(prompt.id, 'down')}
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.2rem',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        borderRadius: '50%',
                        transition: 'all 0.3s',
                        color: prompt.isDownvoted ? 'var(--accent)' : '#666'
                      }}
                    >
                      👎
                    </button>
                  </div>
                </div>
                
                <div className="prompt-text">
                  &quot;{prompt.text}&quot;
                </div>
                
                <div className="prompt-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: '#666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>👤</span>
                      <span>{prompt.author}</span>
                    </div>
                    <div style={{ color: '#999' }}>{prompt.date}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      data-copy={prompt.id}
                      onClick={() => handleCopyPrompt(prompt.text, prompt.id)}
                      className="btn-primary"
                      style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                    >
                      Copy Prompt
                    </button>
                    <button
                      style={{
                        background: '#F4F6F8',
                        color: '#666',
                        border: '1px solid #e5e5e5',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        fontSize: '0.9rem'
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
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <button
              style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '30px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#357ABD'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--primary)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Load More Prompts
            </button>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Showing {filteredPrompts.length} of 1,247 prompts
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}