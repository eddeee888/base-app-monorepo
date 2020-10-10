import { User } from "@prisma/client";

interface CreateUserParams {
  props?: Partial<User>;
}

export const createUser = ({ props = {} }: CreateUserParams): User => {
  const user: User = {
    id: 100,
    email: "user+100@domain.com",
    firstName: "user",
    lastName: "one zero zero",
    createdAt: new Date(),
    updatedAt: new Date(),
    password: "abcd",
    userGroup: JSON.stringify({ user: true }),
  };

  return { ...user, ...props };
};

export const createAdmin = ({ props = {} }: CreateUserParams): User => {
  const adminProps: Partial<User> = {
    userGroup: JSON.stringify({ user: true, admin: true }),
  };

  return createUser({ props: { ...props, ...adminProps } });
};
