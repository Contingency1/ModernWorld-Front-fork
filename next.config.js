const nextConfig = {
  headers: [
    {
      key: 'Access-Control-Allow-Origin',
    },
  ],
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        //웬만하면 이거
        protocol: 'https',
        //s3 주소 쓰면 됨
        hostname: 'ma7-production-s3.s3.ap-northeast-2.amazonaws.com',
        // hostname 하위의 어떤 경로든 허용 한다는 의미
        pathname: '/**',
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
