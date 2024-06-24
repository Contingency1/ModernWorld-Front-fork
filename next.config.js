module.exports = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wang0514.s3.ap-northeast-2.amazonaws.com',
                port: '',
                pathname: '/toonda-image/**',
            },
        ],
    },
};
