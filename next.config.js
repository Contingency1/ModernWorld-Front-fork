const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wang0514.s3.ap-northeast-2.amazonaws.com',
        pathname: '/items/**',
      },
    ],
  },
  output: 'standalone',
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: false,
};

module.exports = nextConfig;
