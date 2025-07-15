import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
