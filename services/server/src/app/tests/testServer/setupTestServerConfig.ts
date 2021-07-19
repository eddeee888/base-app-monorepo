/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from "@prisma/client";
import createTestServer from "./createTestServer";
import createTestConfig, { TestConfig } from "@libs/tests/createTestConfig";

export interface TestServerConfig {
  url: string;
  prisma: PrismaClient;
  fixtures: TestConfig["fixtures"];
}

/**
 * setupTestServerConfig sets up a server that can be tested against
 * Note that due to the asynchrony of the process, we cannot
 * destructure the values at creation time because that happens
 * before `beforeAll`.
 * @example
 * config = setupTestServerConfig();
 * test("...", () => {
 *   config.url
 * })
 */
export const setupTestServerConfig = (): TestServerConfig => {
  const internalConfig: any = {};
  const config: TestServerConfig = {
    url: "http://localhost/graphql",
    prisma: undefined as any,
    fixtures: undefined as any,
  };

  beforeAll(async (done) => {
    const { expressServer, services } = await createTestServer();
    const { fixtures } = createTestConfig({
      prisma: services.prismaClient,
      jwtService: services.jwtService,
      passwordService: services.passwordService,
    });
    config.prisma = services.prismaClient;
    config.fixtures = fixtures;

    const instance = expressServer.listen({ port: 80 });
    internalConfig.server = instance;
    internalConfig.prisma = services.prismaClient;
    done();
  });

  afterAll(async (done) => {
    internalConfig.server.close();
    await internalConfig.prisma.$disconnect();
    done();
  });

  return config;
};
