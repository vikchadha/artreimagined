// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'ArtReimagined: Best AI Art Prompts & Inspiration',
    template: '%s | ArtReimagined'
  },
  description: 'Discover, share, and vote on the best AI art prompts for Midjourney, Stable Diffusion, & more. Fuel your creativity with ArtReimagined.',
  keywords: ['AI art prompts', 'Midjourney prompts', 'Stable Diffusion prompts', 'AI prompt library', 'DALL-E prompts'],
  authors: [{ name: 'ArtReimagined Team' }],
  creator: 'ArtReimagined',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://artreimagined.com',
    siteName: 'ArtReimagined',
    title: 'ArtReimagined: Your Ultimate AI Art Prompt Library',
    description: 'Find top-rated AI art prompts for stunning visuals. Browse by style, vote for your favorites, and unleash your creativity.',
    images: [
      {
        url: 'https://artreimagined.com/og-image-home.jpg',
        width: 1200,
        height: 630,
        alt: 'ArtReimagined - AI Art Prompt Library',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArtReimagined: Best AI Art Prompts',
    description: 'Discover amazing AI art prompts for Midjourney, Stable Diffusion & more.',
    images: ['https://artreimagined.com/og-image-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4A90E2" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}