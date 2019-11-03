/* eslint-disable */
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UpdateMyAvatarMutationVariables = {
  input: Types.UserUpdateInput;
};

export type UpdateMyAvatarMutation = { __typename: 'Mutation' } & {
  userUpdate: { __typename: 'User' } & Pick<Types.User, 'id' | 'avatar'>;
};

export const UpdateMyAvatarDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateMyAvatar' },
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
              name: { kind: 'Name', value: 'UserUpdateInput' }
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
            name: { kind: 'Name', value: 'userUpdate' },
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
export type UpdateMyAvatarMutationFn = ApolloReactCommon.MutationFunction<
  UpdateMyAvatarMutation,
  UpdateMyAvatarMutationVariables
>;

/**
 * __useUpdateMyAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateMyAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyAvatarMutation, { data, loading, error }] = useUpdateMyAvatarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMyAvatarMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateMyAvatarMutation,
    UpdateMyAvatarMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateMyAvatarMutation,
    UpdateMyAvatarMutationVariables
  >(UpdateMyAvatarDocument, baseOptions);
}
export type UpdateMyAvatarMutationHookResult = ReturnType<
  typeof useUpdateMyAvatarMutation
>;
export type UpdateMyAvatarMutationResult = ApolloReactCommon.MutationResult<
  UpdateMyAvatarMutation
>;
export type UpdateMyAvatarMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMyAvatarMutation,
  UpdateMyAvatarMutationVariables
>;
