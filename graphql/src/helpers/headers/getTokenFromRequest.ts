import TokenType from './TokenType';
import { GetTokenFromRequest } from './types';

const getTokenFromRequest: GetTokenFromRequest = request =>
  request.cookies[TokenType.accessToken];

export default getTokenFromRequest;
