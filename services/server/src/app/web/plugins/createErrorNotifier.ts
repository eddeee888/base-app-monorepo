import { ApolloServerPlugin } from "apollo-server-plugin-base";

export const createErrorNotifier = (): ApolloServerPlugin => {
  return {
    async requestDidStart() {
      return {
        async didEncounterErrors(requestContext) {
          const [error] = requestContext.errors;
          if (error) {
            console.error(error);
          }
        },
      };
    },
  };
};
