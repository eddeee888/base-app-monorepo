/* eslint-disable */
const { useBabelRc, override } = require("customize-cra");
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = {
  webpack: override(useBabelRc(), rewireGqlTag),
  jest: (config) => {
    config.transform = Object.assign({ "^.+\\.(graphql)$": "jest-transform-graphql" }, config.transform);
    config.testPathIgnorePatterns = ["/node_modules/", "/src\\/common\\/shared(.*)/"];
    return config;
  },
};
