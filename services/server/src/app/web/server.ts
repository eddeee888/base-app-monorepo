import cookieParser from "cookie-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createHeadersService } from "@libs/headers";
import { createJwtService } from "@libs/jwt";
import { createPassword } from "@libs/password";
import { createPrismaClient } from "@libs/prismaClient";
import errorMiddleware from "middleware/errorHandler";
import tokenVerifier from "middleware/tokenVerifier";
import { resolvers } from "graph/resolvers";
import { IsLoggedInDirective, IsPrivateDirective } from "graph/directives";
import getTypeDefs from "graph/schemas/getTypeDefs";
import handleLogout from "./handlers/handleLogout";
import { patternLogout } from "@libs/routes/logout/patternLogout";

const PORT = process.env.PORT || 8000;
const STAGE: "production" | "development" = process.env.NODE_ENV === "production" ? "production" : "development";

// Create services
const password = createPassword();
const prisma = createPrismaClient({ mode: STAGE });
const headers = createHeadersService({ primaryDomain: process.env.PRIMARY_DOMAIN });
const jwt = createJwtService({
  appOrigin: process.env.APP_ORIGIN,
  graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
  jwtSecret: process.env.JWT_SECRET,
});

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
    viewer: await headers.getViewerFromRequest(contextParams.req, prisma, jwt),
    libs: {
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
server.get("/healthcheck", (req, res) => res.sendStatus(200));

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
