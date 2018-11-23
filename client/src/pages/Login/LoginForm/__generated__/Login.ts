/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string | null;
}

export interface Login_login {
  __typename: "LoginPayload";
  user: Login_login_user;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  input: LoginInput;
}
