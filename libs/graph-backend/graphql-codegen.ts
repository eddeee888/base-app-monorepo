import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'libs/graph-backend/**/*.graphqls',
  hooks: {
    afterAllFileWrite: ['eslint --fix', 'prettier --write'],
  },
  generates: {
    'libs/graph-backend/src/schema': defineConfig({
      tsConfigFilePath: 'libs/graph-backend/tsconfig.json',
      typesPluginsConfig: {
        contextType: '../types#ResolverContext',
      },
    }),
  },
};

export default config;
