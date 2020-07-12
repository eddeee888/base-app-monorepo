const CLIENT_DESTINATION = "../client/src/common";
const CLIENT_SEO_DESTINATION = "../client-seo/src/common";
const SERVER_LIBS_DESTINATION = "../server/src/libs";

// Note: config key is the immediate dir after SOURCE_ROOT. We only support 1 level.
// i.e. DO NOT do shared-something/something
const destinations = {
  "shared-apollo": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-local-storage": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-styles": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-typings": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-ui": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-graphql-errors": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-validations": [CLIENT_DESTINATION, SERVER_LIBS_DESTINATION],
  "shared-frontend-components": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "shared-page-errors": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
};

exports.default = {
  destinations,
  SOURCE_ROOT: "src",
};
