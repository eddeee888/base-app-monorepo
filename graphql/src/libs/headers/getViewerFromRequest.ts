import { Request } from 'express';
import { getTokenFromRequest } from 'libs/headers';
import { verify } from 'libs/jwt';
import { Prisma, User } from 'prisma/generated/client';

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
