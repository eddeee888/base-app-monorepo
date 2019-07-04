import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LogoutMutationVariables = {};


export type LogoutMutation = ({ __typename: 'Mutation' } & Pick<Types.Mutation, 'logout'>);

export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ReactApollo.MutationFn<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<Omit<ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>, 'mutation'>, 'variables'> & { variables?: LogoutMutationVariables };

    export const LogoutMutationComponent = (props: LogoutComponentProps) => (
      <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutMutationResult = ReactApollo.MutationResult<LogoutMutation>
export type LogoutMutationOptions = ReactApollo.MutationOptions<LogoutMutation, LogoutMutationVariables>