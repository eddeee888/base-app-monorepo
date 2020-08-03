import { verify as jwtVerify, VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { JWTObject } from "./options";
import { JWT } from "../headers/types";

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
  };

  verifyOptions.subject = subject ? subject : undefined;

  jwtVerify(token, jwtSecret, verifyOptions, (err: VerifyErrors, decoded: object | string) => {
    if (decoded) {
      result = decoded;
    }
  });

  return result;
};

export default verify;
