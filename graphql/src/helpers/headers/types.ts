import { NextFunction, Request, Response } from 'express';
import { JWTPayload } from 'src/helpers/utils/jwt/options';
import { JWT } from 'src/types';

export type CustomResponse = Response;

export interface CustomRequest extends Request {
  viewer?: JWTPayload;
}
export type CustomNextFuntion = NextFunction;

export type GetTokenFromRequest = (request: CustomRequest) => JWT;

export type SetTokenToResponse = (
  response: CustomResponse,
  accessToken: JWT
) => CustomResponse;
