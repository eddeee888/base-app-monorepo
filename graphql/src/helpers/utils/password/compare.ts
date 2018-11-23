import { compare as comparePassword } from 'bcryptjs';

type ComparePasswordFn = (password: string, hashed: string) => Promise<boolean>;

const compare: ComparePasswordFn = async (password, hashed) => {
  return await comparePassword(password, hashed);
};

export default compare;
