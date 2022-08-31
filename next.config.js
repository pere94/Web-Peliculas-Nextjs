/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org','www.themoviedb.org'],
  },
  experimental: { 
    images: { allowFutureImage: true } 
  },
}

module.exports = nextConfig
