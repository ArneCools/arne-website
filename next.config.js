const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/(.+)',
        destination: '/',
        permanent: true,
      }
    ]
  },
  react: { useSuspense: false },//this line
}

module.exports = nextConfig
