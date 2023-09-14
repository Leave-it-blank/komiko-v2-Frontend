/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['apicomic.leaveitblank.co'],
  },
  output: 'standalone',
  
}

module.exports = nextConfig
