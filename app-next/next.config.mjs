/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for Next.js 13+
  output: 'export', // Essential for SSG
  // Optional: Add trailing slash to your URLs (recommended for consistent routing)
  trailingSlash: true,

  // Optional: Configure image optimization for exported builds
  images: {
    unoptimized: true, //  Simplest approach, but not ideal for production. Consider using a proper image CDN.
    // OR, for more control (but requires image optimization during build):
    // loader: 'default', // or 'imgix', 'cloudinary', etc. if you configure them
    // path: '/_next/static/images/', // Adjust if needed
  },
};

export default nextConfig;
