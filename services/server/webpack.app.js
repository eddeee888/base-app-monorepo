const path = require("path");
const baseConfig = require("./webpack.base");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { NODE_ENV = "development" } = process.env;

const isDevelopment = NODE_ENV === "development";

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
      patterns: [
        { from: "src/app/graph/schemas/schema.graphql", to: "../graph/schemas/schema.graphql" },
        { from: "src/app/app.js", to: "../app.js" },
      ],
    }),
  ],
};
