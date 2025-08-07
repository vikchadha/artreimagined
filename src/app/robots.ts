import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Get the base URL from environment variable
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://artreimagined.com'

  // In production, require the base URL to be set
  if (!baseUrl && process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_BASE_URL must be set in production!');
  }

  // Development fallback
  const sitemapUrl = baseUrl ? `${baseUrl}/sitemap.xml` : 'http://localhost:3000/sitemap.xml'

  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/private/',
          '/_next/',
          '/api/auth/',
        ],
        crawlDelay: 1,
      },
      // Allow main content directories explicitly
      {
        userAgent: '*',
        allow: [
          '/prompts/',
          '/how-it-works/',
          '/submit-prompt/',
          '/challenges/',
          '/blog/',
          '/join/',
          '/about/',
          '/privacy/',
          '/terms/',
        ],
      },
      // Block duplicate content and filters
      {
        userAgent: '*',
        disallow: [
          '/*?*sort=',
          '/*?*filter=',
          '/*?*page=',
        ],
      },
      // Specific rules for Googlebot (better SEO)
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      // Specific rules for Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      // Block aggressive scrapers
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      // Throttle SemrushBot
      {
        userAgent: 'SemrushBot',
        allow: '/',
        crawlDelay: 10,
      },
    ],
    sitemap: sitemapUrl,
    // Note: 'host' is deprecated and not recommended in modern robots.txt
  }
} 