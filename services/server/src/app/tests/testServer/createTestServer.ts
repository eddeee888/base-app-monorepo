import { Express } from "express";
import { createPrismaClient } from "@libs/prismaClient";
import { createHeadersService } from "@libs/headers";
import { createJwtService } from "@libs/jwt";
import { createPassword } from "@libs/password";
import createServers, { CreateServersConfig } from "web/createServers";

export interface TestServer {
  server: Express;
  services: CreateServersConfig["services"];
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

  const services: CreateServersConfig["services"] = {
    prismaClient: prisma,
    headersService: headers,
    passwordService: password,
    jwtService: jwt,
  };

  const { server } = createServers({
    stage: "test",
    corsOptions: undefined,
    services: services,
  });

  return {
    server: server,
    services: services,
  };
};

export default createTestServer;
