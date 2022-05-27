import * as path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import type { DocumentNode } from 'graphql';

export const getTypeDefs = (): DocumentNode => {
  const pattern = path.join(process.cwd(), 'libs', 'graph-backend', '**', '*.graphqls');
  const typesArray = loadFilesSync(pattern, { recursive: true });
  return mergeTypeDefs(typesArray);
};
