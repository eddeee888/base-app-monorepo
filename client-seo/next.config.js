module.exports = {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(__dirname);

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 1000,
    };
    return config;
  },
};
