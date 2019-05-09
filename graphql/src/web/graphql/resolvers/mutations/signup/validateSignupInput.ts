import {
  emailValidation,
  nameValidation,
  passwordValidation
} from '@bit/eddeee888.base-react-app-utils.validations';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

interface ValidationData {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  password?: string[];
}

type ValidateSignupInputFn = (
  input: MutationResolvers.SignupInput
) => Promise<ValidationData | undefined>;

const validateSignupInput: ValidateSignupInputFn = async input => {
  let validEmail: boolean = true;
  let emailErrors: string[] | undefined;
  let validFirstName: boolean = true;
  let firstNameErrors: string[] | undefined;
  let validLastName: boolean = true;
  let lastNameErrors: string[] | undefined;
  let validPassword: boolean = true;
  let passwordErrors: string[] | undefined;

  try {
    await emailValidation.validate(input.email);
  } catch (err) {
    validEmail = false;
    emailErrors = err.errors;
  }

  try {
    await nameValidation('first').validate(input.firstName);
  } catch (err) {
    validFirstName = false;
    firstNameErrors = err.errors;
  }

  try {
    await nameValidation('last').validate(input.lastName);
  } catch (err) {
    validLastName = false;
    lastNameErrors = err.errors;
  }

  try {
    await passwordValidation.validate(input.password);
  } catch (err) {
    validPassword = false;
    passwordErrors = err.errors;
  }

  if (validEmail && validFirstName && validLastName && validPassword) {
    return;
  }

  return {
    email: emailErrors,
    firstName: firstNameErrors,
    lastName: lastNameErrors,
    password: passwordErrors
  };
};

export default validateSignupInput;
