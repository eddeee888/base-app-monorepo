import MutationProps from 'common/helpers/typings/MutationProps';
import gql from 'graphql-tag';
import {
  Login,
  LoginVariables
} from 'pages/Login/LoginForm/__generated__/Login';
import React from 'react';
import {
  Mutation,
  MutationFn,
  MutationOptions,
  MutationResult
} from 'react-apollo';

export type LoginMutationFn = MutationFn<Login, LoginVariables>;
export type LoginMutationResult = MutationResult<Login>;
export type LoginMutationOptions = MutationOptions<Login, LoginVariables>;

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        email
        firstName
        lastName
        displayName
      }
    }
  }
`;

const LoginFormMutation: React.FunctionComponent<
  MutationProps<Login, LoginVariables>
> = props => {
  return (
    <Mutation<Login, LoginVariables> {...props} mutation={LOGIN_MUTATION} />
  );
};

export default LoginFormMutation;
