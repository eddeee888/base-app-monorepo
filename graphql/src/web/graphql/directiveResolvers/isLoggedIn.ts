import { DirectiveResolverFn } from 'graphql-tools';
import { ResolverContext } from 'src/types';
import { throwAuthenticationError } from '../errors';

const isLoggedIn: DirectiveResolverFn<any, ResolverContext> = (
  next,
  src,
  args,
  { viewer }
) => {
  if (args.status === true && viewer === null) {
    return throwAuthenticationError('User must be logged in');
  } else if (args.status === false && viewer !== null) {
    return throwAuthenticationError('User must NOT be logged in');
  }

  return next();
};

export default isLoggedIn;
