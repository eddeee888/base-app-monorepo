import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { DocumentNode } from "graphql";

const getTypeDefs = (): DocumentNode => {
  const typesArray = loadFilesSync(path.join(__dirname, "schema.graphql"), { recursive: true });
  return mergeTypeDefs(typesArray);
};

export default getTypeDefs;
