module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "max-len": ["warn", 140, 2],
    "@typescript-eslint/ban-ts-ignore": "off",
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
