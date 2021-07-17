const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "development" } = process.env;

console.log(`Running webpack... NODE_ENV=${NODE_ENV}`);

module.exports = {
  mode: NODE_ENV,
  watchOptions: {
    poll: 4000,
    ignored: /node_modules/,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
