module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
