import { TokenType } from "@libs/headers";
import { JwtService } from "@libs/jwt";
import { Password } from "@libs/password";
import { PrismaClient, User } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export interface UserFixture {
  createUser: () => Promise<{ user: User; tokenCookie: string }>;
  createAdmin: () => Promise<{ user: User; tokenCookie: string }>;
}

export interface CreateUserFixtureParams {
  prisma: PrismaClient;
  jwt: JwtService;
  password: Password;
}

export const createUserFixture = ({ prisma, jwt, password }: CreateUserFixtureParams): UserFixture => {
  return {
    createUser: async () => {
      const user = await prisma.user.create({
        data: {
          email: `${uuidv4()}@test.test`,
          firstName: uuidv4(),
          lastName: uuidv4(),
          password: await password.hash(uuidv4()),
          userGroup: JSON.stringify({ user: true }),
        },
      });
      const token = jwt.sign({ id: user.id.toString() });
      return { user, tokenCookie: `${TokenType.accessToken}=${token}` };
    },
    createAdmin: async () => {
      const user = await prisma.user.create({
        data: {
          email: `${uuidv4()}@test.test`,
          firstName: uuidv4(),
          lastName: uuidv4(),
          password: await password.hash(uuidv4()),
          userGroup: JSON.stringify({ user: true, admin: true }),
        },
      });
      const token = jwt.sign({ id: user.id.toString() });
      return { user, tokenCookie: `${TokenType.accessToken}=${token}` };
    },
  };
};
