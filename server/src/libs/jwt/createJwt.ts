import sign, { Sign } from "./sign";
import verify, { Verify } from "./verify";

export interface Jwt {
  sign: Sign;
  verify: Verify;
}

const createJwt = (): Jwt => {
  return {
    sign,
    verify,
  };
};

export default createJwt;
