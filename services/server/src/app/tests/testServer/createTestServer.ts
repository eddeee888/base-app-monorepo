import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import getTypeDefs from "graph/schemas/getTypeDefs";
import { resolvers } from "graph/resolvers";
import { IsLoggedInDirective, IsPrivateDirective } from "graph/directives";
import { ResolverContext } from "@libs/graph/types";
import { createPrismaClient } from "@libs/prismaClient";
import { createHeadersService } from "@libs/headers";
import { createJwtService, JwtService } from "@libs/jwt";
import { createPassword, Password } from "@libs/password";
import { createUserLoader } from "@libs/graph/loaders";
import cookieParser from "cookie-parser";
import tokenVerifier from "middleware/tokenVerifier";
import errorMiddleware from "middleware/errorHandler";
import { PrismaClient } from "@prisma/client";

export interface TestServer {
  server: Express;
  prisma: PrismaClient;
  jwt: JwtService;
  password: Password;
}

const createTestServer = (): TestServer => {
  const prisma = createPrismaClient({ mode: "test" });
  const password = createPassword();
  const headers = createHeadersService({ primaryDomain: "bam.test" });
  const jwt = createJwtService({
    appOrigin: process.env.APP_ORIGIN,
    graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
    jwtSecret: process.env.JWT_SECRET,
  });

  const apolloServer = new ApolloServer({
    typeDefs: getTypeDefs(),
    resolvers: resolvers,
    schemaDirectives: {
      isLoggedIn: IsLoggedInDirective,
      isPrivate: IsPrivateDirective,
    },
    context: async (contextParams): Promise<ResolverContext> => {
      // For POST requests, the req is inside of contextParams
      // For WebSocket initial request to connect to the server, we add it into the contextParams.connection.context.subscriptionRequest, done by "onConnect" function
      const req = !contextParams.connection ? contextParams.req : contextParams.connection.context.subscriptionRequest;

      return {
        prisma,
        viewer: await headers.getViewerFromRequest(req, prisma, jwt),
        loaders: {
          user: createUserLoader(prisma),
        },
      };
    },
  });

  const server = express();

  server.use(cookieParser());
  server.use(tokenVerifier({ headers, jwt }));
  server.use(errorMiddleware());

  apolloServer.applyMiddleware({
    app: server,
    cors: true,
  });

  return {
    server: server,
    prisma: prisma,
    jwt: jwt,
    password,
  };
};

export default createTestServer;
