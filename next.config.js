/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  typescript: {
    // !! 警告 !!
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
