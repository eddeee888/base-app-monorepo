/* eslint-disable */
import * as Types from '../../../../__generated__/types';

import * as Operations from './useImageUploader.graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetSignedUrlsQueryVariables = {
  filenames: Array<Types.Scalars['String']>;
};

export type GetSignedUrlsQuery = { __typename: 'Query' } & {
  getSignedUrlsToUploadImages: Array<{ __typename: 'S3SignedObject' } & SignedImageObject_S3SignedObjectFragment>;
};

export type SignedImageObject_S3SignedObjectFragment = { __typename: 'S3SignedObject' } & Pick<
  Types.S3SignedObject,
  'src' | 'filename' | 'originalFilename' | 'uploadUrl'
>;

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
export function useGetSignedUrlsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSignedUrlsQuery, GetSignedUrlsQueryVariables>) {
  return ApolloReactHooks.useQuery<GetSignedUrlsQuery, GetSignedUrlsQueryVariables>(Operations.GetSignedUrls, baseOptions);
}
export function useGetSignedUrlsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSignedUrlsQuery, GetSignedUrlsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<GetSignedUrlsQuery, GetSignedUrlsQueryVariables>(Operations.GetSignedUrls, baseOptions);
}
export type GetSignedUrlsQueryHookResult = ReturnType<typeof useGetSignedUrlsQuery>;
export type GetSignedUrlsLazyQueryHookResult = ReturnType<typeof useGetSignedUrlsLazyQuery>;
export type GetSignedUrlsQueryResult = ApolloReactCommon.QueryResult<GetSignedUrlsQuery, GetSignedUrlsQueryVariables>;
