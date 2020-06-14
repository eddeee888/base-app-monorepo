import cookieParser from "cookie-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createHeaders } from "libs/headers";
import { createJwt } from "libs/jwt";
import { createPassword } from "libs/password";
import errorMiddleware from "middleware/errorHandler";
import tokenVerifier from "middleware/tokenVerifier";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "graphql/resolvers";
import { IsLoggedInDirective, IsPrivateDirective } from "graphql/directives";
import getTypeDefs from "graphql/schemas/getTypeDefs";

const PORT = process.env.PORT || 8000;

// Create services
const password = createPassword();
const prisma = new PrismaClient();
const headers = createHeaders();
const jwt = createJwt();

// Create ApolloServer
const apolloServer = new ApolloServer({
  typeDefs: getTypeDefs(),
  resolvers,
  schemaDirectives: {
    isLoggedIn: IsLoggedInDirective,
    isPrivate: IsPrivateDirective,
  },
  context: async (contextParams) => ({
    ...contextParams,
    prisma,
    viewer: await headers.getViewerFromRequest(contextParams.req, prisma),
    utils: {
      headers,
      jwt,
      password,
    },
  }),
});

// Set up other express middlewares and other routes
const server = express();
server.use(cookieParser());
server.use(tokenVerifier({ headers, jwt }));

server.use(errorMiddleware());

apolloServer.applyMiddleware({
  app: server,
  cors: {
    origin: [`https://${process.env.CLIENT_SERVICE_DOMAIN}`, `https://${process.env.CLIENT_SEO_SERVICE_DOMAIN}`],
    credentials: true,
  },
});

server.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`));

export default server;
