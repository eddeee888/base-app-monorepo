module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true, allowTypedFunctionExpressions: true }],
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["**/*.test.ts*"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "eol-last": "off",
        "prettier/prettier": "off",
        "@graphql-eslint/no-case-insensitive-enum-values-duplicates": ["error"],
        "@graphql-eslint/naming-convention": [
          "error",
          {
            FieldDefinition: "camelCase",
            QueryDefinition: {
              style: "camelCase",
              forbiddenPrefixes: ["get"],
            },
            ObjectTypeDefinition: "PascalCase",
            InterfaceTypeDefinition: "PascalCase",
            EnumTypeDefinition: "PascalCase",
            EnumValueDefinition: "UPPER_CASE",
            InputObjectTypeDefinition: {
              style: "PascalCase",
              suffix: "Input",
            },
            InputValueDefinition: "camelCase",
            UnionTypeDefinition: "PascalCase",
            ScalarTypeDefinition: "PascalCase",
          },
        ],
      },
    },
  ],
};
