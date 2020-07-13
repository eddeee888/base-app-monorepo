import { sign as jwtSign, SignOptions } from "jsonwebtoken";
import { expiresIn as defaultExpiresIn, JWTPayload } from "./options";
import { JWT } from "../headers/types";

export type Sign = (payload: JWTPayload, expiresIn?: number) => JWT | never;
interface CustomClaim {
  viewer: JWTPayload;
}

const sign: Sign = (payload, expiresIn = defaultExpiresIn) => {
  const signOptions: SignOptions = {
    issuer: process.env.APP_ORIGIN,
    audience: process.env.GRAPHQL_ENDPOINT,
    expiresIn,
    subject: payload.id,
  };

  const customClaims: CustomClaim = {
    viewer: {
      id: payload.id,
    },
  };

  if (!process.env.JWT_SECRET) {
    throw new Error("Cannot sign token without a secret");
  }

  return jwtSign(customClaims, process.env.JWT_SECRET, signOptions);
};

export default sign;
