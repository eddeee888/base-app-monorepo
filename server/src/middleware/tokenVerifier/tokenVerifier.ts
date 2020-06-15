import { NextFunction, Request, Response } from "express";
import { Headers } from "libs/headers";
import { Jwt } from "libs/jwt";

export type TokenVerifier = (services: { headers: Headers; jwt: Jwt }) => (req: Request, res: Response, next: NextFunction) => void;

const tokenVerifier: TokenVerifier = ({ headers, jwt }) => (req, res, next) => {
  const token = headers.getTokenFromRequest(req);

  if (!token) {
    return next();
  }

  const verifiedToken = jwt.verify(token);
  if (verifiedToken) {
    const newToken = jwt.sign(verifiedToken.viewer);
    headers.setTokenToResponse(res, newToken);
  }

  return next();
};

export default tokenVerifier;
