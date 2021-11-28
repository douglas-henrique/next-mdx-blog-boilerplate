/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx']
})

