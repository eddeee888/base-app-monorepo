import * as Types from "../../__generated__/types";

import * as Operations from "./ViewerQuery.graphql";
import * as Apollo from "@apollo/client";
export type ViewerQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ViewerQuery = { __typename: "Query" } & { me?: Types.Maybe<{ __typename: "User" } & Viewer_UserFragment> };

export type Viewer_UserFragment = { __typename: "User" } & Pick<Types.User, "id" | "displayName" | "avatar">;

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
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(Operations.Viewer, baseOptions);
}
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
  return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(Operations.Viewer, baseOptions);
}
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;
