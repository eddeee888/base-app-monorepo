import type { IGraphQLConfig } from 'graphql-config';

const config: IGraphQLConfig = {
  projects: {
    main: {
      schema: ['libs/graph-backend/**/*.graphqls'],
      documents: ['apps/main/**/*.graphql'],
    },
  },
};

export default config;
