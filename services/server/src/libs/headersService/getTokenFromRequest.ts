import { Request } from "express";
import { TokenType, JWT } from "./types";

export type GetTokenFromRequest = (request: Request) => JWT;

const getTokenFromRequest: GetTokenFromRequest = (request) => request.cookies[TokenType.accessToken];

export default getTokenFromRequest;
