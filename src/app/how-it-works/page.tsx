// src/app/how-it-works/page.tsx
import { Metadata } from 'next'
import HowItWorksClient from './HowItWorksClient'

export const metadata: Metadata = {
  title: 'How It Works - ArtReimagined',
  description: 'Learn how to discover, copy, and use AI art prompts with ArtReimagined. Simple steps to create amazing AI art with Midjourney, Stable Diffusion & more.',
  alternates: {
    canonical: 'https://artreimagined.com/how-it-works',
  },
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}