import { Request } from 'express';
import { not, or, rule, shield } from 'graphql-shield';
import { getTokenFromRequest } from 'src/helpers/headers';
import { verify } from 'src/helpers/utils/jwt';
import { ResolverContext } from 'src/types';
import { Prisma, User } from 'src/web/graphql/generated/prisma-client';

export type GetViewerFromRequest = (
  req: Request,
  prisma: Prisma
) => Promise<User | null>;
export const getViewerFromRequest: GetViewerFromRequest = async (
  req,
  prisma
) => {
  const token = getTokenFromRequest(req);

  const verifiedToken = verify(token);
  if (!verifiedToken) {
    return null;
  }
  return await prisma.user({ id: verifiedToken.viewer.id });
};

const isAuthenticated = rule()(
  async (parent: any, args: any, ctx: ResolverContext, info: any) => {
    return ctx.viewer !== null;
  }
);

const isAdmin = rule()(
  async (parent: any, args: any, ctx: ResolverContext, info: any) =>
    ctx.viewer !== null && JSON.parse(ctx.viewer.userGroup).admin === true
);

const isUser = rule()(
  async (parent: any, args: any, ctx: ResolverContext, info: any) =>
    ctx.viewer !== null && JSON.parse(ctx.viewer.userGroup).user === true
);

export default shield({
  Mutation: {
    signup: not(isAuthenticated),
    login: not(isAuthenticated),
    createClassCategory: isAdmin,
    classSave: or(isUser, isAdmin)
  },
  ClassCategory: or(isUser, isAdmin),
  ClassSession: or(isUser, isAdmin)
});
