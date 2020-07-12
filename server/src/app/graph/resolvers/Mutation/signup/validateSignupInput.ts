import { SignupInput } from "graph/resolvers/types.generated";
import nameValidation from "@libs/shared-validations/nameValidation";
import emailValidation from "@libs/shared-validations/emailValidation";
import passwordValidation from "@libs/shared-validations/passwordValidation";

interface ValidationData {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  password?: string[];
}

type ValidateSignupInputFn = (input: SignupInput) => Promise<ValidationData | undefined>;

const validateSignupInput: ValidateSignupInputFn = async (input) => {
  let validEmail = true;
  let emailErrors: string[] | undefined;
  let validFirstName = true;
  let firstNameErrors: string[] | undefined;
  let validLastName = true;
  let lastNameErrors: string[] | undefined;
  let validPassword = true;
  let passwordErrors: string[] | undefined;

  try {
    await emailValidation.validate(input.email);
  } catch (err) {
    validEmail = false;
    emailErrors = err.errors;
  }

  try {
    await nameValidation("first").validate(input.firstName);
  } catch (err) {
    validFirstName = false;
    firstNameErrors = err.errors;
  }

  try {
    await nameValidation("last").validate(input.lastName);
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
    password: passwordErrors,
  };
};

export default validateSignupInput;
