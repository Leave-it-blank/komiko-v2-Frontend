/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lynxscans.com'],
  },
  output: 'standalone',
  
}

module.exports = nextConfig
