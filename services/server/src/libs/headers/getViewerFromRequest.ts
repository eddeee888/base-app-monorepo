import { Request } from "express";
import getTokenFromRequest from "./getTokenFromRequest";
import { PrismaClient, User } from "@prisma/client";
import { JwtService } from "../jwt";

export type GetViewerFromRequest = (req: Request, prisma: PrismaClient, jwt: JwtService) => Promise<User | null>;

const getViewerFromRequest: GetViewerFromRequest = async (req, prisma, jwt) => {
  const token = getTokenFromRequest(req);

  const verifiedToken = jwt.verify(token);
  if (!verifiedToken) {
    return null;
  }
  return await prisma.user.findOne({ where: { id: parseInt(verifiedToken.viewer.id) } });
};

export default getViewerFromRequest;
