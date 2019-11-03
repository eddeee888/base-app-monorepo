/* eslint-disable */
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type SignupMutationVariables = {
  input: Types.SignupInput;
};

export type SignupMutation = { __typename: 'Mutation' } & {
  signup: { __typename: 'User' } & Pick<Types.User, 'id' | 'avatar'>;
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
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatar' },
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
export type SignupMutationFn = ApolloReactCommon.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<
  SignupMutation
>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
