import { hash as hashPassword } from 'bcryptjs';

type HashPasswordFn = (password: string) => Promise<string>;

const saltRounds = 10;

const hash: HashPasswordFn = async password => {
  return await hashPassword(password, saltRounds);
};

export default hash;
