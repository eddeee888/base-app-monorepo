import hash, { HashPassword } from "./hash";
import compare, { ComparePassword } from "./compare";
import random, { RandomPassword } from "./random";

export interface Password {
  hash: HashPassword;
  compare: ComparePassword;
  random: RandomPassword;
}

const createPassword = (): Password => ({
  hash,
  compare,
  random,
});

export default createPassword;
