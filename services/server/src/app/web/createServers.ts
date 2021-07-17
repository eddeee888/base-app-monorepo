import http from "http";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import corsMiddleware, { CorsOptions } from "cors";
import cookie from "cookie";
import { json as bodyParser } from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import errorMiddleware from "@/middleware/errorHandler";
import tokenVerifier from "@/middleware/tokenVerifier";

import { ResolverContext } from "@libs/graph/types";
import { IsLoggedInDirective, IsPrivateDirective } from "@/graph/directives";
import { getTypeDefs } from "@/graph/schemas/utils";
import { resolvers } from "@/graph/resolvers";

import { createHeadersService } from "@libs/headersService";
import { createJwtService } from "@libs/jwtService";
import { createPasswordService } from "@libs/passwordService";
import { createPrismaClient } from "@libs/prismaClient";
import { createErrorNotifier } from "./plugins";

import { patternLogout, patternXhrLogin, patternXhrSignup } from "@libs/routes";
import handleLogout from "./handlers/handleLogout";
import handleXhrLogin from "./handlers/handleXhrLogin";
import handleXhrSignup from "./handlers/handleXhrSignup";

export interface CreateServersConfig {
  stage: "production" | "development" | "test";
  corsOptions: CorsOptions | undefined;
  services: {
    prismaClient: ReturnType<typeof createPrismaClient>;
    passwordService: ReturnType<typeof createPasswordService>;
    headersService: ReturnType<typeof createHeadersService>;
    jwtService: ReturnType<typeof createJwtService>;
  };
}

interface Servers {
  httpServer: http.Server;
  expressServer: Express;
  apolloServer: ApolloServer;
}

const createServers = ({ stage, corsOptions, services }: CreateServersConfig): Servers => {
  const apolloServer = new ApolloServer({
    typeDefs: getTypeDefs(),
    resolvers: resolvers,
    schemaDirectives: {
      isLoggedIn: IsLoggedInDirective,
      isPrivate: IsPrivateDirective,
    },
    context: async (contextParams): Promise<ResolverContext> => {
      // For POST requests, the req is inside of contextParams
      // For WebSocket initial request to connect to the server,
      // we add it into the contextParams.connection.context.subscriptionRequest, done by "onConnect" function
      const req = !contextParams.connection ? contextParams.req : contextParams.connection.context.subscriptionRequest;

      return {
        prisma: services.prismaClient,
        viewer: await services.headersService.getViewerFromRequest(req, services.prismaClient, services.jwtService),
      };
    },
    formatError: (error) => {
      if (stage === "production" && error.extensions && error.extensions.code === "INTERNAL_SERVER_ERROR") {
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const subscriptionRequest = request as any;
            subscriptionRequest.cookies = cookies;
            return { subscriptionRequest: subscriptionRequest };
          }
        }

        throw new Error("Invalid subscription auth token");
      },
    },
  });

  const expressServer = express();

  // Security headers
  if (stage !== "test") {
    expressServer.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["frame-ancestors 'none'"],
        },
      })
    );
    expressServer.use(
      helmet.hsts({
        maxAge: 63072000,
        includeSubDomains: true,
      })
    );
    expressServer.use(helmet.noSniff());
    expressServer.use(helmet.frameguard({ action: "deny" }));
    expressServer.disable("x-powered-by");
  }

  if (corsOptions) {
    expressServer.use(corsMiddleware(corsOptions));
  }
  expressServer.use(bodyParser());
  expressServer.use(cookieParser());
  expressServer.use(tokenVerifier({ headers: services.headersService, jwt: services.jwtService }));

  expressServer.get(patternLogout, handleLogout({ headers: services.headersService }));
  expressServer.post(
    patternXhrLogin,
    handleXhrLogin({
      prisma: services.prismaClient,
      password: services.passwordService,
      headers: services.headersService,
      jwt: services.jwtService,
    })
  );
  expressServer.post(
    patternXhrSignup,
    handleXhrSignup({
      prisma: services.prismaClient,
      jwt: services.jwtService,
      headers: services.headersService,
      password: services.passwordService,
    })
  );
  expressServer.get("/healthcheck", (req, res) => res.sendStatus(200));

  expressServer.use(errorMiddleware());

  apolloServer.applyMiddleware({
    app: expressServer,
    cors: corsOptions,
  });

  const httpServer = http.createServer(expressServer);
  apolloServer.installSubscriptionHandlers(httpServer);

  return {
    httpServer: httpServer,
    expressServer: expressServer,
    apolloServer: apolloServer,
  };
};

export default createServers;
