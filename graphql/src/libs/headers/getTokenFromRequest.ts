import { Request } from 'express';
import { JWT } from 'graphql/types';
import TokenType from './TokenType';

export type GetTokenFromRequest = (request: Request) => JWT;

const getTokenFromRequest: GetTokenFromRequest = request =>
  request.cookies[TokenType.accessToken];

export default getTokenFromRequest;
