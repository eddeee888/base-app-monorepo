import { PrismaClient, User } from "@prisma/client";
import { PasswordService } from "@libs/passwordService";
import { updateGroup } from "@libs/models/user";

interface CreateNewUserServices {
  prisma: PrismaClient;
  password: PasswordService;
}

interface CreateNewUserParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const createNewUser = async (services: CreateNewUserServices, params: CreateNewUserParams): Promise<User> => {
  const { prisma, password: passwordService } = services;
  const { email, firstName, lastName, password } = params;

  const hashedPassword = await passwordService.hash(password);

  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
      userGroup: JSON.stringify(
        updateGroup({
          user: true,
        })
      ),
    },
  });

  return newUser;
};

export default createNewUser;
