import { createJwtService, JwtService } from "@libs/jwtService";
import { createPasswordService, PasswordService } from "@libs/passwordService";
import { createPrismaClient } from "@libs/prismaClient";
import { PrismaClient } from "@prisma/client";
import { createUserFixtures } from "./fixtures";

export interface CreateTestConfigParams {
  prisma?: PrismaClient;
  passwordService?: PasswordService;
  jwtService?: JwtService;
}

export interface TestConfig {
  services: {
    prisma: PrismaClient;
    passwordService: PasswordService;
    jwtService: JwtService;
  };
  fixtures: {
    User: ReturnType<typeof createUserFixtures>;
  };
  reset: () => void;
}

const createTestConfig = (params: CreateTestConfigParams): TestConfig => {
  const prisma = params.prisma ?? createPrismaClient({ mode: "test" });
  const passwordService = params.passwordService ?? createPasswordService();
  const jwtService =
    params.jwtService ??
    createJwtService({
      appOrigin: process.env.APP_ORIGIN,
      graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
      jwtSecret: process.env.JWT_SECRET,
    });

  return {
    services: {
      prisma,
      passwordService,
      jwtService,
    },
    fixtures: {
      User: createUserFixtures({ prisma: prisma, jwt: jwtService, password: passwordService }),
    },
    reset: () => {
      afterAll(async (done) => {
        await prisma.$disconnect();
        done();
      });
    },
  };
};

export default createTestConfig;
