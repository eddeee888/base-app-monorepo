import hash, { HashPassword } from "./hash";
import compare, { ComparePassword } from "./compare";
import random, { RandomPassword } from "./random";

export interface PasswordService {
  hash: HashPassword;
  compare: ComparePassword;
  random: RandomPassword;
}

export const createPasswordService = (): PasswordService => ({
  hash,
  compare,
  random,
});
