import { compare as comparePassword } from "bcryptjs";

export type ComparePassword = (password: string, hashed: string) => Promise<boolean>;

const compare: ComparePassword = async (password, hashed) => {
  return await comparePassword(password, hashed);
};

export default compare;
