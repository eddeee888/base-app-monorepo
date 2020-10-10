import http from "http";
import express from "express";
import corsMiddleware, { CorsOptions } from "cors";
import { json as bodyParser } from "body-parser";
import { ApolloServer } from "apollo-server-express";
import cookie from "cookie";
import cookieParser from "cookie-parser";
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
import handleXhrLogin from "./handlers/handleXhrLogin";
import handleXhrSignup from "./handlers/handleXhrSignup";
import { patternLogout } from "@libs/routes/logout/patternLogout";
import { createUserLoader } from "@libs/graph/loaders";
import { ResolverContext } from "@libs/graph/types";
import { createErrorNotifier } from "./plugins";
import { patternXhrLogin } from "@libs/routes/xhrLogin/patternXhrLogin";
import { patternXhrSignup } from "@libs/routes/xhrSignup/patternXhrSignup";

const PORT = process.env.PORT || 80;
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
  formatError: (error) => {
    if (STAGE === "production" && error.extensions && error.extensions.code === "INTERNAL_SERVER_ERROR") {
      // Prisma errors will put the reason into `error.message` and `error.extensions.exception.meta` regardless of environment
      // We must manually redact it or face the pain of 1000 hacks
      if (error.extensions && error.extensions.exception && error.extensions.exception.meta) {
        error.extensions.exception.meta = {};
      }
      error.message = "Internal Server Error. REDACTED.";
    }

    return error;
  },
  plugins: [createErrorNotifier()],
  subscriptions: {
    onConnect: (connectionParam, websocket, { request }) => {
      // TODO: add own authentication here
      if (connectionParam) {
        const headerCookieString = request.headers.cookie;
        if (headerCookieString) {
          const cookies = cookie.parse(headerCookieString);
          const subscriptionRequest = request as any;
          subscriptionRequest.cookies = cookies;
          return { subscriptionRequest: subscriptionRequest };
        }
      }

      throw new Error("Invalid subscription auth token");
    },
  },
});

const corsOptions: CorsOptions = {
  origin: [`https://${process.env.CLIENT_SERVICE_DOMAIN}`, `https://${process.env.CLIENT_SEO_SERVICE_DOMAIN}`],
  credentials: true,
};

// Set up other express middlewares and other routes
const server = express();

server.use(corsMiddleware(corsOptions));
server.use(bodyParser());
server.use(cookieParser());
server.use(tokenVerifier({ headers, jwt }));

server.get(patternLogout, handleLogout({ headers }));
server.post(patternXhrLogin, handleXhrLogin({ prisma: prisma, password: password, headers: headers, jwt: jwt }));
server.post(patternXhrSignup, handleXhrSignup({ prisma: prisma, jwt: jwt, headers: headers, password: password }));
server.get("/healthcheck", (req, res) => res.sendStatus(200));

server.use(errorMiddleware());

apolloServer.applyMiddleware({
  app: server,
  cors: corsOptions,
});

const httpServer = http.createServer(server);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at https://localhost:${PORT}${apolloServer.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at wss://localhost:${PORT}${apolloServer.subscriptionsPath}`);
});
