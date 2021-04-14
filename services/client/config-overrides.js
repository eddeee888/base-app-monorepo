const path = require("path");
const { useBabelRc, override } = require("customize-cra");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: override(
    useBabelRc(),
    (config, env) => {
      const gqlExtension = /\.(graphql|gql)$/;

      const flatten = (array) => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

      const fileLoader = flatten(config.module.rules.map((rule) => rule.oneOf || rule)).find(
        (rule) => rule.loader && rule.loader.indexOf("file-loader") !== -1
      );

      fileLoader && fileLoader.exclude.push(gqlExtension);

      const gqlTagRule = {
        test: gqlExtension,
        loader: "graphql-tag/loader",
        exclude: /node_modules/,
      };
      config.module.rules.push(gqlTagRule);

      return config;
    },
    (config) => {
      config.resolve = {
        ...config.resolve,
        plugins: [...config.resolve.plugins, new TsconfigPathsPlugin()],
      };
      return config;
    }
  ),
  jest: (config) => {
    config.transform["^.+\\.(js|jsx|mjs|cjs|ts|tsx)$"] = "<rootDir>/config-overrides-babel-transform.js"; // HACK: to get new JSX transform working
    config.transform = { "^.+\\.(graphql)$": "jest-transform-graphql", ...config.transform };
    config.testPathIgnorePatterns = ["/node_modules/", "/src\\/common\\/shared(.*)/"];
    config.moduleNameMapper = { ...config.moduleNameMapper, "^~/(.*)$": "<rootDir>/src/$1" };
    return config;
  },
};
