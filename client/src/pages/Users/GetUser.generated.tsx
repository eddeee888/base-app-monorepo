import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetUserQueryVariables = {
  id: Types.Scalars['ID']
};


export type GetUserQuery = ({ __typename: 'Query' } & { user: Types.Maybe<({ __typename: 'User' } & Pick<Types.User, 'id' | 'firstName' | 'lastName'>)> });

export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    id
    firstName
    lastName
  }
}
    `;
export type GetUserComponentProps = Omit<Omit<ReactApollo.QueryProps<GetUserQuery, GetUserQueryVariables>, 'query'>, 'variables'> & { variables: GetUserQueryVariables };

    export const GetUserQueryComponent = (props: GetUserComponentProps) => (
      <ReactApollo.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserQueryResult = ReactApollo.QueryResult<GetUserQuery, GetUserQueryVariables>