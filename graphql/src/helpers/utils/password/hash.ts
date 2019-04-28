import { hash as hashPassword } from 'bcryptjs';

export type HashPassword = (password: string) => Promise<string>;

const saltRounds = 10;

const hash: HashPassword = async password => {
  return await hashPassword(password, saltRounds);
};

export default hash;
