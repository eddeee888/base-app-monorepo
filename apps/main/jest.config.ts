/* eslint-disable */
export default {
  displayName: 'main',
  preset: '../../jest.preset.js',
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/main',
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
