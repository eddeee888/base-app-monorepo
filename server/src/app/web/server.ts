import cookieParser from "cookie-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createHeaders } from "@libs/headers";
import { createJwt } from "@libs/jwt";
import { createPassword } from "@libs/password";
import errorMiddleware from "middleware/errorHandler";
import tokenVerifier from "middleware/tokenVerifier";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "graph/resolvers";
import { IsLoggedInDirective, IsPrivateDirective } from "graph/directives";
import getTypeDefs from "graph/schemas/getTypeDefs";
import handleLogout from "./handlers/handleLogout";
import { patternLogout } from "@libs/routes/logout/patternLogout";

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
  formatError: (error) => {
    if (process.env.NODE_ENV === "production" && error.extensions && error.extensions.code === "INTERNAL_SERVER_ERROR") {
      // TODO:ERROR snag this error
      console.error(error);

      // Prisma errors will put the reason into `error.message` and `error.extensions.exception.meta.message` regardless of environment
      // We must manually redact it or face the pain of 1000 hacks
      if (error.extensions && error.extensions.exception && error.extensions.exception.meta && error.extensions.exception.meta.message) {
        error.extensions.exception.meta.message = "REDACTED";
      }
      error.message = "Internal Server Error. REDACTED.";
    }

    return error;
  },
});

// Set up other express middlewares and other routes
const server = express();
server.use(cookieParser());
server.use(tokenVerifier({ headers, jwt }));

server.get(patternLogout, handleLogout({ headers }));

server.use(errorMiddleware());

apolloServer.applyMiddleware({
  app: server,
  cors: {
    origin: [`https://${process.env.CLIENT_SERVICE_DOMAIN}`, `https://${process.env.CLIENT_SEO_SERVICE_DOMAIN}`],
    credentials: true,
  },
});

server.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`));

export { server };
