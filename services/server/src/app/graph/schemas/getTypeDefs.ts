import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { DocumentNode } from "graphql";

const getTypeDefs = (): DocumentNode => {
  const pattern = path.join(process.cwd(), "**", "schema.graphql");
  const typesArray = loadFilesSync(pattern, { recursive: true });
  return mergeTypeDefs(typesArray);
};

export default getTypeDefs;
