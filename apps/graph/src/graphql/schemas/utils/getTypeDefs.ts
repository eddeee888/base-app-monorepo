import * as path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { DocumentNode } from "graphql";

export const getTypeDefs = (): DocumentNode => {
  const pattern = path.join(process.cwd(), "**", "*.graphqls");
  const typesArray = loadFilesSync(pattern, { recursive: true });
  return mergeTypeDefs(typesArray);
};
