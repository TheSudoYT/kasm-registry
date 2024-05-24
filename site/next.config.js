/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The_Sudo',
    description: 'Kasm Workspaces Created by TheSudo',
    icon: '/img/logo.svg',
    listUrl: 'https://TheSudoYT.github.io/kasm-registry/',
    contactUrl: 'https://github.com/TheSudoYT/kasm-registry/issues',
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
