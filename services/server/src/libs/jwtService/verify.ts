import { verify as jwtVerify, VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { JWTObject } from "./options";
import { JWT } from "@libs/headersService";

interface VerifyParams {
  appOrigin: string;
  graphqlEndpoint: string;
  jwtSecret: string;
  token: JWT;
  subject?: string;
}

const verify = ({ appOrigin, graphqlEndpoint, jwtSecret, token, subject }: VerifyParams): JWTObject | null => {
  let result = null;

  const verifyOptions: VerifyOptions = {
    issuer: appOrigin,
    audience: graphqlEndpoint,
    subject: subject ? subject : undefined,
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  jwtVerify(token, jwtSecret, verifyOptions, (err: VerifyErrors, decoded: object | string) => {
    if (decoded) {
      result = decoded;
    }
  });

  return result;
};

export default verify;
