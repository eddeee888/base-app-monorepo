/* eslint-disable */
import * as Types from '../../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetSignedUrlsQueryVariables = {
  filenames: Array<Types.Scalars['String']>;
};

export type GetSignedUrlsQuery = { __typename: 'Query' } & {
  getSignedUrlsToUploadImages: Array<
    { __typename: 'S3SignedObject' } & SignedImageObject_S3SignedObjectFragment
  >;
};

export type SignedImageObject_S3SignedObjectFragment = {
  __typename: 'S3SignedObject';
} & Pick<
  Types.S3SignedObject,
  'src' | 'filename' | 'originalFilename' | 'uploadUrl'
>;

export const SignedImageObject_S3SignedObjectFragmentDoc: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SignedImageObject_S3SignedObject' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'S3SignedObject' }
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'src' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'filename' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'originalFilename' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadUrl' },
            arguments: [],
            directives: []
          }
        ]
      }
    }
  ]
};
export const GetSignedUrlsDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetSignedUrls' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filenames' }
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'String' }
                }
              }
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
            name: { kind: 'Name', value: 'getSignedUrlsToUploadImages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filenames' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filenames' }
                }
              }
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: {
                    kind: 'Name',
                    value: 'SignedImageObject_S3SignedObject'
                  },
                  directives: []
                }
              ]
            }
          }
        ]
      }
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SignedImageObject_S3SignedObject' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'S3SignedObject' }
      },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'src' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'filename' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'originalFilename' },
            arguments: [],
            directives: []
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadUrl' },
            arguments: [],
            directives: []
          }
        ]
      }
    }
  ]
};

/**
 * __useGetSignedUrlsQuery__
 *
 * To run a query within a React component, call `useGetSignedUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignedUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignedUrlsQuery({
 *   variables: {
 *      filenames: // value for 'filenames'
 *   },
 * });
 */
export function useGetSignedUrlsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetSignedUrlsQuery,
    GetSignedUrlsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetSignedUrlsQuery,
    GetSignedUrlsQueryVariables
  >(GetSignedUrlsDocument, baseOptions);
}
export function useGetSignedUrlsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetSignedUrlsQuery,
    GetSignedUrlsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetSignedUrlsQuery,
    GetSignedUrlsQueryVariables
  >(GetSignedUrlsDocument, baseOptions);
}
export type GetSignedUrlsQueryHookResult = ReturnType<
  typeof useGetSignedUrlsQuery
>;
export type GetSignedUrlsLazyQueryHookResult = ReturnType<
  typeof useGetSignedUrlsLazyQuery
>;
export type GetSignedUrlsQueryResult = ApolloReactCommon.QueryResult<
  GetSignedUrlsQuery,
  GetSignedUrlsQueryVariables
>;
