/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";
import createTestServer from "./createTestServer";
import createTestConfig, { TestConfig } from "@libs/tests/createTestConfig";

export interface TestServerConfig {
  url: string;
  prisma: PrismaClient;
  fixtures: TestConfig["fixtures"];
}

export const setupTestServerConfig = (): TestServerConfig => {
  const { expressServer, services } = createTestServer();

  const { fixtures } = createTestConfig({
    prisma: services.prismaClient,
    jwtService: services.jwtService,
    passwordService: services.passwordService,
  });

  const config: TestServerConfig = {
    url: "http://localhost/graphql",
    prisma: services.prismaClient,
    fixtures: fixtures,
  };

  const internalConfig: any = {};

  beforeAll(async (done) => {
    const instance = await expressServer.listen({ port: 80 });
    internalConfig.server = instance;
    done();
  });

  afterAll(async (done) => {
    internalConfig.server.close();
    await services.prismaClient.$disconnect();
    done();
  });

  return config;
};
