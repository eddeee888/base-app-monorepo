import gql from 'graphql-tag';
import React from 'react';
import {
  Mutation,
  MutationFn,
  MutationOptions,
  MutationResult
} from 'react-apollo';
import MutationProps from 'src/common/helpers/typings/MutationProps';
import {
  Signup,
  SignupVariables
} from 'src/pages/Signup/SignupForm/__generated__/Signup';

export type SignupMutationFn = MutationFn<Signup, SignupVariables>;
export type SignupMutationOptions = MutationOptions<Signup, SignupVariables>;
export type SignupMutationResult = MutationResult<Signup>;

const SIGNUP_MUTATION = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
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

const SignupFormMutation: React.FunctionComponent<
  MutationProps<Signup, SignupVariables>
> = props => (
  <Mutation<Signup, SignupVariables> {...props} mutation={SIGNUP_MUTATION} />
);

export default SignupFormMutation;
