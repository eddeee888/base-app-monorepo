process.env.TZ = "UTC";

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ["/node_modules/", "/src\\/libs\\/shared(.*)/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules", "."],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    "@libs(.*)$": "<rootDir>/src/libs/$1",
    "^~(.*)$": "<rootDir>/src/app/$1",
  },
};
