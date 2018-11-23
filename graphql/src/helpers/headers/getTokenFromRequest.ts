import { JWT } from 'src/types';
import TokenType from './TokenType';
import { CustomRequest } from './types';

type GetTokenFromRequestFn = (request: CustomRequest) => JWT;

const getTokenFromRequest: GetTokenFromRequestFn = request =>
  request.cookies[TokenType.accessToken];

export default getTokenFromRequest;
