import { hash } from '../src/helpers/utils/password';
import { prisma } from '../src/web/graphql/generated/prisma-client';

(async () => {
  const numberOfUsers = 10;

  new Array(numberOfUsers).fill(0).forEach(async (value, index) => {
    const realIndex = index + 1;
    await prisma.createUser({
      email: `user+${realIndex}@gmail.com`,
      firstName: 'User',
      lastName: String(realIndex),
      password: await hash('12345678'),
      userGroup: JSON.stringify({ user: true })
    });
  });
})();
