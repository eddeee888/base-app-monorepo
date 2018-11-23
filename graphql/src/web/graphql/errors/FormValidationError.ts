import { FormValidationError } from '@bit/eddeee888.learnd-utils.graphql';

type ThrowFormValidationErrorFn = (data?: object) => never;

export const throwFormValidationError: ThrowFormValidationErrorFn = data => {
  const finalData = { ...data };
  throw new FormValidationError({ data: finalData });
};
