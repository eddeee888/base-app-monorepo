export const errorMessage = (errorCode: Error | string): string => {
  const errorEnum = errorCode instanceof Error ? errorCode.message : errorCode;

  switch (errorEnum) {
    case 'INPUT_VALIDATION_ERROR':
      return 'Invalid input values. Please check your input and try again.';
    case 'FORBIDDEN_ERROR':
      return 'Insufficient permission to make the request.';
    default:
      return 'Unexpected error occurred. Please contact admin.';
  }
};
