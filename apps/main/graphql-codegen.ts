import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'libs/graph-backend/**/*.graphqls',
  documents: 'apps/main/**/*.graphql',
  generates: {
    'apps/main': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '~@bam/graph-frontend/generated-types',
        extension: '.generated.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        enumsAsTypes: true,
        nonOptionalTypename: true,
        documentMode: 'documentNode',
        importDocumentNodeExternallyFrom: 'near-operation-file',
      },
    },
  },
};

export default config;
