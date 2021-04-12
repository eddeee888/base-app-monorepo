import { Response } from "express";
import { TokenType } from "./types";

export type SetCsrfTokenToResponse = (response: Response, primaryDomain: string) => Response;

const setCsrfTokenToResponse: SetCsrfTokenToResponse = (response, primaryDomain): Response => {
  return response.cookie(TokenType.csrfToken, Math.random().toString(36).slice(2), {
    sameSite: "lax",
    secure: true,
    domain: primaryDomain,
  });
};

export default setCsrfTokenToResponse;
