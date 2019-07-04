import { Request } from 'express';
import { getTokenFromRequest } from 'src/helpers/headers';
import { verify } from 'src/helpers/utils/jwt';
import { Prisma, User } from 'src/web/graphql/generated/prisma-client';

export type GetViewerFromRequest = (
  req: Request,
  prisma: Prisma
) => Promise<User | null>;

const getViewerFromRequest: GetViewerFromRequest = async (req, prisma) => {
  const token = getTokenFromRequest(req);

  const verifiedToken = verify(token);
  if (!verifiedToken) {
    return null;
  }
  return await prisma.user({ id: verifiedToken.viewer.id });
};

export default getViewerFromRequest;
