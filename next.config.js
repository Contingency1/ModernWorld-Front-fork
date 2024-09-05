const nextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
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
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedForwardedHosts: ['my-forwarded-host.com'],
    },
  }
};

module.exports = nextConfig;
