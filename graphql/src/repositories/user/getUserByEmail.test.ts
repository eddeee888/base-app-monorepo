import { setupTestDatabase } from 'src/helpers/tests';
import {
  prisma,
  UserCreateInput
} from 'src/web/graphql/generated/prisma-client';
import getUserByEmail from './getUserByEmail';

describe('validateEmailExists()', () => {
  beforeEach(async () => {
    await setupTestDatabase();
  });

  it('should return TRUE if email exists in db', async () => {
    const userInput: UserCreateInput = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'iamjohndoe@gmail.com',
      password: 'password'
    };
    await prisma.createUser(userInput);

    const existingUser = await getUserByEmail(userInput.email);

    expect(existingUser).toBeTruthy();
  });

  it('should return FALSE if email does NOT exist in db', async () => {
    const existingUser = await getUserByEmail('nonexistinguser@gmail.com');

    expect(existingUser).toBeFalsy();
  });
});
