import { DirectiveResolverFn } from 'graphql-tools';
import { ResolverContext } from 'graphql/types';
import { throwAuthenticationError } from 'graphql/errors';

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
