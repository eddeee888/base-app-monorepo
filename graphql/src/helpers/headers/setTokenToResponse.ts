import { expiresIn } from 'src/helpers/utils/jwt/options';
import { JWT } from 'src/types';
import { CustomResponse } from './';
import TokenType from './TokenType';

type SetTokenToResponseFn = (
  response: CustomResponse,
  accessToken: JWT
) => CustomResponse;

const setTokenToResponse: SetTokenToResponseFn = (response, accessToken) => {
  return response.cookie(TokenType.accessToken, accessToken, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    sameSite: 'lax'
    // secure: true // TODO: enable this once https is in
  });
};

export default setTokenToResponse;
