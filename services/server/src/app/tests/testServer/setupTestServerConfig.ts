import { PrismaClient } from "@prisma/client";
import createTestServer from "./createTestServer";
import { createUserFixture, UserFixture } from "./fixtures";

export interface TestServerConfig {
  url: string;
  prisma: PrismaClient;
  fixtures: {
    user: UserFixture;
  };
}

export const setupTestServerConfig = (): TestServerConfig => {
  const { server, prisma, jwt, password } = createTestServer();

  const config: TestServerConfig = {
    url: "http://localhost/graphql",
    prisma: prisma,
    fixtures: {
      user: createUserFixture({ prisma, jwt, password }),
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
    await prisma.$disconnect();
    done();
  });

  return config;
};
