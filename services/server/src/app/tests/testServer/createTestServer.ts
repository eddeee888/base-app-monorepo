import { Express } from "express";
import { createPrismaClient } from "@libs/prismaClient";
import { createHeadersService } from "@libs/headersService";
import { createJwtService } from "@libs/jwtService";
import { createPasswordService } from "@libs/passwordService";
import createServers, { CreateServersConfig } from "~/web/createServers";

export interface TestServer {
  expressServer: Express;
  services: CreateServersConfig["services"];
}

const createTestServer = (): TestServer => {
  const prisma = createPrismaClient({ mode: "test" });
  const password = createPasswordService();
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

  const { expressServer } = createServers({
    stage: "test",
    corsOptions: undefined,
    services: services,
  });

  return {
    expressServer: expressServer,
    services: services,
  };
};

export default createTestServer;
