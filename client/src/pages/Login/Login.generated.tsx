/* eslint-disable */
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LoginMutationVariables = {
  input: Types.LoginInput;
};

export type LoginMutation = { __typename: 'Mutation' } & {
  login: Types.Maybe<{ __typename: 'User' } & Pick<Types.User, 'id'>>;
};

export const LoginDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' }
            }
          },
          directives: []
        }
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' }
                }
              }
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: []
                }
              ]
            }
          }
        ]
      }
    }
  ]
};
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginComponentProps = Omit<
  ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
  'mutation'
>;

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
);

export type LoginMutationResult = ReactApollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = ReactApollo.MutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
