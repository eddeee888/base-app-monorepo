import { createApolloErrorProvider, createApolloLoadingProvider, createApolloMockedProvider } from "apollo-mocked-provider";
import fs from "fs";
import glob from "glob";
import path from "path";

const graphqlFile = path.join(__dirname + "/../../../../../server/src/app/graph/schemas/*.graphql");
const typeDefs = glob.sync(graphqlFile).map((filepath) => fs.readFileSync(filepath).toString());

export const ApolloMockedProvider = createApolloMockedProvider(typeDefs);
export const ApolloErrorProvider = createApolloErrorProvider();
export const ApolloLoadingProvider = createApolloLoadingProvider();
