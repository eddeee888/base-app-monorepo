import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SignupMutationVariables = {
  input: Types.SignupInput
};


export type SignupMutation = ({ __typename: 'Mutation' } & { signup: ({ __typename: 'User' } & Pick<Types.User, 'id'>) });

export const SignupDocument = gql`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    id
  }
}
    `;
export type SignupMutationFn = ReactApollo.MutationFn<SignupMutation, SignupMutationVariables>;
export type SignupComponentProps = Omit<Omit<ReactApollo.MutationProps<SignupMutation, SignupMutationVariables>, 'mutation'>, 'variables'> & { variables?: SignupMutationVariables };

    export const SignupMutationComponent = (props: SignupComponentProps) => (
      <ReactApollo.Mutation<SignupMutation, SignupMutationVariables> mutation={SignupDocument} {...props} />
    );
    
export type SignupMutationResult = ReactApollo.MutationResult<SignupMutation>
export type SignupMutationOptions = ReactApollo.MutationOptions<SignupMutation, SignupMutationVariables>