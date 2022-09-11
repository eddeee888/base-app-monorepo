const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  assetPrefix: process.env.BASE_ASSETS_URL || undefined,
  images: {
    domains: [process.env.IMAGE_DOMAIN || ''],
  },
  webpack: (config) => {
    // For prod, Prisma files live in node_modules
    // This makes it easier to run Prisma in different runtimes e.g. Lambda vs AWS Fargate
    if (process.env.NODE_ENV === 'production') {
      config.externals.push('@bam/main-prisma');
    }

    return config;
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(nextConfig);
