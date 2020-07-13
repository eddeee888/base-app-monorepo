const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV = "development" } = process.env;

const isDevelopment = NODE_ENV === "development";

module.exports = {
  mode: NODE_ENV,
  watchOptions: {
    poll: 4000,
    ignored: /node_modules/,
  },
  target: "node",
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".mjs", ".ts", ".js"],
  },
  externals: [
    nodeExternals(),
    ((fileRegex, shouldRun) => {
      return function (context, request, callback) {
        if (shouldRun) {
          if (fileRegex.test(request)) {
            return callback(null, request);
          }
        }
        callback();
      };
    })(/^\@libs/, !isDevelopment), // If is NOT development (i.e. production), we treat all `@libs*` modules as external because in prod they come from lambda layer
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
};
