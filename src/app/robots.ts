import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Get the base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  // In production, require the base URL to be set
  if (!baseUrl) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('NEXT_PUBLIC_BASE_URL must be set in production!');
    }
    // Fallback for development
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/', '/_next/', '/admin/'],
        },
      ],
      sitemap: 'http://localhost:3000/sitemap.xml',
      host: 'http://localhost:3000',
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
} 