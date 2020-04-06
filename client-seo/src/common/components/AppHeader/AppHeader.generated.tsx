/* eslint-disable */
import * as Types from "../../../__generated__/types";

import * as Operations from "./AppHeader.graphql";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";

export type ViewerQueryVariables = {};

export type ViewerQuery = { __typename: "Query" } & {
  me?: Types.Maybe<{ __typename: "User" } & Pick<Types.User, "id" | "firstName" | "avatar">>;
};

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  return ApolloReactHooks.useQuery<ViewerQuery, ViewerQueryVariables>(Operations.Viewer, baseOptions);
}
export function useViewerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<ViewerQuery, ViewerQueryVariables>(Operations.Viewer, baseOptions);
}
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = ApolloReactCommon.QueryResult<ViewerQuery, ViewerQueryVariables>;
