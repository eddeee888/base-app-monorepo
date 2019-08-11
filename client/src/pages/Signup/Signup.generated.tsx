/* eslint-disable */
import * as Types from '../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SignupMutationVariables = {
  input: Types.SignupInput;
};

export type SignupMutation = { __typename: 'Mutation' } & {
  signup: { __typename: 'User' } & Pick<Types.User, 'id'>;
};

export const SignupDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Signup' },
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
              name: { kind: 'Name', value: 'SignupInput' }
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
            name: { kind: 'Name', value: 'signup' },
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
export type SignupMutationFn = ReactApollo.MutationFn<
  SignupMutation,
  SignupMutationVariables
>;
export type SignupComponentProps = Omit<
  ReactApollo.MutationProps<SignupMutation, SignupMutationVariables>,
  'mutation'
>;

export const SignupComponent = (props: SignupComponentProps) => (
  <ReactApollo.Mutation<SignupMutation, SignupMutationVariables>
    mutation={SignupDocument}
    {...props}
  />
);

export type SignupMutationResult = ReactApollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = ReactApollo.MutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
