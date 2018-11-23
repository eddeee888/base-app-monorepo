import { NextFunction, Request, Response } from 'express';
import { JWTPayload } from 'src/helpers/utils/jwt/options';

type CustomResponse = Response;
interface CustomRequest extends Request {
  viewer?: JWTPayload;
}
type CustomNextFuntion = NextFunction;

export { CustomResponse, CustomRequest, CustomNextFuntion };
