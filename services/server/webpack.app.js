const path = require("path");
const baseConfig = require("./webpack.base");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  ...baseConfig,
  entry: path.resolve(__dirname, "src", "app", "web", "server.ts"),
  output: {
    path: path.resolve(__dirname, "build", "app", "web"),
    filename: "server.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.app.json" })],
    extensions: [".mjs", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "app", "graph", "schemas", "*.graphql"),
          to: path.resolve(__dirname, "build", "app", "graph", "schemas", "[name].[ext]"),
        },
      ],
    }),
  ],
};
