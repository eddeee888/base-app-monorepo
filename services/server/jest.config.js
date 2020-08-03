module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  setupFiles: ["<rootDir>/src/app/tests/setupTests.js"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    "@libs(.*)$": "<rootDir>/src/libs/$1",
  },
};