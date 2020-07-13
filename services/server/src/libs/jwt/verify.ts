import { verify as jwtVerify, VerifyErrors, VerifyOptions } from "jsonwebtoken";
import { JWTObject } from "./options";
import { JWT } from "../headers/types";

export type Verify = (token: JWT, subject?: string) => JWTObject | null | never;

const verify: Verify = (token, subject) => {
  let result = null;

  const verifyOptions: VerifyOptions = {
    issuer: process.env.APP_ORIGIN,
    audience: process.env.GRAPHQL_ENDPOINT,
  };

  verifyOptions.subject = subject ? subject : undefined;

  if (!process.env.JWT_SECRET) {
    throw new Error("Cannot verify token without a secret");
  }

  jwtVerify(token, process.env.JWT_SECRET, verifyOptions, (err: VerifyErrors, decoded: object | string) => {
    if (decoded) {
      result = decoded;
    }
  });

  return result;
};

export default verify;
