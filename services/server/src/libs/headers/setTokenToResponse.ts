import { Response } from "express";
import { expiresIn } from "@libs/jwt";
import { TokenType, JWT } from "./types";

const setTokenToResponse = (response: Response, accessToken: JWT, primaryDomain: string): Response => {
  return response.cookie(TokenType.accessToken, accessToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    domain: primaryDomain,
  });
};

export default setTokenToResponse;
