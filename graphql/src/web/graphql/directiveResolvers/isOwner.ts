import { DirectiveResolverFn } from 'graphql-tools';
import { ResolverContext } from 'src/types';
import { throwAuthenticationError } from '../errors';

const isOwner: DirectiveResolverFn<any, ResolverContext> = (
  next,
  src,
  args,
  { viewer }
) => {
  if (!viewer || viewer.id !== src.id) {
    return throwAuthenticationError(
      'Only the owner has permission to view this content'
    );
  }

  return next();
};

export default isOwner;
