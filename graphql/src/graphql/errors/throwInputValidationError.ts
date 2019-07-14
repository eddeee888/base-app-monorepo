import { FormValidationError } from '@bit/eddeee888.base-react-app-utils.graphql';

export const throwInputValidationError = (data?: object): never => {
  const finalData = { ...data };
  throw new FormValidationError({ data: finalData });
};
