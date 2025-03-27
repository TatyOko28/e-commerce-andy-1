/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**',
      },
    ],
  },
  
  // Exclude Sanity directory from the build (if needed)
  reactStrictMode: true,
  
  // This ensures Sanity is not included in the build
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ensure ignored is always an array before spreading
      const ignored = Array.isArray(config.watchOptions?.ignored) 
        ? config.watchOptions.ignored 
        : [];
      
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [...ignored, '**/sanity/**']
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;