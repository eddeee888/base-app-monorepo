import { NextFunction, Request, Response } from "express";
import { getTokenFromRequest, setTokenToResponse } from "libs/headers";
import { sign, verify } from "libs/jwt";

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
