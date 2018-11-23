/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SignupInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string | null;
}

export interface Signup_signup {
  __typename: "SignupPayload";
  user: Signup_signup_user;
}

export interface Signup {
  signup: Signup_signup;
}

export interface SignupVariables {
  input: SignupInput;
}
