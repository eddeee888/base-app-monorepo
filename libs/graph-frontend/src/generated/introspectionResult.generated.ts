export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Error: ['UserError', 'UsersError'],
    Result: ['UserResult', 'UsersResult'],
    UserPayload: ['UserError', 'UserResult'],
    UsersPayload: ['UsersError', 'UsersResult'],
  },
};
export default result;
