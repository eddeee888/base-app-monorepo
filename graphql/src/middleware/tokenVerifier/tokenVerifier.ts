import { NextFunction, Request, Response } from 'express';
import { getTokenFromRequest, setTokenToResponse } from 'src/helpers/headers';
import { sign, verify } from 'src/helpers/utils/jwt';

type TokenVerifier = (req: Request, res: Response, next: NextFunction) => void;

const tokenVerifier: TokenVerifier = async (req, res, next) => {
  const token = getTokenFromRequest(req);

  if (!token) {
    return next();
  }

  const verifiedToken = verify(token);
  if (verifiedToken) {
    const newToken = sign(verifiedToken.viewer);
    setTokenToResponse(res, newToken);
  }

  return next();
};

export default tokenVerifier;
