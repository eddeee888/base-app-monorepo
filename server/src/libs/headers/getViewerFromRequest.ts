import { Request } from "express";
import getTokenFromRequest from "./getTokenFromRequest";
import verify from "libs/jwt/verify";
import { PrismaClient, User } from "@prisma/client";

export type GetViewerFromRequest = (req: Request, prisma: PrismaClient) => Promise<User | null>;

const getViewerFromRequest: GetViewerFromRequest = async (req, prisma) => {
  const token = getTokenFromRequest(req);

  const verifiedToken = verify(token);
  if (!verifiedToken) {
    return null;
  }
  return await prisma.user.findOne({ where: { id: parseInt(verifiedToken.viewer.id) } });
};

export default getViewerFromRequest;
