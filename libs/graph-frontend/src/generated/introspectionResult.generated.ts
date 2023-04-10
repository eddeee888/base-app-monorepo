export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    UserPayload: ['PayloadError', 'UserResult'],
    UsersPayload: ['PayloadError', 'UsersResult'],
  },
};
export default result;
