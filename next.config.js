/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  trailingSlash: true,
  images:{
    unoptimized: true
  }
}

module.exports = nextConfig
