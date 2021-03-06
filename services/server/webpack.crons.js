const path = require("path");
const glob = require("glob");
const baseConfig = require("./webpack.base");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { NODE_ENV = "development" } = process.env;

const isDevelopment = NODE_ENV === "development";

module.exports = {
  ...baseConfig,
  /**
   * Entry of crons are:
   * - jobs ( for dev ONLY ). This is the main file that is run in the container
   * - handler.ts files under crons. The output file is under the same folder structure in build/crons
   */
  entry: (() => {
    const files = glob.sync(path.join(__dirname, "src", "crons", "**", "handler.ts"));

    const handlers = files.reduce((prevHandlers, file) => {
      // Find bundle name
      const relativeFilename = path.relative(path.join(process.cwd(), "src", "crons"), file);
      const ext = path.parse(relativeFilename).ext;
      const targetFilename = relativeFilename.replace(ext, "");

      return { ...prevHandlers, [targetFilename]: file };
    }, {});

    return { ...handlers, jobs: path.resolve(__dirname, "src", "crons", "jobs.ts") };
  })(),
  output: {
    path: path.resolve(__dirname, "build", "crons"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.crons.json" })],
    extensions: [".mjs", ".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
};
