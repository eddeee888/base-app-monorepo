import { sign as jwtSign, SignOptions } from 'jsonwebtoken';

import { JWT } from 'src/types';
import { expiresIn as defaultExpiresIn, JWTPayload } from './options';

export type Sign = (payload: JWTPayload, expiresIn?: number) => JWT | never;
interface CustomClaim {
  viewer: JWTPayload;
}

const sign: Sign = (payload, expiresIn = defaultExpiresIn) => {
  const signOptions: SignOptions = {
    issuer: process.env.SERVER_NAME,
    audience: `${process.env.SERVER_NAME}/graphql`,
    expiresIn,
    subject: payload.id
  };

  const customClaims: CustomClaim = {
    viewer: payload
  };

  if (!process.env.JWT_SECRET) {
    throw new Error('Cannot sign token without a secret');
  }

  return jwtSign(customClaims, process.env.JWT_SECRET, signOptions);
};

export default sign;
