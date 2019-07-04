import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LoginMutationVariables = {
  input: Types.LoginInput
};


export type LoginMutation = ({ __typename: 'Mutation' } & { login: Types.Maybe<({ __typename: 'User' } & Pick<Types.User, 'id'>)> });

export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    id
  }
}
    `;
export type LoginMutationFn = ReactApollo.MutationFn<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<Omit<ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>, 'mutation'>, 'variables'> & { variables?: LoginMutationVariables };

    export const LoginMutationComponent = (props: LoginComponentProps) => (
      <ReactApollo.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginMutationResult = ReactApollo.MutationResult<LoginMutation>
export type LoginMutationOptions = ReactApollo.MutationOptions<LoginMutation, LoginMutationVariables>