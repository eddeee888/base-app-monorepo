import { Request, Response, NextFunction } from "express";
import generateUrlStatic500 from "routes/static500/generateUrlStatic500";

const errorMiddleware = () => (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.redirect(generateUrlStatic500());
};

export default errorMiddleware;
