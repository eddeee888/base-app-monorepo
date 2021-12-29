import * as express from "express";
import { PrismaClient } from "@prisma/client";
import { AppStage } from "./types";
import { graphqlRouter } from "./routers/graphqlRouter";

export interface CreateServerParams {
  stage: AppStage;
  prisma: PrismaClient;
}

export interface CreateServerResult {
  app: express.Express;
}

export const createServer = ({ stage, prisma }: CreateServerParams): CreateServerResult => {
  const app = express();

  app.disable("x-powered-by");

  app.use(express.json());

  app.use("/graphql", graphqlRouter({ stage, prisma }));

  return { app };
};
