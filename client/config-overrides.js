/* eslint-disable */
const { useBabelRc, override } = require("customize-cra");
const rewireGqlTag = require("react-app-rewire-graphql-tag");

module.exports = override(useBabelRc(), rewireGqlTag);
