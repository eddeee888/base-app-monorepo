import { sign as jwtSign, SignOptions } from "jsonwebtoken";
import { expiresIn as defaultExpiresIn, JWTPayload } from "./options";
import { JWT } from "@libs/headersService";

interface SignParams {
  appOrigin: string;
  graphqlEndpoint: string;
  jwtSecret: string;
  payload: JWTPayload;
  expiresIn?: number;
}

interface CustomClaim {
  viewer: JWTPayload;
}

const sign = ({ appOrigin, graphqlEndpoint, jwtSecret, payload, expiresIn = defaultExpiresIn }: SignParams): JWT => {
  const signOptions: SignOptions = {
    issuer: appOrigin,
    audience: graphqlEndpoint,
    expiresIn,
    subject: payload.id,
  };

  const customClaims: CustomClaim = {
    viewer: { id: payload.id },
  };

  return jwtSign(customClaims, jwtSecret, signOptions);
};

export default sign;
