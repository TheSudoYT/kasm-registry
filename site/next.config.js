/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'The_Sudo',
    description: 'Kasm Workspaces Created by TheSudo',
    icon: 'https://yt3.ggpht.com/yti/ANjgQV-GGV4fXu-4cOi2ucjyJYGlD8E4dSGlouGgwqt50F_dhis=s88-c-k-c0x00ffffff-no-rj',
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
