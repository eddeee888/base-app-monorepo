import { Request, Response, NextFunction } from "express";
import { generateUrlStatic500 } from "@libs/routes";

const errorMiddleware = () => (error: Error, req: Request, res: Response, _next: NextFunction): void => {
  // TODO:ERROR snag this
  console.error(error);
  res.redirect(generateUrlStatic500());
};

export default errorMiddleware;
