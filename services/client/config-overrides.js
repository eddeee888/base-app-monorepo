/* eslint-disable */
const path = require("path");
const { useBabelRc, override } = require("customize-cra");
const rewireGqlTag = require("react-app-rewire-graphql-tag");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  webpack: override(useBabelRc(), rewireGqlTag, (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [...config.resolve.plugins, new TsconfigPathsPlugin()],
    };
    return config;
  }),
  jest: (config) => {
    config.transform = { "^.+\\.(graphql)$": "jest-transform-graphql", ...config.transform };
    config.testPathIgnorePatterns = ["/node_modules/", "/src\\/common\\/shared(.*)/"];
    config.moduleNameMapper = { ...config.moduleNameMapper, "^~/(.*)$": "<rootDir>/src/$1" };
    return config;
  },
};
