import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Get the base URL from environment variable or use localhost for development
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/', // Disallow API routes
          '/_next/', // Disallow Next.js internal files
          '/admin/', // Disallow admin areas if you have any
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 