/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src/pages', 'src/components', 'src/lib', 'src/layouts']
  }
}

module.exports = nextConfig
