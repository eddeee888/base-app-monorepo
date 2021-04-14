import { Request } from "express";
import { TokenType } from "./types";

export type GetCsrfTokenFromRequest = (request: Request) => string | undefined;

const getCsrfTokenFromRequest: GetCsrfTokenFromRequest = (request) => {
  return request.cookies[TokenType.csrfToken];
};

export default getCsrfTokenFromRequest;
