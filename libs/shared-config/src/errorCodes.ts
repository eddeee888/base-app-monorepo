export enum ErrorCodes {
  // HTTP-like errorrs
  'NOT_FOUND' = 'NOT_FOUND',
  'INPUT_VALIDATION_ERROR' = 'INPUT_VALIDATION_ERROR',
  'FORBIDDEN_ERROR' = 'FORBIDDEN_ERROR',
  'UNEXPECTED_ERROR' = 'UNEXPECTED_ERROR',
}

export const errorMessage = (errorCode: Error | string): string => {
  const errorEnum = errorCode instanceof Error ? errorCode.message : errorCode;

  switch (errorEnum) {
    case ErrorCodes.INPUT_VALIDATION_ERROR:
      return 'Invalid input values. Please check your input and try again.';
    case ErrorCodes.FORBIDDEN_ERROR:
      return 'Insufficient permission to make the request.';
    default:
      return 'Unexpected error occurred. Please contact admin.';
  }
};
