import * as express from "express";
import { envelop, useSchema, enableIf, useMaskedErrors } from "@envelop/core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { processRequest, getGraphQLParameters, shouldRenderGraphiQL, renderGraphiQL, sendResult } from "graphql-helix";
import { PrismaClient } from "@prisma/client";
import { getTypeDefs } from "../../graphql/schemas/utils";
import { resolvers } from "../../graphql/resolvers";
import { AppStage, RouterCreator } from "../../types";

interface GraphqlRouterParams {
  stage: AppStage;
  prisma: PrismaClient;
}
export const graphqlRouter: RouterCreator<GraphqlRouterParams> = ({ stage, prisma }) => {
  const router = express.Router();

  const isDev = stage === "development";

  const executableSchema = makeExecutableSchema({
    typeDefs: getTypeDefs(),
    resolvers: resolvers,
  });

  const getEnveloped = envelop({
    plugins: [
      useSchema(executableSchema),
      // Mask errors in production
      enableIf(!isDev, useMaskedErrors()),
    ],
  });

  router.use("/", async (req, res) => {
    const { contextFactory, ...envelopProxy } = getEnveloped({ req });

    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    };

    if (shouldRenderGraphiQL(request)) {
      res.type("text/html");
      res.send(renderGraphiQL());
    } else {
      const { operationName, query, variables } = getGraphQLParameters(request);

      const result = await processRequest({
        operationName,
        query,
        variables,
        request,
        ...envelopProxy,
        contextFactory: (ctx) =>
          contextFactory({
            ...ctx,
            prisma,
          }),
      });

      sendResult(result, res);
    }
  });

  return router;
};
