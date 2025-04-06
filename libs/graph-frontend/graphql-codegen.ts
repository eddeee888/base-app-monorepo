import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'libs/graph-backend/**/*.graphqls',
  documents: 'apps/main/**/*.graphql',
  generates: {
    'libs/graph-frontend/src/generated/types.generated.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true,
        nonOptionalTypename: true,
        scalars: {
          DateTime: 'string',
        },
      },
    },
    'libs/graph-frontend/src/generated/introspectionResult.generated.ts': {
      plugins: ['fragment-matcher'],
    },
  },
};

export default config;
