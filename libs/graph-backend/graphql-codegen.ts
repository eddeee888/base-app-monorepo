import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'libs/graph-backend/**/*.graphqls',
  generates: {
    'libs/graph-backend/src/schema': defineConfig({
      mergeSchema: false,
      resolverGeneration: 'minimal',
      tsConfigFilePath: 'libs/graph-backend/tsconfig.json',
      typesPluginsConfig: {
        contextType: '../types#ResolverContext',
      },
    }),
  },
};

export default config;
