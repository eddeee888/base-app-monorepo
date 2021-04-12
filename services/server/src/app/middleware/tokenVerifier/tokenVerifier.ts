import { NextFunction, Request, Response } from "express";
import { HeadersService } from "@libs/headersService";
import { JwtService } from "@libs/jwtService";

export type TokenVerifier = (services: {
  headers: HeadersService;
  jwt: JwtService;
}) => (req: Request, res: Response, next: NextFunction) => void;

const tokenVerifier: TokenVerifier = ({ headers, jwt }) => (req, res, next) => {
  const token = headers.getTokenFromRequest(req);

  if (!token) {
    return next();
  }

  const verifiedToken = jwt.verify(token);
  if (verifiedToken) {
    const newToken = jwt.sign({
      id: verifiedToken.viewer.id,
    });
    headers.setTokenToResponse(res, newToken);
  }

  return next();
};

export default tokenVerifier;
