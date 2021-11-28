/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer()({
  swcMinify: true,
  // Your Next.js config...
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com', // Spotify Album Art
    ]
  },
})