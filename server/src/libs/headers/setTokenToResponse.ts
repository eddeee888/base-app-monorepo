import { Response } from "express";
import { expiresIn } from "libs/jwt";
import { JWT } from "graphql/types";
import { TokenType } from "./types";

export type SetTokenToResponse = (response: Response, accessToken: JWT) => Response;

const setTokenToResponse: SetTokenToResponse = (response, accessToken) => {
  return response.cookie(TokenType.accessToken, accessToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    domain: process.env.PRIMARY_DOMAIN,
  });
};

export default setTokenToResponse;
