interface AppEnvironment {
  appName: string;
  graphqlEndpoint: string;
}

const dev: AppEnvironment = {
  appName: "BAM",
  graphqlEndpoint: "https://server.bam.dev/graphql",
};

const prod: AppEnvironment = {
  appName: "BAM",
  graphqlEndpoint: "https://server.bam.com/graphql",
};

const env = process.env.REACT_APP_ENVIRONMENT === "prod" ? prod : dev;

export default env;
