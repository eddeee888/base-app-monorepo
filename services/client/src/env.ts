interface AppEnvironment {
  appName: string;
  graphqlEndpoint: string;
  websocketGraphqlEndpoint: string;
  specialMode: "maintenance" | null;
}

const dev: AppEnvironment = {
  appName: "BAM",
  graphqlEndpoint: "https://server.bam.dev/graphql",
  websocketGraphqlEndpoint: "wss://server.bam.dev/graphql",
  specialMode: null,
};

const prod: AppEnvironment = {
  appName: "BAM",
  graphqlEndpoint: "https://server.bam.com/graphql",
  websocketGraphqlEndpoint: "wss://server.bam.com/graphql",
  specialMode: null,
};

const env = process.env.REACT_APP_ENVIRONMENT === "prod" ? prod : dev;

export default env;
