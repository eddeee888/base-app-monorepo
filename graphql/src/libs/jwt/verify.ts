import { verify as jwtVerify, VerifyErrors, VerifyOptions } from 'jsonwebtoken';
import { JWT } from 'graphql/types';
import { JWTObject } from './options';

export type Verify = (token: JWT, subject?: string) => JWTObject | null | never;

const verify: Verify = (token, subject) => {
  let result = null;

  const verifyOptions: VerifyOptions = {
    issuer: process.env.SERVER_NAME,
    audience: `${process.env.SERVER_NAME}/graphql`
  };

  verifyOptions.subject = subject ? subject : undefined;

  if (!process.env.JWT_SECRET) {
    throw new Error('Cannot verify token without a secret');
  }

  jwtVerify(
    token,
    process.env.JWT_SECRET,
    verifyOptions,
    (err: VerifyErrors, decoded: object | string) => {
      if (decoded) {
        result = decoded;
      }
    }
  );

  return result;
};

export default verify;
