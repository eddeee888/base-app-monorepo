module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  moduleDirectories: ["node_modules", "./src"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]", "/src\\/common\\/shared(.*)/"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  setupFiles: ["./jest.setup.js"],
  transform: {
    ".+\\.(png|jpg)$": "jest-transform-stub",
    "\\.(gql|graphql)$": "jest-transform-graphql",
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
