import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import corsMiddleware, { CorsOptions } from "cors";
import { json as bodyParser } from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import errorMiddleware from "@/middleware/errorHandler";
import tokenVerifier from "@/middleware/tokenVerifier";

import { makeExecutableSchema } from "@graphql-tools/schema";
import { ResolverContext } from "@libs/graph/types";
import { directiveResolvers } from "@/graph/directiveResolvers";
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
  expressServer: Express;
  apolloServer: ApolloServer;
}

const createServers = async ({ stage, corsOptions, services }: CreateServersConfig): Promise<Servers> => {
  const apolloServer = new ApolloServer({
    schema: makeExecutableSchema({
      typeDefs: getTypeDefs(),
      resolvers: resolvers,
      directiveResolvers: directiveResolvers,
    }),
    context: async (contextParams): Promise<ResolverContext> => {
      return {
        prisma: services.prismaClient,
        viewer: await services.headersService.getViewerFromRequest(contextParams.req, services.prismaClient, services.jwtService),
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
  });

  await apolloServer.start();

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

  return {
    expressServer: expressServer,
    apolloServer: apolloServer,
  };
};

export default createServers;
