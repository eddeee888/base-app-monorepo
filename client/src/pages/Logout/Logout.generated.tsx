/* eslint-disable */
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename: 'Mutation' } & Pick<
  Types.Mutation,
  'logout'
>;

export const LogoutDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Logout' },
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logout' },
            arguments: [],
            directives: []
          }
        ]
      }
    }
  ]
};
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutMutationVariables
>;
export type LogoutComponentProps = Omit<
  ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>,
  'mutation'
>;

export const LogoutComponent = (props: LogoutComponentProps) => (
  <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables>
    mutation={LogoutDocument}
    {...props}
  />
);

export type LogoutMutationResult = ReactApollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ReactApollo.MutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
