import { PrismaClient } from "@prisma/client";
import createTestServer from "./createTestServer";
import { createUserFixtures, UserFixtures } from "./fixtures";

export interface TestServerConfig {
  url: string;
  prisma: PrismaClient;
  fixtures: {
    user: UserFixtures;
  };
}

export const setupTestServerConfig = (): TestServerConfig => {
  const { server, services } = createTestServer();

  const config: TestServerConfig = {
    url: "http://localhost/graphql",
    prisma: services.prismaClient,
    fixtures: {
      user: createUserFixtures({ prisma: services.prismaClient, jwt: services.jwtService, password: services.passwordService }),
    },
  };

  const internalConfig: any = {};

  beforeAll(async (done) => {
    const instance = await server.listen({ port: 80 });
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
