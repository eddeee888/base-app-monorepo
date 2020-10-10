import sign from "./sign";
import verify from "./verify";
import { JWTPayload, JWTObject } from "./options";
import { JWT } from "@libs/headers";

export interface CreateJwtServiceParams {
  appOrigin?: string;
  graphqlEndpoint?: string;
  jwtSecret?: string;
}

export interface JwtService {
  sign: (payload: JWTPayload, expiresIn?: number) => JWT;
  verify: (token: JWT, subject?: string) => JWTObject | null;
}

const createJwtService = ({ appOrigin, graphqlEndpoint, jwtSecret }: CreateJwtServiceParams): JwtService => {
  if (!appOrigin || !graphqlEndpoint || !jwtSecret) {
    throw new Error("Unable to create JWT service: missing config");
  }

  return {
    sign: (payload, expiresIn) => sign({ appOrigin, graphqlEndpoint, jwtSecret, payload, expiresIn }),
    verify: (token, subject) => verify({ appOrigin, graphqlEndpoint, jwtSecret, token, subject }),
  };
};

export default createJwtService;
