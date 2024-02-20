/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'K6',
    description: 'Custom Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://berlinlee-phoenix.github.io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
