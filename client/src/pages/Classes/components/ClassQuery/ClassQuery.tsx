import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { ClassData } from './__generated__/ClassData';

const GET_CLASS = gql`
  query ClassData($classId: ID!) {
    class(id: $classId) {
      id
      name
      price
      category {
        id
        name
      }
      description
      streetAddress
      city
      postcode
      country
      contactNumber
      state
      streetUnit
      sessions {
        id
        day
        startTime
        endTime
        capacity
      }
    }
  }
`;

export type ClassQueryResult = QueryResult<ClassData>;

const ClassQuery: React.FunctionComponent<QueryProps> = props => (
  <Query<ClassData> {...props} query={GET_CLASS} />
);

export default ClassQuery;
