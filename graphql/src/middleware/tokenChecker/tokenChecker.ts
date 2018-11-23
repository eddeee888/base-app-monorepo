import {
  CustomNextFuntion,
  CustomRequest,
  CustomResponse,
  getTokenFromRequest,
  setTokenToResponse
} from 'src/helpers/headers';
import { sign, verify } from 'src/helpers/utils/jwt';

type TokenCheckerFn = (
  req: CustomRequest,
  res: CustomResponse,
  next: CustomNextFuntion
) => void;

const tokenChecker: TokenCheckerFn = async (req, res, next) => {
  const token = getTokenFromRequest(req);

  if (!token) {
    return next();
  }

  const verifiedToken = verify(token);
  if (verifiedToken) {
    req.viewer = verifiedToken.viewer;

    const newToken = sign(req.viewer);
    setTokenToResponse(res, newToken);
  }

  return next();
};

export default tokenChecker;
