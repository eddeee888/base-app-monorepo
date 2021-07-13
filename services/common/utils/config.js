const CLIENT_DESTINATION = "../client/src/shared";
const CLIENT_SEO_DESTINATION = "../client-seo/src/shared";
const SERVER_LIBS_DESTINATION = "../server/src/libs";

// Note: config key is the immediate dir after SOURCE_ROOT. We only support 1 level.
// i.e. DO NOT do shared-something/something
const destinations = {
  apollo: [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "local-storage": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  styles: [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  typings: [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  ui: [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "graphql-errors": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  validations: [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION, SERVER_LIBS_DESTINATION],
  "frontend-components": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "frontend-test-utils": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
  "page-messages": [CLIENT_DESTINATION, CLIENT_SEO_DESTINATION],
};

exports.default = {
  destinations,
  SOURCE_ROOT: "src",
};
