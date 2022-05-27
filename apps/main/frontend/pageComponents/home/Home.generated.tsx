/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as Types from '@bam/graph-frontend/generated-types';

import * as Operations from './Home.graphql';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type HomeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HomeQuery = {
  __typename: 'Query';
  users:
    | { __typename: 'UsersError'; error: Types.ErrorType }
    | { __typename: 'UsersResult'; result: Array<{ __typename: 'User'; id: string; displayName: string }> };
};

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HomeQuery, HomeQueryVariables>(Operations.Home, options);
}
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(Operations.Home, options);
}
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
