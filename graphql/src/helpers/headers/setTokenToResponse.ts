import { expiresIn } from 'src/helpers/utils/jwt/options';
import TokenType from './TokenType';
import { SetTokenToResponse } from './types';

const setTokenToResponse: SetTokenToResponse = (response, accessToken) => {
  return response.cookie(TokenType.accessToken, accessToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    sameSite: 'lax'
    // secure: true // TODO: enable this once https is in
  });
};

export default setTokenToResponse;
