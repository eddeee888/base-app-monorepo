import { Request } from 'express';
import { JWT } from 'src/types';
import TokenType from './TokenType';

export type GetTokenFromRequest = (request: Request) => JWT;

const getTokenFromRequest: GetTokenFromRequest = request =>
  request.cookies[TokenType.accessToken];

export default getTokenFromRequest;
