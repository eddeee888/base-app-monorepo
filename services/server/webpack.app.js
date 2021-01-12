const path = require("path");
const baseConfig = require("./webpack.base");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  ...baseConfig,
  entry: "./src/app/web/server.ts",
  output: {
    path: path.resolve(__dirname, "build/app/web"),
    filename: "server.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".mjs", ".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/app/graph/schemas/*.graphql", to: "../graph/schemas/[name].[ext]" }],
    }),
  ],
};
