import cookieParser = require("cookie-parser");
import { importSchema } from "graphql-import";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { getTokenFromRequest, setTokenToResponse, getViewerFromRequest } from "libs/headers";
import { sign, verify } from "libs/jwt";
import { compare, hash } from "libs/password";
import tokenVerifier from "middleware/tokenVerifier";
import { prisma } from "prisma/generated/client";
import { resolvers } from "graphql/resolvers";
import { IsLoggedInDirective } from "graphql/directives";

const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
  typeDefs: importSchema("./src/graphql/schemas/schema.graphql"),
  resolvers,
  schemaDirectives: {
    isLoggedIn: IsLoggedInDirective,
  },
  context: async (contextParams) => ({
    ...contextParams,
    prisma,
    viewer: await getViewerFromRequest(contextParams.req, prisma),
    utils: {
      headers: {
        getTokenFromRequest,
        setTokenToResponse,
      },
      jwt: {
        sign,
        verify,
      },
      password: {
        compare,
        hash,
      },
    },
  }),
});

const app = express();
app.use(cookieParser());
app.use(tokenVerifier);

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
