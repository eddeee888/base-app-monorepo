
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "MeResult": [
      "MeResultOk",
      "ResultError"
    ],
    "UsersResult": [
      "ResultError",
      "UsersResultOk"
    ]
  }
};
      export default result;
    