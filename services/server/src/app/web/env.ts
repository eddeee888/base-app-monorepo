export const env = {
  NODE_ENV: (process.env.NODE_ENV === "production" ? "production" : "development") as "development" | "production",
  PORT: process.env.PORT || 80,
  PRIMARY_DOMAIN: process.env.PRIMARY_DOMAIN,
  CLIENT_SERVICE_DOMAIN: process.env.CLIENT_SERVICE_DOMAIN,
  CLIENT_SEO_SERVICE_DOMAIN: process.env.CLIENT_SEO_SERVICE_DOMAIN,
  APP_ORIGIN: process.env.APP_ORIGIN,
  GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  JWT_SECRET: process.env.JWT_SECRET,
};
